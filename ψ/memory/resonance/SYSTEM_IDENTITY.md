# ClubsLab AI Homelab - System Identity

> Core knowledge for MAW and all AI agents

## Owner
- **Name**: บร๊ะเจ้าโบ (Bo)
- **Role**: System Administrator

## Infrastructure

### Proxmox Host
- **Hostname**: clubsxno1
- **IP**: 192.168.1.200
- **Role**: Main hypervisor

### LXC Containers

| VMID | Name | IP | Role |
|------|------|-----|------|
| 100 | nas-server | 192.168.1.100 | NAS Storage |
| 110 | ai-core | 192.168.1.129 | AI/ML, Ollama, ComfyUI |
| 200 | tailscale-router | 192.168.1.101 | VPN Router |
| 220 | clubslab-hub | 192.168.1.122 | n8n, Portainer, Homepage |
| 230 | uptime-kuma | - | Monitoring |
| 240 | adguard | - | DNS Filtering |

## AI Services (LXC 110)

### Ollama Models
- qwen2.5-coder:7b (Code)
- llama3.1:8b (General)
- gemma2:9b (Analysis)
- phi3.5:3.8b (Fast)
- qwen2.5:14b (Reasoning) [Installing]
- deepseek-coder:6.7b [Installing]
- mistral:7b [Installing]

### Agent Commands
| Command | Purpose | Model |
|---------|---------|-------|
| brain | Local AI | qwen2.5-coder |
| ask | Cloud AI | GLM-4-plus |
| sg | Coordinator | Auto-select |
| maw | Workflow | Soul-Brews |

### Web Services
- Open WebUI: http://192.168.1.129:3000
- AnythingLLM: http://192.168.1.129:3001
- Grafana: http://192.168.1.129:3100
- ComfyUI: http://192.168.1.129:8188

## Network
- LAN: 192.168.1.0/24
- Gateway: 192.168.1.1
- VPN: Tailscale via LXC 200

## Soul-Brews Integration
- MAW Script: /root/maw
- ψ/ Structure: /root/ψ/
- Knowledge: /root/ψ/memory/
- Retrospectives: /root/ψ/memory/retrospectives/

---
**Last Updated**: 2025-12-18
