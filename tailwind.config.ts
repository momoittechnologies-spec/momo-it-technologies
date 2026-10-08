import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0fdf8",
          100: "#ccfbdd",
          200: "#9bf6bc",
          300: "#5eed94",
          400: "#00ED87",
          500: "#00c97a",
          600: "#059669",
          700: "#047857",
          800: "#065f46",
          900: "#064e3b",
          950: "#022c22",
        },
        navy: {
          50: "#f0f4f9",
          100: "#e0e8f3",
          200: "#c7d6e8",
          800: "#0e1e38",
          900: "#0B1B3D",
          950: "#071127",
        },
        surface: {
          light: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
        },
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
        heading: ["Plus Jakarta Sans", "Outfit", "Inter", "sans-serif"],
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(11, 27, 61, 0.08)",
        glow: "0 0 25px rgba(0, 237, 135, 0.35)",
        "glow-emerald": "0 0 35px -5px rgba(0, 237, 135, 0.45)",
        "glow-cyan": "0 0 35px -5px rgba(56, 189, 248, 0.45)",
        "glow-purple": "0 0 35px -5px rgba(168, 85, 247, 0.45)",
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 0 0 1px rgba(226, 232, 240, 0.8)",
        "card-hover": "0 20px 40px -10px rgba(0, 201, 122, 0.12), 0 0 0 1px rgba(0, 201, 122, 0.3)",
        "3d-card": "0 20px 50px -10px rgba(7, 17, 39, 0.12), 0 0 0 1px rgba(226, 232, 240, 0.9), inset 0 1px 0 0 rgba(255, 255, 255, 0.9)",
        "3d-card-dark": "0 25px 60px -12px rgba(0, 0, 0, 0.7), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)",
        "3d-floating": "0 30px 60px -15px rgba(0, 237, 135, 0.2), 0 15px 30px -10px rgba(11, 27, 61, 0.3), inset 0 1px 1px 0 rgba(255, 255, 255, 0.4)",
      },
      keyframes: {
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        pulseSlow: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.5" },
        },
        floatSlow: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        floatMedium: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        floatReverse: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(8px)" },
        },
        beaconPulse: {
          "0%": { transform: "scale(0.95)", opacity: "0.8" },
          "50%": { transform: "scale(1.15)", opacity: "0.3" },
          "100%": { transform: "scale(0.95)", opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        shimmer: "shimmer 2s infinite",
        "pulse-slow": "pulseSlow 3s ease-in-out infinite",
        "float-slow": "floatSlow 5s ease-in-out infinite",
        "float-medium": "floatMedium 3.5s ease-in-out infinite",
        "float-reverse": "floatReverse 4.5s ease-in-out infinite",
        "beacon-pulse": "beaconPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
