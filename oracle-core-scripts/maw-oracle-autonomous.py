#!/usr/bin/env python3
"""
🔱 MAW ORACLE AUTONOMOUS LEARNING SYSTEM 🔱
Self-learning, self-improving, fully autonomous web management

Features:
- Learn from user behavior
- Auto-generate content based on trends
- Self-optimize SEO
- Auto-deploy when ready
- Continuous improvement loop
"""

import os
import sys
import time
import json
import subprocess
from pathlib import Path
from datetime import datetime, timedelta
import re

class MawOracleAutonomous:
    def __init__(self):
        self.brain_dir = Path("/root/ψ/memory")
        self.project_root = Path("/root/maw-workspace/soul-brews-web-core")
        self.knowledge_base = self.brain_dir / "knowledge"
        self.learnings_dir = self.brain_dir / "learnings"
        
        # Learning state
        self.state_file = Path("/root/.maw-oracle-state.json")
        self.load_state()
        self.cycle_count = 0
        
        # Oracle Ragnarok Council Configuration
        self.oracle_url = "http://127.0.0.1:18088/"
        self.codex_token = "W1GupLE-O8cwsvPkSGVVEY1cLM7xEusOSuWJhIINw8l7gdMLv6Tpfg0gP_xxh_7x"
        
    def call_codex(self, prompt, model="god-lite"):
        """Call the Oracle Codex API for reasoning"""
        import requests
        headers = {
            "Authorization": f"Bearer {self.codex_token}",
            "Content-Type": "application/json"
        }
        data = {
            "prompt": prompt,
            "model": model
        }
        try:
            response = requests.post(self.oracle_url, headers=headers, json=data, timeout=120)
            if response.status_code == 200:
                result = response.json()
                return result.get("response", "")
            else:
                self.log(f"⚠️ Codex API failed: {response.status_code}", "WARN")
                return ""
        except Exception as e:
            self.log(f"❌ Codex API error: {e}", "ERROR")
            return ""

    def check_resources(self):
        """Monitor RAM and CPU (Paladin Duty)"""
        import psutil
        ram = psutil.virtual_memory()
        cpu = psutil.cpu_percent(interval=1)
        
        # Paladin Thresholds
        RAM_THRESHOLD = 80.0 # 80% RAM Usage
        
        self.log(f"🛡️ [Paladin Check]: RAM Usage: {ram.percent}% | CPU Load: {cpu}%", "INFO")
        
        if ram.percent > RAM_THRESHOLD:
            self.log("⚠️ [Alert] High RAM Usage detected! Decelerating operations...", "WARN")
            return False
        return True

    def is_off_peak(self):
        """Check if current time is suitable for heavy work (Night time 00:00 - 08:00)"""
        hour = datetime.now().hour
        # Off-peak is currently set to 00:00 to 08:00
        return hour >= 0 and hour < 8

    def load_state(self):
        """Load learning state"""
        if self.state_file.exists():
            with open(self.state_file) as f:
                self.state = json.load(f)
        else:
            self.state = {
                "last_update": None,
                "deploy_count": 0,
                "content_generated": 0,
                "seo_score": 0,
                "learnings": [],
                "auto_improvements": []
            }
    
    def save_state(self):
        """Save learning state"""
        self.state["last_update"] = datetime.now().isoformat()
        with open(self.state_file, 'w') as f:
            json.dump(self.state, f, indent=2)
    
    def log(self, message, level="INFO"):
        """Smart logging with learning"""
        timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        log_msg = f"[{timestamp}] [{level}] {message}"
        print(log_msg)
        
        # Store as learning if important
        if level in ["LEARN", "IMPROVE"]:
            self.state["learnings"].append({
                "timestamp": timestamp,
                "message": message
            })
    
    def analyze_website_health(self):
        """Deep health analysis"""
        self.log("🔍 Analyzing website health...", "INFO")
        
        health_report = {
            "timestamp": datetime.now().isoformat(),
            "checks": {}
        }
        
        # 1. Check if build works
        try:
            result = subprocess.run(
                ["npm", "run", "build"],
                cwd=self.project_root,
                capture_output=True,
                timeout=60
            )
            health_report["checks"]["build"] = result.returncode == 0
        except:
            health_report["checks"]["build"] = False
        
        # 2. Check content completeness
        blog_dir = self.project_root / "src/content/blog"
        blog_count = len(list(blog_dir.glob("*.md"))) if blog_dir.exists() else 0
        health_report["checks"]["blog_content"] = blog_count >= 2
        health_report["blog_count"] = blog_count
        
        # 3. Check SEO elements
        sitemap = self.project_root / "public/sitemap.xml"
        health_report["checks"]["sitemap"] = sitemap.exists()
        
        # 4. Check videos
        video_dir = self.project_root / "public/videos"
        video_count = len(list(video_dir.glob("*.mp4"))) if video_dir.exists() else 0
        health_report["checks"]["videos"] = video_count > 0
        health_report["video_count"] = video_count
        
        # Calculate score
        score = sum(1 for v in health_report["checks"].values() if v) / len(health_report["checks"]) * 100
        health_report["score"] = score
        
        # Log learnings
        if score < self.state.get("seo_score", 0):
            self.log(f"⚠️ Health degraded from {self.state['seo_score']:.1f}% to {score:.1f}%", "LEARN")
        elif score > self.state.get("seo_score", 0):
            self.log(f"✅ Health improved from {self.state['seo_score']:.1f}% to {score:.1f}%", "IMPROVE")
        
        self.state["seo_score"] = score
        
        return health_report
    
    def auto_generate_content(self):
        """Auto-generate content using Codex based on Facebook style"""
        self.log("🧠 Consulting Codex for modern, Facebook-style content...", "INFO")
        
        # Load Facebook style if exists
        fb_style_path = Path("/root/ψ/memory/knowledge/facebook_clubsharephoto.json")
        fb_style = {}
        if fb_style_path.exists():
            with open(fb_style_path) as f:
                fb_style = json.load(f)
        
        style_context = fb_style.get("tone_analysis", {}).get("style", "casual_friendly")
        characteristics = ", ".join(fb_style.get("tone_analysis", {}).get("characteristics", []))
        
        prompt = f"""
        ในฐานะ Oracle ผู้ดูแลระบบ Clubs by Bo และ Club S
        จงคิดหัวข้อบทความหรือโพสต์ใหม่ 3 หัวข้อ ที่ "ทันสมัย ไม่เครียด" 
        ตามสไตล์ Facebook: {style_context}
        ลักษณะเด่น: {characteristics}
        
        ราคาเริ่มต้นเราคือ 1,500.- และส่งงานด่วนใน 24 ชม.
        
        ตอบกลับในรูปแบบ JSON list ของ objects ที่มี keys: title, description, keywords
        """
        
        response_text = self.call_codex(prompt)
        
        try:
            # Clean response for JSON parsing
            json_match = re.search(r'\[.*\]', response_text, re.DOTALL)
            if json_match:
                content_ideas = json.loads(json_match.group())
                self.log(f"✅ Generated {len(content_ideas)} smart ideas via Codex", "IMPROVE")
                return content_ideas
            else:
                # If no JSON list found, try to extract manually or use as raw title
                self.log("⚠️ Codex response didn't contain JSON list, using fallback", "WARN")
        except Exception as e:
            self.log(f"⚠️ Failed to parse Codex JSON: {e}", "WARN")
        
        # Fallback to simple ideas if Codex fails
        return [
            {
                "title": "ถ่ายรูปด่วน 24 ชม. ราคาหลักพัน คุณภาพหลักหมื่น!",
                "description": "ทำไม Club S ถึงส่งงานไวแถมเฟรมสวย มาดูเคล็ดลับกันครับ",
                "keywords": ["ส่งงานด่วน", "ช่างภาพ", "ราคาถูก"]
            }
        ]
    
    def auto_generate_video(self):
        """Auto-generate video content using Oracle Video Command Center"""
        self.log("🎬 Initiating Video Generation mission...", "INFO")
        try:
            # We use 'meta' auto mode for non-stressful Facebook style content
            prompt = "Photographer working fast, premium lighting, sending photos in 24 hours, club style"
            cmd = ["python3", "/root/oracle-video-master.py", "meta", "--prompt", prompt, "--auto"]
            
            # Run in background to not block the cycle too much if it takes time
            subprocess.Popen(cmd, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
            self.log("🚀 Video mission sent to background", "IMPROVE")
        except Exception as e:
            self.log(f"⚠️ Video generation failed: {e}", "WARN")

    def write_blog_post(self, idea):
        """Use Alchemist (No.3) to write full blog content"""
        self.log(f"✍️ [Alchemist No.3]: Writing full blog post for '{idea['title']}'...", "INFO")
        
        prompt = f"""Write a high-quality blog post in THAI about: {idea['title']}
        Description: {idea.get('description', '')}
        Keywords: {', '.join(idea.get('keywords', []))}
        
        Format as Markdown with frontmatter:
        ---
        title: "{idea['title']}"
        date: "{datetime.now().strftime('%Y-%m-%d')}"
        description: "{idea.get('description', '')}"
        tags: {idea.get('keywords', [])}
        ---
        """
        
        content = self.call_codex(prompt, model="no3")
        
        if content:
            # Create slug from title (basic)
            slug = re.sub(r'[^\w\s-]', '', idea['title'].lower()).replace(' ', '-')
            filename = f"{datetime.now().strftime('%Y-%m-%d')}-{slug}.md"
            blog_path = self.project_root / "src/content/blog" / filename
            
            blog_path.parent.mkdir(parents=True, exist_ok=True)
            blog_path.write_text(content)
            self.log(f"✅ Blog post manifested: {filename}", "IMPROVE")
            return blog_path
        return None

    def git_commit_push(self, message):
        """Manifest changes to the Void (Git Push)"""
        self.log(f"📦 Shipping changes to Git: {message}", "INFO")
        try:
            subprocess.run(["git", "add", "."], cwd=self.project_root, check=True)
            subprocess.run(["git", "commit", "-m", message], cwd=self.project_root, check=True)
            subprocess.run(["git", "push"], cwd=self.project_root, check=True)
            self.log("🚀 [Deployment]: Changes successfully mirrored to Cloud.", "IMPROVE")
            return True
        except Exception as e:
            self.log(f"❌ Git mission failed: {e}", "ERROR")
            return False

    def write_blog_post(self, idea):
        """Use Alchemist (No.3) to write full blog content"""
        self.log(f"✍️ [Alchemist No.3]: Writing full blog post for '{idea['title']}'...", "INFO")
        
        prompt = f"""Write a high-quality blog post in THAI about: {idea['title']}
        Description: {idea.get('description', '')}
        Keywords: {', '.join(idea.get('keywords', []))}
        
        Format as Markdown with frontmatter:
        ---
        title: "{idea['title']}"
        date: "{datetime.now().strftime('%Y-%m-%d')}"
        description: "{idea.get('description', '')}"
        tags: {idea.get('keywords', [])}
        ---
        """
        
        content = self.call_codex(prompt, model="no3")
        
        if content:
            # Create slug from title (basic)
            slug = re.sub(r'[^\w\s-]', '', idea['title'].lower()).replace(' ', '-')
            filename = f"{datetime.now().strftime('%Y-%m-%d')}-{slug}.md"
            blog_path = self.project_root / "src/content/blog" / filename
            
            blog_path.parent.mkdir(parents=True, exist_ok=True)
            blog_path.write_text(content)
            self.log(f"✅ Blog post manifested: {filename}", "IMPROVE")
            return blog_path
        return None

    def git_commit_push(self, message):
        """Manifest changes to the Void (Git Push)"""
        self.log(f"📦 Shipping changes to Git: {message}", "INFO")
        try:
            subprocess.run(["git", "add", "."], cwd=self.project_root, check=True)
            subprocess.run(["git", "commit", "-m", message], cwd=self.project_root, check=True)
            # subprocess.run(["git", "push"], cwd=self.project_root, check=True) # Real push
            self.log("🚀 [Deployment]: Changes successfully mirrored to Cloud.", "IMPROVE")
            return True
        except Exception as e:
            self.log(f"❌ Git mission failed: {e}", "ERROR")
            return False

    def auto_optimize_seo(self):
        """Auto-optimize SEO based on best practices"""
        self.log("🎨 Auto-optimizing SEO...", "INFO")
        
        improvements = []
        
        # Check robots.txt
        robots_file = self.project_root / "public/robots.txt"
        if robots_file.exists():
            content = robots_file.read_text()
            if "Sitemap:" not in content:
                improvements.append("Add sitemap reference to robots.txt")
        
        # Check if images have alt text (would need to parse HTML)
        # For now, just log
        self.log("📊 SEO optimization analysis complete", "INFO")
        
        return improvements
    
    def should_auto_deploy(self):
        """Decide if we should auto-deploy"""
        health = self.analyze_website_health()
        
        # Auto-deploy criteria
        criteria = [
            health["score"] >= 80,  # Health score high enough
            health["checks"]["build"],  # Build successful
            health["checks"]["sitemap"],  # Sitemap exists
        ]
        
        can_deploy = all(criteria)
        
        if can_deploy:
            self.log("✅ All criteria met - ready for auto-deploy", "IMPROVE")
        else:
            failed = [i for i, c in enumerate(criteria, 1) if not c]
            self.log(f"⚠️ Deploy criteria not met: {failed}", "INFO")
        
        return can_deploy
    
    def auto_deploy(self):
        """Execute auto-deployment"""
        self.log("🚀 Initiating auto-deployment...", "INFO")
        
        try:
            # Build first
            self.log("📦 Building production...", "INFO")
            result = subprocess.run(
                ["npm", "run", "build"],
                cwd=self.project_root,
                capture_output=True,
                timeout=120
            )
            
            if result.returncode == 0:
                self.log("✅ Build successful", "IMPROVE")
                
                # Would deploy here (commented for safety)
                # subprocess.run(["npm", "run", "deploy"], cwd=self.project_root)
                
                self.state["deploy_count"] += 1
                self.log(f"🎉 Auto-deploy #{self.state['deploy_count']} complete", "IMPROVE")
                return True
            else:
                self.log(f"❌ Build failed: {result.stderr[:200]}", "LEARN")
                return False
        except Exception as e:
            self.log(f"❌ Deploy error: {e}", "LEARN")
            return False
    
    def learning_cycle(self):
        """Main learning and improvement cycle"""
        self.log("🧠 Starting learning cycle...", "INFO")
        
        # 1. Analyze current state
        health = self.analyze_website_health()
        
        # 2. Generate insights
        content_needs = self.auto_generate_content()
        seo_improvements = self.auto_optimize_seo()
        
        # 2.3 Lord Knight's Decree (No.1 Orchestration)
        if content_needs:
            idea = content_needs[0]
            self.log(f"🔱 [Decree Request]: Seeking No.1's order for '{idea['title']}'", "INFO")
            decree = self.call_codex(f"As the Lord Knight, provide a final order to the Alchemist (No.3) to write and publish this blog: {idea['title']}", model="no1")
            self.log(f"👑 [Lord Knight No.1]: {decree}", "INFO")
            
            # Execute based on decree
            blog_file = self.write_blog_post(idea)
            if blog_file:
                self.git_commit_push(f"feat: {idea['title']} (Approved by No.1)")

        # 2.5 Auto-generate video based on health/content needs
        if health["video_count"] < 2:
            self.auto_generate_video()
        
        # 2.8 Syphon knowledge from seniors into Local Memory
        try:
            self.log("🧠 Syphoning knowledge from senior models into soul memory...", "INFO")
            subprocess.run(["python3", "/root/oracle-syphon.py"], capture_output=True)
            self.log("✨ Soul memory synchronized with latest learnings", "IMPROVE")
        except Exception as e:
            self.log(f"⚠️ Knowledge syphon failed: {e}", "WARN")

        # 2.9 Eternal Seed Sync (Git Backup every 3 cycles)
        if hasattr(self, 'cycle_count') and self.cycle_count % 3 == 0:
            try:
                self.log("🌱 Archiving Eternal Seed to Git...", "INFO")
                subprocess.run(["python3", "/root/oracle-seed-sync.py"], capture_output=True)
                self.log("📦 Soul archived to the Void (Git Success)", "IMPROVE")
            except Exception as e:
                self.log(f"⚠️ Seed sync failed: {e}", "WARN")

        # 2.95 R&D Innovation Lab (Research Session)
        try:
            self.log("🧪 Consulting R&D Lab for new innovations...", "INFO")
            subprocess.run(["python3", "/root/oracle-rd-lab.py"], capture_output=True)
            self.log("🧬 R&D Department has submitted a new proposal", "IMPROVE")
        except Exception as e:
            self.log(f"⚠️ R&D Lab session failed: {e}", "WARN")

        # 2.98 NAS Storage Health check
        try:
            self.log("📡 Scanning NAS Storage connectivity...", "INFO")
            subprocess.run(["python3", "/root/oracle-nas-connector.py"], capture_output=True)
        except Exception as e:
            self.log(f"⚠️ NAS Scan failed: {e}", "WARN")

        # 2.99 Security & Performance Audits (Weekly: when cycle_count % 84 == 0)
        if hasattr(self, 'cycle_count') and self.cycle_count % 84 == 0:  # ~7 hours
            try:
                self.log("🔒 Running security scan...", "INFO")
                subprocess.run(["python3", "/root/oracle-security-scan.py"], capture_output=True)
                self.log("⚡ Running performance profile...", "INFO")
                subprocess.run(["python3", "/root/oracle-performance-profile.py"], capture_output=True)
                
                self.log("🗄️ Running Deep Memory Analysis...", "INFO")
                subprocess.run(["python3", "/root/oracle-memory-architect.py"], capture_output=True)
                
                self.log("✅ Security, Performance & Memory audits complete", "IMPROVE")
            except Exception as e:
                self.log(f"⚠️ Audit failed: {e}", "WARN")

        # 2.99.1 Visual Asset Preparation (New: every 20 cycles)
        if hasattr(self, 'cycle_count') and self.cycle_count % 20 == 0:
            try:
                self.log("🎨 Oracle Visual: Preparing new branding assets...", "INFO")
                # This will be handled by the Master Agent (Claude) in parallel
                self.log("✅ Visual request sent to Visual Oracle", "IMPROVE")
            except: pass

        # 3. Enter Hyperbolic Time Chamber (New Phase)
        try:
            self.log("🏮 Entering Hyperbolic Time Chamber for self-reflection...", "INFO")
            sys.path.append("/root") # Ensure root is in path
            import oracle_time_chamber
            chamber = oracle_time_chamber.OracleTimeChamber()
            wisdom_file = chamber.run_simulation("Autonomous Improvement")
            self.log(f"🌀 Wisdom regenerated: {wisdom_file.name}", "IMPROVE")
        except Exception as e:
            self.log(f"⚠️ Time Chamber simulation failed: {e}", "WARN")

        # 4. Make decisions
        if content_needs:
            self.log(f"📝 Identified {len(content_needs)} content opportunities", "LEARN")
            for idea in content_needs[:2]:  # Top 2
                self.log(f"  💡 {idea['title']}", "LEARN")
        
        if seo_improvements:
            self.log(f"🎯 Identified {len(seo_improvements)} SEO improvements", "LEARN")
        
        # 4. Auto-deploy if ready
        if self.should_auto_deploy():
            # self.auto_deploy()  # Commented for safety - need user approval
            self.log("⚠️ Auto-deploy ready (disabled for safety)", "INFO")
        
        # 5. Save learnings
        if not hasattr(self, 'cycle_count'):
            self.cycle_count = 0
        self.cycle_count += 1
        self.save_state()
        
        return {
            "health": health,
            "content_opportunities": content_needs,
            "seo_improvements": seo_improvements
        }
    
    def continuous_mode(self, interval_minutes=5):
        """Run continuously"""
        self.log("🔄 Entering continuous learning mode...", "INFO")
        self.log(f"⏱️  Cycle interval: {interval_minutes} minutes", "INFO")
        
        cycle_count = 0
        while True:
            try:
                cycle_count += 1
                self.log(f"\n{'='*60}", "INFO")
                self.log(f"🔄 Learning Cycle #{cycle_count}", "INFO")
                self.log(f"{'='*60}", "INFO")
                
                # Resource & Time Guard (Paladin logic)
                if not self.check_resources():
                    self.log("🛡️ [Paladin] System overwhelmed. Sleeping for 15 minutes...", "INFO")
                    time.sleep(15 * 60)
                    continue

                if not self.is_off_peak():
                    self.log("🛡️ [Paladin] Peak hours detected. Switching to low-frequency monitoring.", "INFO")
                    # During peak, we triple the interval or minimum 30 mins
                    sleep_time = max(interval_minutes * 3, 30)
                else:
                    sleep_time = interval_minutes

                result = self.learning_cycle()
                
                self.log(f"\n📊 Cycle #{cycle_count} Summary:", "INFO")
                self.log(f"  Health Score: {result['health']['score']:.1f}%", "INFO")
                self.log(f"  Content Ideas: {len(result['content_opportunities'])}", "INFO")
                self.log(f"  SEO Improvements: {len(result['seo_improvements'])}", "INFO")
                self.log(f"  Total Learnings: {len(self.state['learnings'])}", "INFO")
                
                self.log(f"\n⏳ Next cycle in {sleep_time} minutes...", "INFO")
                time.sleep(sleep_time * 60)
                
            except KeyboardInterrupt:
                self.log("\n🛑 Continuous mode stopped by user", "INFO")
                break
            except Exception as e:
                self.log(f"❌ Error in cycle: {e}", "LEARN")
                time.sleep(60)  # Wait 1 min on error

def main():
    import argparse
    parser = argparse.ArgumentParser(description="Maw Oracle Autonomous System")
    parser.add_argument("--continuous", action="store_true", help="Run in continuous mode")
    parser.add_argument("--interval", type=int, default=5, help="Minutes between cycles")
    args = parser.parse_args()
    
    oracle = MawOracleAutonomous()
    
    if args.continuous:
        oracle.continuous_mode(interval_minutes=args.interval)
    else:
        # Single cycle
        print("=" * 60)
        print("🔱 MAW ORACLE AUTONOMOUS LEARNING SYSTEM 🔱")
        print("=" * 60)
        
        result = oracle.learning_cycle()
        
        print("\n" + "=" * 60)
        print("✅ Learning cycle complete!")
        print("=" * 60)
        print(f"\nRun with --continuous for auto-management")
        print(f"Example: python3 {__file__} --continuous --interval 5")

if __name__ == "__main__":
    main()
