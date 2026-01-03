"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AIClientPage() {
  const aiServices = [
    {
      title: "Custom AI Assistants",
      description: "Personalized AI assistants tailored to your specific needs and business requirements",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Content Generation",
      description: "AI-powered content creation for blogs, social media, marketing materials, and more",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Data Analysis",
      description: "Extract insights from your data with advanced AI analysis tools",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows",
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
            alt="AI Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Services</h1>
            <p className="text-xl text-white/90 mb-8">
              Harness the power of artificial intelligence to transform your business and creative processes.
            </p>
            <Link
              href="#contact-form"
              className="px-6 py-3 bg-electric-blue text-white font-medium hover:bg-opacity-90 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our AI Services</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Discover how our AI solutions can help you automate tasks, generate content, and gain valuable insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="border border-gray-200 p-6 hover:shadow-lg transition-shadow">
                <div className="relative h-48 mb-4">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href="#contact-form" className="text-electric-blue hover:underline inline-flex items-center">
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Get Started with AI</h2>
            <p className="text-xl mb-8 text-center">
              Fill out the form below to discuss how our AI solutions can help your business.
            </p>
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault()

                // Form validation would go here
                // This is just a placeholder for demonstration
                alert("Form submitted! In a real application, this would be processed securely.")

                // COMMENT: In production, we would:
                // 1. Validate all inputs on the client side
                // 2. Sanitize inputs on the server side
                // 3. Use CSRF protection
                // 4. Implement rate limiting
                // 5. Store data securely
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
                <label htmlFor="service" className="block mb-2">
                  Service of Interest
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                >
                  <option value="">Select a service</option>
                  <option value="custom-assistant">Custom AI Assistant</option>
                  <option value="content-generation">Content Generation</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="ai-integration">AI Integration</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-2 bg-black border border-gray-700 focus:border-electric-blue focus:outline-none"
                  maxLength={1000}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-electric-blue text-white font-medium hover:bg-opacity-90 transition-colors"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
