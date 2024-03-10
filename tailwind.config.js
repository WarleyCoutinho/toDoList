/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/app/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        REGULAR: 'Inter_400Regular',
        BOLD: 'Inter_700Bold',
      },
      fontSize: {
        SM: '12',
        MD: '14',
        LG: '16',
      },
    },
    colors: {
      BLUE_DARK: '#1E6F9F',
      BLUE: '#4EA8DE',
      PURPLE_DARK: '#5E60CE',
      PURPLE: '#8284FA',

      DANGER: {
        700: '#E25858',
      },
      GRAY: {
        100: '#F2F2F2',
        200: '#D9D9D9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1A1A1A',
        700: '#0D0D0D',
      },
    },
  },
  plugins: [],
};
