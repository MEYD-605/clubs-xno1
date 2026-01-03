import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CoffeeIcon as Cocktail, Clock, Users } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Craft & Chill with Bo | Club S by Bo",
  description: "Former boutique hotel bartender offering private cocktail workshops and product picks",
  keywords: ["bartender", "mixology", "cocktails", "workshops", "private events"],
}

export default function BartenderPage() {
  const workshops = [
    {
      title: "Cocktail Basics",
      description: "Learn the fundamentals of mixology and create classic cocktails",
      duration: "2 hours",
      price: "฿3,500 per person",
      minParticipants: 2,
      maxParticipants: 6,
    },
    {
      title: "Creative Mixology",
      description: "Explore innovative techniques and create signature drinks",
      duration: "3 hours",
      price: "฿4,500 per person",
      minParticipants: 2,
      maxParticipants: 4,
    },
    {
      title: "Private Bar Experience",
      description: "Custom cocktail menu for your private event with professional service",
      duration: "4+ hours",
      price: "Starting at ฿15,000",
      minParticipants: 10,
      maxParticipants: 30,
    },
  ]

  const equipment = [
    {
      name: "Professional Shaker Set",
      description: "High-quality stainless steel Boston shaker with strainer",
      price: "฿1,800",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Japanese Jigger",
      description: "Precision measuring tool for perfect proportions",
      price: "฿850",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Bar Spoon Set",
      description: "Professional bar spoons for stirring cocktails",
      price: "฿950",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pastel-yellow/30 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-coral/20 rounded-full -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-pink/20 rounded-full -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-coral/10 px-4 py-2 rounded-full text-coral mb-6 font-medium">
                Former Boutique Hotel Bartender
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Craft & Chill with Bo</h1>
              <p className="text-xl text-gray-600 mb-8">
                Elevate your events with custom cocktails or learn the art of mixology in a private workshop.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#workshops" className="btn-primary bg-coral hover:bg-coral/90">
                  Explore Workshops
                </Link>
                <Link href="/contact" className="btn-outline border-coral text-coral hover:bg-coral">
                  Book a Session
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 right-6 bottom-6 bg-pastel-coral/30 rounded-3xl"></div>
              <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-pastel-yellow/30 rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-lg aspect-[3/4]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16225.jpg-oKOF18KW4EiQKaYv6MytmrBp8f0q5x.jpeg"
                  alt="Bo as a bartender"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Mixology Workshops</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Learn the art of cocktail making in a fun, hands-on environment
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-r from-pastel-coral/30 to-pastel-yellow/30 flex items-center justify-center">
                  <Cocktail className="h-20 w-20 text-coral" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{workshop.title}</h3>
                  <p className="text-gray-600 mb-4">{workshop.description}</p>

                  <div className="flex items-center mb-2">
                    <Clock className="h-5 w-5 text-coral mr-2" />
                    <span className="text-gray-700">{workshop.duration}</span>
                  </div>

                  <div className="flex items-center mb-4">
                    <Users className="h-5 w-5 text-coral mr-2" />
                    <span className="text-gray-700">
                      {workshop.minParticipants}-{workshop.maxParticipants} participants
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="font-bold text-coral">{workshop.price}</span>
                    <Link href="/contact" className="text-coral font-medium hover:underline inline-flex items-center">
                      Book now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Recommended Equipment</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Quality tools I personally use and recommend for your home bar
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipment.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-contain p-6"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-coral">{item.price}</span>
                    <Link href={item.link} className="text-coral font-medium hover:underline inline-flex items-center">
                      Shop now <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Past Events</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Glimpses from previous workshops and private events
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="relative aspect-square rounded-3xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt={`Event gallery image ${item}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"Every drink tells a story."</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to create memorable experiences with custom cocktails? Let's craft something special together.
          </p>
          <Link href="/contact" className="btn-white text-lg px-8 py-4 text-coral">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  )
}
