/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        slate:{
          // 50:"#eceff1",
          50:"#868e96",
          100:"#495057",
          500:"#f3f4f6"
    
        },
        grey:{
          100:"#f8f9fa",
          700:"#212529",
        },
        red:{
          600:"#f03e3e"
        }
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      // animation: {
      //   fade: 'fadeOut 5s ease-in-out',
      // },
      // keyframes: theme => ({
      //   fadeOut: {
      //     '0%': { backgroundColor: theme('colors.red.300') },
      //     '100%': { backgroundColor: theme('colors.transparent') },
      //   },
      // })
   

      screens: {
        'sm': '320px',
        'md': '576px',
        // 'lg': '768px',
        'lg': '1280px',
        // 'xl': '1024px',
        '2xl': '1280px',
        '3xl': '1600px',
      },
      fontFamily:{
        'mono':['Poppins', 'sans-serif'],
        'monserrat':['Montserrat Alternates', 'sans-serif']
      },

      
    },
  },
  plugins: [],
});

