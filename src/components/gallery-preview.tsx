import { useState } from "react"
import { galleryImages, galleryTags as tags } from "../data/gallery"

export default function GalleryPreview() {
  const [activeTag, setActiveTag] = useState("all")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({})

  const filteredImages = activeTag === "all"
    ? galleryImages
    : galleryImages.filter(img => img.tags.includes(activeTag))

  const handleImageError = (imageId: number) => {
    setImageErrors(prev => ({ ...prev, [imageId]: true }))
  }

  const selected = selectedImage === null
    ? null
    : galleryImages.find(img => img.id === selectedImage) ?? null

  return (
    <div className="space-y-8">
      {/* Filter Tags */}
      <div className="flex flex-wrap justify-center gap-3">
        {tags.map(tag => (
          <button
            key={tag.id}
            onClick={() => setActiveTag(tag.id)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeTag === tag.id
              ? "bg-accent text-white shadow-lg"
              : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            style={activeTag === tag.id ? { backgroundColor: '#FF6B35' } : {}}
          >
            {tag.label}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <button
            key={image.id}
            className="group relative aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer bg-white/5"
            onClick={() => setSelectedImage(image.id)}
            type="button"
            aria-label={`Open preview: ${image.title}`}
          >
            <img
              src={imageErrors[image.id] ? image.fallback : image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
              onError={() => handleImageError(image.id)}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-white font-medium text-lg">{image.title}</h3>
                <div className="flex gap-2 mt-2">
                  {image.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-white/20 text-white"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
        >
          <button
            className="absolute top-4 right-4 text-white text-4xl hover:text-accent transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
            style={{ color: '#FF6B35' }}
            type="button"
            aria-label="Close image preview"
          >
            ×
          </button>
          <img
            src={selected?.src ?? ""}
            alt={selected?.alt ?? ""}
            width={selected?.width}
            height={selected?.height}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  )
}
