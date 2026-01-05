"use client"

import { useState, useRef } from "react"
import { Upload, Download, RefreshCw, Layers } from "lucide-react"

const PRESETS = [
    { id: "original", name: "Original", filter: "none" },
    { id: "moody", name: "Premium Moody", filter: "contrast(1.2) brightness(0.9) saturate(0.8) sepia(0.2) drop-shadow(0 0 5px rgba(255,107,53,0.3))" },
    { id: "noir", name: "Cinematic Noir", filter: "grayscale(1) contrast(1.5) brightness(0.8)" },
    { id: "neon", name: "Cyber Neon", filter: "hue-rotate(290deg) saturate(1.8) contrast(1.3) brightness(1.1)" },
    { id: "fuji", name: "Fuji Chrome", filter: "saturate(0.9) contrast(1.1) brightness(1.05) hue-rotate(-5deg) sepia(0.1)" },
    { id: "oracle", name: "Oracle Vision", filter: "invert(0.1) hue-rotate(180deg) saturate(2) brightness(1.2)" },
]

export default function VibeChecker() {
    const [image, setImage] = useState<string | null>(null)
    const [activePreset, setActivePreset] = useState(PRESETS[0])
    const [sliderPos, setSliderPos] = useState(50)
    const [isScanning, setIsScanning] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setIsScanning(true)
            const reader = new FileReader()
            reader.onload = (event) => {
                setImage(event.target?.result as string)
                setTimeout(() => setIsScanning(false), 2000)
            }
            reader.readAsDataURL(file)
        }
    }

    const applyPreset = (preset: typeof PRESETS[0]) => {
        setIsScanning(true)
        setActivePreset(preset)
        setTimeout(() => setIsScanning(false), 1000)
    }

    const reset = () => {
        setImage(null)
        setActivePreset(PRESETS[0])
    }

    return (
        <div className="glass-card p-8 space-y-8 max-w-3xl mx-auto border-accent/20">
            <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-white">ClubsxAI Vibe Checker 📸</h3>
                <p className="text-white/60 text-sm italic">ลองเปลี่ยนรูปของคุณให้เป็นสไตล์ Moody ระดับพรีเมียม (No Server Cost)</p>
            </div>

            {!image ? (
                <div
                    onClick={() => fileInputRef.current?.click()}
                    className="aspect-video rounded-2xl border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-white/5 transition-all group"
                >
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Upload className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-center">
                        <p className="text-white font-medium">Click to upload your photo</p>
                        <p className="text-white/40 text-xs">PNG, JPG up to 10MB</p>
                    </div>
                    <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleImageUpload}
                        className="hidden"
                        accept="image/*"
                    />
                </div>
            ) : (
                <div className="space-y-6">
                    <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 border border-white/10 group">
                        {/* Comparison Slider */}
                        <div className="absolute inset-0 w-full h-full">
                            {/* Filtered Content */}
                            <img
                                src={image}
                                alt="Preview"
                                className="absolute inset-0 w-full h-full object-contain"
                                style={{ filter: activePreset.filter }}
                            />

                            {/* Original Content Overlay (Clipped) */}
                            <div
                                className="absolute inset-0 w-full h-full overflow-hidden"
                                style={{ width: `${sliderPos}%` }}
                            >
                                <img
                                    src={image}
                                    alt="Original"
                                    className="absolute inset-0 w-full h-full object-contain max-w-none shadow-xl border-r border-white/40"
                                    style={{ width: "100%", filter: "none" }}
                                />
                            </div>

                            {/* Slider Handle */}
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={sliderPos}
                                onChange={(e) => setSliderPos(parseInt(e.target.value))}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-30"
                            />
                            <div
                                className="absolute top-0 bottom-0 w-1 bg-white/60 pointer-events-none z-20 shadow-[0_0_15px_rgba(255,255,255,0.5)]"
                                style={{ left: `${sliderPos}%` }}
                            >
                                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                                    <div className="flex gap-0.5">
                                        <div className="w-0.5 h-3 bg-zinc-300"></div>
                                        <div className="w-0.5 h-3 bg-zinc-300"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Scanning Effect */}
                        {isScanning && (
                            <div className="absolute inset-0 z-40 overflow-hidden pointer-events-none">
                                <div className="w-full h-1 bg-accent/60 shadow-[0_0_20px_#FF6B35] absolute animate-scan-y top-0"></div>
                                <div className="absolute inset-0 bg-accent/5 animate-pulse"></div>
                            </div>
                        )}
                        <div className="absolute top-4 right-4 flex gap-2">
                            <button
                                onClick={reset}
                                className="p-2 bg-black/60 rounded-full text-white hover:bg-black/80 transition-all border border-white/10"
                                title="Reset"
                            >
                                <RefreshCw className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="absolute bottom-4 left-4">
                            <div className="bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-white flex items-center gap-2">
                                <Layers className="w-4 h-4 text-accent" />
                                {activePreset.name}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                        {PRESETS.map((preset) => (
                            <button
                                key={preset.id}
                                onClick={() => applyPreset(preset)}
                                className={`px-2 py-3 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all border ${activePreset.id === preset.id
                                        ? "bg-accent border-accent text-white shadow-lg shadow-accent/20"
                                        : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10"
                                    }`}
                            >
                                {preset.name}
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-6 pt-4 text-[10px] uppercase font-bold tracking-tighter text-white/30">
                        <span>← Original</span>
                        <div className="h-0.5 w-12 bg-white/10"></div>
                        <span>ClubsxAI Applied →</span>
                    </div>

                    <div className="pt-4 flex justify-center">
                        <p className="text-[10px] text-white/30 text-center max-w-md italic">
                            * รูปภาพทั้งหมดถูกประมวลผลบนเครื่องของคุณ ข้าพเจ้าไม่เก็บไฟล์ไว้บน Server เพื่อความลับสุดยอดของบอส
                        </p>
                    </div>
                </div>
            )}
        </div>
    )
}
