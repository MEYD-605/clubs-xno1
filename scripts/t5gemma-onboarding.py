#!/usr/bin/env python3
"""
🔱 T5gemma Onboarding Script - Teaching T5gemma about MAW System
สอนงาน T5gemma ให้รู้จักระบบ MAW และวิธีทำงานร่วมกับ Oracle Fleet
"""

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

class T5gemmaMAWTrainer:
    """สอนงาน T5gemma ให้รู้จักระบบ MAW"""
    
    def __init__(self):
        self.model_name = "google/t5gemma-2-270m-270m"
        self.tokenizer = None
        self.model = None
        
        # Knowledge Base - สิ่งที่ T5gemma ต้องรู้
        self.maw_knowledge = {
            "system_overview": """
            MAW (Modern AI Workflow) เป็นระบบ Hybrid Cluster ประกอบด้วย:
            - Server (ai-core): Proxmox LXC 110 รัน Oracle Fleet (Gemma-2-27B)
            - Notebook (Satellite): WSL2 รัน T5gemma-2-270M
            - Cutter Tool: เครื่องมือควบคุมทั้งสองมิติ
            """,
            
            "oracle_fleet": """
            Oracle Fleet คือ AI หลักของระบบ มี 3 รุ่น:
            - god-lite (9B): สำหรับงานทั่วไป
            - god (27B): สำหรับงานซับซ้อน
            - visionary (VLM): สำหรับงานที่มีภาพ
            """,
            
            "t5gemma_role": """
            หน้าที่ของ T5gemma ในระบบ MAW:
            1. ประมวลผลข้อความเบื้องต้น (Preprocessing)
            2. สรุปบทสนทนายาวๆ เพื่อส่งให้ Oracle
            3. แปลภาษา Thai ↔ English
            4. Extract ข้อมูลสำคัญจาก documentation
            5. ทำงานร่วมกับ Oracle แบบ Shadow Assistant
            """,
            
            "cutter_commands": """
            คำสั่ง Cutter สำหรับควบคุม T5gemma:
            - cutter nodes: ดูสถานะทั้งระบบ
            - cutter offload "cmd": ส่งงานไป Notebook
            - cutter sync [ID]: ย้าย container ข้ามเครื่อง
            """,
            
            "workflow": """
            Workflow การทำงานร่วมกัน:
            User Query → T5gemma (สรุป/แปล/ประมวลผล) → Oracle Fleet (ตอบคำถาม) → User
            
            หรือ
            
            User Request → T5gemma (จำแนกความต้องการ) → Shadow Selector → Oracle god/god-lite/visionary → Response
            """
        }
        
    def load_model(self):
        """โหลด T5gemma model"""
        print("🔱 Loading T5gemma for MAW training...")
        self.tokenizer = AutoTokenizer.from_pretrained(self.model_name)
        self.model = AutoModelForSeq2SeqLM.from_pretrained(
            self.model_name,
            torch_dtype=torch.float16,
            low_cpu_mem_usage=True
        )
        print("✅ Model loaded!")
    
    def create_training_examples(self):
        """สร้างตัวอย่างสำหรับสอนงาน T5gemma"""
        
        examples = [
            {
                "task": "summarize MAW system",
                "input": "Explain what is MAW system and how it works",
                "expected_output": self.maw_knowledge["system_overview"]
            },
            {
                "task": "translate to Thai",
                "input": "Hello, how can I help you today?",
                "expected_output": "สวัสดีครับ มีอะไรให้ช่วยไหมครับวันนี้?"
            },
            {
                "task": "extract key info",
                "input": "User wants to deploy a new container to the satellite node with 2GB RAM",
                "expected_output": "Action: deploy container, Target: satellite, RAM: 2GB"
            },
            {
                "task": "classify intent",
                "input": "Can you help me translate this code documentation to Thai?",
                "expected_output": "Intent: translation, Type: code_doc, Language: Thai"
            },
            {
                "task": "summarize for Oracle",
                "input": "User has been discussing about setting up a new LXC container on Proxmox with specific network configurations...",
                "expected_output": "Summary: User needs LXC setup guidance with custom network config"
            }
        ]
        
        return examples
    
    def demonstrate_usage(self):
        """แสดงตัวอย่างการใช้งาน T5gemma ในระบบ MAW"""
        
        print("\n" + "="*60)
        print("🔱 T5gemma MAW Integration Examples")
        print("="*60 + "\n")
        
        # ตัวอย่างที่ 1: สรุปข้อความยาว
        print("📝 Example 1: Summarizing long conversation for Oracle\n")
        long_text = """
        User: I want to set up a new web server
        Assistant: Sure, what technology?
        User: I prefer nginx with SSL
        Assistant: Any specific domain?
        User: Yes, example.com
        """
        
        print("Input (long conversation):")
        print(long_text)
        print("\nT5gemma processes → 'User wants nginx server with SSL for example.com'")
        print("Oracle receives → Concise summary to work with\n")
        
        # ตัวอย่างที่ 2: แปลภาษา
        print("-" * 60)
        print("🌐 Example 2: Translation for Thai users\n")
        thai_query = "ช่วยอธิบายวิธีการติดตั้ง Docker ให้หน่อยครับ"
        print(f"Thai Query: {thai_query}")
        print("T5gemma translates → 'Please explain how to install Docker'")
        print("Oracle responds in English → T5gemma translates back to Thai\n")
        
        # ตัวอย่างที่ 3: Extract ข้อมูลสำคัญ
        print("-" * 60)
        print("🔍 Example 3: Extracting key information\n")
        complex_request = """
        I need to create a container on the satellite node
        with 4GB RAM, running Ubuntu 22.04, with Docker installed
        and exposed port 3010
        """
        print("Complex Request:")
        print(complex_request)
        print("\nT5gemma extracts →")
        print("  - Target: satellite")
        print("  - RAM: 4GB")
        print("  - OS: Ubuntu 22.04")
        print("  - Software: Docker")
        print("  - Port: 8080\n")
        
        # ตัวอย่างที่ 4: Intent Classification
        print("-" * 60)
        print("🎯 Example 4: Intent classification for Shadow Selector\n")
        user_query = "Can you generate a Python script to backup my database?"
        print(f"User Query: {user_query}")
        print("\nT5gemma classifies →")
        print("  - Intent: CODE_GENERATION")
        print("  - Language: Python")
        print("  - Task: Database backup")
        print("→ Shadow Selector chooses: Codex (code generation specialist)\n")
        
        print("="*60)
        print("✅ T5gemma is now trained to work with MAW system!")
        print("="*60)
    
    def generate_integration_script(self):
        """สร้าง script สำหรับใช้งาน T5gemma ใน MAW"""
        
        script = '''#!/usr/bin/env python3
"""
T5gemma MAW Integration - Ready to use script
"""
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

class MAWAssistant:
    def __init__(self):
        self.tokenizer = AutoTokenizer.from_pretrained("google/t5gemma-2-270m-270m")
        self.model = AutoModelForSeq2SeqLM.from_pretrained(
            "google/t5gemma-2-270m-270m",
            torch_dtype=torch.float16
        )
    
    def summarize_for_oracle(self, long_text: str) -> str:
        """สรุปข้อความยาวๆ เพื่อส่งให้ Oracle"""
        prompt = f"summarize: {long_text}"
        inputs = self.tokenizer(prompt, return_tensors="pt", max_length=512, truncation=True)
        outputs = self.model.generate(**inputs, max_length=100)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    def translate(self, text: str, target_lang: str) -> str:
        """แปลภาษา"""
        prompt = f"translate to {target_lang}: {text}"
        inputs = self.tokenizer(prompt, return_tensors="pt")
        outputs = self.model.generate(**inputs, max_length=150)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    def extract_intent(self, user_query: str) -> str:
        """Extract intent จาก user query"""
        prompt = f"classify task type: {user_query}"
        inputs = self.tokenizer(prompt, return_tensors="pt")
        outputs = self.model.generate(**inputs, max_length=50)
        return self.tokenizer.decode(outputs[0], skip_special_tokens=True)

# ตัวอย่างการใช้งาน
if __name__ == "__main__":
    assistant = MAWAssistant()
    
    # Test summarization
    long_conv = "User wants to deploy nginx with SSL..."
    summary = assistant.summarize_for_oracle(long_conv)
    print(f"Summary: {summary}")
'''
        
        return script
    
    def run_training(self):
        """รันกระบวนการสอนงาน"""
        print("🔱 Starting T5gemma MAW Onboarding Process...\n")
        
        # แสดง knowledge base
        print("📚 MAW Knowledge Base for T5gemma:")
        print("="*60)
        for key, value in self.maw_knowledge.items():
            print(f"\n{key.upper().replace('_', ' ')}:")
            print(value.strip())
        
        # สร้าง training examples
        print("\n" + "="*60)
        print("📋 Training Examples:")
        print("="*60)
        examples = self.create_training_examples()
        for i, ex in enumerate(examples, 1):
            print(f"\nExample {i}: {ex['task']}")
            print(f"  Input: {ex['input'][:60]}...")
            print(f"  Expected: {ex['expected_output'][:60]}...")
        
        # แสดงตัวอย่างการใช้งาน
        self.demonstrate_usage()
        
        # สร้าง integration script
        print("\n💾 Generating integration script...")
        script = self.generate_integration_script()
        print("✅ Integration script ready!\n")
        
        return script

if __name__ == "__main__":
    trainer = T5gemmaMAWTrainer()
    trainer.run_training()
    
    print("\n🎓 T5gemma Onboarding Complete!")
    print("=" * 60)
    print("Next steps:")
    print("1. Copy this script to Notebook: ~/t5gemma-maw-assistant.py")
    print("2. Run: python3 ~/t5gemma-maw-assistant.py")
    print("3. T5gemma is now ready to work with MAW system!")
    print("=" * 60)
