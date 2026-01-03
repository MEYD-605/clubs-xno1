"use client"

import type React from "react"

import { useState } from "react"
import { Download } from "lucide-react"

export default function LogoGenerator() {
  const [logoName, setLogoName] = useState("")
  const [style, setStyle] = useState("minimal")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate input
    if (!logoName.trim()) {
      setError("Please enter a brand name")
      return
    }

    setError(null)
    setIsGenerating(true)
    setGeneratedLogo(null)

    // Simulate logo generation
    setTimeout(() => {
      setIsGenerating(false)
      setGeneratedLogo("/placeholder.svg?height=400&width=400")
    }, 2000)
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="p-6">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label htmlFor="logo-name" className="block mb-2 font-medium text-gray-700">
              Brand Name
            </label>
            <input
              type="text"
              id="logo-name"
              value={logoName}
              onChange={(e) => {
                setLogoName(e.target.value)
                if (error) setError(null)
              }}
              placeholder="Enter your brand name"
              className={`w-full px-4 py-2 border rounded-full focus:outline-none ${
                error ? "border-red-500" : "border-gray-300 focus:border-coral"
              }`}
              aria-invalid={!!error}
              aria-describedby={error ? "logo-name-error" : undefined}
              required
            />
            {error && (
              <p id="logo-name-error" className="text-red-500 text-sm mt-1">
                {error}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="style" className="block mb-2 font-medium text-gray-700">
              Logo Style
            </label>
            <select
              id="style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-coral"
              aria-label="Select logo style"
            >
              <option value="minimal">Minimal</option>
              <option value="modern">Modern</option>
              <option value="bold">Bold</option>
              <option value="creative">Creative</option>
              <option value="elegant">Elegant</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full px-6 py-3 bg-coral text-white font-medium hover:bg-coral/90 transition-colors rounded-full disabled:bg-gray-400"
            aria-label="Generate Logo"
          >
            {isGenerating ? "Generating..." : "Generate Logo"}
          </button>
        </form>
      </div>

      {isGenerating && (
        <div className="p-6 border-t border-gray-100 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-coral mx-auto" aria-hidden="true"></div>
          <p className="mt-4 text-gray-600" aria-live="polite">
            Creating your logo...
          </p>
        </div>
      )}

      {generatedLogo && (
        <div className="p-6 border-t border-gray-100">
          <div className="relative h-64 w-full mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-3xl font-bold text-coral">{logoName}</div>
              <div className="text-sm text-gray-500 mt-2">Generated Logo</div>
            </div>
          </div>
          <button
            className="w-full px-6 py-3 bg-gray-900 text-white font-medium hover:bg-coral transition-colors rounded-full flex items-center justify-center"
            aria-label="Download Logo"
          >
            <Download className="mr-2 h-5 w-5" /> Download Logo
          </button>
        </div>
      )}
    </div>
  )
}
