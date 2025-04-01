/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Enables dark mode
  theme: {
    extend: {
      animation: {
        'fade-in-out': 'fadeInOut 1.5s ease-in-out infinite',
        'logo-slide': 'logoSlide 15s linear infinite',
      },
      keyframes: {
        fadeInOut: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 }, // Optional for smoother transition
          '100%': { opacity: 0 },
        },
        logoSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      height: {
        'screen-minus-20': 'calc(100vh - 20px)',
      },
      screens: {
        '1xl': '1440px',
      },
      translate: {
        full: '100%',
        '-full': '-100%',
      },
    },
  },
  plugins: [], // No plugins required
};
