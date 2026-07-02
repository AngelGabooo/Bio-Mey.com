/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Slate (grises)
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          500: '#64748B',
          600: '#475569',
          900: '#0F172A',
        },
        // Azules
        blue: {
          400: '#60A5FA',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        // Morados
        purple: {
          400: '#8B5CF6',
          600: '#7C3AED',
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
        },
        // Estados
        green: {
          500: '#22C55E',
        },
        red: {
          500: '#EF4444',
        },
        yellow: {
          500: '#F59E0B',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #2563EB, #7C3AED)',
        'gradient-primary-hover': 'linear-gradient(135deg, #1D4ED8, #6D28D9)',
        'gradient-dark': 'linear-gradient(135deg, #1D4ED8 0%, #6D28D9 50%, #1E3A8A 100%)',
        'gradient-hero-dark': `
          radial-gradient(circle at top right, rgba(124,58,237,0.3), transparent 50%),
          radial-gradient(circle at bottom left, rgba(37,99,235,0.25), transparent 45%),
          linear-gradient(135deg, #1D4ED8 0%, #6D28D9 50%, #1E3A8A 100%)
        `,
      },
      boxShadow: {
        'card': '0 10px 30px rgba(15,23,42,0.05)',
        'card-hover': '0 10px 30px rgba(37,99,235,0.12)',
        'button': '0 10px 30px rgba(37,99,235,0.2)',
        'button-hover': '0 10px 30px rgba(37,99,235,0.3)',
        'dark': '0 10px 30px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}