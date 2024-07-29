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
  darkMode: 'class',

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
        'gradient-100':
          'linear-gradient(var(--color-gradient-1) 0%, var(--color-gradient-2) 6.666667014360428%, var(--color-gradient-3) 13.333334028720856%, var(--color-gradient-4) 20.000000298023224%, var(--color-gradient-5) 26.66666805744171%, var(--color-gradient-6) 33.33333432674408%, var(--color-gradient-7) 40.00000059604645%, var(--color-gradient-8) 46.666666865348816%, var(--color-gradient-9) 53.33333611488342%, var(--color-gradient-10) 60.00000238418579%, var(--color-gradient-11) 66.66666865348816%, var(--color-gradient-12) 73.33333492279053%, var(--color-gradient-13) 80.0000011920929%, var(--color-gradient-14) 86.66666746139526%, var(--color-gradient-15) 93.33333373069763%, var(--color-gradient-16) 100%)',
      },

      // backgroundImage: {
      //   gradiant: {
      //     1: "linear-gradient(to right bottom, rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.eAFxNBriFW8k0jCNOTCe6gHaHs%26pid%3DApi&f=1')",
      //     2: 'var(--gradient-2)',
      //     3: 'var(--gradient-3)',
      //     4: 'var(--gradient-4)',
      //     5: 'var(--gradient-5)',
      //   },
      // },

      space: {
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

      fontSize: {
        '3xs': 'var(--font-3xs)',
        '2xs': 'var(--font-2xs)',
        xs: 'var(--font-xs)',
        'xs/2': 'var(--font-xs-2)',
        sm: 'var(--font-sm)',
        'sm/2': 'var(--font-sm-2)',
        base: 'var(--font-base)',
        md: 'var(--font-md)',
        lg: 'var(--font-lg)',
        xl: 'var(--font-xl)',
        '2xl': 'var(--font-2xl)',
        '3xl': 'var(--font-3xl)',
        '4xl': 'var(--font-4xl)',
        '5xl': 'var(--font-5xl)',
        '6xl': 'var(--font-6xl)',
        '7xl': 'var(--font-7xl)',
        '8xl': 'var(--font-8xl)',
        '9xl': 'var(--font-9xl)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-100': {
          background:
            'linear-gradient(90deg, var(--color-gradient-1), var(--color-gradient-2), var(--color-gradient-3), var(--color-gradient-4), var(--color-gradient-5), var(--color-gradient-6), var(--color-gradient-7), var(--color-gradient-8), var(--color-gradient-9), var(--color-gradient-10), var(--color-gradient-11), var(--color-gradient-12), var(--color-gradient-13), var(--color-gradient-14), var(--color-gradient-15), var(--color-gradient-16))',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
