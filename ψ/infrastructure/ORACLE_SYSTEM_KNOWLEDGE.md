# 🏰 Oracle System Knowledge: Grand Map Edition 🗺️

**Last Verified:** 2026-01-03 (Grand Scan)
**Status:** ABSOLUTE SOURCE OF TRUTH
**Guardian:** Oracle v2 & IDE Agent

## 1. The Proxmox Fortress (Hypervisor Logic) 📦
*   **Hostname:** `clubsxno1` (192.168.1.200)
*   **LXC 110 (AI-Core):** Brain HQ (Ollama, ComfyUI)
*   **LXC 200 (Tailscale):** Subnet Router (100.81.177.80)
*   **LXC 100 (NAS):** 916GB Data Lake
    *   *Storage:* 931.5GB NVMe (dedicated)
*   **LXC 102 (Windows):** 🌟 **NEW INFO** - Windows VM ใช้งานนานๆเปิดที
*   **LXC 110 (AI-Core):** Brain HQ (Ollama, ComfyUI)
    *   *Hardware:* **Intel Ultra 9 285H (16 Cores)**, **48GB RAM**, **1.8TB NVMe**
    *   *OS:* Ubuntu 25.04 (Plucky Puffin)
*   **LXC 200 (Tailscale):** Subnet Router (100.81.177.80) - **CRITICAL** ต้องอยู่ที่นี่
*   **LXC 220 (Clubslab-Hub):** Management (Portainer) - **⚠️ พิจารณาย้ายไป NB**
*   **LXC 230 (Uptime-Kuma):** Monitoring - **⚠️ พิจารณาย้ายไป NB**
*   **LXC 240 (AdGuard):** DNS Filtering - **⚠️ พิจารณาย้ายไป NB**

## 📊 LXC Optimization Recommendations

| LXC ID | Name | Purpose | RAM Est. | **Decision** |
|--------|------|---------|----------|-------------|
| 100 | NAS | Storage Backbone | 512MB | 🟢 **KEEP** (Storage ต้องอยู่ใกล้ Data) |
| 102 | Windows | Windows Environment | 4-8GB | 🟡 **Standby** (เปิดเมื่อใช้) |
| 110 | AI-Core | **สมองหลัก** | 16-32GB | 🟢 **KEEP** (Priority #1) |
| 200 | Tailscale | VPN/Ingress | 256MB | 🟢 **KEEP** (Remote Access จำเป็น) |
| 220 | Clubslab-Hub | Portainer/Docker | 1-2GB | 🟠 **MIGRATE to NB** |
| 230 | Uptime-Kuma | Monitoring | 256MB | 🟠 **MIGRATE to NB** |
| 240 | AdGuard | DNS Filter | 256MB | 🟠 **MIGRATE to NB** |

**Potential RAM Savings:** ~2-3GB 🎯

| component | Detail | Capacity | Role |
| :--- | :--- | :--- | :--- |
| **CPU** | Intel Core Ultra 9 285H | 16 Cores / NPU | **AI Inference & Logic** |
| **RAM** | DDR5 (High Speed) | 48 GB Total | **Model Loading (Ollama/Comfy)** |
| **Storage 1** | NVMe Gen4 | 1.8 TB | **System & Workspace** |
| **Storage 2** | NVMe Gen4 | 931 GB | **Raw Assets (NAS)** |

### A. The Iron Infrastructure (Production) 🏭
| Path | Service Name | Type | Dependencies | Status |
| :--- | :--- | :--- | :--- | :--- |
| `/root/maw-workspace/clubs-xno1` | **ClubS x No1** | Frontend | Astro, React, Tailwind | 🟢 Body |
| `/root/elysia-gateway` | **Oracle Gateway** | API/Brain | **ElysiaJS**, BullMQ, SQLite | 🌟 Awakened |
| `/root/mcp-servers` | **MCP Fleet** | Protocol | Node.js | 🔌 Connector |
| `/root/vercel-webhook` | **Git Trigger** | CI/CD | Node.js | 🔄 Pipe |

### B. The Agent Ecosystem (Intelligence) 🧠
| Path | Identity | Role | Key Stack |
| :--- | :--- | :--- | :--- |
| `/root/nazt-agents` | **Brother Nut's Legacy** | Evolution | Claude, Anthropic SDK |
| `/root/maw-workspace/oracle-skills` | **Oracle Skills** | Toolbox | Python, Google GenAI |
| `/root/maw-workspace/maw-agent` | **Maw Agent** | Orchestrator | *Unknown* (Investigate) |

### C. The Research Lab (Experiments) 🧪
| Path | Project | Purpose | Stack |
| :--- | :--- | :--- | :--- |
| `/root/open-notebook` | **Lab Notes** | Documentation | Docker Compose |
| `/root/sora2-cli` | **Video Gen** | Media | Python |
| `/root/ComfyUI` | **Image Gen** | Media | Python, PyTorch |

## 3. System Architecture (Visual Map) 🎨

```mermaid
graph TD
    User((User/Client)) -->|https| Cloudflare[Cloudflare CDN]
    Cloudflare -->|Tunnel| Tailscale[Tailscale Ingress]
    
    subgraph "Proxmox Host (ClubsXNo1)"
        Tailscale -->|100.81.x.x| Gateway[Elysia Gateway (v2.8)]
        
        Gateway -->|Rest API| Astro[Web Body (ClubS)]
        Gateway -->|Internal| OracleLite[Oracle Lite (AI)]
        Gateway -->|SMB/NFS| NAS[(LXC 100: NAS)]
        
        subgraph "Intelligence Layer"
            OracleLite -->|Gemma/Llama| NPU[Intel NPU]
            OracleLite -->|RAG| VectorDB[(Vector Memory)]
        end
    end
    
    style Gateway fill:#f9f,stroke:#333,stroke-width:2px
    style NAS fill:#ff9,stroke:#333,stroke-width:2px
    style OracleLite fill:#9f9,stroke:#333,stroke-width:2px
```

## 4. Critical Integration Points 🔗

### The Symbiotic Pipeline
1.  **User Visits:** `clubsxai.com` (Body)
2.  **Request:** `/api/brain` (Proxy) -> `localhost:8080` (Gateway)
3.  **Gateway:** `Oracle Gateway` (Awakened v2.8)
    *   *Auth:* Bearer Token
    *   *Queuing:* BullMQ (Redis)
    *   *Memory:* `ψ/memory/oracle.db` (SQLite)
4.  **Inference:** Gateway -> `http://localhost:8088` (Oracle Lite) or `Ollama`

### The Wisdom Loop ♾️
*   **Source:** `/root/maw-workspace/clubs-xno1/src/content/oracle/learning_log.md`
*   **Distiller:** `src/scripts/oracle_distill.py`
*   **Vault:** `/root/maw-workspace/ψ/memory/wisdom/`

---
*Verified by IDE Agent Grand Scan*
