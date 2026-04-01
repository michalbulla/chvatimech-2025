const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./templates/**/*.twig'],
  theme: {
    fontFamily: {
      primary: ['ui-sans-serif', 'sans-serif'],
      secondary: ['Montserrat', 'sans-serif'],
    },
    screens: {
      sm: '450px',
      'sm-md': '600px',
      md: '768px',
      lg: '1024px',
      xl: '1100px',
      // We want the maximum container to stop at 1350px
      // so we set the last breakpoint to the same value
      '2xl': '1100px',
      // The original Tailwind 2xl breakpoint value
      // '2xl': '1536px',
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          // put the custom site color here
          'gray-light': '#F3F3F3',
          'gray': '#1b1b1b',
          'green': '#0A6108',
          'green-light': '#AFB924',
        },
        content: {
          'text': colors.gray[600],
          'link': colors.blue[700],
          'h2': '#0A6108',
          'h3': colors.gray[600],
          'h4': colors.gray[600],
          'divider': colors.gray[300],
          image: {
            'caption': colors.gray[600],
            'ring': colors.gray[300],
          },
          table: {
            'heading': colors.gray[800],
            'heading-bg': colors.gray[200],
            'border': colors.gray[400],
            'grid-row': colors.gray[300],
            'grid-column': colors.gray[300],
            'alt-row-bg': colors.gray[200],
          },
          doc: {
            'size': colors.gray[700],
            'description': colors.gray[700],
            'card-bg': colors.white,
            'card-ring': colors.gray[300],
          },
        },
        social: {
          facebook: '#3c5a99',
          linkedin: '#0077b5',
          twitter: '#55acee',
          pinterest: '#cb2027',
        },
      },
      backgroundImage: {
        // 'callout-red': "url('/img/callout-graphic_red.svg'), linear-gradient(to right, #E7751F, #D33D4C)",
      },
      boxShadow: {
        'box' : '0px 0px 3px rgba(0, 0, 0, .5)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
