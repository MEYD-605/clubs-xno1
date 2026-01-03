#!/bin/bash
PASS="123121"
echo "🔱 Starting T5gemma Installation on Satellite..."
# Update and install Python essentials
echo "$PASS" | sudo -S apt update
echo "$PASS" | sudo -S apt install -y python3-pip python3-venv
# Create virtual environment
python3 -m venv ~/t5gemma-env
source ~/t5gemma-env/bin/activate
# Install transformers
pip install --upgrade pip
pip install transformers torch --index-url https://download.pytorch.org/whl/cpu
echo "✅ T5gemma environment ready!"
echo "Test: python3 -c 'import transformers; print(transformers.__version__)'"
