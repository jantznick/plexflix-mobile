/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: ["./App.js", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
          plexYellow: 'rgba(230,171,1,1)',
          plexYellowTransparent: 'rgba(230,171,1,.75)',
          plexYellowHover: 'rgba(244,204,83,1)'
      }
    },
  },
  plugins: [],
}

