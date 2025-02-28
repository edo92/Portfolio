import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Icons } from './Icons';

const button = tv({
  base: 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground hover:bg-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border border-input hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'bg-transparent ring-0 hover:ring-0 ring-offset-0',
      link: 'underline-offset-4 hover:underline text-primary',
    },
    size: {
      default: 'py-2 px-4',
      sm: 'px-3 rounded-md',
      lg: 'px-8 rounded-md',
      icon: 'size-10',
    },
    isLoading: {
      true: 'opacity-50 pointer-events-none',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, ...props }, ref) => {
    return (
      <button
        className={button({ variant, size, isLoading, className })}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading && <Icons.Loader className="mr-2 size-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, button };
