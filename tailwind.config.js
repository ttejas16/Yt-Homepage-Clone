/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'475px'
      },
      animation:{
        'slide-in':'left-in 0.1s ease-in forwards',
        'slide-out':'right-out 0.1s ease-out forwards',
      },
      keyframes:{
        'left-in':{
          '0%': { transform: 'translateX(-100%)' , },
          '100%': { transform: 'translateX(1%)' ,},
        },
        'right-out':{
          '0%': { transform: 'translateX(1%)' ,},
          '100%': { transform: 'translateX(-100%)' ,},
        }
      }
    },
  },
  plugins: [],
}

