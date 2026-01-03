"use client"

import Image from "next/image"
import { ShoppingCart } from "lucide-react"

export default function ShopClientPage() {
  const products = [
    {
      id: "prod-001",
      name: "AI Prompt Engineering Guide",
      price: 29,
      image: "/placeholder.svg?height=600&width=600",
      category: "Digital",
    },
    {
      id: "prod-002",
      name: "No.1 Signature T-Shirt",
      price: 35,
      image: "/placeholder.svg?height=600&width=600",
      category: "Apparel",
    },
    {
      id: "prod-003",
      name: "Photography Presets Pack",
      price: 49,
      image: "/placeholder.svg?height=600&width=600",
      category: "Digital",
    },
    {
      id: "prod-004",
      name: "Mixology Kit",
      price: 89,
      image: "/placeholder.svg?height=600&width=600",
      category: "Physical",
    },
    {
      id: "prod-005",
      name: "Automation Workflow Templates",
      price: 39,
      image: "/placeholder.svg?height=600&width=600",
      category: "Digital",
    },
    {
      id: "prod-006",
      name: "No.1 Universe Notebook",
      price: 19,
      image: "/placeholder.svg?height=600&width=600",
      category: "Physical",
    },
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Shop & Resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Shop</h1>
            <p className="text-xl text-white/90 mb-8">
              Premium products and resources to enhance your creative and business endeavors.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              className="px-6 py-2 bg-black text-white hover:bg-electric-blue transition-colors"
              onClick={() => {
                // Filter products by category
                // This is just a placeholder for demonstration
                // COMMENT: In production, we would:
                // 1. Implement proper state management
                // 2. Filter products based on category
                // 3. Update the UI accordingly
              }}
            >
              All
            </button>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              Digital
            </button>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              Physical
            </button>
            <button className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors">
              Apparel
            </button>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Products</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Explore our curated selection of digital and physical products
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative h-80 mb-4 overflow-hidden bg-gray-100">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{product.category}</p>
                    <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                    <p className="font-bold">${product.price}</p>
                  </div>
                  <button
                    className="bg-black text-white p-2 hover:bg-electric-blue transition-colors"
                    onClick={() => {
                      // Add to cart functionality
                      // This is just a placeholder for demonstration
                      alert(`${product.name} added to cart!`)

                      // COMMENT: In production, we would:
                      // 1. Implement a proper cart system
                      // 2. Store cart items in state/localStorage
                      // 3. Update the UI accordingly
                      // 4. Implement proper checkout flow
                    }}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    <ShoppingCart className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive updates on new products, exclusive offers, and helpful resources.
          </p>
          <form
            className="max-w-md mx-auto flex flex-col md:flex-row gap-4"
            onSubmit={(e) => {
              e.preventDefault()

              // Form validation would go here
              // This is just a placeholder for demonstration
              alert("Thank you for subscribing to our newsletter!")

              // COMMENT: In production, we would:
              // 1. Validate the email on the client side
              // 2. Sanitize the input on the server side
              // 3. Add the email to a newsletter database
              // 4. Send a confirmation email
            }}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:border-black"
              required
              pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
              title="Please enter a valid email address"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 font-medium hover:bg-electric-blue transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
