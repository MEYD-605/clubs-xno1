"use client"

import { Component, type ErrorInfo, type ReactNode } from "react"

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    // Update state so the next render will show the fallback UI
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error to an error reporting service
    console.error("Error caught by ErrorBoundary:", error, errorInfo)

    // In production, you would send this to your error tracking service
    // Example: sendToErrorTrackingService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full text-center">
            <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
            <p className="text-gray-600 mb-6">
              We're sorry, but there was an error loading this page. Our team has been notified.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              {/* Only show generic error message, not the actual error details */}
              Error: An unexpected error occurred
            </p>
            <button
              onClick={() => (window.location.href = "/")}
              className="px-6 py-2 bg-black text-white hover:bg-electric-blue transition-colors"
            >
              Return to Home
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
