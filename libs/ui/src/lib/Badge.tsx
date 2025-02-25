import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';
import { cn } from '@libs/util';

const badge = tv({
  base: 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  variants: {
    variant: {
      default:
        'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
      secondary:
        'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      destructive:
        'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
      outline: 'text-foreground',
      success:
        'border-transparent bg-success text-success-foreground hover:bg-success/80',
    },
    size: {
      default: 'px-2.5 py-0.5 text-xs',
      sm: 'px-2 py-0.5 text-[10px]',
      lg: 'px-3 py-1 text-sm',
    },
    removable: {
      true: 'pr-1',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    removable: false,
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badge> {
  onRemove?: () => void;
}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    { className, variant, size, removable, onRemove, children, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(badge({ variant, size, removable }), className)}
        {...props}
      >
        <span className="truncate">{children}</span>
        {removable && onRemove && (
          <button
            type="button"
            className="ml-1 rounded-full p-0.5 hover:bg-background/20"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
            aria-label="Remove badge"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-3"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge, badge };
