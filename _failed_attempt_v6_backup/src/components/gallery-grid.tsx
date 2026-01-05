"use client"

import { useState } from "react"
import Image from "react" // Placeholder

export default function GalleryGrid() {
  const [activeTag, setActiveTag] = useState("all")

  const tags = [
    { id: "all", label: "All" },
    { id: "sensual", label: "#Sensual" },
    { id: "editorial", label: "#Editorial" },
    { id: "moody", label: "#Moody" },
    { id: "minimal", label: "#Minimal" },
  ]

  const images = [
    { id: 1, src: "/placeholder.svg?height=600&width=400", tags: ["sensual", "editorial"] },
    { id: 2, src: "/placeholder.svg?height=600&width=400", tags: ["editorial", "moody"] },
    { id: 3, src: "/placeholder.svg?height=600&width=400", tags: ["sensual", "minimal"] },
    { id: 4, src: "/placeholder.svg?height=600&width=400", tags: ["moody", "minimal"] },
    { id: 5, src: "/placeholder.svg?height=600&width=400", tags: ["editorial", "sensual"] },
    { id: 6, src: "/placeholder.svg?height=600&width=400", tags: ["moody", "editorial"] },
  ]

  const filteredImages = activeTag === "all" ? images : images.filter((image) => image.tags.includes(activeTag))

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setActiveTag(tag.id)}
            className={`px-4 py-2 rounded-full transition-all ${
              activeTag === tag.id ? "bg-coral text-white" : "bg-gray-100 text-gray-700 hover:bg-pastel-coral/10"
            }`}
          >
            {tag.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="relative aspect-[3/4] rounded-3xl overflow-hidden group">
            <Image
              src={image.src || "/placeholder.svg"}
              alt="Gallery image"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <div className="flex flex-wrap gap-2">
                  {image.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
