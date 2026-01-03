#!/bin/bash
PASS="123121"
echo "$PASS" | sudo -S DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true update
echo "$PASS" | sudo -S DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true install -y lxd-client lxd
echo "$PASS" | sudo -S lxd init --auto
lxc list
