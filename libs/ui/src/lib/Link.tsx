import { forwardRef } from 'react';
import type { Route } from 'next';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const linkStyles = tv({
  variants: {
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
    },
    underline: {
      true: 'hover:underline',
      false: 'hover:no-underline',
    },
  },
  defaultVariants: {
    size: 'xs',
    variant: 'default',
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
  ({ children, className, size, underline, external, ...props }, ref) => (
    <NextLink
      ref={ref}
      {...props}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      className={cn(linkStyles({ size, underline }), className)}
    >
      {children}
    </NextLink>
  )
);
Link.displayName = 'Link';
