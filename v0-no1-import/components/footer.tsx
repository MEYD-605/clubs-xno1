import Link from "next/link"
import SocialIcons from "@/components/social-icons"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 rounded-t-3xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Club <span className="text-coral">S</span> by Bo
            </h3>
            <p className="text-white/70 mb-6">Premium portrait photography for bold, creative individuals.</p>
            <SocialIcons color="white" />
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-white/70 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-white/70">
                <span className="mr-2">Email:</span>
                <a href="mailto:barboxar.khunbo@gmail.com" className="hover:text-white transition-colors">
                  barboxar.khunbo@gmail.com
                </a>
              </li>
              <li className="flex items-center text-white/70">
                <span className="mr-2">Phone:</span>
                <a href="tel:+66651234416" className="hover:text-white transition-colors">
                  +66 65 123 4416
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {currentYear} Club S by Bo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
