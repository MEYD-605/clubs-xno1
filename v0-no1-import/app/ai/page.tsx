import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import type { Metadata } from "next"
import ImageWithFallback from "@/components/image-with-fallback"

export const metadata: Metadata = {
  title: "AI Assistant | Club S by Bo",
  description:
    "Systems that Think While I Sleep - AI solutions that help businesses and individuals work more efficiently.",
  keywords: ["AI", "artificial intelligence", "automation", "AI assistant", "AI strategist"],
}

export default function AIPage() {
  const aiServices = [
    {
      title: "Custom AI Assistants",
      description: "Personalized AI assistants tailored to your specific needs and business requirements.",
      image: "/placeholder.jpg",
    },
    {
      title: "Content Generation",
      description: "AI-powered content creation for blogs, social media, marketing materials, and more.",
      image: "/placeholder.jpg",
    },
    {
      title: "Data Analysis",
      description: "Extract insights from your data with advanced AI analysis tools.",
      image: "/placeholder.jpg",
    },
    {
      title: "Automation Systems",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows.",
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
            alt="AI Assistant Services"
            fill
            className="object-cover mix-blend-overlay opacity-50"
            sizes="100vw"
          />
        </div>
        <div className="container-custom z-10 relative">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-medium text-white mb-6">Systems that Think While I Sleep</h1>
            <p className="text-xl text-white/90 mb-8">
              AI solutions that help businesses and individuals work more efficiently through automation and data
              analysis.
            </p>
            <Link href="#contact-form" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <h2 className="section-title">My AI Services</h2>
          <p className="section-description">
            Discover how my AI solutions can help you automate tasks, generate content, and gain valuable insights
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div key={index} className="card p-6">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <h3 className="text-xl font-medium mb-3 text-neutral-900">{service.title}</h3>
                <p className="text-neutral-600 mb-4">{service.description}</p>
                <Link
                  href="#contact-form"
                  className="text-warm-600 hover:text-warm-700 font-medium inline-flex items-center"
                >
                  Learn more <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-warm-50 texture-overlay">
        <div className="container-custom">
          <h2 className="section-title text-center">How It Works</h2>
          <p className="section-description text-center mx-auto">
            My simple process makes using AI solutions easy and effective
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Consultation</h3>
              <p className="text-neutral-600">
                We start with a detailed consultation to understand your specific needs and objectives.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Custom Solution</h3>
              <p className="text-neutral-600">
                I develop a tailored AI solution designed specifically for your requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-warm-600 text-white text-2xl flex items-center justify-center mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-medium mb-3 text-neutral-900">Implementation & Support</h3>
              <p className="text-neutral-600">
                I implement the solution and provide ongoing support to ensure optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-neutral-900 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-medium mb-6 text-white">Benefits of AI</h2>
          <p className="text-lg text-neutral-400 mb-12 max-w-3xl">Why businesses choose to use AI and automation</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-warm-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Save Time</h3>
                <p className="text-neutral-400">
                  Reduce manual tasks and free up your team's time for more valuable work.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-warm-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Reduce Errors</h3>
                <p className="text-neutral-400">Minimize human error with consistent, automated processes.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-warm-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Increase Productivity</h3>
                <p className="text-neutral-400">Accomplish more with the same resources through efficient workflows.</p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-6 w-6 text-warm-500 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-medium mb-2 text-white">Improve Scalability</h3>
                <p className="text-neutral-400">
                  Create systems that can grow with your business without proportional cost increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-medium mb-6 text-center text-neutral-900">Get Started with AI</h2>
            <p className="text-lg mb-8 text-center text-neutral-600">
              Fill out the form below to discuss how my AI solutions can help your business.
            </p>
            <form className="space-y-6 card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-neutral-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-warm-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-neutral-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-warm-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="service" className="block mb-2 font-medium text-neutral-700">
                  Service of Interest
                </label>
                <select
                  id="service"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-warm-500"
                  required
                >
                  <option value="">Select a service</option>
                  <option value="custom-assistant">Custom AI Assistant</option>
                  <option value="content-generation">Content Generation</option>
                  <option value="data-analysis">Data Analysis</option>
                  <option value="automation">Automation Systems</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 font-medium text-neutral-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-warm-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-warm-600 text-white font-medium hover:bg-warm-700 transition-colors rounded-md"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
