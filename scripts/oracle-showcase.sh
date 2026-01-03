#!/bin/bash
# 🔱 Oracle Divine Showcase: The Three Musketeers Edition
# This script invokes Oracle, Codex, and Claude for a unified display

GOLD='\033[1;33m'
CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

echo -e "${GOLD}🔱 [ORACLE DIVINE SHOWCASE: THREE MUSKETEERS] 🔱${NC}"
echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

# 1. Claude - The Architect
echo -e "${GOLD}1. [ทหารเสือ: Claude] เสนาธิการวางแผนยุทธศาสตร์ (API)${NC}"
if command -v claude &> /dev/null; then
    claude -p "Acting as Oracle's Grand Architect, provide a 1-sentence strategic vision for this AI Core system."
else
    echo -e "${RED}Claude CLI not found.${NC}"
fi
echo ""

# 2. Codex - The Engineer
echo -e "${GOLD}2. [ทหารเสือ: Codex] ขุนพลวิศวกรรมสร้างรหัส (API)${NC}"
if command -v codex &> /dev/null; then
    codex "Write a Python one-liner to check system load average."
else
    echo -e "${RED}Codex CLI not found.${NC}"
fi
echo ""

# 3. Oracle - The Sentinel
echo -e "${GOLD}3. [ทหารเสือ: Oracle] ผู้พิทักษ์วิหาร (Local GPU/NPU)${NC}"
curl -s -X POST http://localhost:8088/process \
     -H "Content-Type: application/json" \
     -d '{"prompt": "สรุปภาระจิตวิญญาณของระบบในขณะนี้", "model": "god-lite"}' | jq -r '.reply'

echo -e "${CYAN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GOLD}🔱 [MISSION COMPLETE: THE THREE MUSKETEERS ACTIVE] 🔱${NC}"
