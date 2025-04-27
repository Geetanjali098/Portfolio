/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: [ 
    "./src/components/**/*.{ css,js}",
    "./src/**/*.{ css,js}",
  ],
  theme: {
    extend: {
      colors: {
       
        },
    },
  },
  plugins: [],
}

