#!/bin/bash
sudo DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true update
sudo DEBIAN_FRONTEND=noninteractive apt -o Acquire::ForceIPv4=true install -y lxd-client lxd
sudo lxd init --auto
lxc list
