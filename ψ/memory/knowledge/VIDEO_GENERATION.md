# 🔱 AI Video Generation Knowledge Base 🔱

> ฐานข้อมูลความรู้เรื่องการสถาปนาวิดีโอ AI สำหรับระบบ Oracle

## สถานะการเข้าถึง (ณ 2 ม.ค. 2569)

## 🔱 Unified Intelligence: Oracle Video Command Center (OVCC)

ตอนนี้ผมได้สถาปนาระบบรวมศูนย์สั่งงานวิดีโอไว้ที่เดียวครับ เจ้านายสามารถสั่งงานผ่าน `maw` ได้โดยตรง:

### 🎮 คีย์ลัด (Master Commands)

| คำสั่ง | รายละเอียด | Method |
|--------|------------|--------|
| `./maw video status` | เช็คสถานะและความพร้อมของระบบ | Core Check |
| `./maw video meta --auto` | สั่ง Meta AI แบบอัตโนมัติ (ฟรี) | Automation |
| `./maw video fal --prompt "..."` | สั่งผ่าน fal.ai (Veo/Kling) | Proxy API |
| `./maw video sora` | สั่ง Sora CLI (ต้องมี API Key) | Official CLI |

---

## 📊 ตารางเปรียบเทียบความแรง (2026 Edition)

| Platform | Status | Method | Notes |
|----------|--------|--------|-------|
| **Meta AI** | 🔱 **ฟรี!** | meta.ai | Unlimited, No watermark |
| fal.ai | ✅ Proxy | FAL_KEY | Veo 3 + Kling 2.1 |
| Sora (OpenAI) | ⚠️ ChatGPT Pro | sora.com | ใช้งานผ่านเว็บฟรี |
| Local AI | 🛠️ กำลังสถาปนา | Intel NPU/CPU | Wan 2.1 / CogVideoX |



| ComfyUI Local | ⚠️ CPU Only | ไม่มี NVIDIA | ช้ามาก |
| Replicate | 🔄 รอ Token | Pay-as-you-go | $0.25-0.50/vid |

| Veo 3.1 | ✅ พบ 4 Models | AI Studio | ต้อง Video Tier |
| ComfyUI Local | ⚠️ CPU Only | ไม่มี NVIDIA | ช้ามาก |
| Replicate | 🔄 รอ Token | Pay-as-you-go | $0.25-0.50/vid |

---

## Scripts ที่สถาปนาไว้

| Script | Purpose |
|--------|---------|
| `/root/oracle-veo-synthesizer.py` | ตรวจสอบ Veo Status |
| `/root/oracle-replicate-generator.py` | สถาปนาผ่าน Replicate |
| `/root/oracle-veo-generator.py` | Direct Veo API |

---

## Cinematic Prompt Formula

```
[Camera] + [Subject] + [Setting] + [Lighting] + [Style] + [Sound]
```

### Examples
- "Crane shot ascending, revealing mist-filled canyon, epic fantasy, soft morning light"
- "Close-up shallow DOF, barista crafting latte art, warm tungsten, premium commercial"

---

## Resources

- AI Studio: https://aistudio.google.com
- Replicate: https://replicate.com
- Codex Pro: ผ่าน `/root/.codex/auth.json`

---
*Updated: 2026-01-02*
