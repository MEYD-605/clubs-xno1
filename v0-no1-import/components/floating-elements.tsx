"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Yellow circle */}
      <div
        className="absolute top-[15%] left-[10%] w-32 h-32 md:w-64 md:h-64 rounded-full bg-pastel-yellow/30 animate-float-slow"
        style={{ animationDelay: "0s" }}
      ></div>

      {/* Pink circle */}
      <div
        className="absolute top-[60%] right-[5%] w-40 h-40 md:w-80 md:h-80 rounded-full bg-pastel-pink/20 animate-float"
        style={{ animationDelay: "1.5s" }}
      ></div>

      {/* Coral small circle */}
      <div
        className="absolute bottom-[20%] left-[20%] w-16 h-16 md:w-32 md:h-32 rounded-full bg-pastel-coral/30 animate-float-slow"
        style={{ animationDelay: "1s" }}
      ></div>

      {/* Star shape */}
      <div className="absolute top-[30%] right-[15%] text-pastel-yellow animate-pulse-slow">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0L14.59 8.41L23 12L14.59 15.59L12 24L9.41 15.59L1 12L9.41 8.41L12 0Z" />
        </svg>
      </div>

      {/* Smiley */}
      <div className="absolute bottom-[10%] right-[30%] text-pastel-coral animate-float">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 14s1.5 2 4 2 4-2 4-2" />
          <line x1="9" y1="9" x2="9.01" y2="9" />
          <line x1="15" y1="9" x2="15.01" y2="9" />
        </svg>
      </div>

      {/* HEY text */}
      <div
        className="absolute top-[10%] right-[25%] bg-white py-2 px-6 rounded-full shadow-sm transform rotate-12 animate-float-slow"
        style={{ animationDelay: "0.5s" }}
      >
        <span className="text-xl font-bold text-coral">HEY!</span>
      </div>
    </div>
  )
}
