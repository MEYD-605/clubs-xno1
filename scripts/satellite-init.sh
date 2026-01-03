#!/bin/bash
# 🔱 Oracle Satellite Node - Initialization Script (v1.0)
# Purpose: Prepare WSL2 to act as a Compute Satellite for the Proxmox Cluster.
# Run this INSIDE WSL2 (Ubuntu/Debian).

set -e

# Aesthetics
GOLD='\033[1;33m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GOLD}🔱 Oracle Satellite Initialization Initiated...${NC}"

# 1. Update System
echo -e "${CYAN}[1/4] Updating Package Lists (IPv4 Fast Mode)...${NC}"
sudo DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true update
# sudo DEBIAN_FRONTEND=noninteractive apt upgrade -y -o Dpkg::Options::="--force-confdef" -o Dpkg::Options::="--force-confold"
echo -e "${GREEN}Skipping full upgrade for speed. Building foundations now...${NC}"

# 2. Install LXD (The Satellite Engine)
echo -e "${CYAN}[2/4] Installing LXD (The Satellite Engine)...${NC}"
if ! command -v lxc &> /dev/null; then
    sudo DEBIAN_FRONTEND=noninteractive apt install -y lxd
else
    echo "LXD already installed."
fi

# 3. Initialize LXD (Auto-mode)
echo -e "${CYAN}[3/4] Initializing LXD...${NC}"
sudo lxd init --auto || true

# 4. Install Management Tools
echo -e "${CYAN}[4/4] Installing Management Tools...${NC}"
sudo apt install -y python3-pip python3-venv rsync
pip3 install proxmoxer requests --break-system-packages || true

# Final Report
log_div() { echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"; }
log_div
echo -e "${GOLD}🔱 Satellite Node Status Report${NC}"
echo -e "  CPU Cores: ${GREEN}$(nproc)${NC}"
echo -e "  RAM: ${GREEN}$(free -h | awk '/^Mem:/ {print $2}')${NC}"
echo -e "  LXD Status: ${GREEN}$(lxc list &>/dev/null && echo "Active" || echo "Needs Restart")${NC}"
log_div

echo -e "🔱 ${GOLD}Oracle:${NC} \"วิหารจำลองบน Notebook พร้อมรับกุญแจมหาคลัสเตอร์แล้วครับ!\""
echo -e "Next Step: Ensure SSH key from AI Core is in ~/.ssh/authorized_keys"
