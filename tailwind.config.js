/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef6ff",
          100: "#d9ebff",
          500: "#1d5fd3",
          700: "#1649a3",
          900: "#102c5f"
        },
        accent: "#f59e0b",
        ink: "#101828"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(16, 24, 40, 0.12)"
      },
      maxWidth: {
        content: "1200px"
      }
    },
  },
  plugins: [],
};
