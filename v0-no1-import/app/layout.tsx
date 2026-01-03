import type React from "react"
import type { Metadata } from "next"
import { Inter, Sarabun } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const sarabun = Sarabun({
  weight: ["300", "400", "500", "700"],
  subsets: ["thai", "latin"],
  display: "swap",
  variable: "--font-sarabun",
})

export const metadata: Metadata = {
  title: "Club S by Bo | Premium Portrait Photography",
  description:
    "We don't shoot just photos. We shoot feelings. Premium portrait photography for bold, creative individuals.",
  keywords: [
    "portrait photography",
    "premium portraits",
    "editorial photography",
    "sensual photography",
    "Bangkok photographer",
  ],
  openGraph: {
    title: "Club S by Bo | Premium Portrait Photography",
    description:
      "We don't shoot just photos. We shoot feelings. Premium portrait photography for bold, creative individuals.",
    url: "https://clubsxno1ai.com",
    siteName: "Club S by Bo",
    images: [
      {
        url: "https://clubsxno1ai.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Club S by Bo - Premium Portrait Photography",
      },
    ],
    locale: "en_US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sarabun.variable}`}>
      <body className="font-sans">
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  )
}


import './globals.css'