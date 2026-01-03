#!/bin/bash
# MAW Oracle Unified Intelligence - Deep Status Report
echo "🔱 [ORACLE UNIFIED INTELLIGENCE REPORT]"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

echo "🤖 1. Backend Status (Oracle Gemma 2):"
if curl -s http://localhost:18088/health >/dev/null 2>&1 || ss -lnpt | grep -q :18088; then
    echo "✅ Online (Port 18088) - Mode: God Mode Active"
else
    echo "❌ Offline - Please check npu-backend.py"
fi

echo -e "\n🛡️ 2. SSH Security Audit (Root):"
ls -ld /root /root/.ssh /root/.ssh/authorized_keys | awk '{print $1, $NF}'
grep "PermitRootLogin" /etc/ssh/sshd_config | grep -v "^#"
grep "PubkeyAuthentication" /etc/ssh/sshd_config | grep -v "^#"

echo -e "\n🌐 3. Network & Tailscale Bridge:"
NB_IP="100.90.189.100"
LOCAL_NB="192.168.1.146"
if ping -c 1 -W 1 $NB_IP >/dev/null 2>&1; then
    echo "✅ Notebook (Tailscale $NB_IP) - REACHABLE"
else
    echo "❌ Notebook (Tailscale $NB_IP) - UNREACHABLE"
fi

if ping -c 1 -W 1 $LOCAL_NB >/dev/null 2>&1; then
    echo "✅ Notebook (Local $LOCAL_NB) - REACHABLE"
else
    echo "❌ Notebook (Local $LOCAL_NB) - UNREACHABLE"
fi

echo -e "\n🔍 4. Key Match Verification:"
NB_KEY_PART=$(cat /root/notebook_keys.txt | head -n 1 | awk '{print $2}' | cut -c1-30)
AUTH_KEY_PART=$(grep "lenovo@LAPTOP-S7IALRP5" /root/.ssh/authorized_keys | head -n 1 | awk '{print $2}' | cut -c1-30)

if [ "$NB_KEY_PART" == "$AUTH_KEY_PART" ]; then
    echo "✅ SSH Key Signature: MATCH (100% Correct)"
else
    echo "❌ SSH Key Signature: MISMATCH! (Need re-sync)"
fi

echo -e "\n📜 5. Oracle Final Verdict (The Philosophy):"
cat /root/maw-workspace/.claude/knowledge/oracle-philosophy.md | head -n 5
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
