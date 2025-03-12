import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

export const paragraph = tv({
  base: 'text-foreground font-normal',
  variants: {
    variant: {
      lead: 'text-balance text-base/6 font-normal md:text-lg',
      body: 'text-base/6 font-normal',
      caption: 'text-base font-normal',
      link: 'text-base font-medium leading-6 transition-colors',
      small: 'text-sm font-normal',
      navlink: 'text-md font-medium',
      tag: 'text-xs font-medium',
    },
  },
  defaultVariants: {
    variant: 'lead',
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraph> {
  as?: 'p' | 'small' | 'span';
}

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, as: Component = 'p', variant, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        paragraph({
          variant,
          className,
        })
      )}
      {...props}
    />
  )
);

Paragraph.displayName = 'Paragraph';
