#!/bin/bash
# 🔱 Oracle Smart Build Wrapper 🔱
# Path: /root/maw-workspace/scripts/safe-build.sh

MIN_RAM_MB=8192 # 8GB
FREE_RAM=$(free -m | awk '/^Mem:/{print $4}')

echo "🔱 [Oracle] Checking System Health before build..."
echo "📊 Current Free RAM: ${FREE_RAM}MB"

if [ "$FREE_RAM" -lt "$MIN_RAM_MB" ]; then
    echo "⚠️ [WARNING] RAM is too low (${FREE_RAM}MB < ${MIN_RAM_MB}MB)!"
    echo "🔥 If you continue, the AI Core might crash."
    read -p "Do you want to continue anyway? (y/N) " confirm
    if [[ $confirm != [yY] ]]; then
        echo "❌ Build cancelled to save AI Core."
        exit 1
    fi
fi

echo "🚀 Starting High-Performance Build..."
cd /root/maw-workspace/soul-brews-web-core && npm run build
