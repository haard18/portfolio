/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontSize: {
        // 8pt-based scale
        xs: ["12px", { lineHeight: "1.5", letterSpacing: "0.02em" }],
        sm: ["14px", { lineHeight: "1.5", letterSpacing: "0.01em" }],
        base: ["16px", { lineHeight: "1.6", letterSpacing: "0" }],
        lg: ["18px", { lineHeight: "1.6", letterSpacing: "0" }],
        xl: ["20px", { lineHeight: "1.5", letterSpacing: "0" }],
        "2xl": ["24px", { lineHeight: "1.5", letterSpacing: "-0.01em" }],
        "3xl": ["28px", { lineHeight: "1.4", letterSpacing: "-0.01em" }],
        "4xl": ["32px", { lineHeight: "1.4", letterSpacing: "-0.02em" }],
        "5xl": ["40px", { lineHeight: "1.3", letterSpacing: "-0.02em" }],
        "6xl": ["48px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "7xl": ["56px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
        "8xl": ["64px", { lineHeight: "1.2", letterSpacing: "-0.02em" }],
      },
      spacing: {
        // 8px grid
        0: "0",
        1: "8px",
        2: "16px",
        3: "24px",
        4: "32px",
        6: "48px",
        8: "64px",
        12: "96px",
      },
      transitionDuration: {
        fast: "200ms",
        normal: "300ms",
        slow: "500ms",
      },
      transitionTimingFunction: {
        "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}