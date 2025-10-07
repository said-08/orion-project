/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
      colors: {
        background: "rgb(var(--background))",
        foreground: "rgb(var(--foreground))",
        muted: "rgb(var(--muted))",
        accent: "rgb(var(--accent))",
      },
      backgroundImage: {
        "firefly-radial":
          "radial-gradient(50% 50% at 50% 50%, rgba(253, 255, 80, 0.5) 0%, rgba(217,217,217, 0) 100%)",
      },
      boxShadow: {
        "glass-inset": "inset 0 17px 5px -9px rgba(51, 153, 255, 0.05)",
        "glass-sm": "5px 5px 20px 0px rgba(51, 153, 255, 0.3)",
      },
      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
        "bounce-slow": {
          "0%, 100%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(10px)" },
        },
        "slide-from-top": {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-from-bottom": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-from-bottom-fast": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        'slide-from-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        "slide-from-left": {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        "spin-slow": "spin 40s linear infinite",
        "spin-slow-reverse": "spin-reverse 40s linear infinite",
        "bounce-slow": "bounce-slow 2s infinite",
        "slide-from-top": "slide-from-top 1s ease-out",
        "slide-from-bottom": "slide-from-bottom 1s ease-out",
        "slide-from-bottom-fast": "slide-from-bottom-fast 0.5s ease-out", // Faster animation
        'slide-from-right': 'slide-from-right 1s ease-out',
        "slide-from-left": "slide-from-left 1s ease-out",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
