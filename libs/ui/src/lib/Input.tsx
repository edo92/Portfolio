'use client';

import * as React from 'react';
import { cn } from '@libs/util';
import { tv, type VariantProps } from 'tailwind-variants';

const input = tv({
  slots: {
    base: 'relative flex items-center gap-2',
    input: [
      'flex w-full rounded-sm',
      'text-sm font-normal',
      'transition-colors duration-200',
      'file:border-0 file:bg-transparent file:text-sm file:font-medium',
      'placeholder:text-muted-foreground/50 placeholder:text-sm',
      'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors duration-100 ease-in-out',
    ],
    startContent: 'flex items-center justify-center text-muted-foreground',
    endContent: 'flex items-center justify-center text-muted-foreground',
  },
  variants: {
    variant: {
      default: {
        input: ['border border-input bg-background'],
      },
      ghost: {
        input: ['border-none bg-transparent'],
      },
      outline: {
        input: ['border border-input bg-transparent'],
      },
    },
    size: {
      sm: {
        base: 'gap-1.5',
        input: 'h-8 px-3 py-1 text-xs',
        startContent: 'h-3 w-3 ml-3',
        endContent: 'h-3 w-3 mr-3',
      },
      md: {
        base: 'gap-2',
        input: 'h-10 px-4 py-2',
        startContent: 'h-4 w-4 ml-4',
        endContent: 'h-4 w-4 mr-4',
      },
      lg: {
        base: 'gap-2.5',
        input: 'h-12 px-6 py-3 text-base',
        startContent: 'h-5 w-5 ml-6',
        endContent: 'h-5 w-5 mr-6',
      },
    },
    state: {
      default: {},
      error: {
        input: [
          'border-destructive',
          'placeholder:text-destructive/60',
          'focus-visible:ring-destructive',
        ],
        startContent: 'text-destructive',
        endContent: 'text-destructive',
      },
      success: {
        input: [
          'border-success',
          'placeholder:text-success/60',
          'focus-visible:ring-success',
        ],
        startContent: 'text-success',
        endContent: 'text-success',
      },
    },
    isContentOnly: {
      true: {
        input: 'border-0 p-0 focus-visible:ring-0',
      },
    },
  },
  compoundVariants: [
    // Ghost variant with error state
    {
      variant: 'ghost',
      state: 'error',
      class: {
        input: 'hover:bg-destructive/10',
      },
    },
    // Ghost variant with success state
    {
      variant: 'ghost',
      state: 'success',
      class: {
        input: 'hover:bg-success/10',
      },
    },
    // Outline variant with error state
    {
      variant: 'outline',
      state: 'error',
      class: {
        input: 'hover:bg-destructive/10',
      },
    },
    // Outline variant with success state
    {
      variant: 'outline',
      state: 'success',
      class: {
        input: 'hover:bg-success/10',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    state: 'default',
    isContentOnly: false,
  },
});

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    VariantProps<typeof input> {
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  wrapperClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      state,
      type,
      startContent,
      endContent,
      wrapperClassName,
      disabled,
      isContentOnly,
      ...props
    },
    ref
  ) => {
    const styles = input({ variant, size, state, isContentOnly });

    // If we have start/end content, wrap the input in a div
    if (startContent || endContent) {
      return (
        <div className={cn(styles.base(), wrapperClassName)}>
          {startContent && (
            <div className={styles.startContent()}>{startContent}</div>
          )}
          <input
            type={type}
            className={cn(styles.input(), className)}
            ref={ref}
            disabled={disabled}
            {...props}
          />
          {endContent && (
            <div className={styles.endContent()}>{endContent}</div>
          )}
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(styles.input(), className)}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

export { Input, input };
