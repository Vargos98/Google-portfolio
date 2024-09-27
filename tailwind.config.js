/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
     backgroundImage: {
        'main-bg': "url('./Assets/background/mainBg.jpg')",
        
      }
      
    },
  },
  plugins: [],
}

