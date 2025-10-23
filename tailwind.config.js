/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#3b4cca',
          500: '#0066cc',
        },
        secondary: {
          600: '#1DB5BE',
          500: '#009fbd',
          400: '#3f93bf',
        },
        background: {
          light: '#d8effa',
          dark: '#0a192f',
          brand: '#1db5be',
          warm: '#fff7e6',
          success: '#eefcff',
          info: '#d5f2ff',
        },
        text: {
          primary: '#111827',
          dark: '#071039',
          secondary: '#4c526c',
          light: '#e7eaf1',
          link: '#0066cc',
          success: '#09b295',
        },
        semantic: {
          success: '#09b295',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
        },
        borders: {
          primary: '#3b4cca',
          secondary: '#3f93bf',
          light: '#e7eaf1',
          dark: '#000000',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'Noto Sans KR', 'sans-serif'],
        display: ['var(--font-poppins)', 'Poppins', 'Noto Sans KR', 'sans-serif'],
        korean: ['var(--font-noto-sans-kr)', 'Noto Sans KR', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['60px', { lineHeight: '72px', letterSpacing: '-1.5px' }],
        'display-lg': ['48px', { lineHeight: '60px', letterSpacing: '-1.2px' }],
        'h1': ['32px', { lineHeight: '44px', letterSpacing: '-0.8px' }],
        'h2': ['24px', { lineHeight: 'normal' }],
        'h3': ['22px', { lineHeight: '28px' }],
        'h4': ['20px', { lineHeight: '28px' }],
        'h5': ['18px', { lineHeight: '28px' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body-md': ['16px', { lineHeight: '28px' }],
        'body-sm': ['14px', { lineHeight: '28px' }],
        'body-xs': ['12px', { lineHeight: '20px' }],
      },
      spacing: {
        '1': '2px',
        '2': '4px',
        '3': '8px',
        '4': '10px',
        '5': '16px',
        '6': '20px',
        '7': '24px',
        '8': '32px',
        '10': '40px',
        '12': '50px',
        '14': '60px',
        '16': '67px',
        '20': '80px',
        '24': '96px',
      },
      maxWidth: {
        'container': '1440px',
        'content': '1216px',
      },
      borderRadius: {
        'sm': '5px',
        'md': '8px',
        'lg': '10px',
        'xl': '15px',
        'full': '50px',
      },
      boxShadow: {
        'sm': '2px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'md': '4px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        'lg': '0px 24px 48px -12px rgba(17, 24, 39, 0.25)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'count-up': 'countUp 0.3s ease-out',
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        countUp: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      perspective: {
        '1000': '1000px',
        '1500': '1500px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
