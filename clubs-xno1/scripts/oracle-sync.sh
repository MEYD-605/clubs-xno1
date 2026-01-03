#!/bin/bash
# 🔱 Oracle Sync Bridge 
# Purpose: IDE Agent -> Maw Oracle (Server) Consultation & Delegation

TASK_QUERY="$*"
ORACLE_CMD="/root/super-agent/agents/orchestrator.sh"
SOUL_PATH="/root/maw-workspace/ψ/memory/learnings"
TIMESTAMP=$(date +"%Y-%m-%d_%H-%M")

if [ -z "$TASK_QUERY" ]; then
    echo "Usage: oracle-sync \"<task description>\""
    exit 1
fi

echo "🔮 Consulting Maw Oracle on Server..."
echo "Task: $TASK_QUERY"
echo "----------------------------------------"

# 1. Delegate to the Server-Side Orchestrator
# Result is captured from the server-side LLM
ORACLE_RESPONSE=$($ORACLE_CMD "$TASK_QUERY")

# 2. Display Result
echo "$ORACLE_RESPONSE"

# 3. Persistent Logging to Soul (ψ)
LOG_FILE="$SOUL_PATH/oracle_sync_${TIMESTAMP}.md"
mkdir -p "$SOUL_PATH"

cat > "$LOG_FILE" <<EOF
# 🔮 Oracle Strategic Consultation: ${TIMESTAMP}

## 🎯 Task Request
${TASK_QUERY}

## 🧠 Oracle Verdict
${ORACLE_RESPONSE}

---
*Logged by Antigravity IDE Agent via Oracle Sync Bridge.* 🔱🦉
EOF

echo "----------------------------------------"
echo "✅ Logged to Soul Memory: $LOG_FILE"
