/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: '#060608',
          900: '#0a0a0e',
          850: '#111117',
          800: '#181820',
          700: '#23232e',
          600: '#323240',
        },
        gold: {
          50: '#fbf9f0',
          100: '#f6f1dc',
          200: '#eddfb3',
          300: '#e1c883',
          400: '#d7b358',
          500: '#c59a35',
          600: '#ab7d29',
          700: '#875d23',
          800: '#714c23',
          900: '#614022',
          light: '#f5e6be',
          DEFAULT: '#d4af37',
          dark: '#a88420',
          champagne: '#e9d8a6',
        },
        velvet: {
          900: '#3a0c13',
          800: '#54121d',
          700: '#721927',
          600: '#922233',
          500: '#af2d42',
        },
        ivory: {
          DEFAULT: '#f9f8f5',
          soft: '#f1ede4',
          muted: '#ded7c8',
          dark: '#c4bcab',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        cinzel: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        nepali: ['"Mukta"', '"Rozha One"', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(circle at center, rgba(212,175,55,0.15) 0%, rgba(10,10,14,0) 70%)',
        'radial-velvet': 'radial-gradient(circle at center, rgba(114,25,39,0.2) 0%, rgba(10,10,14,0) 70%)',
        'gold-gradient': 'linear-gradient(135deg, #f5e6be 0%, #d4af37 50%, #aa8222 100%)',
        'dark-glass': 'linear-gradient(180deg, rgba(24, 24, 32, 0.7) 0%, rgba(10, 10, 14, 0.85) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        wave: {
          '0%, 100%': { height: '6px' },
          '50%': { height: '24px' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        wave: 'wave 1.2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
