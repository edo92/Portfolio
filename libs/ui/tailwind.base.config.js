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
        '8xl': '4.5rem',
        '7xl': '4rem',
        '6xl': '3.5rem',
        '5xl': '3rem',
        '4xl': '2.5rem',
        '3xl': '2rem',
        xs: '0.8125rem',
        '2xs': '0.75rem',
      },

      letterSpacing: {
        tighterplus: ' -0.02em',
        wideplus: '-0.015em',
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
