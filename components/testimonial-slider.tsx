"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    quote: "เหมือนถ่ายกับเพื่อนที่เข้าใจเรา แต่ภาพออกมาแบบมือโปรสุด ๆ",
    name: "คุณนุช",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 2,
    quote: "I've never looked this powerful and soft at the same time.",
    name: "Sarah",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: 3,
    quote: "ไม่เคยคิดว่าตัวเองจะดูดีขนาดนี้ได้ ขอบคุณมาก ๆ",
    name: "คุณเบนซ์",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="max-w-3xl mx-auto">
      <div className="relative h-64 overflow-hidden">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-accent-blue/20">
              <Image
                src={testimonial.image || "/placeholder.svg"}
                alt={testimonial.name}
                width={100}
                height={100}
                className="object-cover"
              />
            </div>

            <p className="text-xl md:text-2xl text-center mb-4 italic text-dark/80">"{testimonial.quote}"</p>

            <p className="font-bold text-accent-blue">{testimonial.name}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === current ? "bg-accent-blue w-6" : "bg-accent-blue/30"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
