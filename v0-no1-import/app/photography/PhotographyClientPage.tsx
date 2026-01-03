"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram } from "lucide-react"

export default function PhotographyClientPage() {
  const portfolioItems = [
    {
      title: "Urban Nightlife",
      category: "Event",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Product Showcase",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Corporate Portraits",
      category: "Portrait",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Bangkok Cityscape",
      category: "Landscape",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Fashion Editorial",
      category: "Fashion",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Food Photography",
      category: "Commercial",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Wedding Moments",
      category: "Event",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Travel Documentary",
      category: "Documentary",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Photography Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Photography Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Capturing moments, telling stories, and creating visual experiences that leave lasting impressions.
            </p>
            <Link
              href="#booking"
              className="px-6 py-3 bg-electric-blue text-white font-medium hover:bg-opacity-90 transition-colors"
            >
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Portfolio</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Browse through our collection of professional photography work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="relative h-64">
                  <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-sm text-electric-blue">{item.category}</span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-black text-black font-medium hover:bg-black hover:text-white transition-colors"
            >
              <Instagram className="mr-2 h-5 w-5" />
              View More on Instagram
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Book a Session</h2>
            <p className="text-xl mb-8 text-center">
              Ready to capture your special moments? Fill out the form below to get started.
            </p>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()

                // Form validation would go here
                // This is just a placeholder for demonstration
                alert("Booking request submitted! We'll contact you soon to confirm your session.")

                // COMMENT: In production, we would:
                // 1. Validate all inputs on the client side
                // 2. Sanitize inputs on the server side
                // 3. Use CSRF protection
                // 4. Check availability in a database
                // 5. Send confirmation emails
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                    pattern="^[a-zA-Z\s]{2,50}$"
                    title="Please enter a valid name (2-50 characters, letters only)"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    title="Please enter a valid email address"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service-type" className="block mb-2">
                  Service Type
                </label>
                <select
                  id="service-type"
                  name="service-type"
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="event">Event Photography</option>
                  <option value="product">Product Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="commercial">Commercial Photography</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  required
                  min={new Date().toISOString().split("T")[0]} // Prevent past dates
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                  maxLength={1000}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-electric-blue text-white font-medium hover:bg-opacity-90 transition-colors"
              >
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
