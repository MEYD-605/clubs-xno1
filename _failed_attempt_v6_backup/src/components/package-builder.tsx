"use client"

import { useState } from "react"
import { Check, Plus } from "lucide-react"
import Link from "react" // Placeholder

const packageOptions = [
  {
    category: "Session Type",
    options: [
      { id: "portrait", name: "Portrait Session", price: 3500, description: "1-hour professional portrait session" },
      { id: "editorial", name: "Editorial", price: 7500, description: "3-hour creative direction with styling" },
      { id: "sensual", name: "Sensual", price: 5500, description: "Private 2-hour session with enhanced privacy" },
    ],
  },
  {
    category: "Add-ons",
    options: [
      { id: "makeup", name: "Professional Makeup", price: 1500, description: "On-set makeup artist" },
      { id: "location", name: "Premium Location", price: 2000, description: "Studio or exclusive venue" },
      { id: "extra-time", name: "Extra Hour", price: 1800, description: "Additional shooting time" },
    ],
  },
  {
    category: "Deliverables",
    options: [
      { id: "digital", name: "Digital Package", price: 1000, description: "All edited photos in high resolution" },
      { id: "prints", name: "Print Package", price: 2500, description: "5 professional prints of your choice" },
      { id: "album", name: "Photo Album", price: 3500, description: "Custom designed photo album" },
    ],
  },
]

export default function PackageBuilder() {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const toggleOption = (id: string) => {
    if (selectedOptions.includes(id)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== id))
    } else {
      setSelectedOptions([...selectedOptions, id])
    }
  }

  const calculateTotal = () => {
    return packageOptions
      .flatMap((category) => category.options.filter((option) => selectedOptions.includes(option.id)))
      .reduce((total, option) => total + option.price, 0)
  }

  return (
    <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
      <div className="p-6 md:p-8">
        {packageOptions.map((category, index) => (
          <div key={category.category} className={index !== 0 ? "mt-8 pt-8 border-t border-gray-100" : ""}>
            <h3 className="text-xl font-bold mb-4">{category.category}</h3>
            <div className="space-y-4">
              {category.options.map((option) => (
                <div
                  key={option.id}
                  className={`flex items-center p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                    selectedOptions.includes(option.id)
                      ? "border-coral bg-coral/5"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  onClick={() => toggleOption(option.id)}
                >
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center mr-4 flex-shrink-0 ${
                      selectedOptions.includes(option.id) ? "bg-coral text-white" : "bg-gray-200"
                    }`}
                  >
                    {selectedOptions.includes(option.id) ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4 text-gray-500" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <span className="font-medium">{option.name}</span>
                      <span className="font-bold">฿{option.price.toLocaleString()}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 pt-8 border-t border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold">Total</span>
            <span className="text-2xl font-bold text-coral">฿{calculateTotal().toLocaleString()}</span>
          </div>

          <Link
            href="/contact"
            className={`w-full py-4 rounded-full font-bold text-center block transition-all ${
              selectedOptions.length > 0
                ? "bg-coral text-white hover:bg-coral/90"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }`}
          >
            Book This Package
          </Link>

          <p className="text-center text-sm text-gray-500 mt-4">
            Or{" "}
            <Link href="/contact" className="text-coral hover:underline">
              contact us
            </Link>{" "}
            for a custom quote
          </p>
        </div>
      </div>
    </div>
  )
}
