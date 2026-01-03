import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Camera, Star, Sparkles } from "lucide-react"
import FloatingElements from "@/components/floating-elements"
import ServiceCard from "@/components/service-card"
import GalleryGrid from "@/components/gallery-grid"
import PackageBuilder from "@/components/package-builder"
import ChatButton from "@/components/chat-button"
import SocialIcons from "@/components/social-icons"

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16">
        <FloatingElements />

        <div className="container mx-auto px-4 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 text-center lg:text-left">
              <div className="inline-block bg-coral/10 px-4 py-2 rounded-full text-coral mb-6 font-medium">
                Portrait Photographer & Creative
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                We don't shoot just photos.
                <span className="text-coral block mt-2">We shoot feelings.</span>
              </h1>

              <p className="text-lg md:text-xl mb-8 text-gray-600 font-sarabun">
                เพราะคุณไม่ได้ต้องการแค่รูป — <br />
                คุณต้องการความรู้สึกที่สะท้อนตัวคุณเองกลับมา
              </p>

              <div className="mb-8">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4 bg-coral hover:bg-coral/90">
                  Book Your Private Session
                </Link>
              </div>

              <div className="mt-8 flex justify-center lg:justify-start">
                <SocialIcons />
              </div>
            </div>

            <div className="order-1 lg:order-2 relative">
              <div className="relative mx-auto lg:ml-auto lg:mr-0 max-w-md">
                {/* Layered background for the image */}
                <div className="absolute -top-6 -left-6 right-6 bottom-6 bg-pastel-yellow rounded-3xl"></div>
                <div className="absolute -top-3 -left-3 right-3 bottom-3 bg-pastel-pink rounded-3xl"></div>

                {/* Main image */}
                <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/placeholder.svg?height=1000&width=800"
                    alt="Portrait by Club S by Bo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>

                {/* Floating badge */}
                <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-full shadow-lg">
                  <Camera className="h-8 w-8 text-coral" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-pastel-pink/20" id="about">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-6 -right-6 left-6 bottom-6 bg-pastel-yellow/50 rounded-3xl"></div>
              <div className="relative h-[600px] rounded-3xl overflow-hidden border-4 border-white shadow-lg">
                <Image
                  src="/placeholder.svg?height=1200&width=800"
                  alt="Bo in action"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-10 -left-10 bg-white p-3 rounded-full shadow-md transform rotate-12">
                <Star className="h-6 w-6 text-pastel-yellow" fill="currentColor" />
              </div>
              <div className="absolute -bottom-8 right-20 bg-white py-2 px-6 rounded-full shadow-md transform -rotate-6">
                <span className="text-xl font-bold text-coral">HEY!</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Bo</h2>
              <div className="space-y-6 text-gray-600">
                <p className="text-xl font-sarabun">ช่างภาพที่โคตร chill แต่จริงจังกับ vibe</p>
                <p className="text-xl">I help you see the version of you that you secretly admire.</p>
                <p className="text-lg">
                  I don't just take your photo. I guide you through the vibe, the light, and the magic. Whether you want
                  to feel bold, playful, sensual or just deeply yourself — I'm here to make that happen.
                </p>
              </div>

              <div className="mt-10">
                <Link href="/about" className="btn-outline border-coral text-coral hover:bg-coral">
                  Learn More About Me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" id="services">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Services That Make You Feel</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Choose the experience that matches your vision and comfort level
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              title="Private Portrait Shoots"
              description="For confident and expressive clients who want to capture their authentic self"
              image="/placeholder.svg?height=600&width=400"
              link="/services/private-portraits"
              color="bg-pastel-yellow"
            />

            <ServiceCard
              title="Celebrity-style Editorials"
              description="Full creative direction with professional styling and premium retouching"
              image="/placeholder.svg?height=600&width=400"
              link="/services/editorials"
              color="bg-pastel-pink"
            />

            <ServiceCard
              title="Safe & Sensual Sessions"
              description="Shoot with privacy & trust in a comfortable environment with complete discretion"
              image="/placeholder.svg?height=600&width=400"
              link="/services/sensual-shoots"
              color="bg-pastel-coral"
            />
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-pastel-yellow/20" id="gallery">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">This is what bold looks like.</h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            A glimpse into the moments and emotions we've captured
          </p>

          <GalleryGrid />

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary bg-black hover:bg-black/80">
              See More Work
            </Link>
          </div>
        </div>
      </section>

      {/* Package Builder Section */}
      <section className="py-20 bg-pastel-pink/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Your Own Package</h2>
              <p className="text-xl text-gray-600">Mix and match to create your perfect photography experience</p>
            </div>

            <PackageBuilder />
          </div>
        </div>
      </section>

      {/* Extras Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">More Than Just Photos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Astro Oracle Widget */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pastel-yellow/20 p-4 rounded-2xl mb-4 inline-block">
                <Sparkles className="h-8 w-8 text-pastel-yellow" />
              </div>
              <h3 className="text-xl font-bold mb-2">Astro Oracle</h3>
              <p className="text-gray-600 mb-4">Get your daily creative inspiration based on astrology</p>
              <span className="inline-block bg-pastel-yellow/20 text-sm px-3 py-1 rounded-full text-gray-700">
                Coming Soon
              </span>
            </div>

            {/* Free Logo Tool */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pastel-pink/20 p-4 rounded-2xl mb-4 inline-block">
                <Star className="h-8 w-8 text-pastel-pink" fill="currentColor" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Logo Tool</h3>
              <p className="text-gray-600 mb-4">Generate a simple logo for your personal brand in seconds</p>
              <Link href="/free-tools" className="text-coral font-medium hover:underline inline-flex items-center">
                Try it free <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Digital Tools */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-pastel-coral/20 p-4 rounded-2xl mb-4 inline-block">
                <Sparkles className="h-8 w-8 text-pastel-coral" />
              </div>
              <h3 className="text-xl font-bold mb-2">Digital Tools</h3>
              <p className="text-gray-600 mb-4">Ebooks, AI prompts, and resources for creators</p>
              <span className="inline-block bg-pastel-coral/20 text-sm px-3 py-1 rounded-full text-gray-700">
                Coming Soon
              </span>
            </div>

            {/* Affiliate Picks */}
            <div className="bg-white rounded-3xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="bg-black p-4 rounded-2xl mb-4 inline-block">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">Bo's Recommended Gear</h3>
              <p className="text-gray-600 mb-4">Photography equipment and tools I personally use and love</p>
              <Link href="/recommendations" className="text-coral font-medium hover:underline inline-flex items-center">
                See my picks <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">"Let's make art out of you."</h2>

          <div className="mb-12">
            <Link href="/contact" className="btn-white text-lg px-8 py-4 text-coral">
              Let's Talk
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div>
              <p className="font-medium mb-1">Email</p>
              <a href="mailto:barboxar.khunbo@gmail.com" className="text-white/80 hover:text-white">
                barboxar.khunbo@gmail.com
              </a>
            </div>

            <div>
              <p className="font-medium mb-1">Phone</p>
              <a href="tel:+66651234416" className="text-white/80 hover:text-white">
                +66 65 123 4416
              </a>
            </div>

            <div>
              <p className="font-medium mb-1">Social</p>
              <div className="flex space-x-4">
                <SocialIcons color="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Button */}
      <ChatButton />
    </main>
  )
}
