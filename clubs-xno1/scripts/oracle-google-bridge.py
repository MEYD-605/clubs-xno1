#!/usr/bin/env python3
import sys
import os
import json
import sqlite3
from datetime import datetime, timedelta

# Add the MCP server path to import service
sys.path.append("/root/maw-workspace/oracle-skills/google-mcp/sovereign-google/")
from sovereign_service import SovereignGoogleService

# Configuration
CREDENTIALS_PATH = "/root/credentials.json"
TOKEN_PATH = "/root/maw-workspace/oracle-skills/google-mcp/sovereign-google/token.json"
# We assume local D1 proxy or access to the DB file if possible
# Since we are on the same machine, we might find the .sqlite file in .wrangler/
DB_PATH = "/root/maw-workspace/clubs-xno1/.wrangler/state/v3/d1/miniflare-D1DatabaseObject/99637775583b3e81881765c9f13d80327f2f11c52bdbc3828d54c1533ad0374e.sqlite"

def get_db_connection():
    # Find the latest D1 sqlite file in .wrangler
    # This is a bit hacky but works for local dev context
    base_path = "/root/maw-workspace/clubs-xno1/.wrangler/state/v3/d1/miniflare-D1DatabaseObject/"
    if os.path.exists(base_path):
        files = [f for f in os.listdir(base_path) if f.endswith('.sqlite')]
        if files:
            return sqlite3.connect(os.path.join(base_path, files[0]))
    return None

def sync_leads():
    print("🔱 Syncing Leads to Gmail Drafts...")
    conn = get_db_connection()
    if not conn:
        print("❌ Could not connect to D1 database.")
        return

    cursor = conn.cursor()
    # Fetch new leads that haven't been processed by the bridge (we'll log events later)
    # For now, let's just fetch everything new
    cursor.execute("SELECT id, name, email, message, oracle_insight FROM leads WHERE status = 'new'")
    leads = cursor.fetchall()

    service = SovereignGoogleService(CREDENTIALS_PATH, TOKEN_PATH)

    for lead_id, name, email, message, insight in leads:
        print(f"Drafting response for {name} ({email})...")
        
        subject = f"Re: ClubsxAI - ขอขอบคุณที่สนใจบริการถ่านภาพ (Lead ID: {lead_id})"
        body = f"สวัสดีครับคุณ {name},\n\nขอบคุณที่สนใจบริการถ่ายภาพของ ClubsxAI ครับ\n\nข้อความของคุณ: \"{message}\"\n\nโบได้รับข้อมูลแล้ว และจะติดต่อกลับโดยเร็วที่สุดครับ\n\nBest Regards,\nBo Clubs\nhttps://clubs.xno1.site"
        
        try:
            service.create_draft(email, subject, body)
            print(f"✅ Draft created for {email}")
            # Mark as contacted in DB
            cursor.execute("UPDATE leads SET status = 'contacted' WHERE id = ?", (lead_id,))
        except Exception as e:
            print(f"❌ Failed to create draft: {e}")

    conn.commit()
    conn.close()

def sync_calendar():
    print("🔱 Syncing Blog Schedule to Google Calendar...")
    BLOG_DIR = "/root/maw-workspace/clubs-xno1/src/content/blog/"
    service = SovereignGoogleService(CREDENTIALS_PATH, TOKEN_PATH)

    if not os.path.exists(BLOG_DIR):
        print("❌ Blog directory not found.")
        return

    for filename in os.listdir(BLOG_DIR):
        if filename.endswith(".md"):
            with open(os.path.join(BLOG_DIR, filename), 'r') as f:
                content = f.read()
                # Simple frontmatter parse for pubDate and title
                try:
                    import yaml
                    frontmatter = yaml.safe_load(content.split('---')[1])
                    title = frontmatter.get('title')
                    pub_date = frontmatter.get('pubDate')
                    status = frontmatter.get('status')

                    if status == 'scheduled' or status == 'published':
                        print(f"Syncing post: {title} ({pub_date})")
                        # Format as full ISO date-time for the whole day
                        date_str = str(pub_date)
                        start_time = f"{date_str}T09:00:00Z"
                        end_time = f"{date_str}T10:00:00Z"
                        
                        summary = f"🚀 Blog Post: {title}"
                        service.create_event(summary, start_time, end_time, f"Scheduled posting of {title}")
                        print(f"✅ Calendar event created for {title}")
                except Exception as e:
                    print(f"⚠️ Failed to parse {filename}: {e}")

if __name__ == "__main__":
    sync_leads()
    sync_calendar()
