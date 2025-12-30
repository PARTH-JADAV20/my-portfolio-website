/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Muted color palette for flat UI
        'muted-orange': {
          50: '#fff5e6',
          100: '#ffe8cc',
          200: '#ffd9b3',
          300: '#ffc999',
          400: '#ffb880',
          500: '#ffa366',
          600: '#e68c4d',
          700: '#cc7533',
        },
        'muted-green': {
          50: '#f0f7f0',
          100: '#d9ead9',
          200: '#c2ddc2',
          300: '#abd0ab',
          400: '#94c394',
          500: '#7db67d',
          600: '#6fa06f',
          700: '#5a855a',
        },
        'muted-yellow': {
          50: '#fffef0',
          100: '#fffce0',
          200: '#fff9c2',
          300: '#fff7a3',
          400: '#fff485',
          500: '#fff166',
          600: '#e6d95c',
          700: '#ccbf52',
        },
        'muted-blue': {
          50: '#f0f4f8',
          100: '#d9e3ed',
          200: '#c2d2e2',
          300: '#abc1d7',
          400: '#94b0cc',
          500: '#7d9fc1',
          600: '#6f8fad',
          700: '#5a7590',
        },
        'muted-purple': {
          50: '#f5f0f8',
          100: '#e6d9ed',
          200: '#d7c2e2',
          300: '#c8abd7',
          400: '#b994cc',
          500: '#aa7dc1',
          600: '#996fad',
          700: '#7f5a90',
        },
        'muted-red': {
          50: '#fef0f0',
          100: '#fce0e0',
          200: '#f9c2c2',
          300: '#f7a3a3',
          400: '#f48585',
          500: '#f16666',
          600: '#d95c5c',
          700: '#bf5252',
        },
        'text-gray': {
          DEFAULT: '#4a4a4a',
          dark: '#2d2d2d',
        },
      },
      borderRadius: {
        'flat': '12px',
        'flat-lg': '16px',
      },
    },
  },
  plugins: [],
}