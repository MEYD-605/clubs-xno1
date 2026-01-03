import Image from "next/image"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "Digital Tools & Shop | Club S by Bo",
  description:
    "Premium products and resources to enhance your creative and business endeavors - eBooks, prompt packs, AI templates, and more.",
  keywords: ["digital tools", "resources", "ebooks", "prompt packs", "AI templates", "shop"],
}

export default function ShopPage() {
  const products = [
    {
      id: "prod-001",
      name: "AI Prompt Engineering Guide",
      price: 29,
      image: "/placeholder.jpg",
      category: "Digital",
    },
    {
      id: "prod-002",
      name: "Club S Signature T-Shirt",
      price: 35,
      image: "/placeholder.jpg",
      category: "Apparel",
    },
    {
      id: "prod-003",
      name: "Photography Presets Pack",
      price: 49,
      image: "/placeholder.jpg",
      category: "Digital",
    },
    {
      id: "prod-004",
      name: "Mixology Kit",
      price: 89,
      image: "/placeholder.jpg",
      category: "Physical",
    },
    {
      id: "prod-005",
      name: "Automation Workflow Templates",
      price: 39,
      image: "/placeholder.jpg",
      category: "Digital",
    },
    {
      id: "prod-006",
      name: "Club S Notebook",
      price: 19,
      image: "/placeholder.jpg",
      category: "Physical",
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
            alt="Digital Tools & Shop"
            fill
            className="object-cover mix-blend-overlay opacity-60"
            sizes="100vw"
          />
        </div>
        <div className="container-custom z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Digital Tools & Shop</h1>
            <p className="text-xl text-white/90 mb-8">
              Premium products and resources to enhance your creative and business endeavors.
            </p>
            <Link href="#products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-warm-50 texture-overlay">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-6 py-2 bg-neutral-800 text-white hover:bg-warm-600 transition-colors rounded-md">
              All
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              Digital
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              Physical
            </button>
            <button className="px-6 py-2 border border-neutral-800 hover:bg-neutral-800 hover:text-white transition-colors rounded-md">
              Apparel
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title text-center">Featured Products</h2>
          <p className="section-description text-center mx-auto">
            Explore our curated selection of digital and physical products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="card p-6 hover:translate-y-[-5px]">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-neutral-50">
                  <ImageWithFallback
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">{product.category}</p>
                    <h3 className="text-xl font-medium mb-2 text-neutral-900">{product.name}</h3>
                    <p className="font-medium">${product.price}</p>
                  </div>
                  <button
                    className="bg-neutral-800 text-white p-2 rounded-full hover:bg-warm-600 transition-colors"
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/shop/all" className="btn btn-primary">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-6 text-white text-center">Why Choose Our Products</h2>
          <p className="text-lg text-neutral-400 mb-12 text-center max-w-3xl mx-auto">
            Quality, expertise, and value in every product
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Created by Experts</h3>
              <p className="text-neutral-400">
                All our products are created by professionals with years of experience in their industries.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Premium Quality</h3>
              <p className="text-neutral-400">
                We use only the highest quality materials and processes in our products.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-medium mb-3 text-white">Ongoing Support</h3>
              <p className="text-neutral-400">
                Your purchase includes access to updates and customer support when needed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section bg-warm-50 texture-overlay">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-medium mb-6 text-neutral-900">Stay Updated</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, exclusive offers, and helpful resources.
          </p>
          <form className="max-w-md mx-auto flex flex-col md:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Your email address"
              className="flex-grow px-4 py-3 border border-neutral-300 rounded-l-md focus:outline-none focus:border-warm-600"
              required
            />
            <button
              type="submit"
              className="bg-neutral-800 text-white px-6 py-3 font-medium hover:bg-warm-600 transition-colors rounded-r-md"
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
