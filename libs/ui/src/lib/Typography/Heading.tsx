import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const headingVariants = tv({
  base: 'text-foreground tracking-tight font-inter',
  variants: {
    size: {
      '4xl': 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl', // Hero, main title
      '3xl': 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl', // Section titles
      '2xl': 'text-xl sm:text-2xl md:text-3xl lg:text-4xl', // Major section headings
      xl: 'text-lg sm:text-xl md:text-2xl lg:text-3xl', // Sub-section headings
      lg: 'text-base sm:text-lg md:text-xl lg:text-2xl', // Content headings
      md: 'text-sm sm:text-base md:text-lg lg:text-xl', // Card headings
      sm: 'text-xs sm:text-sm md:text-base lg:text-lg', // Minor headings
      xs: 'text-xs md:text-sm', // Small labels/headings
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
    variant: {
      title: 'pb-2 text-xl font-bold sm:text-2xl md:text-3xl lg:text-4xl',
      gradient:
        'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent',
      section: 'text-lg font-semibold sm:text-xl md:text-2xl lg:text-3xl',
      subtle: 'text-muted-foreground',
    },
    as: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
    leading: {
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
    transition: {
      true: 'transition-all duration-200 ease-in-out',
    },
  },
  defaultVariants: {
    as: 'h2',
    size: '2xl',
    weight: 'semibold',
    leading: 'tight',
  },
});

type HeadingLevel = VariantProps<typeof headingVariants>['as'];

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant,
      weight,
      size,
      as,
      leading,
      transition,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || 'h2';

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            size,
            weight,
            leading,
            transition,
            className,
            variant,
          })
        )}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
Heading.displayName = 'Heading';

export { Heading, headingVariants };
