import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

export const heading = tv({
  base: 'text-foreground',
  variants: {
    variant: {
      hero: 'text-heading-72 font-bold tracking-tight',
      display: 'text-heading-64 font-bold tracking-tight',
      title: 'text-heading-56 font-bold tracking-tight',
      heading1: 'text-heading-48 font-bold tracking-tight',
      heading2: 'text-heading-40 font-bold tracking-tight',
      heading3: 'text-heading-32 font-semibold tracking-tight',
      heading4: 'text-heading-24 font-semibold',
      heading5: 'text-heading-20 font-semibold',
      heading6: 'text-heading-16 font-semibold',
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
    variant: 'heading2',
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
