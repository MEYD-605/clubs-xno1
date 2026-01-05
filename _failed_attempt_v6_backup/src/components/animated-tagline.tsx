"use client"

import { useState, useEffect } from "react"

const taglines = ["Sexy.", "Honest.", "Real."]

export default function AnimatedTagline() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % taglines.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 overflow-hidden">
      {taglines.map((tagline, index) => (
        <p
          key={tagline}
          className={`text-xl font-medium transition-all duration-500 ${
            index === current ? "transform-none opacity-100" : "transform translate-y-8 opacity-0"
          }`}
        >
          {tagline}
        </p>
      ))}
    </div>
  )
}
