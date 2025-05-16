/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ESSENCIAL para funcionar em projetos React + Vite
  ],
  theme: {
    extend: {
      fontFamily: {
        akaya: ['"Akaya Kanadaka"', "cursive"],
      },
    },
  },
  plugins: [],
};
