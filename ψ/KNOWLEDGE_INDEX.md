# MAW Oracle Knowledge Base Index
**Last Updated**: 2026-01-01 00:20  
**Status**: Active

> **Master Reference**: [ORACLE_SYSTEM_KNOWLEDGE.md](file:///root/maw-workspace/%CF%88/infrastructure/ORACLE_SYSTEM_KNOWLEDGE.md)

---

## 📚 Available Resources

### Commands (.claude/commands/)
1. `/forward` - Prepare context before session clear
2. `/recap` - Fresh start summary
3. `/rrr` - Create session retrospective
4. `/snapshot` - System state backup
5. `/standup` - Daily status report
6. `/trace` - Debug and logging
7. `/wip` - Work in progress tracker

### Agents (.claude/agents/)
1. **context-finder** - Fast search (Haiku, uses Bash/Grep/Glob)
2. **executor** - Execute bash commands from plans
3. **marie-kondo** - Code cleanup and organization
4. **codex-delegator** ⭐ NEW - Delegate to Codex/Orchestrator

### MAW Scripts
- `./maw health` - Infrastructure health check
- `./maw backup` - Create snapshot
- `./maw auto <task>` - Auto-delegate
- `./maw lxc <status|start|stop|health>` - Manage all 6 LXC containers (จัดการทั้ง 6 คอนเทนเนอร์)
- `./maw dashboard` - Update and view system dashboard (อัปเดตและดูแดชบอร์ดระบบ)
- `./maw monitor` - Live container monitoring (ระบบติดตามสถานะแบบเรียลไทม์)
- `./maw oracle` - Check Oracle status (เช็คสถานะออราเคิล)
- `./maw recap` - Show current WIP (แสดงงานที่กำลังทำ)
- `./maw rrr` - Create retrospective (สร้างบันทึกย้อนหลัง)
- `./maw topology` - View infrastructure map (ดูแผนผังโครงสร้างพื้นฐาน)
- `./maw plan` - View 7-day roadmap (ดูแผนงาน 7 วัน)

---

## 🗂️ Soul Structure (ψ/)

```
ψ/
├── HOME.md                 # Navigation hub (ศูนยรวมการนำทาง)
├── WIP.md                  # Current work tracker (ติดตามความคืบหน้า)
├── infrastructure/
│   └── proxmox_topology.md # Mapping all 6 LXCs (แผนผัง 6 คอนเทนเนอร์)
└── memory/
    ├── retrospectives/     # Session logs (บันทึกเซสชัน)
    │   ├── day1_2025-12-27.md
    │   └── session_*.md
    ├── learnings/          # Auto-delegation patterns (รูปแบบการเรียนรู้)
    │   ├── auto_*.md
    │   └── 2026-01-01_astro-cloudflare-deployment.md ⭐ NEW
    └── logs/               # System health logs (บันทึกสุขภาพระบบ)
        ├── health_*.log
        └── backup.log
```

---

## 🌐 Full Fleet Awareness (คอนเทนเนอร์ทั้งหมด)

1. **LXC 100**: nas-server (Storage Hub)
2. **LXC 110**: ai-core (Main AI Brain ⭐)
3. **LXC 200**: tailscale-router (Secure VPN)
4. **LXC 220**: clubslab-hub (Mission Control)
5. **LXC 230**: uptime-kuma (Performance Monitor)
6. **LXC 240**: adguard (Network Guardian)
7. **Node 2**: Laptop WSL2 (Hybrid Worker) 🌐

> **📖 Reference**: [PROXMOX_HELPER_SCRIPTS.md](file:///root/maw-workspace/%CF%88/infrastructure/PROXMOX_HELPER_SCRIPTS.md) - 400+ community scripts for Proxmox management

> **🤖 Agents**: [NAZT_AGENTS_SYSTEM.md](file:///root/maw-workspace/%CF%88/research/NAZT_AGENTS_SYSTEM.md) - 84 agents + 15 workflows + 42 tools (by Ajarn Nat)

---

## 🔗 External Systems

### LXC 110 (AI-Core: 192.168.1.129)
- **Ollama**: http://192.168.1.129:11434 (qwen2.5:14b)
- **ComfyUI**: http://localhost:8188
- **Super Agent**: /root/super-agent/

### LXC 220 (Control: 192.168.1.122)
- **Homepage**: http://192.168.1.122:3000
- **Portainer**: http://192.168.1.122:9000

### Proxmox Host (192.168.1.200)
- Web UI: https://192.168.1.200:8006

---

## 🎨 Active Projects

### Soul-Brews Web Core ⭐ NEW
**Owner**: No.1 (บร๊ะเจ้าโบ)  
**Type**: Premium Photography Portfolio  
**Tech Stack**: Astro + React Islands + Tailwind CSS v4  
**Repository**: [MEYD-605/soul-brews-web-core](https://github.com/MEYD-605/soul-brews-web-core)  
**Deployment**: Cloudflare Pages (pending)  
**Status**: ✅ Build Success (802ms, 3 pages)

**Key Files**:
- `/root/maw-workspace/soul-brews-web-core/` - Main project
- `/root/.gemini/antigravity/brain/*/oracle_master_directive.md` - Strategic planning
- `/root/ψ/memory/learnings/2026-01-01_astro-cloudflare-deployment.md` - Mission log

---

## 🎯 Quick Access Patterns

**Need to delegate a task?**
```bash
./maw auto "Your task description"
```

**Want to check system health?**
```bash
./maw health
```

**Create a retrospective?**
```bash
./maw rrr
```

**View current work?**
```bash
./maw recap
```

---

*This index is maintained by Oracle and updated daily.*
