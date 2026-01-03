"use client"

import type React from "react"

import { useState } from "react"
import { Download } from "lucide-react"

export default function FreeLogoGenerator() {
  const [logoName, setLogoName] = useState("")
  const [style, setStyle] = useState("minimal")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedLogo, setGeneratedLogo] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate input
    if (!logoName.trim()) {
      setError("กรุณาใส่ชื่อแบรนด์")
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
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-6">
        <form onSubmit={handleGenerate} className="space-y-4">
          <div>
            <label htmlFor="logo-name" className="block mb-2 font-medium">
              ชื่อแบรนด์
            </label>
            <input
              type="text"
              id="logo-name"
              value={logoName}
              onChange={(e) => {
                setLogoName(e.target.value)
                if (error) setError(null)
              }}
              placeholder="ใส่ชื่อแบรนด์ของคุณ"
              className={`w-full px-4 py-2 border rounded focus:outline-none ${
                error ? "border-red-500" : "border-gray-300 focus:border-electric-blue"
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
            <label htmlFor="style" className="block mb-2 font-medium">
              สไตล์โลโก้
            </label>
            <select
              id="style"
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-electric-blue"
              aria-label="เลือกสไตล์โลโก้"
            >
              <option value="minimal">มินิมอล</option>
              <option value="modern">โมเดิร์น</option>
              <option value="bold">ตัวหนา</option>
              <option value="creative">สร้างสรรค์</option>
              <option value="tech">เทคโนโลยี</option>
            </select>
          </div>
          <button
            type="submit"
            disabled={isGenerating}
            className="w-full px-6 py-3 bg-electric-blue text-white font-medium hover:bg-opacity-90 transition-colors disabled:bg-gray-400"
            aria-label="สร้างโลโก้"
          >
            {isGenerating ? "กำลังสร้าง..." : "สร้างโลโก้"}
          </button>
        </form>
      </div>

      {isGenerating && (
        <div className="p-6 border-t border-gray-200 text-center">
          <div
            className="animate-spin rounded-full h-12 w-12 border-b-2 border-electric-blue mx-auto"
            aria-hidden="true"
          ></div>
          <p className="mt-4 text-gray-600" aria-live="polite">
            กำลังสร้างโลโก้ของคุณ...
          </p>
        </div>
      )}

      {generatedLogo && (
        <div className="p-6 border-t border-gray-200">
          <div className="relative h-64 w-full mb-4">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-center">
                <div className="text-3xl font-bold">{logoName}</div>
                <div className="text-sm text-gray-500">โลโก้ที่สร้างขึ้น</div>
              </div>
            </div>
          </div>
          <button
            className="w-full px-6 py-3 bg-gray-900 text-white font-medium hover:bg-electric-blue transition-colors flex items-center justify-center"
            aria-label="ดาวน์โหลดโลโก้"
          >
            <Download className="mr-2 h-5 w-5" /> ดาวน์โหลดโลโก้
          </button>
        </div>
      )}
    </div>
  )
}
