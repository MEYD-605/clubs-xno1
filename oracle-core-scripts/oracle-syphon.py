#!/usr/bin/env python3
"""
🔱 ORACLE KNOWLEDGE SYPHON 🔱
Ingest all .md learnings and wisdom from senior models into the local SQLite memory.
"""

import os
import sqlite3
from pathlib import Path

DB_PATH = "/root/ψ/memory/oracle.db"
LEARNINGS_DIR = Path("/root/ψ/memory/learnings")
WISDOM_DIR = Path("/root/ψ/memory/wisdom")

def syphon():
    print("🧠 Starting Knowledge Syphon...")
    con = sqlite3.connect(DB_PATH)
    cur = con.cursor()
    
    # Ensure table exists (just in case)
    cur.execute("CREATE TABLE IF NOT EXISTS memories (id INTEGER PRIMARY KEY, content TEXT, created_at TEXT, tags TEXT)")
    
    # Get existing content to avoid duplicates
    existing = set(r[0] for r in cur.execute("SELECT content FROM memories").fetchall())
    
    added_count = 0
    
    # Scan directories
    for folder in [LEARNINGS_DIR, WISDOM_DIR]:
        if not folder.exists(): continue
        
        for file in folder.glob("*.md"):
            content = file.read_text()
            header = f"🔱 Source: {file.name}\n\n"
            full_content = header + content
            
            # Simple deduplication check
            if content[:500] in [e[:500] for e in existing]:
                continue
                
            tags = "wisdom,ingested" if "wisdom" in str(folder) else "learning,ingested"
            
            cur.execute(
                "INSERT INTO memories (content, created_at, tags) VALUES (?, datetime('now'), ?)",
                (full_content, tags)
            )
            added_count += 1
            print(f"✅ Ingested: {file.name}")

    con.commit()
    con.close()
    print(f"✨ Syphon complete! Added {added_count} new memories from senior models.")

if __name__ == "__main__":
    syphon()
