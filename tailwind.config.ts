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
        base: "#0d1316",
        surface: "#111b20",
        primary: "#03e98b",
        border: "#1a2e38",
        danger: "#ff4566",
        "text-primary": "#e8fff5",
        "text-muted": "#a8c8b8",
      },
      fontFamily: {
        mono: ["Space Mono", "JetBrains Mono", "monospace"],
        sans: ["Inter", "sans-serif"],
        code: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(3, 233, 139, 0.3)",
        "glow-lg": "0 0 40px rgba(3, 233, 139, 0.4)",
        "glow-sm": "0 0 10px rgba(3, 233, 139, 0.2)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        scanline: "scanline 8s linear infinite",
        glitch: "glitch 3s infinite",
        "border-spin": "borderSpin 4s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
        glitch: {
          "0%, 90%, 100%": { transform: "translate(0)" },
          "92%": { transform: "translate(-2px, 1px)" },
          "94%": { transform: "translate(2px, -1px)" },
          "96%": { transform: "translate(-1px, 2px)" },
          "98%": { transform: "translate(1px, -2px)" },
        },
        borderSpin: {
          "0%": { "--angle": "0deg" } as Record<string, string>,
          "100%": { "--angle": "360deg" } as Record<string, string>,
        },
      },
    },
  },
  plugins: [],
};

export default config;
