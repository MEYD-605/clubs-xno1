import React, { useState } from 'react';
import { Palette, RefreshCw, Copy, Check } from 'lucide-react';

const PALETTE_PRESETS = [
    {
        name: 'Clubs Signature',
        colors: ['#0A0A0A', '#1F1F1F', '#FF6B35', '#FFB38A', '#FFFFFF'],
        description: 'The soul of Clubs by Bo: Deep shadows with a piercing orange accent.'
    },
    {
        name: 'Cinematic Moody',
        colors: ['#040D12', '#183D3D', '#5C8374', '#93B1A6', '#FF6B35'],
        description: 'Teal and orange cinematic vibe for professional moody portraits.'
    },
    {
        name: 'Midnight Brew',
        colors: ['#1A120B', '#3C2A21', '#D5CEA3', '#E5E5CB', '#FF6B35'],
        description: 'Warm, cafe-inspired tones with a hint of antique mystery.'
    },
    {
        name: 'Ethereal High-Key',
        colors: ['#F8F9FA', '#E9ECEF', '#DEE2E6', '#FF9F1C', '#212529'],
        description: 'Bright, clean, and airy for minimalist fashion and product shots.'
    },
    {
        name: 'Neon Sovereign',
        colors: ['#050505', '#2B004D', '#7000B3', '#D300FF', '#FF00A0'],
        description: 'Cyberpunk inspired futuristic lighting for creative studio work.'
    }
];

export default function ColorPaletteAgent() {
    const [selectedPalette, setSelectedPalette] = useState(PALETTE_PRESETS[0]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const copyToClipboard = (color: string, index: number) => {
        navigator.clipboard.writeText(color);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const randomize = () => {
        const randomIndex = Math.floor(Math.random() * PALETTE_PRESETS.length);
        setSelectedPalette(PALETTE_PRESETS[randomIndex]);
    };

    return (
        <div className="glass-card p-8 border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
                <Palette size={120} />
            </div>

            <div className="relative z-10">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                            <Palette className="text-orange-500" /> Color Palette Agent
                        </h3>
                        <p className="text-zinc-400 text-sm">สถาปนาโทนสีระดับมาสเตอร์พรีเมียม</p>
                    </div>
                    <button
                        onClick={randomize}
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-full transition-all hover:rotate-180 duration-500"
                        title="Randomize Oracle's Palette"
                    >
                        <RefreshCw size={20} className="text-orange-400" />
                    </button>
                </div>

                {/* Palette Display */}
                <div className="grid grid-cols-5 h-48 gap-1 mb-8 rounded-2xl overflow-hidden border border-white/5 shadow-2xl">
                    {selectedPalette.colors.map((color, idx) => (
                        <div
                            key={idx}
                            className="relative group cursor-pointer"
                            style={{ backgroundColor: color }}
                            onClick={() => copyToClipboard(color, idx)}
                        >
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                <span className="text-white text-[10px] font-mono font-bold tracking-widest">{color}</span>
                                {copiedIndex === idx ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-white/60" />}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="flex flex-wrap gap-3">
                        {PALETTE_PRESETS.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => setSelectedPalette(preset)}
                                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${selectedPalette.name === preset.name
                                        ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20'
                                        : 'bg-white/5 text-zinc-400 hover:bg-white/10'
                                    }`}
                            >
                                {preset.name}
                            </button>
                        ))}
                    </div>

                    <div className="p-4 bg-black/20 rounded-xl border border-white/5">
                        <h4 className="text-sm font-bold text-orange-400 mb-1 uppercase tracking-tighter">Oracle's Context</h4>
                        <p className="text-zinc-300 text-sm italic italic leading-relaxed">
                            "{selectedPalette.description}"
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
