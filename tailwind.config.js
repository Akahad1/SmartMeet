/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBackground: "#121212",
        darkText: "#EAEAEA",
      },
    },
  },
  plugins: [require("daisyui")],
  darkMode: "class",
};
