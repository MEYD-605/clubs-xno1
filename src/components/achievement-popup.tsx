"use client"

import { useState, useEffect } from "react"
import { X, Star, Camera, Users, Award } from "lucide-react"

const stats = [
    { icon: Camera, label: "Photos Delivered", value: "1,000,000+", color: "#FF6B35" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "#EC4899" },
    { icon: Star, label: "5-Star Reviews", value: "200+", color: "#F59E0B" },
    { icon: Award, label: "Years Experience", value: "10+", color: "#3B82F6" },
]

export default function AchievementPopup() {
    const [isVisible, setIsVisible] = useState(false)
    const [hasShown, setHasShown] = useState(false)

    useEffect(() => {
        // Show popup after 3 seconds if not already shown
        const timer = setTimeout(() => {
            if (!hasShown) {
                setIsVisible(true)
                setHasShown(true)
            }
        }, 3000)

        return () => clearTimeout(timer)
    }, [hasShown])

    if (!isVisible) return null

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
                onClick={() => setIsVisible(false)}
            />

            {/* Popup Card */}
            <div className="relative z-10 w-full max-w-md animate-slide-up">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-pink-500/20 to-purple-500/20 blur-3xl animate-pulse-glow" />

                <div className="relative glass-card p-8 overflow-hidden">
                    {/* Close Button */}
                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
                        aria-label="Close popup"
                    >
                        <X className="w-5 h-5" />
                    </button>

                    {/* Sparkle Effect */}
                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
                        <div className="absolute top-4 left-8 w-2 h-2 bg-orange-400 rounded-full animate-ping" />
                        <div className="absolute top-12 right-12 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: "0.5s" }} />
                        <div className="absolute bottom-16 left-16 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: "1s" }} />
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 mb-4 animate-float">
                            <span className="text-3xl">🔥</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                            Club <span style={{ color: "#FF6B35" }}>S</span> Achievements
                        </h3>
                        <p className="text-white/60 text-sm mb-1">ช่างภาพที่ลูกค้าไว้วางใจ</p>
                        <p className="text-accent font-bold text-sm" style={{ color: "#FF6B35" }}>จองคิวถ่ายภาพเริ่มต้น 1,500.- | ส่งงานด่วน 24H 🚀</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className="glass p-4 rounded-xl text-center hover-lift"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <stat.icon
                                    className="w-6 h-6 mx-auto mb-2"
                                    style={{ color: stat.color }}
                                />
                                <p className="text-xl font-bold text-white">{stat.value}</p>
                                <p className="text-xs text-white/50">{stat.label}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <a
                        href="/contact"
                        className="block w-full py-3 rounded-full text-center font-medium transition-all hover:scale-105"
                        style={{ background: "linear-gradient(135deg, #FF6B35, #EC4899)", color: "white" }}
                        onClick={() => setIsVisible(false)}
                    >
                        ✨ จองคิวถ่ายเลย!
                    </a>

                    {/* Social Proof */}
                    <p className="text-center text-white/40 text-xs mt-4">
                        23,000+ followers on Facebook 📘
                    </p>
                </div>
            </div>
        </div>
    )
}
