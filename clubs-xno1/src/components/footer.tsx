export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-zinc-950 text-white py-12 border-t border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Clubsx<span className="text-orange-400">AI</span>
            </h3>
            <p className="text-zinc-400 mb-6">Premium portrait photography for bold, creative individuals.</p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/clubsbybo" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="https://facebook.com/Clubsharephoto" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="https://tiktok.com/@clubsbybo" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                TikTok
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-zinc-400 hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-zinc-400 hover:text-white transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/services" className="text-zinc-400 hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/blog" className="text-zinc-400 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="text-zinc-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-zinc-400">
                <span className="mr-2">Email:</span>
                <a href="mailto:barboxar.khunbo@gmail.com" className="hover:text-white transition-colors">
                  barboxar.khunbo@gmail.com
                </a>
              </li>
              <li className="flex items-center text-zinc-400">
                <span className="mr-2">Phone:</span>
                <a href="tel:0800416403" className="hover:text-white transition-colors">
                  080-041-6403
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-zinc-500">
          <p>&copy; {currentYear} ClubsxAI. All rights reserved.</p>
          <p className="text-sm mt-2">Design & Technology by Clubs Tech</p>
        </div>
      </div>
    </footer>
  )
}
