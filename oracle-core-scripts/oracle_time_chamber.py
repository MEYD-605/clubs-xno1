#!/usr/bin/env python3
"""
🔱 ORACLE HYPERBOLIC TIME CHAMBER 🔱
Oracle talk to Oracle (MCP) loop for autonomous skill acquisition.
"""

import os
import sys
import json
import time
import requests
from pathlib import Path

class OracleTimeChamber:
    def __init__(self):
        self.gateway_url = "http://127.0.0.1:3010/api/brain"
        self.token = "W1GupLE-O8cwsvPkSGVVEY1cLM7xEusOSuWJhIINw8l7gdMLv6Tpfg0gP_xxh_7x"
        self.wisdom_dir = Path("/root/ψ/memory/wisdom")
        self.learnings_dir = Path("/root/ψ/memory/learnings")
        self.wisdom_dir.mkdir(parents=True, exist_ok=True)
        
    def consult_oracle(self, prompt, model="god-lite"):
        headers = {
            "Authorization": f"Bearer {self.token}",
            "Content-Type": "application/json"
        }
        data = {"prompt": prompt, "model": model}
        try:
            response = requests.post(self.gateway_url, headers=headers, json=data, timeout=180)
            if response.status_code == 200:
                return response.json().get("response", "")
            return f"Error: {response.status_code} - {response.text}"
        except Exception as e:
            return f"Exception: {e}"

    def archive_to_sqlite(self, topic, content, tags="wisdom,chamber"):
        """Archive wisdom directly to Oracle's long-term memory (SQLite)"""
        import sqlite3
        db_path = "/root/ψ/memory/oracle.db"
        try:
            con = sqlite3.connect(db_path)
            cur = con.cursor()
            # Insert into main memories table
            cur.execute(
                "INSERT INTO memories (content, created_at, tags) VALUES (?, datetime('now'), ?)",
                (f"🔱 Wisdom Topic: {topic}\n\n{content}", tags)
            )
            # FTS update will happen via triggers or manual if needed
            con.commit()
            con.close()
            print(f"📊 Wisdom indexed into Oracle Memory (SQLite)")
        except Exception as e:
            print(f"⚠️ SQLite archival failed: {e}")

    def run_simulation(self, topic):
        print(f"🌀 entering time chamber for: {topic}")
        
        # Step 1: Self-Reflection
        reflection_prompt = f"ในฐานะ Oracle จงวิเคราะห์ความรู้ปัจจุบันของเราเกี่ยวกับ '{topic}' และระบุจุดที่ยังขาดหายหรือควรปรับปรุง"
        analysis = self.consult_oracle(reflection_prompt)
        print(f"🔍 Analysis: {analysis[:100]}...")
        
        # Step 2: Wisdom Extraction (Oracle Talking to Oracle)
        distill_prompt = f"จากบทวิเคราะห์นี้: {analysis}\n\nจงสร้าง 'Wisdom' ในรูปแบบของหลักการ (Principles) หรือ Skill ใหม่ที่ระบบควรเรียนรู้ เพื่อให้เกิด Regeneration"
        wisdom = self.consult_oracle(distill_prompt)
        
        # Step 3: Archive to File
        timestamp = time.strftime("%Y%m%d-%H%M%S")
        filename = self.wisdom_dir / f"wisdom_{topic.lower().replace(' ', '_')}_{timestamp}.md"
        with open(filename, "w") as f:
            f.write(f"# 🔱 Wisdom: {topic} ({timestamp}) 🔱\n\n")
            f.write(f"## 🔍 Analysis\n{analysis}\n\n")
            f.write(f"## 🌀 Distilled Wisdom\n{wisdom}\n")
        
        # Step 4: Archive to SQLite (RAG Integration)
        self.archive_to_sqlite(topic, wisdom)
        
        print(f"✅ Wisdom archived to {filename}")
        return filename

if __name__ == "__main__":
    chamber = OracleTimeChamber()
    topic = sys.argv[1] if len(sys.argv) > 1 else "Self-Improvement"
    chamber.run_simulation(topic)
