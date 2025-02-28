import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const headingVariants = tv({
  base: '',
  variants: {
    variant: {
      title: 'text-3xl font-bold text-foreground sm:text-4xl',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
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
  ({ className, variant, weight, as, children, ...props }, ref) => {
    const Component = as || 'h2';

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            variant,
            weight,
            className,
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
