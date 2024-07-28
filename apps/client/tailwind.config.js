const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
        },

        light: {
          100: 'rgb(var(--color-light-100) / <alpha-value>)',
          200: 'rgb(var(--color-light-200) / <alpha-value>)',
          300: 'rgb(var(--color-light-300) / <alpha-value>)',
          400: 'rgb(var(--color-light-400) / <alpha-value>)',
          500: 'rgb(var(--color-light-500) / <alpha-value>)',
        },

        dark: {
          100: 'rgb(var(--color-dark-100) / <alpha-value>)',
          200: 'rgb(var(--color-dark-200) / <alpha-value>)',
          300: 'rgb(var(--color-dark-300) / <alpha-value>)',
          400: 'rgb(var(--color-dark-400) / <alpha-value>)',
        },
      },

      backgroundImage: {
        1: 'var(--gradient-1)',
        2: 'var(--gradient-2)',
        3: 'var(--gradient-3)',
        4: 'var(--gradient-4)',
        5: 'var(--gradient-5)',
      },

      spacing: {
        0.5: 'var(--spacing-0-5)',
        1: 'var(--spacing-1)',
        1.5: 'var(--spacing-1-5)',
        2: 'var(--spacing-2)',
        2.5: 'var(--spacing-2-5)',
        3: 'var(--spacing-3)',
        3.5: 'var(--spacing-3-5)',
        4: 'var(--spacing-4)',
        5: 'var(--spacing-5)',
        6: 'var(--spacing-6)',
        7: 'var(--spacing-7)',
        8: 'var(--spacing-8)',
        9: 'var(--spacing-9)',
        10: 'var(--spacing-10)',
        12: 'var(--spacing-12)',
        14: 'var(--spacing-14)',
        16: 'var(--spacing-16)',
        20: 'var(--spacing-20)',
        24: 'var(--spacing-24)',
        28: 'var(--spacing-28)',
        32: 'var(--spacing-32)',
        36: 'var(--spacing-36)',
        40: 'var(--spacing-40)',
        44: 'var(--spacing-44)',
        48: 'var(--spacing-48)',
        52: 'var(--spacing-52)',
        56: 'var(--spacing-56)',
        60: 'var(--spacing-60)',
        64: 'var(--spacing-64)',
        72: 'var(--spacing-72)',
        80: 'var(--spacing-80)',
        96: 'var(--spacing-96)',
      },

      borderRadius: {
        none: 'var(--rounded-none)',
        xss: 'var(--rounded-xss)',
        xs: 'var(--rounded-xs)',
        sm: 'var(--rounded-sm)',
        md: 'var(--rounded-md)',
        lg: 'var(--rounded-lg)',
        xl: 'var(--rounded-xl)',
        '2xl': 'var(--rounded-2xl)',
        full: 'var(--rounded-full)',
      },

      borderWidth: {
        0: 'var(--border-0)',
        0.5: 'var(--border-0-5)',
        border: 'var(--border)',
        2: 'var(--border-2)',
        3: 'var(--border-3)',
        4: 'var(--border-4)',
        5: 'var(--border-5)',
        6: 'var(--border-6)',
      },
    },
  },
  plugins: [],
};
