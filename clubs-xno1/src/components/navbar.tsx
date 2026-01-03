"use client"

import { useState, useEffect } from "react"
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/95 backdrop-blur-sm shadow-md py-3" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-bold text-white">
            Clubsx<span className="text-orange-400">AI</span>
          </a>

          <nav className="hidden md:flex space-x-8">
            <a href="/" className="relative text-white hover:text-orange-400 transition-colors">
              Home
            </a>
            <a href="/about" className="relative text-white hover:text-orange-400 transition-colors">
              About
            </a>
            <a href="/gallery" className="relative text-white hover:text-orange-400 transition-colors">
              Gallery
            </a>
            <a href="/services" className="relative text-white hover:text-orange-400 transition-colors">
              Services
            </a>
            <a href="/blog" className="relative text-white hover:text-orange-400 transition-colors">
              Blog
            </a>

            {/* More dropdown */}
            <div className="relative group">
              <button
                className="flex items-center text-white hover:text-orange-400 transition-colors"
                onClick={() => setIsMoreOpen(!isMoreOpen)}
              >
                More <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              <div
                className={`absolute right-0 mt-2 w-48 bg-zinc-900/95 backdrop-blur-xl rounded-xl shadow-lg py-2 transition-all duration-200 border border-white/10 ${isMoreOpen ? "opacity-100 visible" : "opacity-0 invisible"} group-hover:opacity-100 group-hover:visible`}
              >
                <a
                  href="/bartender"
                  className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Bartender
                </a>
                <a
                  href="/ai-lab"
                  className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
                  onClick={() => setIsMoreOpen(false)}
                >
                  AI Lab
                </a>
                <a
                  href="/command-center"
                  className="block px-4 py-2 text-orange-400 hover:bg-zinc-800"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Command Center
                </a>
                <a
                  href="/free-tools"
                  className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Free Tools
                </a>
                <a
                  href="/gear"
                  className="block px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
                  onClick={() => setIsMoreOpen(false)}
                >
                  Bo's Gear
                </a>
                <div className="border-t border-white/10 my-2"></div>
                <a
                  href="https://www.facebook.com/Clubsharephoto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
                  onClick={() => setIsMoreOpen(false)}
                >
                  📘 Facebook
                </a>
                <a
                  href="https://instagram.com/clubsbybo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-zinc-300 hover:bg-zinc-800 hover:text-orange-400"
                  onClick={() => setIsMoreOpen(false)}
                >
                  📷 Instagram
                </a>
              </div>
            </div>
          </nav>

          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900/95 backdrop-blur-xl shadow-lg rounded-b-3xl border-t border-white/10">
          <nav className="flex flex-col py-4">
            <a href="/" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Home
            </a>
            <a href="/about" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
            <a href="/gallery" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Gallery
            </a>
            <a href="/services" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Services
            </a>
            <a href="/blog" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Blog
            </a>
            <div className="border-t border-white/10 my-2"></div>
            <p className="px-4 py-2 text-zinc-500 text-sm">More</p>
            <a href="/bartender" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Bartender
            </a>
            <a href="/ai-lab" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              AI Lab
            </a>
            <a href="/command-center" className="px-4 py-3 text-orange-400 hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Command Center
            </a>
            <a href="/free-tools" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Free Tools
            </a>
            <a href="/gear" className="px-4 py-3 text-white hover:bg-zinc-800" onClick={() => setIsMenuOpen(false)}>
              Bo's Gear
            </a>
            <div className="border-t border-white/10 my-2"></div>
            <a href="https://www.facebook.com/Clubsharephoto" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-white hover:bg-zinc-800 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              📘 Facebook
            </a>
            <a href="https://instagram.com/clubsbybo" target="_blank" rel="noopener noreferrer" className="px-4 py-3 text-white hover:bg-zinc-800 flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
              📷 Instagram
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
