/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#0b0a14',
          800: '#12101f',
          700: '#1a1730',
          600: '#241f44',
        },
        brand: {
          violet: '#8b5cf6',
          fuchsia: '#d946ef',
          cyan: '#22d3ee',
          blue: '#3b82f6',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grad-brand':
          'linear-gradient(120deg, #8b5cf6 0%, #d946ef 45%, #22d3ee 100%)',
        'grad-text':
          'linear-gradient(120deg, #a78bfa 0%, #e879f9 50%, #67e8f9 100%)',
        'grad-radial':
          'radial-gradient(1200px 600px at 20% -10%, rgba(139,92,246,0.35), transparent 60%), radial-gradient(1000px 500px at 100% 10%, rgba(34,211,238,0.22), transparent 55%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
