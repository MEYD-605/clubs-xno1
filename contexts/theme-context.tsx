"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

// Define the astrological seasons with their dates and theme colors
const astroSeasons = [
  { name: "Aries", startDate: "03-21", endDate: "04-19", colors: { primary: "#FF5757", secondary: "#FFE1E1" } },
  { name: "Taurus", startDate: "04-20", endDate: "05-20", colors: { primary: "#7CB342", secondary: "#E8F5E9" } },
  { name: "Gemini", startDate: "05-21", endDate: "06-20", colors: { primary: "#FFCA28", secondary: "#FFF8E1" } },
  { name: "Cancer", startDate: "06-21", endDate: "07-22", colors: { primary: "#4FC3F7", secondary: "#E1F5FE" } },
  { name: "Leo", startDate: "07-23", endDate: "08-22", colors: { primary: "#FF9800", secondary: "#FFF3E0" } },
  { name: "Virgo", startDate: "08-23", endDate: "09-22", colors: { primary: "#8D6E63", secondary: "#EFEBE9" } },
  { name: "Libra", startDate: "09-23", endDate: "10-22", colors: { primary: "#EC407A", secondary: "#FCE4EC" } },
  { name: "Scorpio", startDate: "10-23", endDate: "11-21", colors: { primary: "#7E57C2", secondary: "#EDE7F6" } },
  { name: "Sagittarius", startDate: "11-22", endDate: "12-21", colors: { primary: "#5C6BC0", secondary: "#E8EAF6" } },
  { name: "Capricorn", startDate: "12-22", endDate: "01-19", colors: { primary: "#455A64", secondary: "#ECEFF1" } },
  { name: "Aquarius", startDate: "01-20", endDate: "02-18", colors: { primary: "#00BCD4", secondary: "#E0F7FA" } },
  { name: "Pisces", startDate: "02-19", endDate: "03-20", colors: { primary: "#9575CD", secondary: "#EDE7F6" } },
]

// Default theme colors
const defaultTheme = {
  primary: "#4B91F1", // clubs-primary
  secondary: "#F19F4D", // clubs-hover
}

type ThemeColors = {
  primary: string
  secondary: string
}

type ThemeContextType = {
  colors: ThemeColors
  currentSeason: string | null
  setCustomTheme: (colors: ThemeColors) => void
  resetTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  colors: defaultTheme,
  currentSeason: null,
  setCustomTheme: () => {},
  resetTheme: () => {},
})

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [colors, setColors] = useState<ThemeColors>(defaultTheme)
  const [currentSeason, setCurrentSeason] = useState<string | null>(null)
  const [isCustomTheme, setIsCustomTheme] = useState(false)

  // Determine current astrological season based on current date
  useEffect(() => {
    if (isCustomTheme) return

    const now = new Date()
    const currentMonth = String(now.getMonth() + 1).padStart(2, "0")
    const currentDay = String(now.getDate()).padStart(2, "0")
    const currentDate = `${currentMonth}-${currentDay}`

    const getCurrentSeason = () => {
      for (const season of astroSeasons) {
        // Handle seasons that span across year boundary (like Capricorn)
        if (season.startDate <= season.endDate) {
          // Normal case: season within same year
          if (currentDate >= season.startDate && currentDate <= season.endDate) {
            return season
          }
        } else {
          // Special case: season spans across year boundary
          if (currentDate >= season.startDate || currentDate <= season.endDate) {
            return season
          }
        }
      }
      return null
    }

    const season = getCurrentSeason()
    if (season) {
      setCurrentSeason(season.name)
      setColors(season.colors)
    } else {
      setCurrentSeason(null)
      setColors(defaultTheme)
    }
  }, [isCustomTheme])

  // Apply theme colors to CSS variables
  useEffect(() => {
    document.documentElement.style.setProperty("--theme-primary", colors.primary.replace("#", ""))
    document.documentElement.style.setProperty("--theme-secondary", colors.secondary.replace("#", ""))
  }, [colors])

  const setCustomTheme = (newColors: ThemeColors) => {
    setColors(newColors)
    setIsCustomTheme(true)
  }

  const resetTheme = () => {
    setIsCustomTheme(false)
  }

  return (
    <ThemeContext.Provider value={{ colors, currentSeason, setCustomTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
