#!/usr/bin/env python3
"""
🔱 T5gemma Simple Test - Satellite Node Edition
"""
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

print("🔱 Loading T5gemma-2-270M...")
model_id = "google/t5gemma-2-270m-270m"

try:
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_id)
    print("✅ Model loaded successfully!")
    
    # Simple test
    prompt = "Translate to Thai: Hello, how are you?"
    inputs = tokenizer(prompt, return_tensors="pt")
    outputs = model.generate(**inputs, max_new_tokens=50)
    result = tokenizer.decode(outputs[0], skip_special_tokens=True)
    
    print(f"\n📝 Test Prompt: {prompt}")
    print(f"🎯 Result: {result}")
    print("\n🔱 T5gemma is working on Satellite Node!")
    
except Exception as e:
    print(f"❌ Error: {e}")
    print("Note: This model may require HuggingFace authentication.")
    print("Run: huggingface-cli login")
