/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // ESSENCIAL para funcionar em projetos React + Vite
  ],
  theme: {
    extend: {
      fontFamily: {
        akaya: ['"Akaya Kanadaka"', "cursive"], // Adiciona cursive e as fontes sans-serif padrão como fallback
        // Segunda família de fontes
        gill: ['"Gill Sans"', '"Gill Sans MT"', "Calibri", '"Trebuchet MS"'],
      },
    },
  },
  plugins: [],
};
