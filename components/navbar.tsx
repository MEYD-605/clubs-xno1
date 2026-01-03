"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-900">
            Club <span className="text-coral">S</span> by Bo
          </Link>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="relative text-gray-900 hover:text-coral transition-colors">
              Home
            </Link>
            <Link href="/about" className="relative text-gray-900 hover:text-coral transition-colors">
              About
            </Link>
            <Link href="/gallery" className="relative text-gray-900 hover:text-coral transition-colors">
              Gallery
            </Link>
            <Link href="/services" className="relative text-gray-900 hover:text-coral transition-colors">
              Services
            </Link>

            {/* More dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-gray-900 hover:text-coral transition-colors"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`absolute left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 transition-all duration-200 ${isMoreOpen ? "opacity-100 visible" : "opacity-0 invisible"} group-hover:opacity-100 group-hover:visible`}
              >
                <Link
                  href="/bartender"
                  className="block px-4 py-2 text-gray-800 hover:bg-pastel-coral/10 hover:text-coral"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Bartender
                </Link>
                <Link
                  href="/ai-lab"
                  className="block px-4 py-2 text-gray-800 hover:bg-pastel-coral/10 hover:text-coral"
                  onClick={() => setIsMoreOpen(false)}
                >
                  AI Lab
                </Link>
                <Link
                  href="/command-center"
                  className="block px-4 py-2 text-gray-800 hover:bg-pastel-coral/10 hover:text-coral"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Command Center
                </Link>
                <Link
                  href="/free-tools"
                  className="block px-4 py-2 text-gray-800 hover:bg-pastel-coral/10 hover:text-coral"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Free Tools
                </Link>
                <Link
                  href="/gear"
                  className="block px-4 py-2 text-gray-800 hover:bg-pastel-coral/10 hover:text-coral"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Bo's Gear
                </Link>
              </div>
            </div>
          </nav>

          <button
            className="md:hidden text-gray-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg rounded-b-3xl">
          <nav className="flex flex-col py-4">
            <Link href="/" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
            <Link href="/gallery" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </Link>
            <Link href="/services" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              Services
            </Link>
            <Link href="/bartender" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              Bartender
            </Link>
            <Link href="/ai-lab" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              AI Lab
            </Link>
            <Link
              href="/command-center"
              className="px-4 py-3 hover:bg-pastel-coral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Command Center
            </Link>
            <Link
              href="/free-tools"
              className="px-4 py-3 hover:bg-pastel-coral/10"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Tools
            </Link>
            <Link href="/gear" className="px-4 py-3 hover:bg-pastel-coral/10" onClick={() => setIsMenuOpen(false)}>
              Bo's Gear
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
