import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

const paragraphVariants = tv({
  base: 'text-foreground',
  variants: {
    variant: {
      navItem: 'text-heading-14 font-semibold',
      breadcrumb: 'text-label-14 font-medium',

      'button-lg': 'text-button-16 font-medium',
      'button-md': 'text-button-14 font-medium',
      'button-sm': 'text-button-12 font-medium',

      'label-lg': 'text-label-20 font-medium',
      'label-md': 'text-label-16 font-medium',
      'label-sm': 'text-label-14 font-medium',
      'label-xs': 'text-label-12 font-medium',

      'body-xl': 'text-copy-24 font-normal',
      'body-lg': 'text-copy-20 font-normal',
      'body-md': 'text-copy-18 font-normal',
      body: 'text-copy-16 font-normal',
      'body-sm': 'text-copy-14 font-normal',
      'body-xs': 'text-copy-13 font-normal',

      caption: 'text-label-12 font-normal',
      metadata: 'text-label-12 font-medium',
      tooltip: 'text-label-13 font-normal',
      badge: 'text-label-12 font-medium',
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
    variant: 'body',
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
      align,
      weight,
      transform,
      variant,
      ...props
    },
    ref
  ) => (
    <Component
      ref={ref}
      className={cn(
        paragraphVariants({
          align,
          weight,
          transform,
          variant,
          className,
        })
      )}
      {...props}
    />
  )
);

Paragraph.displayName = 'Paragraph';

export { Paragraph, paragraphVariants };
