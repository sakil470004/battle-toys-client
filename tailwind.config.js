/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "pink": {
        "lighter": "#FEE3EC",
        "light": "#F9C5D5",
        "light": "#F9C5D5",
        "normal": "#F999B7",
        "full": "#F2789F",
      },
      "pink": {
        "lighter": "#FEE3EC",
        "light": "#F9C5D5",
        "normal": "#F999B7",
        "full": "#F2789F",
        50: "#fff1f2",
        100: "#ffe4e6",
        200: "#fecdd3",
        300: "#fda4af",
        400: "#fb7185",
        500: "#f43f5e",
      },
      "slate": {
        50: "#f8fafc",
        100: "#f1f5f9",
        200: "#e2e8f0",
        300: "#cbd5e1",
        400: "#94a3b8",
        500: "#64748b",
        600: "#475569",
        700: "#334155",
        800: "#1e293b",
        900: "#0f172a",
        950: "#020617",
      },
      "white": "#ffffff",
      "black": "#000000"
    }
    ,
    extend: {},
  },
  plugins: [require("daisyui")],
}

