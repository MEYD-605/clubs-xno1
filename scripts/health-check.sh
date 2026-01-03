#!/bin/bash
# Health Monitor for Proxmox Infrastructure
# Checks: Services, Disk, Memory, Network

echo "🏥 Infrastructure Health Check - $(date)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Function to colorize status
status() {
    if [ "$1" == "OK" ]; then
        echo "✅ $2"
    elif [ "$1" == "WARN" ]; then
        echo "⚠️  $2"
    else
        echo "❌ $2"
    fi
}

# 1. Check Ollama (Agent 0)
if curl -s http://192.168.1.129:11434/api/version &>/dev/null; then
    status "OK" "Ollama (LXC 110) - Running"
else
    status "FAIL" "Ollama (LXC 110) - Down!"
fi

# 2. Check ComfyUI (Disabled by User)
# if curl -s http://localhost:8188 &>/dev/null; then
#     status "OK" "ComfyUI - Running"
# else
#     status "WARN" "ComfyUI - Not accessible"
# fi
echo "❄️  ComfyUI - Intentionally Offline"

# 3. Check Homepage Dashboard
if curl -s http://192.168.1.122:3000 &>/dev/null; then
    status "OK" "Homepage (LXC 220) - Running"
else
    status "FAIL" "Homepage (LXC 220) - Down!"
fi

# 4. Check Portainer
if curl -s http://192.168.1.122:9000 &>/dev/null; then
    status "OK" "Portainer (LXC 220) - Running"
else
    status "WARN" "Portainer - Not accessible"
fi

# 5. Disk Space
DISK_USAGE=$(df -h / | tail -1 | awk '{print $5}' | sed 's/%//')
if [ "$DISK_USAGE" -lt 80 ]; then
    status "OK" "Disk Space: ${DISK_USAGE}% used"
elif [ "$DISK_USAGE" -lt 90 ]; then
    status "WARN" "Disk Space: ${DISK_USAGE}% used (Getting full!)"
else
    status "FAIL" "Disk Space: ${DISK_USAGE}% used (CRITICAL!)"
fi

# 6. Memory
MEM_USAGE=$(free | grep Mem | awk '{printf "%.0f", $3/$2 * 100}')
if [ "$MEM_USAGE" -lt 85 ]; then
    status "OK" "Memory: ${MEM_USAGE}% used"
else
    status "WARN" "Memory: ${MEM_USAGE}% used (High!)"
fi

# 7. Check LXC Containers
echo ""
echo "📦 LXC Container Status:"
pct list 2>/dev/null || echo "⚠️  Cannot access Proxmox (not on host?)"

# 8. Log to Soul
if [ "$1" != "--silent" ]; then
    LOG_DIR="/root/maw-workspace/ψ/memory/logs"
    mkdir -p "$LOG_DIR"
    {
        echo "# Health Check - $(date +%Y-%m-%d_%H-%M)"
        echo ""
        bash "$0" --silent
    } > "$LOG_DIR/health_$(date +%Y-%m-%d).log"

    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📝 Log saved to: $LOG_DIR/health_$(date +%Y-%m-%d).log"
fi
