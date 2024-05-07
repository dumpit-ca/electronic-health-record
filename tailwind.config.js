/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        background: "rgba(240, 240,  242, <alpha-value>)",
        silver: "rgba(251, 251,  251, <alpha-value>)",
        blue: "rgba(187, 222, 255, <alpha-value>)",
        dark: "rgba(0, 36, 69, <alpha-value>)",
      },
    },
  },
  plugins: [],
};
