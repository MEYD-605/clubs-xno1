#!/bin/bash
# Proxmox Infrastructure Snapshot System
# Purpose: Daily backup of all critical configs

BACKUP_DIR="/root/backups/$(date +%Y-%m-%d)"
mkdir -p "$BACKUP_DIR"

echo "📸 Creating infrastructure snapshot..."

# 1. Proxmox Configuration
if [ -d "/etc/pve" ]; then
    tar -czf "$BACKUP_DIR/pve_config.tar.gz" /etc/pve 2>/dev/null
    echo "✅ Proxmox config backed up"
fi

# 2. LXC Container Configs
if [ -d "/etc/pve/lxc" ]; then
    cp -r /etc/pve/lxc "$BACKUP_DIR/lxc_configs"
    echo "✅ LXC configs backed up"
fi

# 3. Network Configuration
cp -r /etc/network "$BACKUP_DIR/network_config"
echo "✅ Network config backed up"

# 4. MAW Oracle Memory (ψ/)
if [ -d "/root/maw-workspace/ψ" ]; then
    tar -czf "$BACKUP_DIR/maw_oracle_soul.tar.gz" /root/maw-workspace/ψ
    echo "✅ Oracle Soul backed up"
fi

# 5. Super Agent Knowledge
if [ -d "/root/super-agent" ]; then
    tar -czf "$BACKUP_DIR/super_agent.tar.gz" /root/super-agent/knowledge /root/super-agent/agents
    echo "✅ Agent knowledge backed up"
fi

# 6. Cron jobs
crontab -l > "$BACKUP_DIR/crontab.txt" 2>/dev/null
echo "✅ Cron jobs backed up"

# 7. Generate inventory report
cat > "$BACKUP_DIR/inventory.json" <<EOF
{
  "timestamp": "$(date -Iseconds)",
  "hostname": "$(hostname)",
  "containers": $(pct list -o json 2>/dev/null || echo "[]"),
  "disk_usage": "$(df -h / | tail -1)",
  "memory": "$(free -h | grep Mem)"
}
EOF

echo "✅ Inventory report generated"
echo ""
echo "📦 Snapshot saved to: $BACKUP_DIR"
du -sh "$BACKUP_DIR"
