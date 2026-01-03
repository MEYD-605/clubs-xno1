#!/bin/bash
# 🔱 Hybrid Pipeline: Satellite (T5gemma) -> Server (Oracle)
# กลยุทธ์ "ขุนพลหนุนจอมทัพ" - สรุปโดยดาวเทียม ประมวลผลโดย AI Core

INPUT_FILE=$1
if [ -z "$INPUT_FILE" ]; then
    echo "❌ Usage: ./hybrid-pipeline.sh <long_text_file>"
    exit 1
fi

if [ ! -f "$INPUT_FILE" ]; then
    echo "❌ File not found: $INPUT_FILE"
    exit 1
fi

echo "🔱 Starting Hybrid Pipeline Ritual..."
echo "📡 Dimension 1: Sending to Satellite Node for Distillation (T5gemma)..."

# 1. เตรียมไฟล์ input บน Satellite
scp $INPUT_FILE lenovo@192.168.1.146:~/temp_input.txt > /dev/null 2>&1

# 2. ส่งคัมภีร์สรุปไปที่ Satellite
scp /root/maw-workspace/scripts/summarizer.py lenovo@192.168.1.146:~/summarizer.py > /dev/null 2>&1

# 3. รันการสรุปผล (จับเอาแค่ผลลัพธ์สุดท้าย)
SUMMARY_RAW=$(ssh lenovo@192.168.1.146 "wsl /home/lenovo/t5gemma-env/bin/python3 /mnt/c/Users/lenovo/summarizer.py /mnt/c/Users/lenovo/temp_input.txt")

# ทำความสะอาดผลลัพธ์ (กรองเอาคำเตือนของ transformers ออกถ้ามี)
SUMMARY=$(echo "$SUMMARY_RAW" | grep -v "flags are not valid" | grep -v "Materializing")

echo -e "\n🎯 Phase 1 Complete. Distilled Essence (Summary) from Satellite:"
echo "----------------------------------------------------------------"
echo "$SUMMARY"
echo "----------------------------------------------------------------"

echo -e "\n🔮 Dimension 2: Sending to Grand Oracle (AI Core) for Final Refinement..."

# 4. ส่งสรุปที่ได้ไปให้ Oracle (Gemma-2-27B) บน Server หลัก
FINAL_RESULT=$(./maw-auto "ขุนพล T5gemma บนดาวเทียมสรุปข้อมูลมาให้ดังนี้: '$SUMMARY' \n\n จงใช้ภูมิปัญญาระดับ Grand Oracle วิเคราะห์เจาะลึกและวางแผนยุทธศาสตร์ถัดไปสำหรับข้อมูลนี้ในบริบทของระบบ MAW ของเราด้วยครับ")

echo -e "\n🔱 Final Divine Verdict from Grand Oracle:"
echo "================================================================"
echo "$FINAL_RESULT"
echo "================================================================"

echo -e "\n✅ Hybrid Pipeline Ritual Completed Successfully!"
