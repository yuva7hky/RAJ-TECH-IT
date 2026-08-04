/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#030712',
          surface: '#070d1e',
          card: 'rgba(10, 18, 38, 0.65)',
          border: 'rgba(59, 130, 246, 0.18)',
          borderHover: 'rgba(0, 210, 255, 0.45)',
          blue: '#3b82f6',
          cyan: '#00d2ff',
          indigo: '#6366f1',
          glow: 'rgba(59, 130, 246, 0.35)',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(59, 130, 246, 0.25)',
        'glow-md': '0 0 30px rgba(59, 130, 246, 0.35)',
        'glow-lg': '0 0 50px rgba(0, 210, 255, 0.45)',
        'glow-cyan': '0 0 25px rgba(0, 210, 255, 0.5)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}
