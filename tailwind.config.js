/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        hvblue: {
          DEFAULT: "#141B4B",
          50: "#4859CE",
          100: "#384BCA",
          200: "#2E3EAC",
          300: "#25328B",
          400: "#1D276B",
          500: "#141B4B",
          600: "#080B1F",
        },
        hvorange: {
          DEFAULT: "#FF7F32",
          50: "#FFF2EA",
          100: "#FFE5D5",
          200: "#FFCBAC",
          300: "#FFB284",
          400: "#FF985B",
          500: "#FF7F32",
          600: "#F95D00",
          700: "#C14800",
          800: "#893300",
          900: "#511E00",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
