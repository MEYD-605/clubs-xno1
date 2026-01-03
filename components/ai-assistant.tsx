"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

type AssistantType = "technical" | "booking" | "event" | "product"

interface AIAssistantProps {
  type: AssistantType
}

export default function AIAssistant({ type }: AIAssistantProps) {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    {
      role: "assistant",
      content: getInitialMessage(type),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  function getInitialMessage(type: AssistantType): string {
    switch (type) {
      case "technical":
        return "Hi there! I'm the AI Technical Assistant. How can I help you with AI systems today?"
      case "booking":
        return "Hello! I'm the Photography Booking Assistant. Interested in booking a session or have questions about our photography services?"
      case "event":
        return "Welcome! I'm the Event Assistant. Looking to hire a bartender for your event or interested in our mixology services?"
      case "product":
        return "Hi there! I'm the Product Assistant. Can I help you find something specific from our shop or answer any product questions?"
      default:
        return "Hello! How can I assist you today?"
    }
  }

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
      const responseContent = generateResponse(input, type)
      setMessages((prev) => [...prev, { role: "assistant", content: responseContent }])
      setIsLoading(false)
    }, 1000)
  }

  function generateResponse(userInput: string, type: AssistantType): string {
    // This is a simple mock response generator
    // In a real application, this would connect to an actual AI service
    const input = userInput.toLowerCase()

    switch (type) {
      case "technical":
        if (input.includes("machine learning") || input.includes("ml")) {
          return "Machine learning is a core component of our AI systems. We specialize in both supervised and unsupervised learning approaches, tailored to your specific needs. Would you like to know more about a specific application?"
        } else if (input.includes("pricing") || input.includes("cost")) {
          return "Our AI solutions are custom-priced based on your specific requirements. We'd be happy to provide a detailed quote after understanding your project needs. Would you like to schedule a consultation?"
        } else {
          return "Thanks for your interest in our AI systems. We offer custom solutions for businesses of all sizes. Could you tell me more about your specific needs or the problem you're trying to solve?"
        }

      case "booking":
        if (input.includes("price") || input.includes("cost") || input.includes("rate")) {
          return "Our photography sessions start at $300 for basic portraits and range up to $1,200+ for full event coverage. The exact price depends on your specific needs, location, and duration. Would you like me to provide more details about a specific type of photography service?"
        } else if (input.includes("available") || input.includes("schedule") || input.includes("book")) {
          return "We currently have availability in the coming weeks. To book a session, we'll need to know your preferred date, location, and the type of photography you're interested in. Would you like to proceed with checking specific dates?"
        } else {
          return "Thank you for your interest in our photography services. We offer portrait, event, and commercial photography. What type of photography session are you looking for?"
        }

      case "event":
        if (input.includes("price") || input.includes("cost") || input.includes("rate")) {
          return "Our bartending services start at $350 for a 4-hour event with one bartender. The final cost depends on guest count, event duration, and whether you'd like custom cocktails. Would you like a custom quote for your specific event?"
        } else if (input.includes("available") || input.includes("date")) {
          return "We're currently booking events for the upcoming months. To check availability, we'll need your event date, location, expected guest count, and duration. Would you like to provide these details so I can check our calendar?"
        } else {
          return "Thanks for your interest in our bartending services. We offer professional bartenders for private parties, corporate events, and special celebrations. Could you tell me more about your event?"
        }

      case "product":
        if (input.includes("shipping") || input.includes("delivery")) {
          return "We offer worldwide shipping. Standard domestic shipping takes 3-5 business days and costs $5 (free for orders over $50). International shipping typically takes 7-14 business days and starts at $15. Would you like to know about shipping for a specific product?"
        } else if (input.includes("return") || input.includes("exchange")) {
          return "We have a 30-day return policy for most items. Products must be unused and in original packaging. Custom orders are non-returnable. Would you like me to explain the return process in more detail?"
        } else {
          return "Thank you for your interest in our products. We offer a range of items from apparel to art prints and specialty goods. Is there a specific category or product you're looking for?"
        }

      default:
        return "Thank you for your message. How can I assist you further?"
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="h-96 overflow-y-auto p-4 bg-white">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 ${message.role === "user" ? "text-right" : "text-left"}`}>
            <div
              className={`inline-block px-4 py-2 rounded-lg ${
                message.role === "user" ? "bg-black text-white" : "bg-gray-100 text-black"
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
      </div>
      <form onSubmit={handleSendMessage} className="border-t border-gray-200 p-4 flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="flex-grow px-4 py-2 focus:outline-none"
        />
        <button
          type="submit"
          className="ml-2 bg-black text-white p-2 rounded-full hover:bg-electric-blue transition-colors"
          disabled={isLoading}
        >
          <Send className="h-5 w-5" />
        </button>
      </form>
    </div>
  )
}
