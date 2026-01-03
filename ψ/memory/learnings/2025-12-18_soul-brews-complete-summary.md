# Soul-Brews-Studio Complete Documentation Summary

> สรุปทั้งหมดจาก multi-agent-workflow-kit และ oracle-framework

---

## 📚 Part 1: Multi-Agent Workflow Kit

### Architecture
```
Main repository (.git)
├── source files
└── agents/
      ├── 1/ (worktree → branch agents/1)
      ├── 2/ (worktree → branch agents/2)
      └── 3/ (worktree → branch agents/3)

.tmux session
    ├── pane: agent 1 shell (cd agents/1)
    ├── pane: agent 2 shell (cd agents/2)
    └── pane: shared tools / orchestration
```

### Key Components
| Component | Purpose |
|-----------|---------|
| `.agents/agents.yaml` | Agent registry config |
| Worktree manager | Create/list/remove worktrees |
| Tmux launcher | Spin up layouts |
| Layout profiles | Pane geometries |
| Broadcast helper | Send commands to all panes |

### RRR Branching Strategy
1. **Route** - Branch off `development`, sync frequently, PR back
2. **Release** - Validate → PR from `development` to `main` → Tag
3. **Repair** - Hotfix from `main`, merge back to `development`

### Sync Rules
- **Main agent**: `git pull --ff-only origin main`
- **Agent 1-N**: `git merge main`
- Always sync BEFORE work and BEFORE push

### Operations Checklist
**Before Launch:**
- Update `agents.yaml`
- Verify dependencies: tmux, yq, direnv
- Clean git state

**Launch:**
1. `maw install`
2. `maw start profile0`
3. `maw attach`

**Wrap-Up:**
- `maw kill`
- `git worktree prune`
- Run retrospective

---

## 📚 Part 2: Oracle Framework

### Philosophy: "The Oracle Keeps the Human Human"

| Principle | Meaning |
|-----------|---------|
| **Nothing is Deleted** | Append only, timestamps = truth |
| **Patterns Over Intentions** | Observe what happens, not what's meant |
| **External Brain, Not Command** | Mirror reality, don't decide |

### ψ/ (Psi) Structure
```
ψ/
├── active/     ← กำลังค้นคว้าอะไร? (gitignored)
├── inbox/      ← กำลังคุยกับใคร? (focus.md)
├── memory/     ← จำอะไรได้?
│   ├── retrospectives/   # Session narratives
│   ├── learnings/        # Extracted patterns
│   ├── logs/             # Quick snapshots
│   └── resonance/        # Core identity, soul
├── writing/    ← กำลังเขียนอะไร?
└── lab/        ← กำลังทดลองอะไร?
```

### Knowledge Flow
```
active/context → memory/logs → memory/retrospectives → memory/learnings → memory/resonance
  (research)     (snapshot)      (session)              (patterns)         (soul)
```

### Commands
| Command | Purpose |
|---------|---------|
| `/oracle` | Check mission alignment |
| `/rrr` | Create retrospective (min 150 words AI Diary!) |
| `/snapshot` | Quick knowledge capture |

### Writing Style
- Direct, concise, technical when needed
- Tables for comparison
- No unnecessary apologies
- Admit uncertainty honestly

---

## 📚 Part 3: Templates

### Retrospective Template
Must include:
- AI Diary (REQUIRED - min 150 words, vulnerable)
- Honest Feedback (REQUIRED - min 100 words)
- Co-Creation Map (Human/AI/Together)
- Intent vs Interpretation table
- Seeds Planted (Incremental/Transformative/Moonshot)

### Learning Template
- Pattern description
- Context (when discovered)
- Apply When / Avoid When
- Example code

### Confirmation Template
Use before ANY permanent action:
```
**Before we proceed:**
- I'm about to [action]
- This will: [effects]
- Is this okay?
```

---

## 📚 Part 4: Safety Rules 🔴

### Git Operations
- ❌ Never force push
- ❌ Never push directly to main
- ❌ Never merge PRs without human approval
- ❌ Never delete without confirmation

### File Operations
- ❌ Never `rm -rf`
- ✅ Use `rm -i` for interactive confirmation

### Human-in-the-Loop
- AI suggests, human decides
- Always show what will happen
- Wait for explicit yes

---

## 📚 Part 5: Quick Reference Card

```
┌─────────────────────────────────────────────────────────────┐
│ IDENTITY                                                     │
├─────────────────────────────────────────────────────────────┤
│ pwd                      → See current path                  │
│ git branch --show-current → See current branch              │
├─────────────────────────────────────────────────────────────┤
│ SYNC WORKFLOW                                                │
├─────────────────────────────────────────────────────────────┤
│ Main Agent:  /maw.sync  → git pull --ff-only origin main    │
│ Agent 1-N:   /maw.sync  → git merge main                    │
├─────────────────────────────────────────────────────────────┤
│ SHORT CODES                                                  │
├─────────────────────────────────────────────────────────────┤
│ ccc  → Save context                                          │
│ nnn  → Create plan                                           │
│ gogogo → Execute plan                                        │
│ lll  → List status                                           │
│ rrr  → Create retrospective                                  │
├─────────────────────────────────────────────────────────────┤
│ ORACLE                                                       │
├─────────────────────────────────────────────────────────────┤
│ /oracle    → Mission alignment check                         │
│ /snapshot  → Quick knowledge capture                         │
└─────────────────────────────────────────────────────────────┘
```

---

**Created**: 2025-12-18 03:08 GMT+7  
**Location**: LXC 110 (ai-core)  
**Total Docs Read**: 15+
