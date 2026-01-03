"use client"

import { Phone, MessageCircle, ArrowUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function FloatingButtons() {
    const [showScrollTop, setShowScrollTop] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    return (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-3">
            {/* Scroll to Top */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="p-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all animate-fade-in"
                    aria-label="Scroll to top"
                >
                    <ArrowUp className="w-5 h-5" />
                </button>
            )}

            {/* Contact Options */}
            {isOpen && (
                <div className="flex flex-col gap-2 animate-slide-up">
                    <a
                        href="https://m.me/Clubsharephoto"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'contact_click', {
                                    event_category: 'engagement',
                                    event_label: 'messenger',
                                    value: 1
                                });
                            }
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-full bg-[#0084FF] text-white hover:scale-105 transition-transform"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span className="font-medium">Messenger</span>
                    </a>
                    <a
                        href="tel:0800416403"
                        onClick={() => {
                            if (typeof window !== 'undefined' && (window as any).gtag) {
                                (window as any).gtag('event', 'contact_click', {
                                    event_category: 'engagement',
                                    event_label: 'phone_call',
                                    value: 1
                                });
                            }
                        }}
                        className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 transition-all"
                    >
                        <Phone className="w-5 h-5" />
                        <span className="font-medium">Call</span>
                    </a>
                </div>
            )}

            {/* Main Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-4 rounded-full transition-all duration-300 ${isOpen
                    ? "bg-white/20 border border-white/30 rotate-45"
                    : "bg-[--color-primary] hover:scale-110 hover-glow"
                    }`}
                style={{ backgroundColor: isOpen ? undefined : "#FF6B35" }}
                aria-label="Contact options"
            >
                <MessageCircle className="w-6 h-6 text-white" />
            </button>
        </div>
    )
}
