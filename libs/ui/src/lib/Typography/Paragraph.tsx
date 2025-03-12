import React, { forwardRef } from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const paragraphVariants = tv({
  base: 'text-foreground font-normal',
  variants: {
    variant: {
      lead: 'text-balance text-lg font-normal',
      body: 'text-base/6 font-normal',
      caption: 'text-base font-normal',
      link: 'text-base font-medium leading-6 transition-colors',
      small: 'text-sm font-normal',
    },
  },
  defaultVariants: {
    variant: 'lead',
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  as?: 'p' | 'small' | 'span';
}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, as: Component = 'p', variant, ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        paragraphVariants({
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
