"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X } from "lucide-react"

// Sample gallery images - in a real implementation, these would come from a CMS or API
const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Portrait photography",
    width: 400,
    height: 600,
    category: "Portrait",
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Landscape photography",
    width: 600,
    height: 400,
    category: "Landscape",
  },
  {
    id: 3,
    src: "/placeholder.svg?height=800&width=600",
    alt: "Editorial photography",
    width: 600,
    height: 800,
    category: "Editorial",
  },
  {
    id: 4,
    src: "/placeholder.svg?height=500&width=500",
    alt: "Product photography",
    width: 500,
    height: 500,
    category: "Product",
  },
  {
    id: 5,
    src: "/placeholder.svg?height=700&width=500",
    alt: "Fashion photography",
    width: 500,
    height: 700,
    category: "Fashion",
  },
  {
    id: 6,
    src: "/placeholder.svg?height=600&width=400",
    alt: "Event photography",
    width: 400,
    height: 600,
    category: "Event",
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Travel photography",
    width: 600,
    height: 400,
    category: "Travel",
  },
  {
    id: 8,
    src: "/placeholder.svg?height=500&width=500",
    alt: "Conceptual photography",
    width: 500,
    height: 500,
    category: "Conceptual",
  },
]

export default function GalleryMasonry() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [columns, setColumns] = useState(3)

  // Responsive column adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 1024) {
        setColumns(2)
      } else {
        setColumns(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Organize images into columns for masonry layout
  const getColumnImages = () => {
    const columnImages: (typeof galleryImages)[] = Array.from({ length: columns }, () => [])

    galleryImages.forEach((image, index) => {
      columnImages[index % columns].push(image)
    })

    return columnImages
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {getColumnImages().map((column, columnIndex) => (
          <div key={columnIndex} className="flex flex-col gap-4">
            {column.map((image) => (
              <div
                key={image.id}
                className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer polaroid-frame"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative aspect-auto">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-3 bg-white">
                  <p className="text-sm text-gray-600">{image.category}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white bg-black/50 p-2 rounded-full"
            onClick={(e) => {
              e.stopPropagation()
              setSelectedImage(null)
            }}
          >
            <X className="h-6 w-6" />
          </button>
          <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              width={selectedImage.width}
              height={selectedImage.height}
              className="max-h-[90vh] w-auto object-contain"
              sizes="90vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-4">
              <p className="font-medium">{selectedImage.alt}</p>
              <p className="text-sm text-gray-300">{selectedImage.category}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .polaroid-frame {
          background: white;
          padding: 8px 8px 20px 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform: rotate(0deg);
          transition: all 0.2s ease-in-out;
        }
        
        .polaroid-frame:hover {
          transform: rotate(-1deg) scale(1.02);
          box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </>
  )
}
