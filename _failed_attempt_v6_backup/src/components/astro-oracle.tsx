"use client"

import type React from "react"

import { useState } from "react"
import { useTheme } from "@/contexts/theme-context"
import { Sparkles, Moon, Sun, Star } from "lucide-react"

// Astrological signs with their dates, elements, and traits
const astroSigns = [
  {
    name: "Aries",
    dates: "March 21 - April 19",
    element: "Fire",
    traits: ["Bold", "Passionate", "Determined"],
    colors: { primary: "#FF5757", secondary: "#FFE1E1" },
    icon: <Sun className="h-6 w-6" />,
    reading: "Today is perfect for starting new projects. Your energy is high and your creativity is flowing.",
  },
  {
    name: "Taurus",
    dates: "April 20 - May 20",
    element: "Earth",
    traits: ["Patient", "Reliable", "Practical"],
    colors: { primary: "#7CB342", secondary: "#E8F5E9" },
    icon: <Moon className="h-6 w-6" />,
    reading: "Focus on stability and comfort today. Take time to appreciate the beauty around you.",
  },
  {
    name: "Gemini",
    dates: "May 21 - June 20",
    element: "Air",
    traits: ["Curious", "Adaptable", "Communicative"],
    colors: { primary: "#FFCA28", secondary: "#FFF8E1" },
    icon: <Star className="h-6 w-6" />,
    reading:
      "Your mind is especially sharp today. Great day for learning something new or having important conversations.",
  },
  {
    name: "Cancer",
    dates: "June 21 - July 22",
    element: "Water",
    traits: ["Intuitive", "Emotional", "Protective"],
    colors: { primary: "#4FC3F7", secondary: "#E1F5FE" },
    icon: <Moon className="h-6 w-6" />,
    reading: "Listen to your intuition today. Your emotional intelligence will guide you to make the right decisions.",
  },
  {
    name: "Leo",
    dates: "July 23 - August 22",
    element: "Fire",
    traits: ["Creative", "Passionate", "Generous"],
    colors: { primary: "#FF9800", secondary: "#FFF3E0" },
    icon: <Sun className="h-6 w-6" />,
    reading: "Your creative energy is at its peak. Express yourself boldly and share your talents with the world.",
  },
  {
    name: "Virgo",
    dates: "August 23 - September 22",
    element: "Earth",
    traits: ["Analytical", "Practical", "Diligent"],
    colors: { primary: "#8D6E63", secondary: "#EFEBE9" },
    icon: <Star className="h-6 w-6" />,
    reading: "Focus on organization and details today. Your analytical skills will help you solve complex problems.",
  },
  {
    name: "Libra",
    dates: "September 23 - October 22",
    element: "Air",
    traits: ["Balanced", "Diplomatic", "Social"],
    colors: { primary: "#EC407A", secondary: "#FCE4EC" },
    icon: <Star className="h-6 w-6" />,
    reading: "Harmony and balance are key today. Focus on your relationships and creating beauty around you.",
  },
  {
    name: "Scorpio",
    dates: "October 23 - November 21",
    element: "Water",
    traits: ["Passionate", "Resourceful", "Brave"],
    colors: { primary: "#7E57C2", secondary: "#EDE7F6" },
    icon: <Moon className="h-6 w-6" />,
    reading: "Your intuition is especially powerful today. Trust your instincts and dive deep into what matters most.",
  },
  {
    name: "Sagittarius",
    dates: "November 22 - December 21",
    element: "Fire",
    traits: ["Optimistic", "Adventurous", "Independent"],
    colors: { primary: "#5C6BC0", secondary: "#E8EAF6" },
    icon: <Sun className="h-6 w-6" />,
    reading: "Adventure calls today. Expand your horizons, learn something new, and embrace freedom.",
  },
  {
    name: "Capricorn",
    dates: "December 22 - January 19",
    element: "Earth",
    traits: ["Disciplined", "Responsible", "Ambitious"],
    colors: { primary: "#455A64", secondary: "#ECEFF1" },
    icon: <Moon className="h-6 w-6" />,
    reading: "Focus on your goals and ambitions today. Your discipline and persistence will pay off.",
  },
  {
    name: "Aquarius",
    dates: "January 20 - February 18",
    element: "Air",
    traits: ["Original", "Humanitarian", "Independent"],
    colors: { primary: "#00BCD4", secondary: "#E0F7FA" },
    icon: <Star className="h-6 w-6" />,
    reading:
      "Your innovative thinking is highlighted today. Share your unique ideas and connect with like-minded people.",
  },
  {
    name: "Pisces",
    dates: "February 19 - March 20",
    element: "Water",
    traits: ["Intuitive", "Compassionate", "Artistic"],
    colors: { primary: "#9575CD", secondary: "#EDE7F6" },
    icon: <Moon className="h-6 w-6" />,
    reading:
      "Your creativity and intuition are flowing today. Express yourself through art and connect with your spiritual side.",
  },
]

export default function AstroOracle() {
  const [birthdate, setBirthdate] = useState("")
  const [sign, setSign] = useState<(typeof astroSigns)[0] | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const { setCustomTheme, resetTheme } = useTheme()

  const handleRandomSign = () => {
    const randomIndex = Math.floor(Math.random() * astroSigns.length)
    setSign(astroSigns[randomIndex])
    setIsRevealed(true)
    setCustomTheme(astroSigns[randomIndex].colors)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!birthdate) return
    setIsLoading(true)

    const date = new Date(birthdate)
    const month = date.getMonth() + 1
    const day = date.getDate()

    // Find the astrological sign based on birthdate
    let foundSign = null

    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
      foundSign = astroSigns[0] // Aries
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
      foundSign = astroSigns[1] // Taurus
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
      foundSign = astroSigns[2] // Gemini
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
      foundSign = astroSigns[3] // Cancer
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
      foundSign = astroSigns[4] // Leo
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
      foundSign = astroSigns[5] // Virgo
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
      foundSign = astroSigns[6] // Libra
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
      foundSign = astroSigns[7] // Scorpio
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
      foundSign = astroSigns[8] // Sagittarius
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
      foundSign = astroSigns[9] // Capricorn
    } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
      foundSign = astroSigns[10] // Aquarius
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
      foundSign = astroSigns[11] // Pisces
    }

    setSign(foundSign)
    setIsRevealed(true)

    if (foundSign) {
      setSign(foundSign)
      setCustomTheme(foundSign.colors)
      setIsRevealed(true)

      try {
        const GATEWAY_URL = import.meta.env.PUBLIC_GATEWAY_URL || ""
        const API_KEY = import.meta.env.PUBLIC_GATEWAY_KEY || ""

        if (GATEWAY_URL) {
          const res = await fetch(`${GATEWAY_URL}/api/brain`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${API_KEY}`
            },
            body: JSON.stringify({
              prompt: `Provide a mystical and creative astrological reading for a ${foundSign.name} (Element: ${foundSign.element}, Traits: ${foundSign.traits.join(', ')}). The user was born on ${birthdate}. Make it inspiring and related to Soul-Brews philosophy of autonomy and creativity.`,
              model: 'god-lite'
            })
          });
          const data = await res.json();
          let responseContent = foundSign.reading; // Initialize with existing reading
          if (data.response || data.reply) {
            responseContent = data.response || data.reply;
          } else if (data.error) {
            // Optionally handle error, e.g., log it or set a default error message
            console.error("API Error:", data.error);
          }
          foundSign.reading = responseContent; // Assign the determined content to foundSign.reading
        }
      } catch (err) {
        console.error("Oracle Oracle Connection Failed:", err);
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleReset = () => {
    setBirthdate("")
    setSign(null)
    setIsRevealed(false)
    resetTheme()
  }

  return (
    <div className="card p-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="currentColor" />
          <path
            d="M50,10 L50,90 M10,50 L90,50 M22,22 L78,78 M22,78 L78,22"
            stroke="currentColor"
            strokeWidth="1"
            fill="none"
          />
        </svg>
      </div>

      <h3 className="text-xl font-medium mb-4 text-neutral-900 flex items-center">
        <Sparkles className="h-5 w-5 mr-2 text-theme-primary" />
        Astro AI Oracle
      </h3>

      {!isRevealed ? (
        <div>
          <p className="text-neutral-600 mb-6">
            Discover your astrological energy and get a personalized reading. Enter your birthdate or try a random sign.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="birthdate" className="block mb-2 text-sm font-medium text-neutral-700">
                Your Birthdate
              </label>
              <input
                type="date"
                id="birthdate"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:border-theme-primary"
              />
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                disabled={!birthdate || isLoading}
                className="px-4 py-2 bg-theme-primary text-white font-medium rounded-md hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex-1"
              >
                {isLoading ? "Consulting Stars..." : "Reveal My Sign"}
              </button>

              <button
                type="button"
                onClick={handleRandomSign}
                disabled={isLoading}
                className="px-4 py-2 border border-theme-primary text-theme-primary font-medium rounded-md hover:bg-theme-secondary transition-colors flex-1 disabled:opacity-50"
              >
                Try Random
              </button>
            </div>
          </form>
        </div>
      ) : sign ? (
        <div className="animate-fade-in">
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 rounded-full bg-theme-secondary flex items-center justify-center mr-4">
              {sign.icon}
            </div>
            <div>
              <h4 className="text-lg font-medium text-theme-primary">{sign.name}</h4>
              <p className="text-sm text-neutral-500">
                {sign.dates} • {sign.element}
              </p>
            </div>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
              {sign.traits.map((trait, index) => (
                <span key={index} className="px-2 py-1 bg-theme-secondary text-theme-primary text-xs rounded-full">
                  {trait}
                </span>
              ))}
            </div>

            <p className="text-neutral-700 italic border-l-2 border-theme-primary pl-4 py-1">"{sign.reading}"</p>
          </div>

          <div className="mt-6">
            <button
              onClick={handleReset}
              className="text-sm text-neutral-500 hover:text-theme-primary transition-colors"
            >
              Try another date
            </button>
          </div>
        </div>
      ) : (
        <p className="text-neutral-600">Unable to determine your sign. Please try again.</p>
      )}
    </div>
  )
}
