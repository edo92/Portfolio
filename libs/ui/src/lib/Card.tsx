'use client';

import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

const cardVariants = tv({
  base: 'rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-200',
  variants: {
    variant: {
      default: 'border-border',
      outline: 'border-2',
      ghost: 'border-transparent bg-transparent shadow-none',
      flat: 'border-transparent shadow-none',
      elevated: 'border-transparent shadow-md hover:shadow-lg',
      interactive: 'cursor-pointer hover:-translate-y-1 hover:shadow-md',
    },
    size: {
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-7',
    },
    rounded: {
      default: 'rounded-lg',
      md: 'rounded-md',
      lg: 'rounded-xl',
      full: 'rounded-3xl',
      none: 'rounded-none',
    },
    color: {
      default: '',
      primary: 'border-primary/20 bg-primary/5 text-primary-foreground',
      secondary: 'border-secondary/20 bg-secondary/5 text-secondary-foreground',
      destructive:
        'border-destructive/20 bg-destructive/5 text-destructive-foreground',
      success:
        'border-green-500/20 bg-green-500/5 text-green-700 dark:text-green-300',
      warning:
        'border-yellow-500/20 bg-yellow-500/5 text-yellow-700 dark:text-yellow-300',
      info: 'border-blue-500/20 bg-blue-500/5 text-blue-700 dark:text-blue-300',
    },
    withHoverEffect: {
      true: 'hover:bg-accent hover:text-accent-foreground',
    },
    isClickable: {
      true: 'cursor-pointer',
    },
    hasBorder: {
      true: 'border',
      false: 'border-0',
    },
  },
  compoundVariants: [
    {
      variant: 'interactive',
      color: 'primary',
      class: 'hover:bg-primary/10',
    },
    {
      variant: 'interactive',
      color: 'secondary',
      class: 'hover:bg-secondary/10',
    },
    {
      variant: 'interactive',
      color: 'destructive',
      class: 'hover:bg-destructive/10',
    },
    {
      variant: 'outline',
      color: 'primary',
      class: 'border-primary',
    },
    {
      variant: 'outline',
      color: 'secondary',
      class: 'border-secondary',
    },
    {
      variant: 'outline',
      color: 'destructive',
      class: 'border-destructive',
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    rounded: 'default',
    color: 'default',
    hasBorder: true,
  },
});

const cardHeaderVariants = tv({
  base: 'flex flex-col space-y-1.5',
  variants: {
    size: {
      sm: 'p-3',
      md: 'p-5',
      lg: 'p-7',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'start',
  },
});

const cardContentVariants = tv({
  base: '',
  variants: {
    size: {
      sm: 'p-3 pt-0',
      md: 'p-5 pt-0',
      lg: 'p-7 pt-0',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

const cardFooterVariants = tv({
  base: 'flex items-center',
  variants: {
    size: {
      sm: 'p-3 pt-0',
      md: 'p-5 pt-0',
      lg: 'p-7 pt-0',
    },
    align: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    size: 'md',
    align: 'start',
  },
});

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant,
      size,
      rounded,
      color,
      withHoverEffect,
      isClickable,
      hasBorder,
      ...props
    },
    ref
  ) => {
    return (
      <div
        className={cn(
          cardVariants({
            variant,
            size,
            rounded,
            color,
            withHoverEffect,
            isClickable,
            hasBorder,
          }),
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Card.displayName = 'Card';

export interface CardHeaderProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardHeaderVariants> {}

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, size, align, ...props }, ref) => {
    return (
      <div
        className={cn(cardHeaderVariants({ size, align }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardHeader.displayName = 'CardHeader';

export interface CardContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardContentVariants> {}

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, size, ...props }, ref) => {
    return (
      <div
        className={cn(cardContentVariants({ size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardContent.displayName = 'CardContent';

export interface CardFooterProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardFooterVariants> {}

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, size, align, ...props }, ref) => {
    return (
      <div
        className={cn(cardFooterVariants({ size, align }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
