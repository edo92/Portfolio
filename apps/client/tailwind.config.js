const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

const baseFonts = [
   'ui-sans-serif',
   'system-ui',
   'sans-serif',
   'Apple Color Emoji',
   '"Segoe UI Emoji"',
   '"Segoe UI Symbol"',
   '"Noto Color Emoji"',
];

/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      join(__dirname, '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'),
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
            gradient: {
               1: 'var(--color-gradient-1)',
               2: 'var(--color-gradient-2)',
               3: 'var(--color-gradient-3)',
               4: 'var(--color-gradient-4)',
               5: 'var(--color-gradient-5)',
               6: 'var(--color-gradient-6)',
               7: 'var(--color-gradient-7)',
               8: 'var(--color-gradient-8)',
               9: 'var(--color-gradient-9)',
               10: 'var(--color-gradient-10)',
               11: 'var(--color-gradient-11)',
               12: 'var(--color-gradient-12)',
               13: 'var(--color-gradient-13)',
               14: 'var(--color-gradient-14)',
               15: 'var(--color-gradient-15)',
               16: 'var(--color-gradient-16)',
               17: 'var(--color-gradient-17)',
               18: 'var(--color-gradient-18)',
               19: 'var(--color-gradient-19)',
               20: 'var(--color-gradient-20)',
               21: 'var(--color-gradient-21)',
               22: 'var(--color-gradient-22)',
               23: 'var(--color-gradient-23)',
               24: 'var(--color-gradient-24)',
               25: 'var(--color-gradient-25)',
            },
         },

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

         fontFamily: {
            black: ['var(--font-walsheim-black)', ...baseFonts],
            bold: ['var(--font-walsheim-bold)', ...baseFonts],
            medium: ['var(--font-walsheim-medium)', ...baseFonts],
            regular: ['var(--font-walsheim-regular)', ...baseFonts],
            light: ['var(--font-walsheim-light)', ...baseFonts],
            'ultra-light': ['var(--font-walsheim-ultraLight)', ...baseFonts],
         },
      },
   },

   daisyui: {
      themes: [
         {
            dark: {
               background: 'var(--color-dark-100)',
            },
         },
         {
            light: {
               background: 'var(--color-light-100)',
            },
         },
      ],
   },

   plugins: [
      require('daisyui'),
      textGradiant('gradient-100', 'var(--gradient-1)'),
      textGradiant('gradient-200', 'var(--gradient-2)'),
      textGradiant('gradient-300', 'var(--gradient-3)'),
   ],
};

function textGradiant(name, gradient) {
   return ({ addUtilities }) => {
      const newUtilities = {
         [`.text-${name}`]: {
            background: gradient,
            '-webkit-background-clip': 'text',
            '-webkit-text-fill-color': 'transparent',
         },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
   };
}
