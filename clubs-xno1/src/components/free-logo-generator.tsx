"use client"

import { useState, useRef, useEffect } from "react"
import { Download, Sparkles, RefreshCw } from "lucide-react"

const STYLES = [
  { id: "moody", name: "Premium Moody", bg: "#000000", text: "#FF6B35", font: "serif" },
  { id: "neon", name: "Red Neon", bg: "#050505", text: "#FF1F1F", font: "sans-serif", shadow: "0 0 20px #FF1F1F" },
  { id: "minimal", name: "Clean White", bg: "#FFFFFF", text: "#000000", font: "sans-serif" },
  { id: "luxury", name: "Gold Luxury", bg: "#1A1A1A", text: "#D4AF37", font: "serif" },
]

export default function FreeLogoGenerator() {
  const [logoName, setLogoName] = useState("ClubsxAI")
  const [activeStyle, setActiveStyle] = useState(STYLES[0])
  const [intensity, setIntensity] = useState(100)
  const [showGrain, setShowGrain] = useState(true)
  const [isGlitching, setIsGlitching] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const drawLogo = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const w = canvas.width
    const h = canvas.height

    // Clear and set background
    ctx.fillStyle = activeStyle.bg
    ctx.fillRect(0, 0, w, h)

    // Noise/Grain Layer
    if (showGrain) {
      for (let i = 0; i < 5000; i++) {
        const x = Math.random() * w
        const y = Math.random() * h
        const size = Math.random() * 2
        ctx.fillStyle = `rgba(255,255,255,${0.05 * (intensity / 100)})`
        ctx.fillRect(x, y, size, size)
      }
    }

    // Set text properties
    const colorWithIntensity = activeStyle.text + Math.floor((intensity / 100) * 255).toString(16).padStart(2, '0')
    ctx.fillStyle = activeStyle.text // Use original for shadow
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    if (activeStyle.shadow) {
      ctx.shadowColor = activeStyle.text
      ctx.shadowBlur = (15 * (intensity / 100))
    } else {
      ctx.shadowBlur = 0
    }

    const fontSize = 70 + (isGlitching ? Math.random() * 10 : 0)
    ctx.font = `${activeStyle.font === "serif" ? "italic" : "bold"} ${fontSize}px ${activeStyle.font}`

    // Glitch offset
    const ox = isGlitching ? Math.random() * 10 - 5 : 0
    const oy = isGlitching ? Math.random() * 10 - 5 : 0

    // Draw Text
    ctx.fillStyle = activeStyle.text
    ctx.globalAlpha = intensity / 100
    ctx.fillText(logoName, w / 2 + ox, h / 2 + oy)
    ctx.globalAlpha = 1

    // Add subtle accent line
    ctx.shadowBlur = 0
    ctx.strokeStyle = activeStyle.text
    ctx.lineWidth = 3
    ctx.globalAlpha = 0.3 * (intensity / 100)
    ctx.beginPath()
    ctx.moveTo(w / 2 - 60, h / 2 + 70)
    ctx.lineTo(w / 2 + 60, h / 2 + 70)
    ctx.stroke()
    ctx.globalAlpha = 1
  }

  useEffect(() => {
    if (logoName !== "ClubsxAI") {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 300)
    }
  }, [logoName])

  useEffect(() => {
    let frameId: number
    if (isGlitching) {
      const animate = () => {
        drawLogo()
        frameId = requestAnimationFrame(animate)
      }
      frameId = requestAnimationFrame(animate)
    } else {
      drawLogo()
    }
    return () => cancelAnimationFrame(frameId)
  }, [logoName, activeStyle, intensity, showGrain, isGlitching])

  const handleDownload = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const link = document.createElement("a")
    link.download = `logo-${logoName.toLowerCase()}.png`
    link.href = canvas.toDataURL("image/png")
    link.click()
  }

  return (
    <div className="glass-card p-8 space-y-8 max-w-2xl mx-auto">
      <div className="space-y-4">
        <label className="block text-sm font-medium text-white/60">Brand Name</label>
        <input
          type="text"
          value={logoName}
          onChange={(e) => setLogoName(e.target.value)}
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent transition-colors font-bold uppercase tracking-widest text-lg"
          placeholder="Enter your brand name"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="text-xs font-bold uppercase text-white/40 tracking-widest">Intensity {intensity}%</label>
            <button
              onClick={() => setShowGrain(!showGrain)}
              className={`p-1 rounded transition-colors ${showGrain ? 'text-accent' : 'text-white/20'}`}
            >
              <span className="text-[10px] font-bold underline">TEXTURE: {showGrain ? 'ON' : 'OFF'}</span>
            </button>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            value={intensity}
            onChange={(e) => setIntensity(parseInt(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          {STYLES.map((style) => (
            <button
              key={style.id}
              onClick={() => setActiveStyle(style)}
              className={`px-3 py-3 rounded-xl text-[10px] font-bold uppercase tracking-tighter transition-all border ${activeStyle.id === style.id
                  ? "bg-accent border-accent text-white"
                  : "bg-white/5 border-white/10 text-body hover:bg-white/10"
                }`}
            >
              {style.name}
            </button>
          ))}
        </div>
      </div>

      <div className="relative group aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <canvas
          ref={canvasRef}
          width={800}
          height={800}
          className="w-full h-full cursor-crosshair"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-sm">
          <button
            onClick={() => drawLogo()}
            className="p-3 bg-white/20 rounded-full text-white hover:bg-white/40 transition-colors"
          >
            <RefreshCw className="w-6 h-6" />
          </button>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={handleDownload}
          className="flex-1 btn-primary py-4 flex items-center justify-center gap-2"
        >
          <Download className="w-5 h-5" />
          Download PNG
        </button>
        <button
          className="flex-1 px-8 py-4 rounded-full border border-white/10 text-white hover:bg-white/5 transition-all text-center flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5 text-accent" />
          Magic Refine
        </button>
      </div>

      <p className="text-center text-xs text-white/40 italic">
        * สร้างขึ้นทันทีผ่าน ClubsxAI Core Engine โดยไม่ใช้ Server ทรัพยากรขังข้ามระบบ
      </p>
    </div>
  )
}
