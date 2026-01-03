# Proxmox VE Helper-Scripts (Community)
> **Source**: https://community-scripts.github.io/ProxmoxVE/
> **GitHub**: https://github.com/community-scripts/ProxmoxVE
> **Scripts Available**: 400+
> **Added**: 2025-12-27

---

## Overview

Community-driven initiative that simplifies the setup of Proxmox Virtual Environment (VE).
Perfect for homelab management — covers everything from LXC containers to VMs.

---

## Key Resources

| Resource | URL |
|----------|-----|
| **All Scripts** | https://community-scripts.github.io/ProxmoxVE/scripts |
| **GitHub Repo** | https://github.com/community-scripts/ProxmoxVE |
| **Discord** | https://discord.gg/3AnUqsXnmK |
| **Changelog** | https://github.com/community-scripts/ProxmoxVE/blob/main/CHANGELOG.md |
| **Discussions** | https://github.com/community-scripts/ProxmoxVE/discussions |

---

## Common Script Categories

1. **LXC Containers** - One-click setup for Docker, AdGuard, Uptime Kuma, etc.
2. **VMs** - Pre-configured VM templates
3. **System Tools** - Proxmox maintenance and optimization
4. **Networking** - Tailscale, WireGuard, etc.
5. **Storage** - NAS, Samba, NFS configurations

---

## Usage Example

```bash
# Run a script directly from shell (example for Docker LXC)
bash -c "$(wget -qLO - https://github.com/community-scripts/ProxmoxVE/raw/main/ct/docker.sh)"
```

---

## FAQ Highlights

- **Why tarballs instead of git pull?** - Simplifies installation process
- **Why HTTP by default?** - Easier initial setup, can be secured after
- **502 Bad Gateway?** - Usually a container startup issue
- **Script fails?** - Check logs, report on GitHub Discussions

---

## Relevance to Our System

| Our LXC | Community Script Available? |
|---------|----------------------------|
| **nas-server** (100) | ✅ Samba/NFS scripts |
| **ai-core** (110) | ✅ Docker, Ollama scripts |
| **tailscale-router** (200) | ✅ Tailscale install script |
| **clubslab-hub** (220) | ✅ Portainer, Homepage scripts |
| **uptime-kuma** (230) | ✅ Uptime Kuma one-click install |
| **adguard** (240) | ✅ AdGuard Home script |

---

*This reference is maintained by Oracle for future infrastructure expansion.*
