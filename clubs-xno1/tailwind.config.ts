import type { Config } from "tailwindcss"
const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // New color scheme
        clubs: {
          background: "#FDFBFA",
          text: "#1A1A1A",
          primary: "#4B91F1",
          hover: "#F19F4D",
          light: "#F5F5F5",
          dark: "#333333",
          muted: "#717171",
        },
        warm: {
          50: "rgb(var(--warm-50) / <alpha-value>)",
          100: "rgb(var(--warm-100) / <alpha-value>)",
          200: "rgb(var(--warm-200) / <alpha-value>)",
          300: "rgb(var(--warm-300) / <alpha-value>)",
          400: "rgb(var(--warm-400) / <alpha-value>)",
          500: "rgb(var(--warm-500) / <alpha-value>)",
          600: "rgb(var(--warm-600) / <alpha-value>)",
          700: "rgb(var(--warm-700) / <alpha-value>)",
          800: "rgb(var(--warm-800) / <alpha-value>)",
          900: "rgb(var(--warm-900) / <alpha-value>)",
          950: "rgb(var(--warm-950) / <alpha-value>)",
        },
        neutral: {
          50: "rgb(var(--neutral-50) / <alpha-value>)",
          100: "rgb(var(--neutral-100) / <alpha-value>)",
          200: "rgb(var(--neutral-200) / <alpha-value>)",
          300: "rgb(var(--neutral-300) / <alpha-value>)",
          400: "rgb(var(--neutral-400) / <alpha-value>)",
          500: "rgb(var(--neutral-500) / <alpha-value>)",
          600: "rgb(var(--neutral-600) / <alpha-value>)",
          700: "rgb(var(--neutral-700) / <alpha-value>)",
          800: "rgb(var(--neutral-800) / <alpha-value>)",
          900: "rgb(var(--neutral-900) / <alpha-value>)",
          950: "rgb(var(--neutral-950) / <alpha-value>)",
        },
        theme: {
          primary: "rgb(var(--theme-primary) / <alpha-value>)",
          secondary: "rgb(var(--theme-secondary) / <alpha-value>)",
        },
        blush: "rgb(var(--color-blush) / <alpha-value>)",
        light: "rgb(var(--color-light) / <alpha-value>)",
        dark: "rgb(var(--color-dark) / <alpha-value>)",
        "accent-blue": "rgb(var(--color-accent-blue) / <alpha-value>)",
        "accent-orange": "rgb(var(--color-accent-orange) / <alpha-value>)",
        "pastel-yellow": "rgb(var(--color-pastel-yellow) / <alpha-value>)",
        "pastel-pink": "rgb(var(--color-pastel-pink) / <alpha-value>)",
        "pastel-coral": "rgb(var(--color-pastel-coral) / <alpha-value>)",
        coral: "#F48A7A",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        sarabun: ["var(--font-sarabun)", "sans-serif"],
        serif: ["Georgia", "Cambria", "Times New Roman", "Times", "serif"],
      },
      backgroundImage: {
        texture: "url('/texture.png')",
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0, 0, 0, 0.05)",
        warm: "0 4px 20px rgba(237, 120, 81, 0.1)",
        glow: "0 0 15px rgba(75, 145, 241, 0.5)",
        "hover-glow": "0 0 20px rgba(241, 159, 77, 0.6)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.5s ease-in-out",
        "color-shift": "colorShift 8s infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        colorShift: {
          "0%": { color: "#4B91F1" },
          "50%": { color: "#8A63D2" },
          "100%": { color: "#F19F4D" },
        },
      },
    },
  },
  plugins: [],
}

export default config
