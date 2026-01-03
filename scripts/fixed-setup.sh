#!/bin/bash
echo clubs2025 | sudo -S DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true update
echo clubs2025 | sudo -S DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true install -y lxd-client lxd
echo clubs2025 | sudo -S lxd init --auto
lxc list
