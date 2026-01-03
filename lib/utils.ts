import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility functions for input sanitization and validation
 */

// Sanitize text input to prevent XSS
export const sanitizeInput = (input: string): string => {
  if (!input) return ""

  // Replace potentially dangerous characters
  return input
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/`/g, "&#096;")
    .replace(/\(/g, "&#040;")
    .replace(/\)/g, "&#041;")
}

// Validate email format
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

// Validate password strength
export const validatePassword = (password: string): boolean => {
  // Minimum 8 characters, at least one letter and one number
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  return regex.test(password)
}

// Validate name (letters, spaces, hyphens, apostrophes only)
export const validateName = (name: string): boolean => {
  const regex = /^[a-zA-Z\s'-]{2,50}$/
  return regex.test(name)
}

// Validate URL format
export const validateUrl = (url: string): boolean => {
  try {
    const parsedUrl = new URL(url)
    return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:"
  } catch (e) {
    return false
  }
}

// Handle errors safely
export const handleError = (error: unknown): string => {
  console.error("Error occurred:", error)

  // Return a generic error message for the user
  return "An unexpected error occurred. Please try again later."
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
