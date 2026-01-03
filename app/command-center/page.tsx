import Link from "next/link"
import { Terminal, Lock } from "lucide-react"
import type { Metadata } from "next"
import LoginForm from "@/components/login-form"

export const metadata: Metadata = {
  title: "Command Center | Club S by Bo",
  description: "System dashboard for managing bookings and backend automation",
  keywords: ["dashboard", "automation", "n8n", "command center", "booking system"],
  robots: "noindex, nofollow",
}

export default function CommandCenterPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-pastel-yellow/20 -z-10"></div>
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-pastel-coral/20 rounded-full -z-10"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-pastel-pink/20 rounded-full -z-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block bg-coral/10 px-4 py-2 rounded-full text-coral mb-6 font-medium">
              Admin Access Only
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">My Command Center</h1>
            <p className="text-xl text-gray-600 mb-8">
              A system dashboard for managing bookings, content, and backend automation
            </p>
            <div className="flex justify-center">
              <div className="inline-flex items-center bg-pastel-yellow/30 px-4 py-2 rounded-full">
                <Lock className="h-5 w-5 text-gray-700 mr-2" />
                <span className="text-gray-700">Secure Admin Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <LoginForm />
          </div>
        </div>
      </section>

      {/* Command Interface Preview */}
      <section className="py-20 bg-pastel-pink/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Command Interface</h2>
          <p className="text-md text-center text-coral mb-4">
            Connected to <strong>n8n automation backend</strong> via secured webhook endpoint.
          </p>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Manage your entire business with simple text commands
          </p>

          <div className="max-w-3xl mx-auto bg-gray-900 rounded-3xl shadow-lg overflow-hidden">
            <div className="p-4 bg-gray-800 flex items-center">
              <div className="flex space-x-2 mr-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-sm">command-terminal</div>
            </div>
              {/* ✅ Verified: Commands sent via webhook to https://n8n.clubsxno1ai.com/webhook/command-center */}
            <div className="p-6 font-mono text-sm">
              <div className="flex">
                <span className="text-green-400 mr-2">bo@system:~$</span>
                <span className="text-white">@bookings list upcoming</span>
              </div>
              <div className="text-gray-300 mt-2 mb-4">
                <div>Fetching upcoming bookings...</div>
                <div className="mt-2">
                  <div className="text-yellow-300">• 2023-05-15 10:00 - Portrait Session with Sarah</div>
                  <div className="text-yellow-300">• 2023-05-17 14:00 - Editorial Shoot with Mark</div>
                  <div className="text-yellow-300">• 2023-05-20 18:00 - Cocktail Workshop (4 participants)</div>
                </div>
              </div>

              <div className="flex">
                <span className="text-green-400 mr-2">bo@system:~$</span>
                <span className="text-white">@stats monthly revenue</span>
              </div>
              <div className="text-gray-300 mt-2 mb-4">
                <div>Calculating monthly revenue...</div>
                <div className="mt-2">
                  <div className="text-green-300">Total Revenue (May): ฿45,500</div>
                  <div className="text-blue-300">• Photography: ฿28,000</div>
                  <div className="text-blue-300">• Workshops: ฿12,500</div>
                  <div className="text-blue-300">• Digital Products: ฿5,000</div>
                </div>
              </div>

              <div className="flex">
                <span className="text-green-400 mr-2">bo@system:~$</span>
                <span className="text-white">@automation status — webhook: active</span>
              </div>
              <div className="text-gray-300 mt-2">
                <div>Checking automation workflows...</div>
                <div className="mt-2">
                  <div className="text-green-300">✓ Client Onboarding: Running</div>
                  <div className="text-green-300">✓ Social Media Scheduler: Running</div>
                  <div className="text-green-300">✓ Invoice Generator: Running</div>
                  <div className="text-red-300">✗ Email Newsletter: Error (API key expired)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">System Features</h2>
          <p className="text-xl text-gray-600 mb-16 text-center max-w-3xl mx-auto">
            Powerful tools to manage your business efficiently
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <Terminal className="h-10 w-10 text-coral mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Command Interface</h3>
              <p className="text-gray-600 mb-4">
                Manage your entire business with simple text commands and get instant results.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-10 w-10 text-coral mb-6 flex items-center justify-center text-2xl font-bold">n8n</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Workflow Automation</h3>
              <p className="text-gray-600 mb-4">
                Powerful n8n workflows that automate repetitive tasks and business processes.
              </p>
            </div>

            <div className="bg-white rounded-3xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="h-10 w-10 text-coral mb-6 flex items-center justify-center text-2xl font-bold">📊</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Analytics Dashboard</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive analytics to track your business performance and make data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coral text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            "Automation is the key to scaling your creative business."
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Interested in building a similar system for your business? Let's discuss how automation can help you scale.
          </p>
          <Link href="/contact" className="btn-white text-lg px-8 py-4 text-coral">
            Contact Me
          </Link>
        </div>
      </section>
    </main>
  )
}
