#!/bin/bash
# LXC Container Manager for Proxmox
# Auto-manage all containers (start, stop, monitor, auto-heal)

set -e

CONTAINERS="100 110 200 220 230 240"  # NAS, AI, VPN, Hub, Monitoring, AdGuard
LOG_DIR="/root/maw-workspace/ψ/memory/logs"
mkdir -p "$LOG_DIR"

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

log() {
    echo -e "${GREEN}[$(date +%H:%M:%S)]${NC} $1"
}

warn() {
    echo -e "${YELLOW}⚠️  [$(date +%H:%M:%S)]${NC} $1"
}

error() {
    echo -e "${RED}❌ [$(date +%H:%M:%S)]${NC} $1"
}

case "$1" in
    status)
        log "Container Status Check:"
        for ct in $CONTAINERS; do
            if pct status $ct &>/dev/null; then
                STATUS=$(pct status $ct)
                echo "  LXC $ct: $STATUS"
            else
                warn "LXC $ct: Not found"
            fi
        done
        ;;
    
    start)
        CT="$2"
        if [ -z "$CT" ]; then
            log "Starting all containers..."
            for ct in $CONTAINERS; do
                pct start $ct 2>/dev/null && log "Started LXC $ct" || warn "LXC $ct already running or error"
            done
        else
            log "Starting LXC $CT..."
            pct start $CT && log "Started LXC $CT" || error "Failed to start LXC $CT"
        fi
        ;;
    
    stop)
        CT="$2"
        if [ -z "$CT" ]; then
            log "Stopping all containers..."
            for ct in $CONTAINERS; do
                pct stop $ct && log "Stopped LXC $ct" || warn "LXC $ct already stopped or error"
            done
        else
            log "Stopping LXC $CT..."
            pct stop $CT && log "Stopped LXC $CT" || error "Failed to stop LXC $CT"
        fi
        ;;
    
    restart)
        CT="$2"
        if [ -z "$CT" ]; then
            log "Restarting all containers..."
            for ct in $CONTAINERS; do
                pct restart $ct && log "Restarted LXC $ct" || warn "Error restarting LXC $ct"
            done
        else
            log "Restarting LXC $CT..."
            pct restart $CT && log "Restarted LXC $CT" || error "Failed to restart LXC $CT"
        fi
        ;;
    
    health)
        log "Health Check All Containers:"
        for ct in $CONTAINERS; do
            if pct status $ct 2>/dev/null | grep -q "running"; then
                echo -e "  ${GREEN}✅${NC} LXC $ct: Running"
                
                # Check specific services
                case $ct in
                    110)
                        # Check Ollama
                        if pct exec $ct -- curl -s http://localhost:11434/api/version &>/dev/null; then
                            echo -e "    ${GREEN}✅${NC} Ollama: Up"
                        else
                            echo -e "    ${RED}❌${NC} Ollama: Down"
                        fi
                        ;;
                    220)
                        # Check Homepage
                        if pct exec $ct -- curl -s http://localhost:3000 &>/dev/null; then
                            echo -e "    ${GREEN}✅${NC} Homepage: Up"
                        else
                            echo -e "    ${RED}❌${NC} Homepage: Down"
                        fi
                        ;;
                esac
            else
                echo -e "  ${RED}❌${NC} LXC $ct: Not running"
            fi
        done
        ;;
    
    auto-heal)
        log "Auto-Heal Mode: Checking and restarting failed containers..."
        for ct in $CONTAINERS; do
            if ! pct status $ct 2>/dev/null | grep -q "running"; then
                warn "LXC $ct is down! Attempting restart..."
                pct start $ct && log "Auto-healed LXC $ct" || error "Auto-heal failed for LXC $ct"
                echo "$(date -Iseconds): Auto-healed LXC $ct" >> "$LOG_DIR/auto-heal.log"
            fi
        done
        ;;
    
    monitor)
        log "Starting continuous monitoring (Ctrl+C to stop)..."
        while true; do
            clear
            echo "═══════════════════════════════════════"
            echo "  LXC Container Monitor"
            echo "  $(date)"
            echo "═══════════════════════════════════════"
            bash "$0" health
            echo ""
            echo "Press Ctrl+C to stop monitoring"
            sleep 5
        done
        ;;
    
    *)
        echo "LXC Container Manager"
        echo ""
        echo "Usage: $0 <command> [container_id]"
        echo ""
        echo "Commands:"
        echo "  status              - Show status of all containers"
        echo "  start [id]          - Start container(s)"
        echo "  stop [id]           - Stop container(s)"
        echo "  restart [id]        - Restart container(s)"
        echo "  health              - Detailed health check"
        echo "  auto-heal           - Auto-restart failed containers"
        echo "  monitor             - Continuous monitoring"
        echo ""
        echo "Examples:"
        echo "  $0 status"
        echo "  $0 start 110"
        echo "  $0 health"
        ;;
esac
