/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        primary: '#4F6F52', // subtle green accent
        muted: '#f4f4f5',
        'muted-foreground': '#71717a',
        border: '#e4e4e7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Or 'Geist', 'Outfit'
      },
      animation: {
        'cursor-blink': 'blink 1s step-start infinite',
        'slow-spin': 'spin 10s linear infinite',
      },
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        }
      }
    },
  },
  plugins: [],
}
