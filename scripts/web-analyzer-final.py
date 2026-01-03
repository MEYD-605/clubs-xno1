#!/usr/bin/env python3
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

web_pages = [
    {
        'name': 'Index (Home)',
        'content': 'Title: Soul-Brews Studio | Premium Portrait Photography. Slogan: We dont shoot just photos. We shoot feelings. Meet Bo, a chill photographer serious about the vibe. Services: Portrait (3,500), Couple (5,500), Event (8,000).'
    },
    {
        'name': 'Services & Pricing',
        'content': 'Portrait: 3,500 starting. 1-2h, 15-20 color photos. Couple: 5,500 starting. 2-3h, 30-40 color photos. Event: 8,000 starting. 4-6h, 100+ photos. Delivery 7-14 days.'
    }
]

def analyze_web():
    model_id = 'google/t5gemma-2-270m-270m'
    print(f'🔱 Analyzing Web on Satellite Node (Stability Mode)...')
    
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    # Using float32 for CPU stability
    model = AutoModelForSeq2SeqLM.from_pretrained(model_id, torch_dtype=torch.float32, low_cpu_mem_usage=True)
    
    for page in web_pages:
        print(f'\n🔍 Target: {page["name"]}')
        prompt = f'summarize highlights: {page["content"]}'
        inputs = tokenizer(prompt, return_tensors='pt')
        with torch.no_grad():
            outputs = model.generate(
                **inputs, 
                max_new_tokens=100,
                do_sample=False # Greedy search for stability
            )
        print(f'🎯 Result: {tokenizer.decode(outputs[0], skip_special_tokens=True)}')

if __name__ == "__main__":
    analyze_web()
