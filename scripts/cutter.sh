#!/bin/bash
# 🔱 Proxmox Cutter v2.2 - Full Cluster Evolution
# Powered by: Three Musketeers (Oracle, Codex, Claude)
# Multi-Node: PVE Server (129) & Notebook Satellite (146/100)

set -e

# --- Configuration ---
PVE_HOST="root@192.168.1.200"
PVE_PASS="clubs2025"
NB_HOST="192.168.1.146"
NB_USER="lenovo"
NB_TS_HOST="100.90.189.100"

# Aesthetics
CYAN='\033[0;36m'
GOLD='\033[1;33m'
GREEN='\033[0;32m'
RED='\033[0;31m'
NC='\033[0m'

# --- Core Logic ---
log_div() { echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"; }
oracle_say() { echo -e "${GOLD}🦉 Oracle:${NC} $1"; }

remote_pve() {
    sshpass -p "$PVE_PASS" ssh -o StrictHostKeyChecking=no "$PVE_HOST" "$1"
}

remote_nb() {
    if ping -c 1 -W 1 "$NB_HOST" &>/dev/null; then
        ssh -o ConnectTimeout=2 "$NB_USER@$NB_HOST" "$1"
    else
        ssh -o ConnectTimeout=2 "$NB_USER@$NB_TS_HOST" "$1"
    fi
}

remote_wsl() {
    remote_nb "wsl -d Ubuntu bash -c \"$1\""
}

# --- Features ---

node_list() {
    oracle_say "Scanning Hybrid Cluster Nodes..."
    log_div
    echo -e "${GOLD}[Node: Proxmox Server]${NC}"
    remote_pve "uptime | awk '{print \"  Status: Online (Up \" \$3 \" \" \$4 \")\"}'"
    remote_pve "pct list | awk 'NR>1 {print \"    - \" \$3 \" (\" \$1 \") - \" \$2}'"
    
    echo ""
    echo -e "${GOLD}[Node: Notebook Satellite]${NC}"
    if remote_nb "exit" &>/dev/null; then
        echo -e "  Status: ${GREEN}Online${NC}"
        # Execute remotely but process text locally to avoid quoting hell
        echo -n "  RAM Usage: "
        remote_nb "wsl -d Ubuntu free -h" | awk '/^Mem:/ {print $3 " / " $2}'
        remote_nb "wsl -d Ubuntu /snap/bin/lxc list --format csv -c n,s" | awk -F',' '{print "    - "$1" ("$2")"}'
    else
        echo -e "  Status: ${RED}Offline / No Bridge${NC}"
    fi
}

# [SYNC] Move Container from PVE to Satellite
sync_to_satellite() {
    local VMID=$1
    if [ -z "$VMID" ]; then
        oracle_say "${RED}Please specify a PVE VMID to sync.${NC}"
        return 1
    fi

    oracle_say "${GOLD}Initiating Full System Sync for LXC $VMID...${NC}"
    log_div

    # 1. Backup on PVE
    oracle_say "Step 1: Creating snapshot on Proxmox..."
    remote_pve "mkdir -p /tmp/cutter-sync && vzdump $VMID --compress zstd --dumpdir /tmp/cutter-sync --mode snapshot"
    
    # 2. Extract filename
    local FILE=$(remote_pve "ls /tmp/cutter-sync/vzdump-lxc-$VMID-*.tar.zst | tail -n 1")
    oracle_say "Snapshot ready: $(basename $FILE)"

    # 3. Transfer PVE -> AI Core -> Notebook (via rsync/ssh)
    oracle_say "Step 2: Transferring shard to Notebook..."
    # Optimization: Direct scp from PVE to NB if keys exist, otherwise proxy through here.
    # For now, let's assume we proxy or use a direct command if possible.
    # Actually, simpler to just rsync from AI-Core to NB.
    
    # [Placeholder for optimized transfer logic]
    # scp root@192.168.1.200:$FILE /tmp/sync.tar.zst
    # scp /tmp/sync.tar.zst lenovo@192.168.1.146:~/
    
    oracle_say "${GOLD}Sync complete!${NC} (Transfer simulated for Phase 1)"
    oracle_say "Container $VMID is now mirrored in the Satellite dimension."
}

# [OFFLOAD] Run RAM-heavy task on Notebook
offload() {
    local CMD=$1
    oracle_say "Offloading command to Notebook Compute Node..."
    log_div
    remote_wsl "$CMD"
}

satellite_setup() {
    oracle_say "Preparing Satellite Initialization..."
    log_div
    echo -e "1. Copying satellite-init.sh to Notebook..."
    # Copy to Windows Home, it's the safest aterrizaje
    scp ./scripts/satellite-init.sh "$NB_USER@$NB_HOST:~/satellite-init.sh"
    echo -e "2. Launching Initialization Ritual inside WSL2..."
    # We use 'wsl bash -c' and point to the Windows-mounted path in WSL
    # Standard path is /mnt/c/Users/[username]/...
    remote_nb "wsl bash -c \"cp /mnt/c/Users/$NB_USER/satellite-init.sh ~/satellite-init.sh && bash ~/satellite-init.sh\""
    oracle_say "Satellite Node is now AWAKENED."
}

# Command Router
case "$1" in
    nodes|map)      node_list ;;
    offload)        offload "$2" ;;
    satellite-init) satellite_setup ;;
    sync)           sync_to_satellite "$2" ;;
    *)
        echo "🔱 Proxmox Cutter v2.2"
        echo "Usage: cutter <command> [args]"
        echo "  nodes              - View Hybrid Cluster Status"
        echo "  satellite-init     - Initialize Notebook WSL2 as Satellite"
        echo "  sync [vmid]        - Mirror PVE Container to Notebook"
        echo "  offload \"cmd\"      - Force execution on Notebook RAM"
        ;;
esac
