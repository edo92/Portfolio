import React from 'react';
import { cn } from '@libs/util';

type SectionProps = React.PropsWithChildren & {
  className?: string;
  secondary?: boolean;
};

export const Section = React.forwardRef<HTMLDivElement, SectionProps>(
  ({ children, className, secondary }, ref) => (
    <section
      ref={ref}
      className={cn(
        'relative flex flex-col w-full px-6 py-20 md:py-24',
        secondary ? 'bg-background-secondary' : 'bg-background',
        className
      )}
    >
      {children}
    </section>
  )
);

Section.displayName = 'Section';
