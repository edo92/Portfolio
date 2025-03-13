import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { Icons } from './Icons';

const button = tv({
  base: 'focus-visible:ring-ring inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default:
        'bg-background-primary text-primary-foreground hover:bg-background-primary/90',
      destructive:
        'bg-destructive text-destructive-foreground hover:bg-destructive/90',
      outline:
        'border-input border hover:bg-accent hover:text-accent-foreground',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      ghost: 'bg-transparent ring-0 ring-offset-0 hover:ring-0',
      link: 'text-primary underline-offset-4 hover:underline',
    },
    size: {
      default: 'px-4 py-2',
      sm: 'rounded-md px-3',
      lg: 'rounded-md px-8',
      icon: 'size-10',
    },
    isLoading: {
      true: 'pointer-events-none opacity-50',
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
