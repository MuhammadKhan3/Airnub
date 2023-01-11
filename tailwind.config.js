/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontSize: {
      'base': ['16px', {
//styleName: Base;
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '20px',
        letterSpacing: '-0.025em',
        textAlign: 'right',

      }],
      'base-bold':[
        '14px',{
          //styleName: Base Bold;
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: '600',
          lineHeight: '24px',
          letterSpacing: '-0.025em',
          textAlign: 'right',

        }
      ],
      'base2': ['14px', 
      {
        fontfamily: 'Inter',
        fontSize: '14px',
        fontWeight: '400',
        lineHeight: '17px',
        letterSpacing: '-0.025em',
        textAlign: 'right',
        
      }],
    },
    screens:{
      'mb':{'min': '300px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1636px'},

      '3xl': {'min': '1736px'},

    },
    colors:{
      'primaryWeb':'#C49A50',
    },

    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
    require('@tailwindcss/typography'),
  ],
  variants: {
    scrollbar: ['rounded']
  },
}