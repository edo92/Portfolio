module.exports = {
  theme: {
    extend: {
      colors: {
        destructive: {
          DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
          foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)',
        },
        success: {
          DEFAULT: 'hsl(var(--success) / <alpha-value>)',
          foreground: 'hsl(var(--success-foreground) / <alpha-value>)',
        },

        background: {
          DEFAULT: 'hsl(var(--background) / <alpha-value>)',
          primary: 'hsl(var(--primary-background) / <alpha-value>)',
          secondary: 'hsl(var(--secondary-background) / <alpha-value>)',
        },
        foreground: 'hsl(var(--foreground) / <alpha-value>)',
        body: {
          DEFAULT: 'hsl(var(--body) / <alpha-value>)',
          secondary: 'hsl(var(--body-secondary) / <alpha-value>)',
        },
        primary: {
          foreground: 'hsl(var(--primary-foreground) / <alpha-value>)',
          100: 'hsl(var(--primary-100) / <alpha-value>)',
          200: 'hsl(var(--primary-200) / <alpha-value>)',
          300: 'hsl(var(--primary-300) / <alpha-value>)',
          400: 'hsl(var(--primary-400) / <alpha-value>)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
          foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
          foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
          foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
        },
        card: {
          DEFAULT: 'hsl(var(--card) / <alpha-value>)',
          foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
        },
        border: 'hsl(var(--border) / <alpha-value>)',
      },

      fontSize: {
        // Heading sizes
        'heading-72': [
          '4.5rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'heading-64': [
          '4rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'heading-56': [
          '3.5rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' },
        ],
        'heading-48': [
          '3rem',
          { lineHeight: '1.1', letterSpacing: '-0.015em', fontWeight: '700' },
        ],
        'heading-40': [
          '2.5rem',
          { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '700' },
        ],
        'heading-32': [
          '2rem',
          { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'heading-24': [
          '1.5rem',
          { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'heading-20': [
          '1.25rem',
          { lineHeight: '1.4', letterSpacing: '-0.01em', fontWeight: '600' },
        ],
        'heading-16': ['1rem', { lineHeight: '1.5', fontWeight: '600' }],
        'heading-14': ['0.875rem', { lineHeight: '1.5', fontWeight: '600' }],

        // Button sizes
        'button-16': [
          '1rem',
          { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '500' },
        ],
        'button-14': [
          '0.875rem',
          { lineHeight: '1.5', letterSpacing: '-0.01em', fontWeight: '500' },
        ],
        'button-12': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],

        // Label sizes
        'label-20': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'label-18': ['1.125rem', { lineHeight: '1.4', fontWeight: '500' }],
        'label-16': ['1rem', { lineHeight: '1.5', fontWeight: '500' }],
        'label-14': ['0.875rem', { lineHeight: '1.5', fontWeight: '500' }],
        'label-13': ['0.8125rem', { lineHeight: '1.5', fontWeight: '500' }],
        'label-12': ['0.75rem', { lineHeight: '1.5', fontWeight: '500' }],

        // Copy sizes
        'copy-24': ['1.5rem', { lineHeight: '1.5', fontWeight: '400' }],
        'copy-20': ['1.25rem', { lineHeight: '1.6', fontWeight: '400' }],
        'copy-18': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'copy-16': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'copy-14': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],
        'copy-13': ['0.8125rem', { lineHeight: '1.6', fontWeight: '400' }],
      },

      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      backgroundImage: {
        'gradient-primary':
          'linear-gradient(to bottom right, hsl(var(--primary-background) / 0.1), hsl(var(--secondary) / 0.1))',
      },
    },
  },
};
