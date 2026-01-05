"use client"

import { useState, useRef } from "react"
import { Download, RefreshCw, Sparkles } from "lucide-react"

export default function LogoGenerator() {
  const [logoName, setLogoName] = useState("")
  const [style, setStyle] = useState("minimal")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedLogo, setGeneratedLogo] = useState<boolean>(false)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()
    if (!logoName.trim()) return

    setIsGenerating(true)
    setGeneratedLogo(false)

    // Simulate AI design process
    setTimeout(() => {
      setIsGenerating(false)
      setGeneratedLogo(true)
    }, 2000)
  }

  return (
    <div className="glass-card overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(255,107,53,0.15)]">
      <div className="p-8 border-b border-white/10 bg-white/5">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Sparkles className="text-orange-400" size={20} />
          AI Creator Studio
        </h3>
        <p className="text-white/60 text-sm">สถาปนาโลโก้ของคุณด้วยพลัง Oracle AI</p>
      </div>

      <div className="p-8">
        <form onSubmit={handleGenerate} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">ชื่อแบรนด์ของคุณ</label>
            <input
              type="text"
              value={logoName}
              onChange={(e) => setLogoName(e.target.value)}
              placeholder="e.g. Soul Brews"
              className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-orange-400/50 transition-all font-medium"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white/80 mb-2">สไตล์ที่ต้องการ</label>
            <div className="grid grid-cols-2 gap-3">
              {["Minimal", "Luxury", "Cyberpunk", "Vintage"].map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setStyle(s.toLowerCase())}
                  className={`px-4 py-3 rounded-xl border text-sm transition-all ${style === s.toLowerCase()
                      ? "bg-orange-400/20 border-orange-400 text-orange-400 shadow-[0_0_15px_rgba(251,146,60,0.2)]"
                      : "bg-white/5 border-white/10 text-white/60 hover:border-white/20"
                    }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <button
            type="submit"
            disabled={isGenerating}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-orange-400 to-orange-600 text-white font-bold text-lg shadow-lg shadow-orange-500/20 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <RefreshCw className="animate-spin" size={20} />
                กำลังสถาปนา...
              </>
            ) : (
              "เริ่มการสถาปนาโลโก้"
            )}
          </button>
        </form>
      </div>

      {/* Result Area */}
      {(isGenerating || generatedLogo) && (
        <div className="p-8 border-t border-white/10 bg-black/20">
          <div className="relative group aspect-square max-w-[280px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center border border-white/5">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full border-t-2 border-orange-400 animate-spin"></div>
                <div className="text-white/40 text-xs font-mono animate-pulse">GENERATING VECTORS...</div>
              </div>
            ) : (
              <div className="text-center p-8 animate-in fade-in zoom-in duration-500">
                <div
                  className={`text-5xl font-black mb-4 tracking-tighter ${style === 'luxury' ? 'font-serif text-yellow-500 drop-shadow-lg' :
                      style === 'cyberpunk' ? 'italic text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' :
                        style === 'vintage' ? 'font-serif text-amber-100 opacity-80' :
                          'text-white'
                    }`}
                >
                  {logoName.split(' ')[0]}
                </div>
                <div className="h-1 w-12 bg-orange-400 mx-auto rounded-full mb-4"></div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-white/40 italic">Established 2026</div>
              </div>
            )}
          </div>

          {generatedLogo && (
            <button className="mt-6 w-full py-3 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all flex items-center justify-center gap-2">
              <Download size={18} />
              ดาวน์โหลดความคมชัดสูง
            </button>
          )}
        </div>
      )}
    </div>
  )
}
