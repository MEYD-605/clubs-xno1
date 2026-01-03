import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, Laptop, CoffeeIcon as Cocktail, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bo's Favorite Gear | Club S by Bo",
  description: "A curated list of photography gear, creator tools, and lifestyle picks",
  keywords: ["gear", "equipment", "photography", "creator tools", "recommendations"],
}

export default function GearPage() {
  const categories = [
    { id: "photography", name: "Photography", icon: <Camera className="h-5 w-5" /> },
    { id: "tech", name: "Tech & Creator Tools", icon: <Laptop className="h-5 w-5" /> },
    { id: "bartending", name: "Bartending", icon: <Cocktail className="h-5 w-5" /> },
    { id: "lifestyle", name: "Lifestyle", icon: <Star className="h-5 w-5" /> },
  ]

  const photographyGear = [
    {
      name: "Sony Alpha a7 III",
      description: "Full-frame mirrorless camera with exceptional low-light performance",
      price: "฿69,990",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sony 85mm f/1.4 GM",
      description: "Premium portrait lens with beautiful bokeh and sharpness",
      price: "฿42,990",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Godox AD200Pro",
      description: "Versatile portable flash for on-location lighting",
      price: "฿12,900",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const techGear = [
    {
      name: "MacBook Pro M2",
      description: "Powerful laptop for photo editing and creative work",
      price: "฿59,900",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Adobe Creative Cloud",
      description: "Essential software suite for creative professionals",
      price: "฿1,890/month",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "WD My Passport SSD 2TB",
      description: "Fast, portable storage for backing up your creative work",
      price: "฿9,900",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  const bartendingGear = [
    {
      name: "Professional Boston Shaker",
      description: "High-quality stainless steel shaker for cocktail mixing",
      price: "฿1,800",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Japanese Jigger",
      description: "Precision measuring tool for perfect cocktail proportions",
      price: "฿850",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Cocktail Recipe Book",
      description: "Comprehensive guide to classic and modern cocktails",
      price: "฿1,200",
      link: "#",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pastel-yellow/20 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-coral/20 rounded-full -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-pink/20 rounded-full -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-coral/10 px-4 py-2 rounded-full text-coral mb-6 font-medium">
              Curated Recommendations
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Bo's Favorite Gear</h1>
            <p className="text-xl text-gray-600 mb-8">
              A handpicked selection of tools and equipment I personally use and recommend
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <a
                  key={category.id}
                  href={`#${category.id}`}
                  className="inline-flex items-center px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md transition-all"
                >
                  <span className="mr-2 text-coral">{category.icon}</span>
                  <span>{category.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate Disclosure */}
      <section className="py-8 bg-pastel-coral/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm">
              <strong>Affiliate Disclosure:</strong> Some links on this page are affiliate links. If you make a purchase
              through these links, I may earn a commission at no extra cost to you. I only recommend products I
              personally use and believe will add value to your creative journey.
            </p>
          </div>
        </div>
      </section>

      {/* Photography Gear Section */}
      <section id="photography" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Camera className="h-8 w-8 text-coral mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Photography Gear</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {photographyGear.map((item, index) => (
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
                      Check it out <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Gear Section */}
      <section id="tech" className="py-20 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Laptop className="h-8 w-8 text-coral mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Tech & Creator Tools</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techGear.map((item, index) => (
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
                      Check it out <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bartending Gear Section */}
      <section id="bartending" className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Cocktail className="h-8 w-8 text-coral mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Bartending Essentials</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bartendingGear.map((item, index) => (
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
                      Check it out <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Section */}
      <section id="lifestyle" className="py-20 bg-pastel-yellow/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <Star className="h-8 w-8 text-coral mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold">Lifestyle Picks</h2>
          </div>

          <div className="bg-white rounded-3xl shadow-lg p-8">
            <p className="text-xl text-gray-600 mb-8 text-center">
              Coming soon! I'm curating a collection of my favorite lifestyle products and recommendations.
            </p>
            <div className="flex justify-center">
              <Link href="/contact" className="btn-primary bg-coral hover:bg-coral/90">
                Suggest a Category
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"The right tools make all the difference."</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have questions about any of these recommendations or need personalized advice? Feel free to reach out!
          </p>
          <Link href="/contact" className="btn-white text-lg px-8 py-4 text-coral">
            Ask Me Anything
          </Link>
        </div>
      </section>
    </main>
  )
}
