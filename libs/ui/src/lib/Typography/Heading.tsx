import { cn } from '@libs/util';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingSize =
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'base'
  | 'xs';

const headingVariants = tv({
  base: 'dark:text-light-400 text-dark-100 transition-colors duration-200 ease-in-out',
  variants: {
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      '5xl': 'text-5xl',
      '4xl': 'text-4xl',
      '3xl': 'text-3xl',
      '2xl': 'text-2xl',
      xl: 'text-xl',
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      base: 'text-base',
      xs: 'text-xs',
    },
    variant: {
      h1: '',
      h2: '',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
    truncate: {
      true: 'truncate',
    },
    uppercase: {
      true: 'uppercase',
    },
    capitalize: {
      true: 'capitalize',
    },
  },
  defaultVariants: {
    weight: 'semibold',
    size: 'xl',
    variant: 'h2',
  },
});

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
      truncate,
      uppercase,
      capitalize,
      as,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || variant || 'h2';

    return (
      <Component
        ref={ref}
        className={cn(
          headingVariants({
            variant,
            weight,
            size,
            truncate,
            uppercase,
            capitalize,
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
