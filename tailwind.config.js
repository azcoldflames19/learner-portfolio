/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7fa',
          100: '#ebeef3',
          200: '#d2dbe5',
          300: '#b9c7d7',
          400: '#869fb9',
          500: '#53779c',
          600: '#4b6b8c',
          700: '#3f5a74',
          800: '#32485d',
          900: '#293b4b',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 