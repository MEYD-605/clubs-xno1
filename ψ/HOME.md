# ψ/ - AI Brain

> Navigation hub for the 7-pillar structure (Oracle Framework Advanced)

## Pillars

| Pillar | Question | Content |
|--------|----------|---------|
| `active/` | กำลังค้นคว้าอะไร? | Current investigations (gitignored) |
| `inbox/` | กำลังคุยกับใคร? | Communication, handoffs, focus.md |
| `memory/` | จำอะไรได้? | Knowledge base |
| `writing/` | กำลังเขียนอะไร? | Drafts, articles |
| `lab/` | กำลังทดลองอะไร? | Experiments, POCs |
| `incubate/` | กำลังพัฒนาอะไร? | Active development (symlinks) |
| `learn/` | กำลังศึกษาอะไร? | Study materials (symlinks) |

## Memory Structure

```
memory/
├── retrospectives/   # Session narratives (by date)
├── learnings/        # Extracted patterns
├── logs/             # Quick snapshots
└── resonance/        # Core identity, soul
```

## Knowledge Flow

```
active → memory/logs → memory/retrospectives → memory/learnings → memory/resonance
(research) (snapshot)    (session)              (patterns)         (soul)
```

## Usage

### Starting a Session

1. Check current focus
2. Update with new task
3. Begin work

### Ending a Session

1. Run `maw retro` to create retrospective
2. Note any handoffs needed

### Periodic Review

1. Review recent retrospectives
2. Extract patterns to `learnings/`
3. Promote core truths to `resonance/`
