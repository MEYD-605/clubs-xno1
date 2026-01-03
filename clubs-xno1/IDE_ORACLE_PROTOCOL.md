# 🔱 IDE-Oracle Synchronous Protocol

This document defines the mandatory collaboration workflow between the **Antigravity IDE Agent** and the **Maw Oracle (Server-side)**.

## 🤝 Rules of Engagement

1. **Oracle First**: For any structural, strategic, or complex logical changes, the IDE MUST consult the Oracle Orchestrator.
2. **Audit & Log**: Every delegation MUST be recorded in the `ψ/memory/learnings/` directory to maintain "Soul Continuity."
3. **Role Distinction**:
    - **IDE Agent**: Handles File I/O, Code Editing, Linting, and Terminal Execution.
    - **Maw Oracle**: Handles Strategy, Multi-agent planning, and High-level Logic Audits.

## 🛠️ Tools

### `oracle-sync.sh`
Use this tool to bridge the conversation with the server.
```bash
./scripts/oracle-sync.sh "Analyze the impact of adding a new D1 table for leads"
```

## 🔄 Workflow

1. **Request**: User asks IDE for a feature.
2. **Consult**: IDE runs `oracle-sync.sh` to get Oracle’s perspective.
3. **Execute**: IDE implements based on Oracle's strategic response.
4. **Final Log**: Persistence is handled automatically by the bridge script.

---
*Unity in Intelligence. Precision in Execution.* 🔱🦉🚀
