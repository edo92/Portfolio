import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const headingVariants = tv({
  base: '',
  variants: {
    size: {
      '3xl': 'text-3xl md:text-4xl lg:text-5xl',
      '2xl': 'text-2xl md:text-3xl lg:text-4xl',
      xl: 'text-xl md:text-2xl lg:text-3xl',
      lg: 'text-lg md:text-xl lg:text-2xl',
      md: 'text-base md:text-lg lg:text-xl',
      sm: 'text-sm md:text-base lg:text-lg',
      xs: 'text-xs md:text-sm',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
    variant: {
      title: 'pb-2 text-2xl font-bold md:text-3xl lg:text-4xl',
      gradient:
        'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent',
      section: 'text-xl font-semibold md:text-2xl lg:text-3xl',
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
  },
  defaultVariants: {
    as: 'h2',
  },
});

type HeadingLevel = VariantProps<typeof headingVariants>['as'];

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  as?: HeadingLevel;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, weight, size, as, children, ...props }, ref) => {
    const Component = as || 'h2';

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            size,
            weight,
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
