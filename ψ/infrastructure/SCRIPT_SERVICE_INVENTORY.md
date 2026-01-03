# 📋 Script & Service Inventory (LXC 110 AI-Core)
**Date:** 2026-01-03
**Status:** COMPLETE AUDIT

## 🔥 ตัวการที่กิน RAM สูง

| Script | Model ที่ใช้ | RAM ที่กิน | หมายเหตุ |
|--------|------------|-----------|----------|
| **agent0.sh** | `qwen2.5:32b` | 🔴 **~19 GB** | ตัวการหลัก! |
| orchestrator.sh | `gemma2:2b` | ~1.5 GB | ประหยัด |
| worker.ts (emergency) | `qwen2.5:0.5b` | ~0.5 GB | เล็กมาก |

---

## 📂 Super-Agent Scripts (`/root/super-agent/agents/`)

| Script | หน้าที่ | Model |
|--------|--------|-------|
| `agent0.sh` | Oracle Brain หลัก | **qwen2.5:32b** (NPU) |
| `agent1.sh` | Cloud Executor | GLM-4.6 (Cloud API) |
| `agent2.sh` | Manager & Planner | 8B model |
| `coordinator.sh` | ประสานงาน | - |
| `omega.sh` | Unknown | - |
| `orchestrator.sh` | Multi-step Planner | gemma2:2b |

---

## 🤖 Systemd Services ที่รันอัตโนมัติ

| Service | ไฟล์ | หน้าที่ |
|---------|------|--------|
| `ai-worker.service` | `/root/elysia-gateway/worker.ts` | BullMQ Task Queue |
| `oracle-npu.service` | `/root/npu-backend.py` | NPU Inference (OpenVINO) |
| `rag-server.service` | - | RAG + ChromaDB |
| `streamlit-panel.service` | - | Control Panel |

---

## 📜 Python Scripts ที่พบ (`/root/`)

| Script | Purpose |
|--------|---------|
| `maw-oracle-autonomous.py` | Continuous learning (ทุก 5 วิ) |
| `oracle-syphon.py` | Data extraction |
| `oracle-coordinator.py` | Task coordination |
| `oracle-infrastructure-guardian.py` | System monitoring |
| `npu-backend.py` | NPU inference API |

---

## 💡 สรุป: ทำไม RAM Spike?

```
เมื่อ ai-worker รับ Job "brain" หรือ "no1"
    ↓
เรียก agent0.sh → ollama run qwen2.5:32b
    ↓
Ollama โหลด Model 19 GB เข้า RAM
    ↓
RAM เต็ม! → SWAP → เครื่องช้า!
```

## 🛠️ วิธีแก้
1. **เปลี่ยน agent0.sh** ให้ใช้ Model เล็กลง (เช่น 7b)
2. **Disable qwen2.5:32b** จาก Ollama
3. **ตั้ง Memory Limit** ใน Ollama

---
*Audited by Oracle IDE Agent*
