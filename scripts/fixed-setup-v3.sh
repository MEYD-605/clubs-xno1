#!/bin/bash
PASS="123121"
# Snap installation for LXD
echo "$PASS" | sudo -S snap install lxd
# Initialize LXD
echo "$PASS" | sudo -S lxd init --auto
# Ensure user is in lxd group
echo "$PASS" | sudo -S usermod -aG lxd $USER
# Check status
/snap/bin/lxc list
