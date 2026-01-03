#!/bin/bash
cd ~
source ~/t5gemma-env/bin/activate
echo "🔱 Installing Transformers and PyTorch..."
python3 -m pip install --upgrade pip
python3 -m pip install transformers
python3 -m pip install torch torchvision torchaudio
echo "✅ Installation complete!"
python3 -m pip list | grep -E "transformers|torch"
