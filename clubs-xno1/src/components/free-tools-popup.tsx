import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ArrowRight, Zap } from 'lucide-react';

const FreeToolsPopup = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isDismissed, setIsDismissed] = useState(false);

    useEffect(() => {
        // Check if user has already dismissed or visited recently
        const dismissed = localStorage.getItem('clubsxai_tools_popup_dismissed');
        const lastSeen = localStorage.getItem('clubsxai_tools_popup_last_seen');
        const now = Date.now();

        // Don't show if dismissed within last 7 days or seen in last 24h
        if (dismissed === 'true') {
            const dismissedAt = parseInt(localStorage.getItem('clubsxai_tools_popup_dismissed_at') || '0');
            if (now - dismissedAt < 7 * 24 * 60 * 60 * 1000) return;
        }

        if (lastSeen) {
            if (now - parseInt(lastSeen) < 24 * 60 * 60 * 1000) return;
        }

        // Logic to show after delay
        const timer = setTimeout(() => {
            setIsVisible(true);
            localStorage.setItem('clubsxai_tools_popup_last_seen', now.toString());
        }, 5000); // Show after 5 seconds

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () => {
        setIsVisible(false);
        setIsDismissed(true);
        localStorage.setItem('clubsxai_tools_popup_dismissed', 'true');
        localStorage.setItem('clubsxai_tools_popup_dismissed_at', Date.now().toString());
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[9999] flex items-end justify-center sm:items-center p-4 pointer-events-none">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm pointer-events-auto"
                        onClick={handleClose}
                    />

                    {/* Popup Card */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 50 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, ease: "circOut" }}
                        className="relative w-full max-w-md bg-[#0F0F0F]/90 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 shadow-[0_0_50px_rgba(255,107,53,0.2)] pointer-events-auto overflow-hidden group"
                    >
                        {/* Decorative background glow */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF6B35]/20 rounded-full blur-[60px]" />

                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors"
                            aria-label="Close popup"
                        >
                            <X size={20} />
                        </button>

                        <div className="relative z-10 text-center">
                            <div className="inline-flex items-center justify-center p-3 bg-[#FF6B35]/10 rounded-2xl mb-6 text-[#FF6B35] animate-pulse">
                                <Sparkles size={32} />
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                <span className="text-[#FF6B35]">ClubsxAI</span> Smart Tools
                            </h2>
                            <p className="text-white/60 mb-8 leading-relaxed">
                                ลองเปลี่ยนภาพถ่ายธรรมดาให้เป็น <span className="text-white font-medium">Masterpiece</span>
                                ด้วย AI ส่วนตัวของเรา ฟรี! ไม่มีค่าใช้จ่ายครับ
                            </p>

                            <div className="space-y-4">
                                <a
                                    href="/free-tools"
                                    className="flex items-center justify-center gap-2 w-full bg-[#FF6B35] hover:bg-[#FF8F5C] text-white py-4 rounded-xl font-bold transition-all hover:scale-[1.02] shadow-lg shadow-[#FF6B35]/20"
                                >
                                    <Zap size={18} fill="currentColor" />
                                    ไปที่หน้าเครื่องมือฟรี →
                                </a>

                                <button
                                    onClick={handleClose}
                                    className="text-sm text-white/30 hover:text-white/60 transition-colors"
                                >
                                    ไว้วันหลังครับ
                                </button>
                            </div>
                        </div>

                        {/* Bottom Accent */}
                        <div className="h-1.5 w-full absolute bottom-0 left-0 bg-gradient-to-r from-transparent via-[#FF6B35]/50 to-transparent" />
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FreeToolsPopup;
