/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor7: "#120D2D",
        primaryColor6: "#1E1549",
        primaryLight: "#1C1737",
        secondaryColor: "#34EBE1",
        accentColor1: "#E1DFF3",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

