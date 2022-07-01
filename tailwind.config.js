/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js, jsx, css}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "var(--primary-bg)",
        "primary-color": "var(--primary-color)",
      },
    },
  },
  plugins: [],
};
