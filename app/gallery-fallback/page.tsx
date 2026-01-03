import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Club S by Bo",
  description: "Gallery of photography work by Club S by Bo",
}

export default function GalleryFallbackPage() {
  return (
    <main className="pt-24">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pastel-yellow/20 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-coral/20 rounded-full -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-pink/20 rounded-full -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <div className="bg-white rounded-3xl shadow-lg p-8 mb-8">
              <p className="text-xl text-gray-600">Gallery is being updated. Please check back later.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
