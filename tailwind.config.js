/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      tab: "992px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "orange-accent": "#d87d4a",
        "pitch-black": "#191919",
        "gray-accent": "#f1f1f1",
      },
    },
  },
  plugins: [],
}
