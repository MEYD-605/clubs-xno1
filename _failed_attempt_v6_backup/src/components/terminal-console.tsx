"use client"

import { useState, useEffect, useRef } from "react"
import { Terminal } from "lucide-react"

interface HistoryItem {
    type: "input" | "output" | "error" | "system"
    content: string
}

const GATEWAY_URL = import.meta.env.PUBLIC_GATEWAY_URL || ""
const GATEWAY_KEY = import.meta.env.PUBLIC_GATEWAY_KEY || ""
const DEFAULT_MODEL = import.meta.env.PUBLIC_ORACLE_MODEL || "god-lite"

export default function TerminalConsole() {
    const [history, setHistory] = useState<HistoryItem[]>([
        { type: "system", content: "Maha Hybrid Cluster [Version 2.2.0]" },
        { type: "system", content: "Sentinel Oracle V18 initialized. Connection: SECURE." },
        { type: "system", content: "Type '@help' to see available commands." },
    ])
    const [input, setInput] = useState("")
    const scrollRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight
        }
    }, [history])

    const processCommand = async (cmd: string) => {
        const command = cmd.trim().toLowerCase()
        let response: HistoryItem[] = []

        if (command === "@help") {
            response = [
                { type: "output", content: "Available Commands:" },
                { type: "output", content: "  @status    - Check Hybrid Cluster & Satellite Node status" },
                { type: "output", content: "  @bookings  - List upcoming photography sessions" },
                { type: "output", content: "  @stats     - View monthly revenue and performance" },
                { type: "output", content: "  @oracle <prompt> - Ask Oracle (requires gateway config)" },
                { type: "output", content: "  @clear     - Clear terminal history" },
                { type: "output", content: "  @whoami    - System identification" },
            ]
        } else if (command === "@status") {
            response = [
                { type: "output", content: "Cluster Status: 🟢 ACTIVE" },
                { type: "output", content: "AI Core (192.168.1.129): Gemma-2-27B - LOAD 12%" },
                { type: "output", content: "Satellite (192.168.1.146): T5gemma - LOAD 2%" },
                { type: "output", content: "SSH Bridge: STABLE" },
            ]
        } else if (command === "@bookings") {
            response = [
                { type: "output", content: "Upcoming Sessions (Jan 2026):" },
                { type: "output", content: "• Jan 05: Portrait Session (Sarah) - CONFIRMED" },
                { type: "output", content: "• Jan 07: Editorial Shoot (Mark) - PENDING" },
                { type: "output", content: "• Jan 12: Private Workshop (Bo's Lab) - CONFIRMED" },
            ]
        } else if (command === "@stats") {
            response = [
                { type: "output", content: "Monthly Revenue (Jan): ฿52,300" },
                { type: "output", content: "Photography: ฿32,000" },
                { type: "output", content: "Workshops: ฿15,500" },
                { type: "output", content: "Other: ฿4,800" },
            ]
        } else if (command === "@matrix") {
            response = [
                { type: "output", content: "Deploying Oracle Wisdom Stream..." },
                { type: "system", content: "1010101100101010101010101" },
                { type: "system", content: "WISDOM: 'Automation is not about replacing humans, but amplifying Sovereignty.'" },
                { type: "system", content: "0101010101010101010101010" },
            ]
        } else if (command === "@whoami") {
            response = [
                { type: "output", content: "User: No.1 (Administrator)" },
                { type: "output", content: "Role: Master Architect of the Maha Cluster" },
            ]
        } else if (command.startsWith("@oracle")) {
            const prompt = cmd.slice("@oracle".length).trim()
            if (!prompt) {
                response = [{ type: "error", content: "Usage: @oracle <prompt>" }]
                setHistory((prev) => [...prev, { type: "input", content: cmd }, ...response])
                return
            }
            if (!GATEWAY_URL) {
                response = [{ type: "error", content: "Oracle gateway not configured. Set PUBLIC_GATEWAY_URL (and optionally PUBLIC_GATEWAY_KEY)." }]
                setHistory((prev) => [...prev, { type: "input", content: cmd }, ...response])
                return
            }

            setHistory((prev) => [
                ...prev,
                { type: "input", content: cmd },
                { type: "system", content: "Oracle is thinking..." },
            ])

            try {
                const res = await fetch(`${GATEWAY_URL.replace(/\/$/, "")}/api/brain`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        ...(GATEWAY_KEY ? { "Authorization": `Bearer ${GATEWAY_KEY}` } : {}),
                    },
                    body: JSON.stringify({ prompt, model: DEFAULT_MODEL }),
                })
                const data = await res.json().catch(() => ({}))
                const text = data?.response || data?.reply || data?.error || `HTTP ${res.status}`
                setHistory((prev) => [...prev, { type: "output", content: String(text).trim() }])
            } catch (e) {
                setHistory((prev) => [...prev, { type: "error", content: `Oracle request failed: ${String(e)}` }])
            }
            return
        } else if (command === "@clear") {
            setHistory([])
            return
        } else {
            response = [{ type: "error", content: `Command not found: ${cmd}. Type '@help' for assistance.` }]
        }

        setHistory((prev) => [...prev, { type: "input", content: cmd }, ...response])
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim()) return
        await processCommand(input)
        setInput("")
    }

    return (
        <div className="max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-2xl" style={{ background: "#1a1a1a", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div className="p-4 flex items-center justify-between" style={{ background: "#2a2a2a" }}>
                <div className="flex items-center">
                    <div className="flex space-x-2 mr-4">
                        <div className="w-3 h-3 rounded-full" style={{ background: "#ff5f56" }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: "#ffbd2e" }}></div>
                        <div className="w-3 h-3 rounded-full" style={{ background: "#27ca40" }}></div>
                    </div>
                    <div className="text-white/40 text-sm font-mono flex items-center">
                        <Terminal size={14} className="mr-2" />
                        command-terminal — sentinel-v18
                    </div>
                </div>
                <div className="text-[10px] text-green-500/50 font-mono animate-pulse">● SECURED</div>
            </div>

            <div
                ref={scrollRef}
                className="p-6 font-mono text-sm h-[400px] overflow-y-auto custom-scrollbar"
            >
                {history.map((item, index) => (
                    <div key={index} className="mb-2">
                        {item.type === "input" && (
                            <div className="flex">
                                <span className="text-green-400 mr-2">bo@system:~$</span>
                                <span className="text-white">{item.content}</span>
                            </div>
                        )}
                        {item.type === "output" && (
                            <div className="text-white/60 pl-4">{item.content}</div>
                        )}
                        {item.type === "error" && (
                            <div className="text-red-400 pl-4">! {item.content}</div>
                        )}
                        {item.type === "system" && (
                            <div className="text-blue-400 opacity-80">{item.content}</div>
                        )}
                    </div>
                ))}
                <form onSubmit={handleSubmit} className="flex mt-4">
                    <span className="text-green-400 mr-2">bo@system:~$</span>
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="flex-grow bg-transparent text-white outline-none caret-orange-400"
                        autoFocus
                        spellCheck={false}
                    />
                </form>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255,107,53,0.3);
        }
      `}} />
        </div>
    )
}
