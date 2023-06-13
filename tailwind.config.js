/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      colors: {
        gray: {
          0: '#fff',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          400: '#9CA3AF',
          500: '#6B7280',
          700: '#374151',
          900: '#111827',
          950: '#030712',
        },
        blue: {
          500: '#6366F1',
          600: '#4F46E5',
        },
        green: {
          500: '#30D070',
        },
      },
      fontSize: {
        '7xl': ['5.625rem', '6rem'],
        '6xl': ['4rem', '4.5rem'],
        '5xl': ['3rem', '3.5rem'],
        '4xl': ['2.5rem', '2.75rem'],
        '3xl': ['2rem', '2.5rem'],
        '2xl': ['1.5rem', '2rem'],
        xl: ['1.25rem', '1.875rem'],
        lg: ['1.125rem', '1.625rem'],
        base: ['1rem', '1.5rem'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    ({ addComponents }) => {
      addComponents({
        '.container': {
          maxWidth: '100%',
          width: '100%',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          margin: '0 auto',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            maxWidth: '768px',
          },
          '@screen lg': {
            maxWidth: '1280px',
          },
          '@screen xl': {
            maxWidth: '1480px',
          },
        },
      });
    },
  ],
};
