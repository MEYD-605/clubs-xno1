"use client"

import type React from "react"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"

export default function ChatButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState([
    { role: "bot", content: "Hi there! I'm Bo. How can I help you with your photography needs?" },
  ])

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    if (!message.trim()) return

    // Add user message to chat
    setChatHistory([...chatHistory, { role: "user", content: message }])

    // Clear input
    setMessage("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      setChatHistory((prev) => [
        ...prev,
        {
          role: "bot",
          content:
            "Thanks for reaching out! I'd be happy to discuss your photography session. Would you like to know more about my portrait packages or schedule a consultation?",
        },
      ])
    }, 1000)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg flex items-center justify-center bg-coral text-white hover:bg-coral/90 transition-all"
        aria-label="Chat with Bo"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-3xl shadow-xl z-40 overflow-hidden border-2 border-coral/20">
          <div className="bg-coral text-white p-4 rounded-t-3xl">
            <h3 className="font-bold">Chat with Bo</h3>
            <p className="text-sm opacity-90">I usually respond within an hour</p>
          </div>

          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`mb-4 flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`rounded-2xl px-4 py-2 max-w-[80%] ${
                    msg.role === "user"
                      ? "bg-coral text-white rounded-tr-none"
                      : "bg-white text-gray-800 shadow-sm rounded-tl-none"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100">
            <div className="flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-grow px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:border-coral"
              />
              <button
                type="submit"
                className="bg-coral text-white px-4 py-2 rounded-r-full hover:bg-coral/90"
                disabled={!message.trim()}
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
