"use client"

import { useState } from "react"

// Gallery images - mix of Facebook album covers and sample work
// Note: Facebook direct image links may expire, these are placeholders
// For production, use Cloudinary or similar CDN with permanent URLs
const galleryImages = [
  {
    id: 1,
    // Portrait work sample
    src: "https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/467396461_1051610146534997_2809227093959161920_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_placeholder&_nc_ht=scontent.fbkk28-1.fna&oh=00_placeholder&oe=placeholder",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=600&fit=crop",
    tags: ["sensual", "editorial"],
    title: "Portrait Session"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=600&fit=crop",
    tags: ["editorial", "moody"],
    title: "Editorial Style"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=600&fit=crop",
    tags: ["sensual", "minimal"],
    title: "Minimal Portrait"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=600&fit=crop",
    tags: ["moody", "minimal"],
    title: "Moody Vibes"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=600&fit=crop",
    tags: ["editorial", "sensual"],
    title: "Creative Editorial"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    tags: ["moody", "editorial"],
    title: "Dark Editorial"
  },
]

export default function GalleryPreview() {
  const [activeTag, setActiveTag] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const tags = [
    { id: "all", label: "All" },
    { id: "sensual", label: "#Sensual" },
    { id: "editorial", label: "#Editorial" },
    { id: "moody", label: "#Moody" },
    { id: "minimal", label: "#Minimal" },
  ]

  const filteredImages = activeTag === "all"
    ? galleryImages
    : galleryImages.filter((image) => image.tags.includes(activeTag))

  const handleImageError = (id: number) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  const getImageSrc = (image: typeof galleryImages[0]) => {
    return imageErrors[image.id] ? image.fallback : image.src
  }

  return (
    <div>
      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tags.map((tag) => (
          <button
            key={tag.id}
            onClick={() => setActiveTag(tag.id)}
            className={`px-4 py-2 rounded-full transition-all ${activeTag === tag.id
                ? "bg-orange-400 text-white"
                : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
              }`}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(image.id)}
          >
            <img
              src={getImageSrc(image)}
              alt={image.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              onError={() => handleImageError(image.id)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 w-full">
                <p className="text-white font-medium mb-2">{image.title}</p>
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

      {/* View More on Facebook */}
      <div className="text-center mt-8">
        <p className="text-body mb-4">ดูผลงานทั้งหมดบน Facebook</p>
        <a
          href="https://www.facebook.com/Clubsharephoto/photos"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1877F2] text-white hover:bg-[#166FE5] transition-colors"
        >
          📘 View All Photos on Facebook
        </a>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-orange-400 z-10"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
          <img
            src={getImageSrc(galleryImages.find(img => img.id === selectedImage)!)}
            alt="Full size"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white text-lg font-medium">
              {galleryImages.find(img => img.id === selectedImage)?.title}
            </p>
            <p className="text-white/60 text-sm mt-2">
              ดูผลงานเพิ่มเติมได้ที่ Facebook
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
