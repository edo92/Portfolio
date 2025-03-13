import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

export const heading = tv({
  base: 'text-foreground',
  variants: {
    variant: {
      display: 'text-5xl font-bold sm:text-6xl lg:text-6xl',
      section: 'text-4xl font-bold',
      card: 'text-md font-medium leading-normal sm:text-lg lg:text-xl',
      mini: 'text-base font-medium leading-[1.6] sm:text-lg lg:text-xl',
    },
  },
  defaultVariants: {
    variant: 'section',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, variant, children, as: Component = 'h2', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        heading({
          variant,
          className,
        })
      )}
      {...props}
    >
      {children}
    </Component>
  )
);
Heading.displayName = 'Heading';
