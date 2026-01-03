import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function MagazineGrid() {
  const articles = [
    {
      title: "Top AI Tools This Week",
      subtitle: "TECHNOLOGY",
      description: "Discover the latest AI innovations that are transforming creative workflows",
      image: "/placeholder.svg?height=600&width=800",
      link: "/ai",
    },
    {
      title: "Photography of the Month",
      subtitle: "CREATIVE",
      description: "Explore this month's featured photography projects and techniques",
      image: "/placeholder.svg?height=600&width=800",
      link: "/photography",
    },
    {
      title: "Astro Journal: Gemini Season",
      subtitle: "LIFESTYLE",
      description: "How the current astrological season affects your creative energy",
      image: "/placeholder.svg?height=600&width=800",
      link: "/recommend",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <div key={index} className="magazine-card group hover-lift">
          <div className="relative h-96">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="magazine-card-content">
              <span className="magazine-subtitle">{article.subtitle}</span>
              <h3 className="magazine-title mt-2 mb-3 group-hover:text-clubs-hover transition-colors">
                {article.title}
              </h3>
              <p className="text-white/80 mb-4 line-clamp-2">{article.description}</p>
              <Link
                href={article.link}
                className="inline-flex items-center text-white hover:text-clubs-hover transition-colors"
              >
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
