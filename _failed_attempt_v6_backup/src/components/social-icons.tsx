import Link from "react" // Placeholder
import { Instagram, Facebook, Youtube, MessageCircle, Twitter } from "lucide-react"

interface SocialIconsProps {
  color?: string
}

export default function SocialIcons({ color = "dark" }: SocialIconsProps) {
  const baseClass = `w-8 h-8 transition-transform hover:scale-110 ${
    color === "white" ? "text-white/80 hover:text-white" : "text-gray-600 hover:text-coral"
  }`

  return (
    <div className="flex items-center space-x-4">
      <Link
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label="Instagram"
      >
        <Instagram size={24} />
      </Link>

      <Link
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label="Facebook"
      >
        <Facebook size={24} />
      </Link>

      <Link
        href="https://tiktok.com"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label="TikTok"
      >
        <Twitter size={24} />
      </Link>

      <Link
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className={baseClass}
        aria-label="YouTube"
      >
        <Youtube size={24} />
      </Link>

      <Link href="https://line.me" target="_blank" rel="noopener noreferrer" className={baseClass} aria-label="LINE">
        <MessageCircle size={24} />
      </Link>
    </div>
  )
}
