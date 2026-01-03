import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Users, Star } from "lucide-react"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Bar & Lifestyle | Club S by Bo",
  description:
    "Behind the Bar, Beyond the Glass - Professional bartending services for private parties, corporate events, and special occasions.",
  keywords: ["bartender", "mixology", "cocktails", "bar services", "event bartending"],
}

export default function BarPage() {
  const services = [
    {
      title: "Private Events",
      description: "Professional bartending services for private parties and gatherings.",
      image: "/placeholder.jpg",
      price: "Starting at $300",
      icon: <Users className="h-8 w-8 text-warm-500 mb-4" />,
    },
    {
      title: "Corporate Events",
      description: "Elevate your corporate event with professional bar services.",
      image: "/placeholder.jpg",
      price: "Starting at $500",
      icon: <Clock className="h-8 w-8 text-warm-500 mb-4" />,
    },
    {
      title: "Mixology Workshops",
      description: "Interactive cocktail classes for groups and team building activities.",
      image: "/placeholder.jpg",
      price: "Starting at $400",
      icon: <Star className="h-8 w-8 text-warm-500 mb-4" />,
    },
  ]

  const featuredCocktails = [
    {
      name: "Signature Old Fashioned",
      ingredients: "Bourbon, Demerara, Bitters, Orange",
      image: "/placeholder.jpg",
    },
    {
      name: "Thai Basil Smash",
      ingredients: "Gin, Thai Basil, Lime, Simple Syrup",
      image: "/placeholder.jpg",
    },
    {
      name: "Espresso Martini",
      ingredients: "Vodka, Coffee Liqueur, Espresso, Vanilla",
      image: "/placeholder.jpg",
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
            alt="Bar & Lifestyle Services"
            fill
            className="object-cover mix-blend-overlay opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="container-custom z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Behind the Bar, Beyond the Glass</h1>
            <p className="text-xl text-white/90 mb-8">"Every drink is a stage. Every night is a performance."</p>
            <Link href="#booking" className="btn btn-primary">
              Book for Your Event
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">My Services</h2>
          <p className="section-description">Professional bartending services tailored to your specific event needs</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card p-8 text-center">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="text-xl font-medium mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <p className="font-medium text-warm-600 mb-6">{service.price}</p>
                <Link
                  href="#booking"
                  className="text-warm-600 hover:text-warm-700 font-medium inline-flex items-center"
                >
                  Book Service <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cocktails */}
      <section className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-6 text-white text-center">Signature Cocktails</h2>
          <p className="text-lg text-neutral-400 mb-12 text-center max-w-3xl mx-auto">
            Curated signature cocktails specially crafted for your event
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCocktails.map((cocktail, index) => (
              <div key={index} className="text-center">
                <div className="relative h-64 w-64 mx-auto mb-6 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={cocktail.image || "/placeholder.svg"}
                    alt={cocktail.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 text-white">{cocktail.name}</h3>
                <p className="text-neutral-400">{cocktail.ingredients}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-warm-50 texture-overlay">
        <div className="container-custom">
          <h2 className="section-title text-center">What My Clients Say</h2>
          <p className="section-description text-center mx-auto">
            Hear from clients who have experienced my bartending services
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6">
              <p className="text-neutral-600 mb-6 italic">
                "The bartending service was excellent. The cocktails were creative and delicious, and the bartender was
                professional and engaging. Our guests were very impressed!"
              </p>
              <p className="font-medium">— Sarah, Corporate Event</p>
            </div>
            <div className="card p-6">
              <p className="text-neutral-600 mb-6 italic">
                "We hired Bo for our wedding, and it was one of the best decisions we made. The custom cocktail menu
                perfectly matched our theme, and the service was flawless."
              </p>
              <p className="font-medium">— Michael & Lisa, Wedding</p>
            </div>
            <div className="card p-6">
              <p className="text-neutral-600 mb-6 italic">
                "The mixology workshop was a hit for our team building event. Everyone enjoyed learning how to make
                cocktails, and it created a great atmosphere for networking."
              </p>
              <p className="font-medium">— David, Tech Company</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6 text-center text-white">Book for Your Event</h2>
            <p className="text-lg mb-8 text-center text-neutral-400">
              Ready to elevate your event with professional bartending services? Fill out the form below to get started.
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
                <label htmlFor="event-type" className="block mb-2 text-neutral-300">
                  Event Type
                </label>
                <select
                  id="event-type"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                  required
                >
                  <option value="">Select event type</option>
                  <option value="private">Private Party</option>
                  <option value="corporate">Corporate Event</option>
                  <option value="wedding">Wedding</option>
                  <option value="workshop">Mixology Workshop</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="date" className="block mb-2 text-neutral-300">
                  Event Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 focus:border-warm-500 focus:outline-none rounded-md text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="guests" className="block mb-2 text-neutral-300">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
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
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
