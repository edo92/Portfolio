import { cn } from '@libs/util';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
export type HeadingWeight = 'normal' | 'medium' | 'semibold' | 'bold';
export type HeadingSize =
  | '9xl'
  | '8xl'
  | '7xl'
  | '6xl'
  | '5xl'
  | '4xl'
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'base'
  | 'sm'
  | 'sm-2'
  | 'xs'
  | 'xs-2'
  | '2xs'
  | '3xs';

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
      '9xl': 'text-[9rem] leading-[9.5rem]',
      '8xl': 'text-[7rem] leading-[7.5rem]',
      '7xl': 'text-[5.5rem] leading-[6rem]',
      '6xl': 'text-[4.5rem] leading-[5rem]',
      '5xl': 'text-[3.5rem] leading-[4rem]',
      '4xl': 'text-[2.5rem] leading-[3rem]',
      '3xl': 'text-[2.125rem] leading-[2.625rem]',
      '2xl': 'text-[1.75rem] leading-[2.25rem]',
      xl: 'text-[1.5rem] leading-[2.125rem]',
      lg: 'text-[1.325rem] leading-[1.95rem]',
      md: 'text-[1.175rem] leading-[1.75rem]',
      base: 'text-[1.0625rem] leading-[1.675rem]',
      sm: 'text-[0.975rem] leading-[1.5rem]',
      'sm-2': 'text-[0.9375rem] leading-[1.45rem]',
      xs: 'text-[0.875rem] leading-[1.35rem]',
      'xs-2': 'text-[0.8125rem] leading-[1.25rem]',
      '2xs': 'text-[0.75rem] leading-[1.15rem]',
      '3xs': 'text-[0.625rem] leading-[1rem]',
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
