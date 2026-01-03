#!/usr/bin/env python3
"""
🔱 T5gemma Web Analyzer - Satellite Node Edition
วิเคราะห์จุดเด่นของหน้าเว็บ soul-brews-web-core
"""

from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch
import os

# --- Web Content Data ---
web_pages = [
    {
        "name": "Index (Home)",
        "content": """
        Title: Soul-Brews Studio | Premium Portrait Photography
        Slogan: We don't shoot just photos. We shoot feelings.
        About: Meet Bo, a chill photographer serious about the vibe. He helps you see the version of you that you secretly admire.
        Services Summary: Portrait Premium (3,500 THB), Couple & Pre-wedding (5,500 THB), Event Coverage (8,000 THB).
        Philosophy: Every session is an experience—a moment where you discover something new about yourself.
        """
    },
    {
        "name": "Services & Pricing",
        "content": """
        Portrait Premium: 3,500 THB starting. 1-2 hours, 15-20 color grade photos, 5 full retouching, 1 location. Deliver in 7 days.
        Couple & Pre-wedding: 5,500 THB starting. 2-3 hours, 30-40 color grade photos, 10 full retouching, 2 locations. Deliver in 10 days.
        Event Coverage: 8,000 THB starting. 4-6 hours, 100+ color grade photos, highlight album, same-day preview. Deliver in 14 days.
        Add-ons: Extra Location (+500 THB), Extra Retouch (+300 THB/photo), Rush Delivery (+1,500 THB), Print Album (+2,000 THB).
        FAQ: 1-2 weeks booking in advance, outdoor/indoor in Bangkok, outfit changes allowed.
        """
    }
]

def analyze_web():
    model_id = "google/t5gemma-2-270m-270m"
    print(f"🔱 Initializing T5gemma-2-270M for Web Analysis...")
    
    try:
        tokenizer = AutoTokenizer.from_pretrained(model_id)
        model = AutoModelForSeq2SeqLM.from_pretrained(
            model_id, 
            torch_dtype=torch.float16,
            low_cpu_mem_usage=True
        )
        print("✅ Model Awakened in Satellite Node memory.\n")
        
        for page in web_pages:
            print(f"🔍 Analyzing: {page['name']}")
            print("-" * 30)
            
            # Task: Summarize highlights
            prompt = f"summarize the key highlights of this web page: {page['content']}"
            inputs = tokenizer(prompt, return_tensors="pt")
            
            # Generate
            with torch.no_grad():
                outputs = model.generate(
                    **inputs.to(model.device), 
                    max_new_tokens=150,
                    num_beams=2,
                    early_stopping=True
                )
            
            result = tokenizer.decode(outputs[0], skip_special_tokens=True)
            print(f"🎯 Highlights Summary:\n{result}\n")
            
    except Exception as e:
        print(f"❌ Error during analysis: {e}")

if __name__ == "__main__":
    analyze_web()
