import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

export const heading = tv({
  base: 'text-foreground',
  variants: {
    variant: {
      hero: 'text-heading-8xl font-bold leading-1 tracking-tighterplus',
      display: 'text-heading-7xl font-bold leading-1 tracking-tighterplus',
      title: 'text-heading-6xl font-bold leading-1 tracking-tighterplus',
      h1: 'text-heading-5xl font-bold leading-1 tracking-wideplus',
      h2: 'text-heading-4xl font-bold leading-2 tracking-wideplus',
      h3: 'text-heading-3xl font-semibold leading-2 tracking-wideerplus',
      h4: 'text-heading-2xl font-semibold leading-3 tracking-wideerplus',
      h5: 'text-heading-xl font-semibold leading-4 tracking-wideerplus',
      h6: 'text-heading-base font-semibold leading-5',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    weight: {
      regular: 'font-normal',
      medium: 'font-medium',
      semibold: 'font-semibold',
      bold: 'font-bold',
    },
    transform: {
      uppercase: 'uppercase',
      lowercase: 'lowercase',
      capitalize: 'capitalize',
      normal: 'normal-case',
    },
  },
  defaultVariants: {
    variant: 'h2',
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    {
      className,
      variant,
      children,
      align,
      weight,
      transform,
      as: Component = 'h2',
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        heading({
          variant,
          align,
          weight,
          transform,
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
