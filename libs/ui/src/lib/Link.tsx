import { forwardRef } from 'react';
import type { Route } from 'next';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@/util';

const linkStyles = tv({
  variants: {
    underline: {
      true: 'hover:underline',
      false: 'hover:no-underline',
    },
  },
  defaultVariants: {
    underline: false,
  },
});

type LinkVariants = VariantProps<typeof linkStyles>;

export interface LinkProps extends NextLinkProps<Route>, LinkVariants {
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, className, underline, external, ...props }, ref) => (
    <NextLink
      ref={ref}
      {...props}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(linkStyles({ underline }), className)}
    >
      {children}
    </NextLink>
  )
);
Link.displayName = 'Link';
