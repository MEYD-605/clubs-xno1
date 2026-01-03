#!/bin/bash
# Unified Dashboard Generator
# Creates HTML dashboard for all Proxmox infrastructure

DASHBOARD_FILE="/root/maw-workspace/ψ/dashboard.html"
ASSETS_DIR="/root/maw-workspace/ψ/assets"
mkdir -p "$ASSETS_DIR"

# Get system stats
HOSTNAME=$(hostname)
UPTIME=$(uptime -p)
DISK_USAGE=$(df -h / | tail -1 | awk '{print $5}')
MEM_TOTAL=$(free -h | grep Mem | awk '{print $2}')
MEM_USED=$(free -h | grep Mem | awk '{print $3}')
CPU_LOAD=$(uptime | awk -F'load average:' '{print $2}')

# Get container status
get_container_status() {
    if pct status "$1" 2>/dev/null | grep -q "running"; then
        echo "✅ Running"
    else
        echo "❌ Stopped"
    fi
}

LXC100_STATUS=$(get_container_status 100)
LXC110_STATUS=$(get_container_status 110)
LXC200_STATUS=$(get_container_status 200)
LXC220_STATUS=$(get_container_status 220)
LXC230_STATUS=$(get_container_status 230)
LXC240_STATUS=$(get_container_status 240)

# Generate HTML
cat > "$DASHBOARD_FILE" <<'EOF'
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAW Oracle Dashboard - Proxmox Infrastructure</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: #fff;
            padding: 20px;
            min-height: 100vh;
        }
        .container {
            max-width: 1400px;
            margin: 0 auto;
        }
        .header {
            text-align: center;
            margin-bottom: 40px;
            animation: fadeIn 0.8s ease-in;
        }
        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-bottom: 30px;
        }
        .card {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 25px;
            border: 1px solid rgba(255,255,255,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            animation: slideUp 0.6s ease-out;
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
        }
        .card h2 {
            font-size: 1.5em;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .card .value {
            font-size: 2.5em;
            font-weight: bold;
            margin: 10px 0;
        }
        .card .label {
            opacity: 0.8;
            font-size: 0.9em;
        }
        .status-badge {
            display: inline-block;
            padding: 8px 16px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: bold;
        }
        .status-running { background: #10b981; }
        .status-stopped { background: #ef4444; }
        .footer {
            text-align: center;
            margin-top: 40px;
            opacity: 0.7;
            font-size: 0.9em;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .timestamp {
            text-align: center;
            margin: 20px 0;
            font-size: 1.1em;
            opacity: 0.9;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔮 MAW Oracle Dashboard</h1>
            <p>Proxmox Infrastructure Monitoring</p>
        </div>

        <div class="timestamp">
            Last updated: <strong>__TIMESTAMP__</strong>
        </div>

        <div class="grid">
            <!-- System Info -->
            <div class="card">
                <h2>🖥️ System</h2>
                <div class="label">Hostname</div>
                <div class="value" style="font-size: 1.5em;">__HOSTNAME__</div>
                <div class="label">Uptime</div>
                <div>__UPTIME__</div>
            </div>

            <!-- Disk Usage -->
            <div class="card">
                <h2>💾 Storage</h2>
                <div class="label">Disk Usage</div>
                <div class="value">__DISK_USAGE__</div>
            </div>

            <!-- Memory -->
            <div class="card">
                <h2>🧠 Memory</h2>
                <div class="label">Used / Total</div>
                <div class="value" style="font-size: 1.8em;">__MEM_USED__ / __MEM_TOTAL__</div>
            </div>

            <!-- CPU Load -->
            <div class="card">
                <h2>⚡ CPU Load</h2>
                <div class="value" style="font-size: 1.5em;">__CPU_LOAD__</div>
            </div>
        </div>

        <h2 style="margin: 30px 0 20px; text-align: center; font-size: 2em;">Container Status</h2>

        <div class="grid">
            <!-- LXC 100 -->
            <div class="card">
                <h2>🗄️ LXC 100: NAS</h2>
                <div class="label">NAS Storage / NVMe</div>
                <div style="margin: 15px 0;">
                    <span class="status-badge status-__LXC100_CLASS__">__LXC100_STATUS__</span>
                </div>
            </div>

            <!-- LXC 110 -->
            <div class="card">
                <h2>🤖 LXC 110: AI-Core</h2>
                <div style="margin: 15px 0;">
                    <span class="status-badge status-__LXC110_CLASS__">__LXC110_STATUS__</span>
                </div>
                <div class="label">Ollama, ComfyUI, SG</div>
            </div>

            <!-- LXC 200 -->
            <div class="card">
                <h2>🌐 LXC 200: Router</h2>
                <div class="label">Tailscale VPN</div>
                <div style="margin: 15px 0;">
                    <span class="status-badge status-__LXC200_CLASS__">__LXC200_STATUS__</span>
                </div>
            </div>

            <!-- LXC 220 -->
            <div class="card">
                <h2>🎮 LXC 220: Hub</h2>
                <div class="label">Portainer Control</div>
                <div style="margin: 15px 0;">
                    <span class="status-badge status-__LXC220_CLASS__">__LXC220_STATUS__</span>
                </div>
            </div>

            <!-- LXC 230 -->
            <div class="card">
                <h2>📊 LXC 230: Uptime</h2>
                <div class="label">Monitoring</div>
                <div style="margin: 15px 0;">
                    <span class="status-badge status-__LXC230_CLASS__">__LXC230_STATUS__</span>
                </div>
            </div>

            <!-- LXC 240 -->
            <div class="card">
                <h2>🛡️ LXC 240: AdGuard</h2>
                <div class="label">DNS Filter</div>
                <div style="margin: 15px 0;">
                    <span class="status-badge status-__LXC240_CLASS__">__LXC240_STATUS__</span>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>MAW Oracle System | Day 2 of 7</p>
            <p>Powered by Claude Code + Proxmox</p>
        </div>
    </div>
</body>
</html>
EOF

# Replace placeholders
sed -i "s|__TIMESTAMP__|$(date '+%Y-%m-%d %H:%M:%S')|g" "$DASHBOARD_FILE"
sed -i "s|__HOSTNAME__|$HOSTNAME|g" "$DASHBOARD_FILE"
sed -i "s|__UPTIME__|$UPTIME|g" "$DASHBOARD_FILE"
sed -i "s|__DISK_USAGE__|$DISK_USAGE|g" "$DASHBOARD_FILE"
sed -i "s|__MEM_TOTAL__|$MEM_TOTAL|g" "$DASHBOARD_FILE"
sed -i "s|__MEM_USED__|$MEM_USED|g" "$DASHBOARD_FILE"
sed -i "s|__CPU_LOAD__|$CPU_LOAD|g" "$DASHBOARD_FILE"
sed -i "s|__LXC100_STATUS__|$LXC100_STATUS|g" "$DASHBOARD_FILE"
sed -i "s|__LXC110_STATUS__|$LXC110_STATUS|g" "$DASHBOARD_FILE"
sed -i "s|__LXC200_STATUS__|$LXC200_STATUS|g" "$DASHBOARD_FILE"
sed -i "s|__LXC220_STATUS__|$LXC220_STATUS|g" "$DASHBOARD_FILE"
sed -i "s|__LXC230_STATUS__|$LXC230_STATUS|g" "$DASHBOARD_FILE"
sed -i "s|__LXC240_STATUS__|$LXC240_STATUS|g" "$DASHBOARD_FILE"

# Set CSS classes based on status
for id in 100 110 200 220 230 240; do
    status_var="LXC${id}_STATUS"
    status_val=${!status_var}
    if echo "$status_val" | grep -q "Running"; then
        sed -i "s|__LXC${id}_CLASS__|running|g" "$DASHBOARD_FILE"
    else
        sed -i "s|__LXC${id}_CLASS__|stopped|g" "$DASHBOARD_FILE"
    fi
done

echo "✅ Dashboard generated: $DASHBOARD_FILE"
echo "📊 View in browser: file://$DASHBOARD_FILE"
