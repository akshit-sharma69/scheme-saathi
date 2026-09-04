/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        saathi: {
          saffron: '#FF9933',
          'saffron-light': '#FFF5EB',
          navy: '#0B1F3A',
          'navy-light': '#1E3A8A',
          blue: '#2563EB',
          emerald: '#10B981',
          gold: '#D97706',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 12s linear infinite',
      }
    },
  },
  plugins: [],
}
