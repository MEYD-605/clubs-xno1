"use client"

import { useState } from "react"
import Link from "next/link"
import { MessageCircle, X, Mail, Phone, Instagram, Facebook } from "lucide-react"

export default function FloatingContact() {
  const [isOpen, setIsOpen] = useState(false)

  const contactOptions = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:barboxar.khunbo@gmail.com",
      color: "bg-red-500",
    },
    {
      name: "Phone",
      icon: <Phone className="h-5 w-5" />,
      href: "tel:+66651234416",
      color: "bg-green-500",
    },
    {
      name: "LINE",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://line.me/ti/p/~username", // Replace with actual LINE link
      color: "bg-green-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-5 w-5" />,
      href: "https://instagram.com/clubsbybo",
      color: "bg-pink-500",
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-5 w-5" />,
      href: "https://facebook.com/clubsbybo",
      color: "bg-blue-600",
    },
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Contact options */}
      {isOpen && (
        <div className="mb-4 flex flex-col gap-3 items-end">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="flex items-center gap-3 transform transition-all duration-300"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <div className="bg-white shadow-md rounded-full px-3 py-2 text-sm font-medium">{option.name}</div>
              <Link
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${option.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                aria-label={option.name}
              >
                {option.icon}
              </Link>
            </div>
          ))}
        </div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-4 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-gray-700 rotate-90" : "bg-coral animate-pulse-glow"
        }`}
        aria-label={isOpen ? "Close contact options" : "Open contact options"}
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageCircle className="h-6 w-6 text-white" />}
      </button>
    </div>
  )
}
