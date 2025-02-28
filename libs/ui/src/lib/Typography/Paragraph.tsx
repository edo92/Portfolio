'use client';

import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const paragraphVariants = tv({
  variants: {
    variant: {
      default: '',
      lead: 'text-xl text-muted-foreground',
      large: 'text-lg font-semibold',
      small: 'text-sm font-medium leading-none',
      muted: 'text-sm text-muted-foreground',
      subtle: 'text-lg font-normal text-muted-foreground/80',
    },
    weight: {
      light: 'font-light',
      normal: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    spacing: {
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
      tight: 'leading-tight',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
    },
    transition: {
      true: 'transition-all duration-200 ease-in-out',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  as?: 'p' | 'small' | 'span';
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  (
    {
      className,
      as: Component = 'p',
      size,
      variant,
      weight,
      spacing,
      transition,
      ...props
    },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(
          paragraphVariants({
            variant,
            weight,
            spacing,
            className,
            transition,
            size,
          })
        )}
        {...props}
      />
    );
  }
);

Paragraph.displayName = 'Paragraph';

export { Paragraph, paragraphVariants };
