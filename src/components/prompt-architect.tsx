import React, { useState } from 'react';

const styles = [
    { name: 'Cinematic Moody', prompt: 'Cinematic lighting, moody atmosphere, dark-toned studio, orange neon accents' },
    { name: 'High-Fashion Luxury', prompt: 'High-fashion aesthetic, luxury materials, sharp focus, professional strobe lighting, elegant' },
    { name: 'Cyberpunk Neo', prompt: 'Futuristic city lights, cyber-premium vibe, vibrant neon glows, hyper-detailed, 8k' },
    { name: 'Soul-Brews Signature', prompt: 'Warm organic tones, premium texture, authentic soul-brews look, photorealistic, 8k resolution' }
];

const subjects = ['Male Model', 'Female Model', 'Product', 'Interior Space', 'Coffee & Cocktails'];

export default function PromptArchitect() {
    const [selectedStyle, setSelectedStyle] = useState(styles[0]);
    const [selectedSubject, setSelectedSubject] = useState(subjects[0]);
    const [customDetail, setCustomDetail] = useState('');

    const finalPrompt = `A ${selectedSubject} in ${selectedStyle.name} style. ${selectedStyle.prompt}. ${customDetail ? customDetail + '.' : ''} Professional photography, masterpiece, 8k.`;

    const copyToClipboard = () => {
        navigator.clipboard.writeText(finalPrompt);
        alert('สลัก Prompt ลง Clipboard แล้วครับ! 🔱📸');
    };

    return (
        <div className="card-2026 p-8 space-y-8">
            <div className="space-y-4">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Select Style</label>
                <div className="grid grid-cols-2 gap-3">
                    {styles.map((s) => (
                        <button
                            key={s.name}
                            onClick={() => setSelectedStyle(s)}
                            className={`p-4 rounded-xl text-sm transition-all border ${selectedStyle.name === s.name
                                    ? 'bg-accent/20 border-accent text-white shadow-glow'
                                    : 'bg-white/5 border-white/10 text-white/60 hover:border-white/20'
                                }`}
                        >
                            {s.name}
                        </button>
                    ))}
                </div>
            </div>

            <div className="space-y-4">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Select Subject</label>
                <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-accent outline-none"
                >
                    {subjects.map(sub => <option key={sub} value={sub}>{sub}</option>)}
                </select>
            </div>

            <div className="space-y-4">
                <label className="text-xs font-mono text-white/40 uppercase tracking-widest">Additional Details</label>
                <input
                    type="text"
                    placeholder="e.g. holding a glass of wine, wearing a black suit..."
                    value={customDetail}
                    onChange={(e) => setCustomDetail(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-accent outline-none"
                />
            </div>

            <div className="p-6 bg-black/40 rounded-2xl border border-white/5 space-y-4">
                <p className="text-xs font-mono text-accent uppercase tracking-widest">Oracle Generated Prompt</p>
                <p className="text-sm text-white/80 italic leading-relaxed">"{finalPrompt}"</p>
                <button
                    onClick={copyToClipboard}
                    className="w-full button-premium py-4"
                >
                    Copy Prompt 🔱
                </button>
            </div>
        </div>
    );
}
