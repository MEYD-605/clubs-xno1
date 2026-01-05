"use client"

import { useState } from "react"
import Image from "react" // Placeholder
import { ShoppingCart } from "lucide-react"

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("digital")

  const products = {
    digital: [
      {
        id: "prod-001",
        name: "AI Prompt Engineering Guide",
        price: 29,
        image: "/placeholder.svg?height=600&width=600",
        featured: true,
      },
      {
        id: "prod-003",
        name: "Photography Presets Pack",
        price: 49,
        image: "/placeholder.svg?height=600&width=600",
        featured: false,
      },
      {
        id: "prod-005",
        name: "Automation Workflow Templates",
        price: 39,
        image: "/placeholder.svg?height=600&width=600",
        featured: false,
      },
    ],
    physical: [
      {
        id: "prod-004",
        name: "Mixology Kit",
        price: 89,
        image: "/placeholder.svg?height=600&width=600",
        featured: true,
      },
      {
        id: "prod-006",
        name: "Club S Notebook",
        price: 19,
        image: "/placeholder.svg?height=600&width=600",
        featured: false,
      },
    ],
    apparel: [
      {
        id: "prod-002",
        name: "Club S Signature T-Shirt",
        price: 35,
        image: "/placeholder.svg?height=600&width=600",
        featured: true,
      },
    ],
  }

  const tabs = [
    { id: "digital", label: "Digital" },
    { id: "physical", label: "Physical" },
    { id: "apparel", label: "Apparel" },
  ]

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-clubs-light rounded-lg p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-clubs-primary text-white shadow-soft"
                  : "text-clubs-text hover:bg-clubs-light hover:text-clubs-primary"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products[activeTab as keyof typeof products].map((product) => (
          <div
            key={product.id}
            className={`product-card p-6 hover-lift ${product.featured ? "product-card-featured" : ""}`}
          >
            <div className="relative h-64 mb-6 rounded-lg overflow-hidden bg-clubs-light">
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                fill
                className="object-contain transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-medium mb-2 text-clubs-text">{product.name}</h3>
                <p className="font-medium text-clubs-primary">${product.price}</p>
              </div>
              <button
                className="bg-clubs-text text-white p-2 rounded-full hover:bg-clubs-primary transition-colors"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
