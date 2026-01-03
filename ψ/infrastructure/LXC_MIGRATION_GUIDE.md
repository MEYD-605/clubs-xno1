# 🚚 LXC Migration Guide: Move 220/230/240 to NB

**Date:** 2026-01-03
**Target:** ย้าย LXC 220 (Hub), 230 (Kuma), 240 (AdGuard) -> Notebook

## ⚠️ ข้อจำกัดของ IDE Agent
> ข้าพเจ้าอยู่ใน LXC 110 ไม่มี Root Access ไปยัง Proxmox Host 
> ต้องให้บอสรันคำสั่งเหล่านี้ **บน Proxmox Host โดยตรง** หรือใช้ **Proxmox UI**

---

## 🛠️ Option 1: ผ่าน Proxmox Web UI (ง่ายที่สุด)

### Step 1: Backup LXC
1. เข้า https://192.168.1.200:8006 (Proxmox UI)
2. คลิกที่ `LXC 220` (clubslab-hub)
3. ไปที่ **Backup** -> **Backup now**
4. เลือก Storage: `local` หรือ NAS
5. ทำซ้ำกับ LXC 230, 240

### Step 2: Download Backup File
- ไฟล์อยู่ที่ `/var/lib/vz/dump/` บน Proxmox Host
- Copy ไปใส่ NB ผ่าน SCP หรือ Samba

### Step 3: Restore on NB
```bash
# บน NB (ถ้ารัน Proxmox/Docker)
pct restore 220 /path/to/vzdump-lxc-220-*.tar.zst --storage local
```

---

## 🛠️ Option 2: ผ่าน Command Line (SSH to Host)

```bash
# SSH ไป Proxmox Host
ssh root@192.168.1.200

# Stop และ Backup LXC 220
pct stop 220
vzdump 220 --storage local --compress zstd

# ทำซ้ำกับ 230, 240
vzdump 230 --storage local --compress zstd
vzdump 240 --storage local --compress zstd
```

---

## 🎯 หลังย้ายเสร็จ: Shutdown บน Proxmox
```bash
# Optional: ลบ LXC ตัวเก่าเพื่อคืน RAM
pct destroy 220
pct destroy 230
pct destroy 240
```

---

## 🔄 Alternative: Docker Compose on NB
ถ้าไม่อยาก Migrate LXC ทั้งก้อน สามารถรัน Service เหล่านี้บน Docker ที่ NB:

```yaml
# docker-compose.yml for NB
services:
  portainer:
    image: portainer/portainer-ce
    ports: ["9000:9000"]
    volumes: ["/var/run/docker.sock:/var/run/docker.sock"]

  uptime-kuma:
    image: louislam/uptime-kuma
    ports: ["3001:3001"]
    volumes: ["./uptime-data:/app/data"]

  adguard:
    image: adguard/adguardhome
    ports: ["53:53/udp", "3000:3000"]
    volumes: ["./adguard:/opt/adguardhome"]
```

---
*Created by Oracle Migration Planner*
