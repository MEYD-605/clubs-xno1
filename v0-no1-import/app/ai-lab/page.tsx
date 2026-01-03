import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Cpu, Zap, Sparkles, Bot } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Bo's AI Lab | Club S by Bo",
  description: "AI tools and automation workflows for creators and businesses",
  keywords: ["AI", "automation", "n8n", "prompt engineering", "workflow"],
}

export default function AILabPage() {
  const aiServices = [
    {
      title: "Workflow Automation",
      description: "Custom n8n workflows to automate your business processes",
      icon: <Zap className="h-8 w-8 text-coral" />,
      comingSoon: false,
    },
    {
      title: "AI Prompt Engineering",
      description: "Expert prompt design for optimal AI-generated content",
      icon: <Sparkles className="h-8 w-8 text-coral" />,
      comingSoon: false,
    },
    {
      title: "Custom AI Assistants",
      description: "Tailored AI assistants for your specific business needs",
      icon: <Bot className="h-8 w-8 text-coral" />,
      comingSoon: true,
    },
    {
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems",
      icon: <Cpu className="h-8 w-8 text-coral" />,
      comingSoon: true,
    },
  ]

  const tools = [
    {
      name: "n8n",
      description: "Fair-code licensed workflow automation tool with 200+ integrations",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://n8n.io/",
    },
    {
      name: "Make.com",
      description: "Visual platform to design, build, and automate anything",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://make.com/",
    },
    {
      name: "OpenAI",
      description: "Leading AI research lab behind GPT models",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://openai.com/",
    },
    {
      name: "Midjourney",
      description: "AI image generation tool for creating stunning visuals",
      image: "/placeholder.svg?height=100&width=100",
      link: "https://midjourney.com/",
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-coral/10 px-4 py-2 rounded-full text-coral mb-6 font-medium">
                AI & Automation Expert
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Bo's AI Lab</h1>
              <p className="text-xl text-gray-600 mb-8">
                I use AI for workflow automation, content creation, and business optimization. Let me help you harness
                the power of AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="#services" className="btn-primary bg-coral hover:bg-coral/90">
                  Explore Services
                </Link>
                <Link href="/contact" className="btn-outline border-coral text-coral hover:bg-coral">
                  Get Started
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -top-6 -left-6 right-6 bottom-6 bg-pastel-coral/30 rounded-3xl"></div>
              <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-pastel-yellow/30 rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden border-4 border-white shadow-lg aspect-[3/4]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/16226.jpg-aH6fydwCJSUeTJ1LPNUsHmvQiyCNnf.jpeg"
                  alt="Bo with creative AI concept"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">AI Services</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Leverage the power of AI to streamline your workflows and enhance your creative process
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative"
              >
                {service.comingSoon && (
                  <div className="absolute top-4 right-4 bg-pastel-yellow px-3 py-1 rounded-full text-sm font-medium">
                    Coming Soon
                  </div>
                )}
                <div className="p-8">
                  <div className="bg-pastel-coral/10 p-4 rounded-2xl inline-block mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {!service.comingSoon && (
                    <Link href="/contact" className="text-coral font-medium hover:underline inline-flex items-center">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Tools I Use</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Professional tools and platforms that power my AI and automation workflows
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Link
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 relative">
                  <Image
                    src={tool.image || "/placeholder.svg"}
                    alt={tool.name}
                    fill
                    className="object-contain"
                    sizes="64px"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Automation Examples</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Real-world examples of how I've used AI and automation to solve problems
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Photography workflow automation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">Photography Client Workflow</h3>
                <p className="text-gray-600 mb-4">
                  Automated client onboarding, scheduling, and delivery process for my photography business, saving 10+
                  hours per week.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pastel-yellow/30 rounded-full text-sm">n8n</span>
                  <span className="px-3 py-1 bg-pastel-coral/30 rounded-full text-sm">Google Calendar</span>
                  <span className="px-3 py-1 bg-pastel-pink/30 rounded-full text-sm">Airtable</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="AI content generation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-gray-900">AI Content Generation System</h3>
                <p className="text-gray-600 mb-4">
                  Built a custom system to generate, review, and schedule social media content using AI, reducing
                  content creation time by 70%.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-pastel-yellow/30 rounded-full text-sm">OpenAI</span>
                  <span className="px-3 py-1 bg-pastel-coral/30 rounded-full text-sm">Make.com</span>
                  <span className="px-3 py-1 bg-pastel-pink/30 rounded-full text-sm">Instagram API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Tools Section */}
      <section className="py-20 bg-pastel-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Coming Soon: AI Tool Shop</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            I'm developing a collection of AI tools, templates, and resources to help creators and businesses leverage
            the power of AI.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="btn-primary bg-coral hover:bg-coral/90">
              Join the Waitlist
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">"Let AI work for you, not the other way around."</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to transform your workflows with the power of AI? Let's create something amazing together.
          </p>
          <Link href="/contact" className="btn-white text-lg px-8 py-4 text-coral">
            Start Your AI Journey
          </Link>
        </div>
      </section>
    </main>
  )
}
