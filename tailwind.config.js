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
       '16px',{
        fontFamily: 'Poppins',
        fontSize: '16px',
        fontWeight: '600',
        lineHeight: '24px',
        letterSpacing: '-0.025em',
        textAlign: 'left',
       }
      ],
      'base2-bold':[
        '14px',{
          //styleName: Base Bold;
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '14px',
          lineHeight: '21px',
          /* identical to box height */          
          textAlign: 'center',
          letterSpacing: '-0.025em',
          

        }
      ],
      'base2': ['14px', 
      {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontWeight:' 400',
        fontSize: '14px',
        lineHeight: '18px',
        /* identical to box height, or 129% */
        
        textAlign: 'center',
        letterSpacing: '-0.025em'
      }
    ],
      'smallBold':[
        '12px',{
          fontFamily: 'Poppins',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '12px',
          lineHeight: '18px',
          /* identical to box height */

          textAlign: 'center',
          letterSpacing: '-0.025em',
        }
      ],
      'subTitle':
      [
        '1em',{
          fontFamily: 'Poppins',
          fontSize: '1em',
          fontWeight: '600',
          lineHeight: '33px',
          letterSpacing: '-0.025em',
          textAlign: 'center',
        }
      ],

      'bigHeading':[
        '3em',{
          fontFamily: 'Poppins sans-serif',
          fontStyle: 'normal',
          fontWeight: '500 !important',
          fontSize: '3em',
          lineHeight: '1em',
          textAlign: 'center',
          letterSpacing: ''
        }
        
      ],
      'small':[
        '12px',{
          //styleName: Small;
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '18px',
          letterSpacing: '-0.025em',
          textAlign: 'left',

        }
      ],
      'responsive-heading':[
        '57px',{
          fontFamily: 'Poppins sans-serif',
          fontSize: '57px',
          fontWeight: '275',
          lineHeight: '5rem',
          textAlign: 'left',
        
          
        }
      ],
      
      "Xsmall":[
        '10px',
        {
        fontFamily: 'Poppins',
        fontSize: '10px',
        fontWeight: '400',
        lineHeight: '15px',
        letterSpacing: '-0.025em',
        textAlign: 'center',
        }
      ]
  },
    screens:{
      'mb':{'min': '250px', 'max': '639px'},
      'sm': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': {'min': '1536px','max': '1735px'},

      '3xl': {'min': '1736px'},

    },
    colors:{
      'primaryWeb':'#C49A50',
      'midGray':'#DDDDDD',
      'grayIcon':'#717171',
    },

    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('flowbite/plugin'),
    require('@tailwindcss/line-clamp'),
    require("daisyui"),
    require('@tailwindcss/typography'),
    require("tailwind-gradient-mask-image")
  ],
  variants: {
    scrollbar: ['rounded']
  },
}