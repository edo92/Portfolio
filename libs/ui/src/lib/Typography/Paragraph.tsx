'use client';

import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const paragraphVariants = tv({
  base: 'text-foreground',
  variants: {
    size: {
      '3xl': 'text-xl sm:text-2xl md:text-3xl lg:text-4xl',
      '2xl': 'text-lg sm:text-xl md:text-2xl lg:text-3xl',
      xl: 'text-base sm:text-lg md:text-xl lg:text-2xl',
      lg: 'text-sm sm:text-base md:text-lg lg:text-xl',
      md: 'text-xs sm:text-sm md:text-base lg:text-lg',
      base: 'text-xs sm:text-sm md:text-base',
      sm: 'text-xs md:text-sm',
      xs: 'xs:text-xs text-[10px]',
    },
    weight: {
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
    leading: {
      tight: 'leading-tight',
      snug: 'leading-snug',
      normal: 'leading-normal',
      relaxed: 'leading-relaxed',
      loose: 'leading-loose',
    },
    variant: {
      subtle: 'text-muted-foreground/90',
      muted: 'text-muted-foreground',
      body: 'text-foreground/90 leading-relaxed',
      gradient:
        'bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent',

      caption: 'text-muted-foreground/80 text-xs',
      success: 'text-green-600 dark:text-green-400',
      warning: 'text-amber-600 dark:text-amber-400',
      error: 'text-red-600 dark:text-red-400',
    },
    transition: {
      true: 'transition-all duration-200 ease-in-out',
    },
  },
  defaultVariants: {
    size: 'base',
    weight: 'normal',
    leading: 'relaxed',
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
      weight,
      variant,
      leading,
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
            size,
            weight,
            variant,
            leading,
            transition,
            className,
          })
        )}
        {...props}
      />
    );
  }
);

Paragraph.displayName = 'Paragraph';

export { Paragraph, paragraphVariants };
