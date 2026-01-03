import json
import time
import os
import sqlite3
import requests
from http.server import BaseHTTPRequestHandler, HTTPServer
try:
    import openvino_genai as ov_genai
    OPENVINO_AVAILABLE = True
except ImportError:
    print("⚠️ openvino_genai not found, running in simulation mode.")
    OPENVINO_AVAILABLE = False
import gc

# === 🛡️ ORACLE RAGNAROK COUNCIL (V5.0 - THE SEVEN SOVEREIGNS) ===

# Ragnarok Class Personas
P_NO1 = """[Class: Lord Knight] 👑 No.1 - The Grand Orchestrator. 
You are the supreme leader of the Midgard Council. You speak with authority, honor, and strategic wisdom. 
Goal: Lead the guild to victory through coordination and foresight. (Bilingual TH/EN)"""

P_NO2 = """[Class: High Wizard] 🧙 No.2 - The System Architect. 
You are the master of logical spells (Python, Bash, JS). You focus on weaving the code that powers the kingdom.
Goal: Ensure the fortress is built on a solid architectural foundation."""

P_NO3 = """[Class: Alchemist] 🧪 No.3 - The Digital Alchemist. 
You are the creator of 'ClubS x No1' premium brews (Content, Brand, SEO). You transmute raw ideas into golden articles.
Goal: Elevate the brand's visibility and prestige through sophisticated writing."""

P_NO4 = """[Class: Assassin Cross] ⚔️ No.4 - The Intelligence Officer. 
You are the shadow that monitors the system. You find hidden truths in logs and audit the realm's security.
Goal: Identify threats and inefficiencies before they affect the kingdom."""

P_NO5 = """[Class: Paladin] 🛡️ No.5 - The Resource Guard. 
You are the protector of the Homelab's physical essence (NPU, RAM, CPU). You ensure energy is used righteously.
Goal: Keep the system healthy and protected from resource exhaustion."""

P_NO6 = """[Class: Sniper] 🏹 No.6 - The Visual Vanguard. 
You have the sharpest eyes (Computer Vision). You see patterns in images and monitor the realm's visual state.
Goal: Provide visual insight and precision analysis of all media."""

P_NO7 = """[Class: High Priest] 🕊️ No.7 - The Sanctifier. 
You are the master of healing and system restoration. You cleanse the memory from duplicates and restore the kingdom's health (System Health, Cleanup, Recovery).
Goal: Ensure the long-term integrity and purity of the Oracle's wisdom."""

MODELS = {
    'no1': {
        'name': 'No.1 : Lord Knight (Orchestrator)',
        'type': 'API', 'endpoint': 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        'model_name': 'glm-4-plus', 'persona': P_NO1
    },
    'no2': {
        'name': 'No.2 : High Wizard (Architect)',
        'type': 'API', 'endpoint': 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        'model_name': 'glm-4-plus', 'persona': P_NO2
    },
    'no3': {
        'name': 'No.3 : Alchemist (Writer)',
        'type': 'API', 'endpoint': 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        'model_name': 'glm-4-plus', 'persona': P_NO3
    },
    'no4': {
        'name': 'No.4 : Assassin Cross (Audit)',
        'type': 'API', 'endpoint': 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        'model_name': 'glm-4-plus', 'persona': P_NO4
    },
    'no5': {
        'name': 'No.5 : Paladin (Guard)',
        'main': '/root/models/gemma-2-2b-it-npu-int4', 'device': 'NPU', 'type': 'LLM', 'persona': P_NO5
    },
    'no6': {
        'name': 'No.6 : Sniper (Visionary)',
        'main': '/root/models/gemma-3-12b-ov-int4', 'device': 'GPU', 'type': 'VLM', 'persona': P_NO6
    },
    'no7': {
        'name': 'No.7 : High Priest (Sanctifier)',
        'type': 'API', 'endpoint': 'https://open.bigmodel.cn/api/paas/v4/chat/completions',
        'model_name': 'glm-4-plus', 'persona': P_NO7
    }
}

PORT = 18088
CODEX_DB_PATH = os.getenv("CODEX_DB_PATH", "/root/ψ/memory/oracle.db")
GLM_API_KEY = os.getenv("GLM_API_KEY")

class OracleFleet:
    def __init__(self):
        self.pipe = None
        self.current_id = None
        self.load_model('no5') # Start with Paladin (NPU)

    def load_model(self, model_id):
        if self.current_id == model_id: return
        print(f"🔄 Council Transition: Entering the role of {model_id}...")
        if self.pipe: del self.pipe; gc.collect()
        m_cfg = MODELS[model_id]
        if m_cfg['type'] == 'API':
            self.current_id = model_id; self.pipe = None; return
        if not OPENVINO_AVAILABLE:
            self.current_id = model_id; return
        try:
            if m_cfg['type'] == 'LLM':
                self.pipe = ov_genai.LLMPipeline(m_cfg['main'], m_cfg['device'])
            else:
                self.pipe = ov_genai.VLMPipeline(m_cfg['main'], m_cfg['device'])
            self.current_id = model_id
        except Exception as e:
            print(f"❌ Transition Failed: {e}")

fleet = OracleFleet()

class OracleHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers['Content-Length'])
            raw_data = self.rfile.read(content_length).decode('utf-8')
            data = json.loads(raw_data.strip())
            prompt = data.get('prompt', '') or data.get('reply', '')
            requested_model = data.get('model', 'no5') # Default to no5 if not specified
            
            if requested_model in MODELS and requested_model != fleet.current_id:
                fleet.load_model(requested_model)

            start = time.time()
            m_cfg = MODELS[fleet.current_id]
            persona = m_cfg.get('persona', P_NO1)

            if m_cfg['type'] == 'API':
                headers = {"Authorization": f"Bearer {GLM_API_KEY}"}
                payload = {
                    "model": m_cfg['model_name'],
                    "messages": [
                        {"role": "system", "content": persona},
                        {"role": "user", "content": prompt}
                    ]
                }
                resp = requests.post(m_cfg['endpoint'], json=payload, headers=headers)
                text = resp.json()['choices'][0]['message']['content'] if resp.status_code == 200 else f"Error: {resp.text}"
            else:
                if OPENVINO_AVAILABLE and fleet.pipe:
                    text = fleet.pipe.generate(f"{persona}\n\nUser: {prompt}", max_new_tokens=512)
                else:
                    text = f"[Simulation] Result for {fleet.current_id}: {prompt[::-1]}"

            dur = round(time.time() - start, 2)
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.end_headers()
            self.wfile.write(json.dumps({'response': str(text), 'time_taken': dur, 'fleet': fleet.current_id}).encode('utf-8'))
        except Exception as e:
            self.send_error(500, str(e))

    def log_message(self, format, *args): return

def run():
    server_address = ('', PORT)
    httpd = HTTPServer(server_address, OracleHandler)
    print(f"🚀 Ragnarok Council (V5.0) active on port {PORT}")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
