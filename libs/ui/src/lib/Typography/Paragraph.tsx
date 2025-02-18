import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '../cn';

const paragraphVariants = tv({
  base: 'dark:text-light-400 text-dark-100 transition-colors duration-200 ease-in-out',
  variants: {
    weight: {
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    size: {
      '3xs': 'text-3xs',
      '2xs': 'text-2xs',
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      md: 'text-lg',
      lg: 'text-xl',
      xl: 'text-2xl',
      '2xl': 'text-3xl',
      '3xl': 'text-4xl',
      '4xl': 'text-5xl',
      '5xl': 'text-6xl',
    },
    variant: {
      p: '',
      span: '',
      small: '',
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
    variant: 'p',
    weight: 'normal',
    size: 'base',
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
      as,
      children,
      ...props
    },
    ref,
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
            className,
          }),
        )}
        {...props}
      >
        {children}
      </Component>
    );
  },
);
Paragraph.displayName = 'Paragraph';

export { Paragraph, paragraphVariants };
