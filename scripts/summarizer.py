#!/usr/bin/env python3
import sys
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM
import torch

def summarize(text_path):
    with open(text_path, 'r') as f:
        text = f.read()
    
    model_id = 'google/t5gemma-2-270m-270m'
    tokenizer = AutoTokenizer.from_pretrained(model_id)
    model = AutoModelForSeq2SeqLM.from_pretrained(model_id, torch_dtype=torch.float32, low_cpu_mem_usage=True)
    
    prompt = f"summarize detailed highlights: {text}"
    inputs = tokenizer(prompt, return_tensors='pt')
    
    with torch.no_grad():
        outputs = model.generate(**inputs, max_new_tokens=150, do_sample=False)
    
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 summarizer.py <text_file>")
        sys.exit(1)
    print(summarize(sys.argv[1]))
