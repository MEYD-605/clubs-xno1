"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "คุณมิว",
        role: "Model & Influencer",
        content: "ถ่ายกับพี่โบครั้งแรกก็รักเลย! เก็บ vibe ได้ดีมาก ไม่เกร็ง รูปออกมาสวยเกินคาด ✨",
        rating: 5,
        image: null
    },
    {
        id: 2,
        name: "คุณเจมส์",
        role: "CEO, Tech Startup",
        content: "ถ่าย portrait สำหรับ LinkedIn ครับ พี่โบให้คำแนะนำดีมาก ได้รูปที่ professional เกินราคา",
        rating: 5,
        image: null
    },
    {
        id: 3,
        name: "คุณเบลล์ & คุณออม",
        role: "Pre-wedding Couple",
        content: "ถ่าย pre-wedding กับพี่โบ ได้ความเป็นธรรมชาติมากๆ ไม่ต้องโพสท่าเกร็งๆ พี่โบเก็บ moment ได้ดีมาก 💕",
        rating: 5,
        image: null
    },
    {
        id: 4,
        name: "คุณหมอปุ้ย",
        role: "Dental Clinic Owner",
        content: "ถ่ายรูปทีมคลินิกและรูปโปรไฟล์หมอ ออกมาดูเป็นมืออาชีพมาก คนไข้ trust เลย 💯",
        rating: 5,
        image: null
    },
    {
        id: 5,
        name: "คุณนิค",
        role: "Restaurant Owner",
        content: "ถ่าย food photography กับ bartender shots พี่โบเข้าใจ mood ของร้านมาก รูปเอาไปลง IG ได้เลย 🍸",
        rating: 5,
        image: null
    }
]

export default function Testimonials() {
    const [current, setCurrent] = useState(0)

    const next = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length)
    }

    const prev = () => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[--color-primary]/20 flex items-center justify-center">
                <Quote className="w-6 h-6 text-[--color-primary]" style={{ color: "#FF6B35" }} />
            </div>

            {/* Testimonial Card */}
            <div className="glass-card p-8 pt-12 text-center">
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[--color-primary] text-[--color-primary]" style={{ fill: "#FF6B35", color: "#FF6B35" }} />
                    ))}
                </div>

                {/* Content */}
                <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
                    "{testimonials[current].content}"
                </p>

                {/* Author */}
                <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[--color-primary] to-[--color-accent-pink] mb-3 flex items-center justify-center text-white font-bold"
                        style={{ background: "linear-gradient(135deg, #FF6B35, #EC4899)" }}>
                        {testimonials[current].name.charAt(0)}
                    </div>
                    <h4 className="font-medium text-white">{testimonials[current].name}</h4>
                    <p className="text-sm text-white/60">{testimonials[current].role}</p>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-6">
                <button
                    onClick={prev}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="w-5 h-5 text-white" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === current ? "w-6 bg-[--color-primary]" : "bg-white/30"
                                }`}
                            style={{ backgroundColor: i === current ? "#FF6B35" : undefined }}
                            aria-label={`Go to testimonial ${i + 1}`}
                        />
                    ))}
                </div>

                <button
                    onClick={next}
                    className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>
            </div>
        </div>
    )
}
