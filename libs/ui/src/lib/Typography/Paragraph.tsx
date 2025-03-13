import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

const paragraph = tv({
  base: 'text-foreground',
  variants: {
    variant: {
      navItem: 'text-sm font-medium leading-6',
      breadcrumb: 'text-sm font-medium leading-5',

      'button-lg': 'text-base font-medium leading-5 tracking-wideerPlus',
      'button-md': 'text-sm font-medium leading-5 tracking-wideerPlus',
      'button-sm': 'text-2xs font-medium leading-5',

      'label-lg': 'text-xl font-medium leading-4',
      'label-md': 'text-base font-medium leading-5',
      'label-sm': 'text-sm font-medium leading-5',
      'label-xs': 'text-2xs font-medium leading-5',

      'body-xl': 'text-2xl font-normal leading-5',
      'body-lg': 'text-xl font-normal leading-6',
      'body-md': 'text-lg font-normal leading-6',
      body: 'text-base font-normal leading-6',
      'body-sm': 'text-sm font-normal leading-6',
      'body-xs': 'text-xs font-normal leading-6',

      caption: 'text-2xs font-normal leading-5',
      metadata: 'text-2xs font-medium leading-5',
      tooltip: 'text-xs font-normal leading-5',
      badge: 'text-2xs font-medium leading-5',
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
    VariantProps<typeof paragraph> {
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
        paragraph({
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

export { Paragraph, paragraph as paragraphVariants };
