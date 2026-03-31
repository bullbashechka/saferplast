/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          500: "#004b62",
          700: "#004b62",
          900: "#00384a",
        },
        accent: "#d6e4e8",
        ink: "#242424",
        surface: "#fafeff",
        muted: "#f2f4f5",
        secondary: "#767676",
      },
      fontFamily: {
        sans: ["Montserrat", "Arial", "Helvetica", "sans-serif"],
        body: ["Montserrat", "Arial", "Helvetica", "sans-serif"],
        display: ["Sansation", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 24, 40, 0.12)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
