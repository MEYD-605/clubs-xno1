import Image from "next/image"
import Link from "next/link"
import { Instagram, Calendar, Users, Clock } from "lucide-react"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Photography | Club S by Bo",
  description:
    "My Lens, Your Story - Professional photography services capturing moments, telling stories, and creating visual experiences.",
  keywords: ["photography", "photographer", "portrait", "event photography", "commercial photography"],
}

export default function PhotographyPage() {
  const portfolioItems = [
    {
      title: "Urban Nightlife",
      category: "Event",
      image: "/placeholder.jpg",
    },
    {
      title: "Product Showcase",
      category: "Commercial",
      image: "/placeholder.jpg",
    },
    {
      title: "Corporate Portraits",
      category: "Portrait",
      image: "/placeholder.jpg",
    },
    {
      title: "Bangkok Cityscape",
      category: "Landscape",
      image: "/placeholder.jpg",
    },
    {
      title: "Fashion Editorial",
      category: "Fashion",
      image: "/placeholder.jpg",
    },
    {
      title: "Food Photography",
      category: "Commercial",
      image: "/placeholder.jpg",
    },
    {
      title: "Wedding Moments",
      category: "Event",
      image: "/placeholder.jpg",
    },
    {
      title: "Travel Documentary",
      category: "Documentary",
      image: "/placeholder.jpg",
    },
  ]

  const services = [
    {
      title: "Event Photography",
      description: "Professional photography services for corporate events, parties, and special occasions.",
      price: "Starting at $500",
      icon: <Calendar className="h-8 w-8 text-warm-500 mb-4" />,
    },
    {
      title: "Product Photography",
      description: "High-quality product images for e-commerce, catalogs, and marketing materials.",
      price: "Starting at $300",
      icon: <Clock className="h-8 w-8 text-warm-500 mb-4" />,
    },
    {
      title: "Portrait Sessions",
      description: "Individual and group portraits for personal and professional use.",
      price: "Starting at $250",
      icon: <Users className="h-8 w-8 text-warm-500 mb-4" />,
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-neutral-900"></div>
          <Image
            src="/placeholder.jpg"
            alt="Photography Services"
            fill
            className="object-cover mix-blend-overlay opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="container-custom z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">My Lens, Your Story</h1>
            <p className="text-xl text-white/90 mb-8">
              Professional photography services capturing moments, telling stories, and creating visual experiences.
            </p>
            <Link href="#booking" className="btn btn-primary">
              Book a Session
            </Link>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">Portfolio</h2>
          <p className="section-description">Browse through my collection of professional photography work</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <div className="relative h-64">
                  <ImageWithFallback
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                    <span className="text-sm text-warm-500">{item.category}</span>
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
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
              className="btn btn-secondary inline-flex items-center"
            >
              <Instagram className="mr-2 h-5 w-5" />
              See More on Instagram
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-warm-50 texture-overlay">
        <div className="container-custom">
          <h2 className="section-title">Photography Services</h2>
          <p className="section-description">Professional photography services tailored to your specific needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <p className="font-medium text-warm-600">{service.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">My Process</h2>
          <p className="section-description">How I work with you to create stunning photographs</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Consultation</h3>
              <p className="text-neutral-600">We discuss your vision, goals, and specific requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Planning</h3>
              <p className="text-neutral-600">I create a detailed plan for your photography session.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Shooting</h3>
              <p className="text-neutral-600">Professional photography session with state-of-the-art equipment.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                4
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Delivery</h3>
              <p className="text-neutral-600">Professional editing and delivery of final images.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6 text-center text-white">Book a Session</h2>
            <p className="text-lg mb-8 text-center text-neutral-400">
              Ready to capture your special moments? Fill out the form below to get started.
            </p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-neutral-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-neutral-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service-type" className="block mb-2 text-neutral-300">
                  Service Type
                </label>
                <select
                  id="service-type"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="event">Event Photography</option>
                  <option value="product">Product Photography</option>
                  <option value="portrait">Portrait Session</option>
                  <option value="commercial">Commercial Photography</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-neutral-300">
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-neutral-300">
                  Additional Details
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-warm-600 text-white font-medium hover:bg-warm-700 transition-colors rounded-md"
              >
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
