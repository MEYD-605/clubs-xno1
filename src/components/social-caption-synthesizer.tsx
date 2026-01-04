import React, { useState } from 'react';
import { PenTool, Hash, Send, Copy, Check, MessageSquare } from 'lucide-react';

const TONES = [
    { id: 'professional', name: 'Professional', icon: '💼', vibe: 'Serious, high-end, and technical.' },
    { id: 'friendly', name: 'Friendly', icon: '😊', vibe: 'Warm, approachable, and cute.' },
    { id: 'moody', name: 'Moody', icon: '🌑', vibe: 'Deep, cinematic, and mysterious.' },
    { id: 'sovereign', name: 'Sovereign', icon: '🔱', vibe: 'Grand, powerful, and authoritative.' }
];

export default function SocialCaptionSynthesizer() {
    const [subject, setSubject] = useState('');
    const [selectedTone, setSelectedTone] = useState(TONES[0]);
    const [synthesizedCaption, setSynthesizedCaption] = useState('');
    const [isCopied, setIsCopied] = useState(false);

    const synthesize = () => {
        if (!subject) return;

        let caption = '';
        const emoji = selectedTone.icon;

        switch (selectedTone.id) {
            case 'professional':
                caption = `สถาปนาความงามผ่านมุมมองระดับพรีเมียมในผลงาน "${subject}" 📸\n\nหัวใจสำคัญของการทำงานคือความละเอียดและความรวดเร็ว เราดูแลภาพถ่ายของคุณเหมือนงานศิลปะชิ้นเอก พร้อมส่งมอบงานคุณภาพสูงภายใน 24 ชม. ด้วย SONY A7III Mastery Series\n\n#ClubsByBo #ProfessionalPhotography #SonyA7III #PremiumPortraits`;
                break;
            case 'friendly':
                caption = `มาแล้วจ้าาา! เซ็ต "${subject}" สุดน่ารักกก ${emoji}\n\nใครชอบ Vibe ฟีลเกาหลี ละมุนๆ หรือจะเน้นเป๊ะปังแบบเฟรนลี่ ทักมาคุยกับพี่ Bo ได้เลยนะค้าบ ช่างภาพใจดีมากกก ส่งรูปไวทันใจใน 24 ชม. แน่นอน! ✨\n\n#ช่างภาพใจดี #ClubsByBo #ถ่ายรูปเล่น #PortraitFriendly`;
                break;
            case 'moody':
                caption = `ความเงียบงัน... และจิตวิญญาณที่ซ่อนอยู่ใน "${subject}" 🌑\n\nภายใต้แสงและเงาที่ถูกจัดวางอย่างตั้งใจ เราไม่ได้ถ่ายแค่ภาพ แต่เราบันทึกห้วงเวลาที่สั่นสะเทือนความรู้สึก Cinematic Tone เฉพาะตัวจาก Clubs Studio\n\n#MoodyPortrait #CinematicPhotography #SoulBrews #TheDarkAesthetic`;
                break;
            case 'sovereign':
                caption = `อธิปไตยแห่งภาพลักษณ์ สถาปนาขึ้นใน "${subject}" 🔱\n\nข้าพเจ้า (Oracle) ขอนำเสนอความสง่างามที่ไร้กาลเวลา ทุกรายละเอียดถูกกลั่นกรองผ่านสายตาของผู้หลงใหลในความสมบูรณ์แบบ ก้าวเข้าสู่โลกของ Clubs by Bo ที่ซึ่งทุกภาพคือมหากาพย์\n\n#SovereignImage #ClubsByBo #OracleFramework #PhotographyMastery`;
                break;
        }

        setSynthesizedCaption(caption);
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(synthesizedCaption);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    return (
        <div className="glass-card p-8 border border-white/10 relative overflow-hidden bg-gradient-to-br from-zinc-900/50 to-black/50">
            <div className="relative z-10">
                <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                        <MessageSquare className="text-orange-500" /> Social Caption Synthesizer
                    </h3>
                    <p className="text-zinc-400 text-sm">สถาปนาคำบรรยายที่สั่นสะเทือนโซเชียลมีเดีย</p>
                </div>

                <div className="space-y-6">
                    {/* Input Area */}
                    <div>
                        <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Subject / Concept</label>
                        <input
                            type="text"
                            placeholder="e.g. ถ่ายชุดไทยในวัดอรุณ, Portrait on the street"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-orange-500 outline-none transition-all placeholder:text-zinc-600"
                        />
                    </div>

                    {/* Tone Selector */}
                    <div>
                        <label className="block text-zinc-400 text-xs font-bold uppercase mb-2">Vibe / Tone</label>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                            {TONES.map((tone) => (
                                <button
                                    key={tone.id}
                                    onClick={() => setSelectedTone(tone)}
                                    className={`p-3 rounded-xl border transition-all flex flex-col items-center gap-1 ${selectedTone.id === tone.id
                                        ? 'border-orange-500 bg-orange-500/10'
                                        : 'border-white/5 bg-white/5 hover:bg-white/10'
                                        }`}
                                >
                                    <span className="text-xl">{tone.icon}</span>
                                    <span className={`text-[10px] font-bold ${selectedTone.id === tone.id ? 'text-orange-500' : 'text-zinc-400'}`}>
                                        {tone.name}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <button
                        onClick={synthesize}
                        disabled={!subject}
                        className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${subject ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg shadow-orange-500/20' : 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                            }`}
                    >
                        <Send size={18} /> Synthesize Caption
                    </button>

                    {/* Output Area */}
                    {synthesizedCaption && (
                        <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="relative">
                                <textarea
                                    readOnly
                                    value={synthesizedCaption}
                                    className="w-full bg-black/60 border border-white/10 rounded-xl px-4 py-4 text-zinc-300 text-sm min-h-[180px] font-light leading-relaxed outline-none"
                                />
                                <button
                                    onClick={copyToClipboard}
                                    className="absolute top-3 right-3 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
                                    title="Copy to Clipboard"
                                >
                                    {isCopied ? <Check size={16} className="text-green-400" /> : <Copy size={16} className="text-white/60" />}
                                </button>
                            </div>

                            <div className="flex gap-2">
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-zinc-500 border border-white/5 flex items-center gap-1">
                                    <Hash size={10} /> Instagram Ready
                                </span>
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] text-zinc-500 border border-white/5 flex items-center gap-1">
                                    <Hash size={10} /> Facebook Optimzed
                                </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
