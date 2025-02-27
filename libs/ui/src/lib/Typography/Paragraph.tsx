import { cn } from '@libs/util';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const paragraphVariants = tv({
  base: 'text-body transition-colors duration-200 ease-in-out',
  variants: {
    weight: {
      light: 'font-light',
      regular: 'font-regular',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
      black: 'font-black',
    },
    size: {
      '3xs': 'text-[0.45rem] leading-[0.75rem]',
      '2xs': 'text-[0.625rem] leading-[1rem]',
      'xs-2': 'text-[0.725rem] leading-[1.125rem]',
      xs: 'text-[0.8125rem] leading-[1.25rem]',
      'sm-2': 'text-[0.8435rem] leading-[1.35rem]',
      sm: 'text-[0.875rem]',
      base: 'text-[0.938rem] leading-[1.5rem]',
      md: 'text-[1.0625rem] leading-[1.675rem]',
      lg: 'text-[1.125rem] leading-[1.75rem]',
      xl: 'text-[1.25rem] leading-[1.875rem]',
      '2xl': 'text-[1.5rem] leading-[2rem]',
      '3xl': 'text-[1.875rem] leading-[2.375rem]',
      '4xl': 'text-[2rem] leading-[2.5rem]',
      '5xl': 'text-[3rem] leading-[3.5rem]',
      '6xl': 'text-[3.75rem] leading-[4.25rem]',
      '7xl': 'text-[4.5rem] leading-[5rem]',
      '8xl': 'text-[6rem] leading-[6.5rem]',
      '9xl': 'text-[8rem] leading-[8.5rem]',
    },
    variant: {
      p: 'text-foreground',
      span: '',
      small: 'text-sm text-muted-foreground',
    },
    truncate: {
      true: 'truncate',
    },
    uppercase: {
      true: 'uppercase tracking-wide',
    },
    capitalize: {
      true: 'capitalize',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    tracking: {
      tighter: 'tracking-tighter',
      tight: 'tracking-tight',
      normal: 'tracking-normal',
      wide: 'tracking-wide',
      wider: 'tracking-wider',
      widest: 'tracking-widest',
    },
  },
  defaultVariants: {
    variant: 'p',
    weight: 'regular',
    size: 'base',
    align: 'left',
    tracking: 'normal',
  },
});

type ParagraphElement = 'p' | 'span' | 'small';

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  as?: ParagraphElement;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      className,
      variant,
      weight,
      size,
      truncate,
      uppercase,
      capitalize,
      align,
      tracking,
      as,
      children,
      ...props
    },
    ref
  ) => {
    const Component = as || variant || 'p';

    return (
      <Component
        ref={ref}
        className={cn(
          paragraphVariants({
            variant,
            weight,
            size,
            truncate,
            uppercase,
            capitalize,
            align,
            tracking,
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
Paragraph.displayName = 'Paragraph';

export { Paragraph, paragraphVariants };
