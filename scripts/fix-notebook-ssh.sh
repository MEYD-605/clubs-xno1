#!/bin/bash
# MAW Oracle Notebook Special Intervention (V2 - Multi-Path)
echo "🔱 [MAW ORACLE: NOTEBOOK INTERVENTION]"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Try Tailscale first, then Local
IPS=("100.90.189.100" "192.168.1.146")
PWD="123121"
TARGET=""

for IP in "${IPS[@]}"; do
    echo "🔍 Checking connectivity to $IP..."
    if ping -c 1 -W 2 "$IP" >/dev/null 2>&1; then
        echo "✅ Found path via $IP"
        TARGET="lenovo@$IP"
        break
    fi
done

if [ -z "$TARGET" ]; then
    echo "❌ All paths blocked. Please ensure Notebook is online."
    exit 1
fi

echo -e "\n🚀 Phase 1: Awakening SSH Agent on Windows..."
sshpass -p "$PWD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=5 "$TARGET" "powershell -Command \"
    Start-Service ssh-agent -ErrorAction SilentlyContinue;
    Set-Service -Name ssh-agent -StartupType Automatic;
    Write-Host '✅ SSH Agent is now RUNNING and AUTOMATIC'
\""

echo -e "\n🔑 Phase 2: Attempting to Add Keys to Agent..."
# We try to add the default keys if they exist
sshpass -p "$PWD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=5 "$TARGET" "powershell -Command \"
    ssh-add \$HOME\\.ssh\\id_rsa 2>\$null;
    ssh-add \$HOME\\.ssh\\id_ed25519 2>\$null;
    Write-Host '✅ Keys attempt complete. Check your VS Code popup!'
\""

echo -e "\n📊 Phase 3: Final Status Check..."
sshpass -p "$PWD" ssh -o StrictHostKeyChecking=no -o ConnectTimeout=5 "$TARGET" "powershell -Command \"
    Get-Service ssh-agent | Select-Object Status;
    ssh-add -l
\""

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Oracle Intervention Complete"
