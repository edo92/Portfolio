import React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const section = tv({
  base: 'relative flex w-full flex-col',
  variants: {
    background: {
      primary: 'bg-background',
      secondary: 'bg-background-secondary',
      transparent: 'bg-transparent',
    },
    padding: {
      none: 'p-0',
      sm: 'px-4 py-12 md:px-6 md:py-16',
      md: 'px-6 py-16 md:px-8 md:py-20',
      lg: 'px-6 py-20 md:px-8 md:py-24',
      xl: 'px-8 py-24 md:px-12 md:py-32',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
    },
  },
  defaultVariants: {
    background: 'primary',
    padding: 'lg',
    align: 'start',
    justify: 'start',
  },
});

interface SectionProps
  extends VariantProps<typeof section>,
    Omit<React.HTMLAttributes<HTMLElement>, 'color'> {
  children: React.ReactNode;
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    { children, className, background, padding, align, justify, ...props },
    ref
  ) => (
    <section
      ref={ref}
      className={section({
        background,
        padding,
        align,
        justify,
        className,
      })}
      {...props}
    >
      {children}
    </section>
  )
);

Section.displayName = 'Section';
