import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Wand2 } from 'lucide-react';

const FreeToolsWidget = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showBubble, setShowBubble] = useState(true);

    useEffect(() => {
        // Show widget after a short delay on every home visit
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleDismiss = (e: React.MouseEvent) => {
        e.stopPropagation();
        e.preventDefault();
        setShowBubble(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed bottom-32 sm:bottom-36 right-4 sm:right-6 z-[60] flex flex-col items-end gap-3 pointer-events-none">
                    {/* Speech Bubble / Notification Chip */}
                    <AnimatePresence>
                        {showBubble && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, x: 20 }}
                                animate={{ opacity: 1, scale: 1, x: 0 }}
                                exit={{ opacity: 0, scale: 0.8, x: 20 }}
                                className="relative bg-[#FF6B35] text-white px-4 py-3 rounded-2xl rounded-br-none shadow-xl pointer-events-auto border border-white/20 mb-1 max-w-[200px]"
                            >
                                <button
                                    onClick={handleDismiss}
                                    className="absolute -top-2 -right-2 bg-black text-white p-1 rounded-full border border-white/10 hover:bg-zinc-800 transition-colors"
                                    aria-label="Close widget"
                                >
                                    <X size={10} />
                                </button>
                                <p className="text-sm sm:text-base font-bold leading-tight">
                                    ใช้ AI แต่งรูปฟรีไหมครับ? ✨
                                </p>
                                {/* Triangle arrow for bubble */}
                                <div className="absolute right-0 bottom-[-8px] w-0 h-0 border-l-[10px] border-l-transparent border-t-[10px] border-[#FF6B35]"></div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Floating Tool Button */}
                    <motion.a
                        href="/free-tools"
                        onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'free_tools_click', {
                                    event_category: 'engagement',
                                    event_label: 'floating_widget',
                                    value: 1
                                });
                            }
                        }}
                        initial={{ scale: 0, rotate: -45 }}
                        animate={{ scale: 1, rotate: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 text-[#FF6B35] hover:bg-black/60 transition-all pointer-events-auto shadow-[0_0_30px_rgba(255,107,53,0.3)] group relative overflow-hidden"
                        aria-label="Go to Free AI Tools"
                    >
                        {/* Animated background pulse */}
                        <div className="absolute inset-0 bg-[#FF6B35]/20 animate-pulse rounded-full"></div>

                        <Wand2 className="w-6 h-6 relative z-10 group-hover:rotate-12 transition-transform" />

                        {/* Floating sparkles */}
                        <motion.div
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.5],
                            }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="absolute -top-1 -left-1 text-[#FF6B35]"
                        >
                            <Sparkles size={12} />
                        </motion.div>
                    </motion.a>
                </div>
            )}
        </AnimatePresence>
    );
};

export default FreeToolsWidget;
