import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Recommendations & Real Use-Cases | Club S by Bo",
  description:
    "Honest recommendations for products and services that have made a difference in my work - gear, software, tools, and more.",
  keywords: ["recommendations", "gear", "software", "tools", "real use cases", "reviews"],
}

export default function RecommendPage() {
  const recommendations = [
    {
      title: "Photography Gear Setup",
      description: "The camera equipment I use for professional shoots",
      category: "Photography",
      image: "/placeholder.jpg",
      link: "https://example.com/photography-gear",
      linkText: "Try This Setup",
    },
    {
      title: "AI Tools for Creators",
      description: "The AI tools and platforms that have transformed my creative workflow",
      category: "AI & Technology",
      image: "/placeholder.jpg",
      link: "https://example.com/ai-tools",
      linkText: "Get This Deal",
    },
    {
      title: "Bartending Essentials",
      description: "Must-have tools and ingredients for professional bartending",
      category: "Bartending",
      image: "/placeholder.jpg",
      link: "https://example.com/bartending-essentials",
      linkText: "Shop This Kit",
    },
    {
      title: "Content Creation Software",
      description: "Software I use for creating and editing content",
      category: "Content Creation",
      image: "/placeholder.jpg",
      link: "https://example.com/content-software",
      linkText: "Get 20% Off",
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
            alt="Recommendations & Real Use-Cases"
            fill
            className="object-cover mix-blend-overlay opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="container-custom z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Real Tools I Actually Use</h1>
            <p className="text-xl text-white/90 mb-8">
              Honest recommendations for products and services that have made a difference in my work
            </p>
            <Link href="#recommendations" className="btn btn-primary">
              Explore Recommendations
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-warm-50 texture-overlay">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-neutral-800 text-white hover:bg-warm-600 transition-colors rounded-md">
              All
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              Photography
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              AI & Technology
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              Bartending
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              Content Creation
            </button>
          </div>
        </div>
      </section>

      {/* Recommendations Grid */}
      <section id="recommendations" className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">My Recommendations</h2>
          <p className="section-description text-center mx-auto">
            Products and services I personally use and recommend
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recommendations.map((item, index) => (
              <div key={index} className="card p-6">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-warm-600 text-white px-3 py-1 text-sm font-medium rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-medium mb-3 text-neutral-900">{item.title}</h3>
                <p className="text-neutral-600 mb-6">{item.description}</p>
                <Link href={item.link} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                  {item.linkText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer Section */}
      <section className="section bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-medium mb-6 text-neutral-900 text-center">Affiliate Disclosure</h2>
            <div className="card p-6">
              <p className="text-neutral-600 mb-4">
                Some of the links on this page are affiliate links. This means if you click on the link and purchase the
                item, I will receive an affiliate commission at no extra cost to you.
              </p>
              <p className="text-neutral-600 mb-4">
                I only recommend products or services I personally use and believe will add value to my readers. I am
                disclosing this in accordance with the Federal Trade Commission's 16 CFR, Part 255: "Guides Concerning
                the Use of Endorsements and Testimonials in Advertising."
              </p>
              <p className="text-neutral-600">
                All opinions expressed here are my own and are not influenced by any affiliate program or company.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-warm-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-medium mb-6">Stay Updated on New Recommendations</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to receive notifications when I discover new tools and products worth sharing.
          </p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              className="flex-grow px-4 py-3 bg-white/10 border border-white/30 text-white placeholder-white/70 rounded-l-md focus:outline-none focus:bg-white/20"
              required
            />
            <button
              type="submit"
              className="bg-white text-warm-700 px-6 py-3 font-medium hover:bg-neutral-100 transition-colors rounded-r-md"
              aria-label="Subscribe to newsletter"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
