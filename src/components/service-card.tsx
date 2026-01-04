import Image from "react" // Placeholder
import Link from "react" // Placeholder
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  link: string
  color: string
}

export default function ServiceCard({ title, description, image, link, color }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
      {/* Colored background accent */}
      <div className={`absolute -inset-1 ${color} rounded-3xl -z-10 transform -rotate-2`}></div>

      <div className="relative h-64">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105 rounded-t-3xl"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-3xl"></div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-coral transition-colors">{title}</h3>

        <p className="text-gray-600 mb-4">{description}</p>

        <Link
          href={link}
          className="inline-flex items-center text-coral font-medium group-hover:text-coral transition-colors"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
