import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';
import { forwardRef } from 'react';

const container = tv({
  base: 'container mx-auto w-full',
  variants: {
    size: {
      sm: 'max-w-screen-sm',
      md: 'max-w-screen-md',
      lg: 'max-w-screen-lg',
      xl: 'max-w-screen-xl',
      '2xl': 'max-w-screen-2xl',
      '3xl': 'max-w-screen-3xl',
      '4xl': 'max-w-screen-4xl',
      '5xl': 'max-w-screen-5xl',
      '6xl': 'max-w-screen-6xl',
      '7xl': 'max-w-screen-7xl',
      full: 'max-w-full',
    },
    padding: {
      none: 'px-0',
      sm: 'px-2 sm:px-4 lg:px-6',
      md: 'px-4 sm:px-6 lg:px-8',
      lg: 'px-6 sm:px-8 lg:px-12',
      xl: 'px-8 sm:px-12 lg:px-16',
    },
    centered: {
      true: 'flex items-center justify-center',
    },
  },
  defaultVariants: {
    size: 'full',
    padding: 'md',
  },
});

export type ContainerProps = VariantProps<typeof container> & {
  className?: string;
  children: React.ReactNode;
};

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size, padding, centered = false, className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(container({ size, padding, centered, className }))}
      {...props}
    >
      {children}
    </div>
  )
);

Container.displayName = 'Container';
