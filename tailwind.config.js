/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const colors = {
  transparent: 'transparent',
  white: 'white',
  'dark-blue': '#1F2029',
  'light-blue': '#2DA2DD',
  beige: '#DFDED2',
}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato'],
        'garamond': ['Garamond'],
        'Photograph':['Photograoh Signature'],
        'brush':['Brush Script MT']
      },
      screens: {
        'xxs': '260px',
        'mxxs': '310px',
        'xxxs': '389px',
        'xs': '400px',
        'mmxs': '458px',
        'mmmxs': '480px',
        'mxs': '576px',
        'mxms': '600px',
        'xsm': '614px',
        'sm': '640px',
        'md': '768px',
        'mdd': '830px',
        'ddmd': '900px',
        'dmd': '933px',
        'lg': '1024px',
        'ddlg': '1070px',
        'dlg':'1186px',
        'xl': '1280px',
        'dxl':'1316px',
        '2xl': '1536px',
        'yxs': '300px',


      },
      fontFamily: {
        Montserrat: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
      fontFamily: {
        'photograph-signature': ['Photograph Signature', 'sans-serif'],
        'gilroy-extrabold': ['Gilroy ExtraBold', 'sans-serif'],
        'proxima-nova-bold': ['Proxima Nova Bold', 'sans-serif'],
        'proxima-nova-extrabold': ['Proxima Nova ExtraBold', 'sans-serif']
      },
      backgroundGradientPatterns: {
        'sm': 'radial-gradient(circle at 52% 50%, rgba(45, 162, 221, 0.2) 0, transparent 60%), radial-gradient(circle at 52% 50%, rgba(45, 162, 221, 0.2) 0, transparent 60%)',
      },
      scale: {
        '98': '.98',
        '102': '1.02',
      },
    },
    colors: colors,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    function ({ addUtilities }) {
      const newUtilities = {
        '.bg-gradient-pattern-sm': {
          background: 'theme("backgroundGradientPatterns.sm")',
        },
        '.bor': { borderBlockColor: '#2DA2DD' },
        '.bacck': { backgroundImage: 'url("./pages/about us/img/eje3.png")' },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};