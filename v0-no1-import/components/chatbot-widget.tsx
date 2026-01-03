"use client"

import type React from "react"

import { useState, useRef } from "react"
import { MessageSquare, X, Send } from "lucide-react"

// Function to sanitize user input to prevent XSS
const sanitizeInput = (input: string): string => {
  // Replace potentially dangerous characters
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#096;")
    .replace(/\(/g, "&#040;")
    .replace(/\)/g, "&#041;")
}

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "Hi there! How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
    // Focus the input field when opening the chat
    if (!isOpen) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()

    // Trim and validate input
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    // Sanitize input to prevent XSS
    const sanitizedInput = sanitizeInput(trimmedInput)

    // Add user message
    const userMessage = { role: "user" as const, content: sanitizedInput }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responseContent =
        "Thank you for your message! This is a placeholder response. In the future, this will be connected to n8n to collect user queries and provide real assistance."
      setMessages((prev) => [...prev, { role: "assistant", content: responseContent }])
      setIsLoading(false)

      // COMMENT: Log conversation to n8n via webhook
      // Implementation would look like:
      // fetch('https://n8n.no1universe.com/webhook/chatbot', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     userMessage: sanitizedInput,
      //     botResponse: responseContent,
      //     timestamp: new Date().toISOString(),
      //     sessionId: 'unique-session-id'
      //   })
      // })
    }, 1000)
  }

  // Validate input as user types
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value

    // Prevent script tags and other potentially harmful inputs
    if (/<script|javascript:|onerror=|onclick=|alert\(|eval\(|new Function\(/i.test(value)) {
      alert("Please don't enter code or scripts in the chat.")
      return
    }

    setInput(value)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg animate-pulse-glow ${
          isOpen ? "bg-gray-700" : "bg-electric-blue"
        }`}
        aria-label="Chat with us"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden">
          <div className="bg-black text-white p-4">
            <h3 className="font-bold">No.1 Universe Assistant</h3>
            <p className="text-sm text-gray-300">Ask us anything about our services</p>
          </div>

          <div className="flex-grow h-80 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.role === "user" ? "bg-electric-blue text-white" : "bg-gray-100 text-black"
                  }`}
                >
                  {/* Using dangerouslySetInnerHTML here is safe because we sanitized the input */}
                  <span dangerouslySetInnerHTML={{ __html: message.content }}></span>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block px-4 py-2 rounded-lg bg-gray-100">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex">
            <input
              type="text"
              ref={inputRef}
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-electric-blue"
              maxLength={500} // Limit input length
              aria-label="Chat message"
            />
            <button
              type="submit"
              className="bg-electric-blue text-white p-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
              disabled={isLoading || !input.trim()}
              aria-label="Send message"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
