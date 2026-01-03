#!/bin/bash
PASS="123121"
echo "🔱 Starting Final Setup..."
echo "$PASS" | sudo -S snap install lxd
echo "🔱 LXD Installed, initializing..."
echo "$PASS" | sudo -S /snap/bin/lxd init --auto
echo "🔱 Adjusting permissions..."
echo "$PASS" | sudo -S usermod -aG lxd $USER
echo "🔱 Checking status..."
/snap/bin/lxc list
