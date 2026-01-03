# Tools & Services - เครื่องมือทั้งหมดที่มี

> สรุปทุก tools/services ที่ใช้งานบน LXC 110

## 🐳 Docker Containers

| Container | Status | Port | Purpose |
|-----------|--------|------|---------|
| open-webui | Running | 3000 | Chat UI for Ollama |
| anythingllm | Running | - | RAG + Document chat |

---

## ⚙️ Systemd Services

| Service | Port | Purpose |
|---------|------|---------|
| ollama | 11434 | LLM inference (11 models) |
| rag-server | 8001 | ChromaDB + Ollama RAG |
| comfyui | 8188 | Image generation |

---

## 🌐 All Ports

| Port | Service | Access |
|------|---------|--------|
| 3000 | open-webui | http://192.168.1.129:3000 |
| 5001 | python3 (unknown) | - |
| 5901 | VNC | vnc://192.168.1.129:5901 |
| 6379 | Redis | localhost only |
| 8001 | RAG uvicorn | http://192.168.1.129:8001 |
| 8188 | ComfyUI | http://192.168.1.129:8188 |
| 8501 | Streamlit | http://192.168.1.129:8501 |
| 11434 | Ollama | http://192.168.1.129:11434 |

---

## 🤖 AI Tools

### Ollama (Primary)
- 11 models loaded
- API: http://localhost:11434
- Models: qwen2.5-coder, llama3.1, gemma2, etc.

### AnythingLLM
- Document chat & RAG
- Components: collector, frontend, server
- Good for: Document Q&A

### Open WebUI
- Beautiful chat interface
- Multi-model support
- History & sharing

### ComfyUI
- Image generation
- Modules: api_server, comfy, comfy_api
- Output: /root/ComfyUI/output/

### RAG Server
- Vector search (ChromaDB)
- Ollama embeddings
- Port 8001

---

## 📊 Monitoring

### Streamlit Control Panel
- Port 8501
- System dashboard

### Redis
- Cache server
- Port 6379 (localhost)

### VNC
- Remote desktop
- Port 5901

---

## 🔧 Integration Ideas

### AnythingLLM + ψ/
- เอา ψ/memory/ ทั้งหมดใส่ AnythingLLM
- ทำให้ chat ได้กับ knowledge base

### ComfyUI + MAW
- maw image "prompt" → generate image
- Auto-save to ψ/lab/

### Open WebUI + Brain
- ใช้ brain model ผ่าน UI
- Track conversations

---
**Updated**: 2025-12-18
