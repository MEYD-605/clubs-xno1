import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import LogoGenerator from "@/components/logo-generator"

export const metadata: Metadata = {
  title: "Free Tools | Club S by Bo",
  description: "Free tools and resources for creators and businesses",
  keywords: ["free tools", "logo generator", "resources", "creative tools"],
}

export default function FreeToolsPage() {
  const tools = [
    {
      title: "Logo Generator",
      description: "Create a simple logo for your personal brand in seconds",
      image: "/placeholder.svg?height=400&width=400",
      component: <LogoGenerator />,
      available: true,
    },
    {
      title: "AI Prompt Assistant",
      description: "Generate effective prompts for AI image and text generation",
      image: "/placeholder.svg?height=400&width=400",
      available: false,
    },
    {
      title: "Color Palette Generator",
      description: "Create harmonious color palettes for your projects",
      image: "/placeholder.svg?height=400&width=400",
      available: false,
    },
    {
      title: "Social Media Caption Generator",
      description: "Generate engaging captions for your social media posts",
      image: "/placeholder.svg?height=400&width=400",
      available: false,
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
            <div className="inline-block bg-coral/10 px-4 py-2 rounded-full text-coral mb-6 font-medium">100% Free</div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Try My Free Tools</h1>
            <p className="text-xl text-gray-600 mb-8">
              A collection of free tools and resources to help you with your creative projects
            </p>
            <div className="flex justify-center">
              <Link href="#tools" className="btn-primary bg-coral hover:bg-coral/90">
                Explore Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section id="tools" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Available Tools</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Free utilities to help you with your creative and business projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {!tool.available && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="bg-coral text-white px-4 py-2 font-medium rounded-full">Coming Soon</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{tool.title}</h3>
                  <p className="text-gray-600 mb-6">{tool.description}</p>
                  {tool.component && tool.available && tool.component}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Generator Showcase */}
      <section className="py-20 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Create Your <span className="text-coral">Logo</span> for Free
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Need a simple logo for your personal brand or project? Try our free logo generator.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">Simple and clean design</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">Multiple style options</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">Download in high resolution</span>
                </li>
                <li className="flex items-center">
                  <span className="w-6 h-6 rounded-full bg-coral text-white flex items-center justify-center mr-3 flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700">Free for personal and commercial use</span>
                </li>
              </ul>
              <p className="text-gray-500 mb-4">
                Need a more customized logo? Check out our professional design services
              </p>
              <Link href="/contact" className="btn-outline border-coral text-coral hover:bg-coral hover:text-white">
                Contact for Custom Design
              </Link>
            </div>
            <div>
              <LogoGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Common questions about our free tools
          </p>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Are these tools really free?</h3>
              <p className="text-gray-600">
                Yes, all tools in this section are completely free to use. No credit card required, no hidden costs.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">Can I use the generated content commercially?</h3>
              <p className="text-gray-600">
                Yes, you can use the content generated by our tools for both personal and commercial purposes. The
                output is yours to use as you wish.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">How often are new tools added?</h3>
              <p className="text-gray-600">
                We regularly add new tools to our collection. Subscribe to our newsletter to be notified when new tools
                are available.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">I need help with a tool. Who can I contact?</h3>
              <p className="text-gray-600">
                If you need assistance with any of our tools, please contact us at barboxar.khunbo@gmail.com and we'll
                be happy to help.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"Tools are extensions of our creativity."</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Have an idea for a tool that would help you in your creative process? Let me know!
          </p>
          <Link href="/contact" className="btn-white text-lg px-8 py-4 text-coral">
            Suggest a Tool
          </Link>
        </div>
      </section>
    </main>
  )
}
