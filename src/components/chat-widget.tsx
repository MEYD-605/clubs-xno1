"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { MessageSquare, X, Send } from "lucide-react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: "สวัสดีครับ มีอะไรให้ช่วยไหมครับ?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages, isOpen])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 100)
    }
  }, [isOpen])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: "user" as const, content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const responseContent = "ขอบคุณสำหรับข้อความ ในอนาคตระบบนี้จะเชื่อมต่อกับ n8n เพื่อเก็บข้อมูลคำถามและให้คำตอบที่เหมาะสม"
      setMessages((prev) => [...prev, { role: "assistant", content: responseContent }])
      setIsLoading(false)
    }, 1000)
  }

  // ใช้ lazy loading สำหรับ chat widget
  if (typeof window === "undefined") {
    return null
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg animate-pulse-glow ${
          isOpen ? "bg-gray-700" : "bg-electric-blue"
        }`}
        aria-label={isOpen ? "ปิดแชท" : "แชทกับเรา"}
        aria-expanded={isOpen}
        aria-controls="chat-panel"
      >
        {isOpen ? <X className="h-6 w-6 text-white" /> : <MessageSquare className="h-6 w-6 text-white" />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          id="chat-panel"
          className="fixed bottom-24 left-4 right-4 sm:left-auto sm:right-6 sm:w-80 md:w-96 bg-white rounded-lg shadow-xl z-50 flex flex-col overflow-hidden"
          role="dialog"
          aria-labelledby="chat-title"
        >
          <div className="bg-gray-900 text-white p-4">
            <h3 id="chat-title" className="font-bold">
              No.1 Universe Assistant
            </h3>
            <p className="text-sm text-gray-300">ถามอะไรก็ได้เกี่ยวกับบริการของเรา</p>
          </div>

          <div className="flex-grow h-80 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
                <div
                  className={`inline-block px-4 py-2 rounded-lg ${
                    message.role === "user" ? "bg-electric-blue text-white" : "bg-gray-100 text-gray-900"
                  }`}
                >
                  {message.content}
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
            <div ref={messagesEndRef}></div>
          </div>

          <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex">
            <input
              type="text"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="พิมพ์ข้อความ..."
              className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:border-electric-blue"
              aria-label="พิมพ์ข้อความ"
            />
            <button
              type="submit"
              className="bg-electric-blue text-white p-2 rounded-r-lg hover:bg-opacity-90 transition-colors"
              disabled={isLoading || !input.trim()}
              aria-label="ส่งข้อความ"
            >
              <Send className="h-5 w-5" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}
