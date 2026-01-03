#!/bin/bash
# 🐯 Resource Guard - MAW System Stability Monitor
# Protects the 3 Tigers from OOM during long dev sessions

LOG_FILE="/root/maw-workspace/ψ/memory/system_health.log"
TIMESTAMP=$(date "+%Y-%m-%d %H:%M:%S")

# 1. Get RAM usage
RAM_TOTAL=$(free -m | awk '/^Mem:/ {print $2}')
RAM_USED=$(free -m | awk '/^Mem:/ {print $3}')
RAM_AVAIL=$(free -m | awk '/^Mem:/ {print $7}')
RAM_PERCENT=$((RAM_USED * 100 / RAM_TOTAL))

# 2. Get CPU load
CPU_LOAD=$(cat /proc/loadavg | awk '{print $1}')

# 3. Get Disk usage
DISK_PERCENT=$(df / | tail -1 | awk '{print $5}' | sed 's/%//')

# 4. Oracle status
ORACLE_STATUS=$(curl -s --max-time 3 http://localhost:18088/health 2>/dev/null | grep -o '"status":"ok"' && echo "OK" || echo "OFFLINE")

# 5. Log status
echo "[$TIMESTAMP] RAM: ${RAM_PERCENT}% (${RAM_USED}MB/${RAM_TOTAL}MB) | CPU: ${CPU_LOAD} | Disk: ${DISK_PERCENT}% | Oracle: ${ORACLE_STATUS}" >> "$LOG_FILE"

# 6. Alert thresholds
if [ "$RAM_PERCENT" -gt 90 ]; then
    echo "[$TIMESTAMP] ⚠️ CRITICAL: RAM > 90%! Clearing Ollama cache..." >> "$LOG_FILE"
    # Kill idle Ollama models
    curl -s http://localhost:11434/api/generate -d '{"model":"clear","keep_alive":"0s"}' > /dev/null 2>&1
    echo "[$TIMESTAMP] 🔄 Ollama cache cleared." >> "$LOG_FILE"
elif [ "$RAM_PERCENT" -gt 85 ]; then
    echo "[$TIMESTAMP] ⚠️ WARNING: RAM > 85%. Monitor closely." >> "$LOG_FILE"
fi

if [ "$DISK_PERCENT" -gt 90 ]; then
    echo "[$TIMESTAMP] ⚠️ WARNING: Disk > 90%. Consider cleanup." >> "$LOG_FILE"
fi

# 7. Summary output (for terminal)
echo "🐯 Resource Guard: RAM ${RAM_PERCENT}% | CPU ${CPU_LOAD} | Disk ${DISK_PERCENT}% | Oracle ${ORACLE_STATUS}"
