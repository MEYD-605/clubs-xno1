# ClubsLab AI Homelab - Complete Architecture

> สรุปโครงสร้างทั้งหมดของ Server
> **Updated**: 2025-12-18 03:35 GMT+7

## 🖥️ Proxmox Host

| Item | Value |
|------|-------|
| Hostname | clubsxno1 |
| IP | 192.168.1.200 |
| Storage | /dev/pve-root 94GB (61%), /mnt/nas1t 916GB (24%) |
| Services | pve-cluster, docker, pve-firewall |

---

## 📦 LXC Containers (6 Total)

### LXC 100: nas-server
- **Role**: NAS Storage
- **Storage**: /mnt/storage → 916GB NVMe
- **Services**: Samba (smbd)
- **Access**: SMB shares

### LXC 110: ai-core ⭐ Main AI
- **Role**: AI/ML Workstation
- **IP**: 192.168.1.129
- **Storage**: 689GB (24% used)
- **Services**:
  - Ollama (11 models)
  - RAG Server (ChromaDB)
  - Docker: open-webui, anythingllm
  - Grafana: :3100
- **Key Folders**:
  - `/root/super-agent/` - Multi-agent system
  - `/root/ψ/` - AI Brain (5 pillars)
  - `/root/soul-brews/` - MAW Kit + Oracle
  - `/root/ComfyUI/` - Image generation
- **Scripts**: 18 shell scripts

### LXC 200: tailscale-router
- **Role**: VPN Router
- **IP**: 100.81.177.80 (Tailscale)
- **Devices**: 5 registered (4 offline)

### LXC 220: clubslab-hub
- **Role**: Mission Control
- **IP**: 192.168.1.122
- **Services**: Portainer (:8000, :9443)

### LXC 230: uptime-kuma
- **Role**: Monitoring
- **Services**: Uptime Kuma (healthy)

### LXC 240: adguard
- **Role**: DNS Filtering
- **Services**: AdGuard Home

---

## 🤖 AI System (LXC 110)

### Ollama Models (11)
| Model | Size | Best For |
|-------|------|----------|
| qwen2.5-coder:7b | 4GB | Code |
| llama3.1:8b | 4GB | General |
| gemma2:9b | 5GB | Analysis |
| phi3.5:3.8b | 2GB | Fast |
| llama3.2:1b | 1GB | Ultra-fast |
| llava:7b | 4GB | Vision |
| minicpm-v | 5GB | Vision |
| moondream:1.8b | 1GB | Vision |
| starling-lm:7b | 4GB | Chat |
| mxbai-embed-large | 669MB | Embedding |
| nomic-embed-text | 274MB | Embedding |

### Agent Commands
| Command | Script | Role |
|---------|--------|------|
| brain | agent0.sh | Local Code Expert |
| ask | agent1.sh | Cloud GLM |
| boss/sg | coordinator.sh | Smart Router |
| codex | codex wrapper | gpt-5.2 Pro |
| maw | maw-full | Workflow |

### Folder Structure
```
/root/
├── super-agent/
│   ├── agents/      # 6 agent scripts
│   ├── configs/     # System prompts
│   ├── knowledge/   # Indexed docs (299)
│   ├── logs/        # Conversations, indexer
│   ├── reports/     # Generated reports
│   └── tools/       # Utilities
├── ψ/
│   ├── active/      # Current research
│   ├── inbox/       # Current focus
│   ├── memory/
│   │   ├── learnings/      # Extracted patterns
│   │   ├── retrospectives/ # Session logs
│   │   ├── resonance/      # Core identity
│   │   └── logs/           # Snapshots
│   ├── writing/     # Drafts
│   └── lab/         # Experiments
└── soul-brews/
    ├── multi-agent-workflow-kit/
    └── oracle-framework/
```

---

## 🌐 Network

| LXC | IP | Ports |
|-----|-----|-------|
| Host | 192.168.1.200 | 8006 (PVE) |
| 110 | 192.168.1.129 | 11434 (Ollama), 3000 (WebUI), 3100 (Grafana), 8188 (ComfyUI) |
| 220 | 192.168.1.122 | 8000, 9443 (Portainer) |
| 200 | 100.81.177.80 | Tailscale VPN |

---

## 📋 Key Files

| File | Purpose |
|------|---------|
| /root/MASTER_SYSTEM_PROMPT.md | ภาษาไทย prompt |
| /root/USER_PROFILE.md | Owner profile |
| /root/ψ/inbox/focus.md | Current task |
| /root/super-agent/SYSTEM_MANIFEST.md | Auto-indexed manifest |

---
**Philosophy**: Oracle Framework - "Nothing is deleted, Patterns over intentions"
