'use client';

import { cn } from '@libs/util';
import * as React from 'react';
import { tv, type VariantProps } from 'tailwind-variants';

const textarea = tv({
  slots: {
    base: 'relative flex flex-col gap-1',
    textarea: [
      'flex min-h-[80px] w-full rounded-sm',
      'text-sm font-normal',
      'placeholder:text-muted-foreground/50 placeholder:text-sm',
      'focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-1',
      'disabled:cursor-not-allowed disabled:opacity-50',
      'transition-colors duration-100 ease-in',
    ],
    topContent:
      'text-muted-foreground flex items-center justify-end gap-1 text-xs',
    bottomContent:
      'text-muted-foreground flex items-center justify-end gap-1 text-xs',
  },
  variants: {
    variant: {
      default: {
        textarea: ['border-input bg-background border'],
      },
      ghost: {
        textarea: ['border-none bg-transparent'],
      },
      outline: {
        textarea: ['border-input border bg-transparent'],
      },
    },
    size: {
      sm: {
        textarea: 'px-3 py-1 text-xs',
      },
      md: {
        textarea: 'px-4 py-2 text-sm',
      },
      lg: {
        textarea: 'px-6 py-3 text-base',
      },
    },
    state: {
      default: {},
      error: {
        textarea: [
          'border-destructive',
          'placeholder:text-destructive/60',
          'focus-visible:ring-destructive',
        ],
        topContent: 'text-destructive',
        bottomContent: 'text-destructive',
      },
      success: {
        textarea: [
          'border-success',
          'placeholder:text-success/60',
          'focus-visible:ring-success',
        ],
        topContent: 'text-success',
        bottomContent: 'text-success',
      },
    },
    resize: {
      none: {
        textarea: 'resize-none',
      },
      vertical: {
        textarea: 'resize-y',
      },
      horizontal: {
        textarea: 'resize-x',
      },
      both: {
        textarea: 'resize',
      },
    },
    autoGrow: {
      true: {
        textarea: 'overflow-hidden',
      },
    },
  },
  compoundVariants: [
    // Ghost variant with error state
    {
      variant: 'ghost',
      state: 'error',
      class: {
        textarea: 'hover:bg-destructive/10',
      },
    },
    // Ghost variant with success state
    {
      variant: 'ghost',
      state: 'success',
      class: {
        textarea: 'hover:bg-success/10',
      },
    },
    // Outline variant with error state
    {
      variant: 'outline',
      state: 'error',
      class: {
        textarea: 'hover:bg-destructive/10',
      },
    },
    // Outline variant with success state
    {
      variant: 'outline',
      state: 'success',
      class: {
        textarea: 'hover:bg-success/10',
      },
    },
  ],
  defaultVariants: {
    variant: 'default',
    size: 'md',
    state: 'default',
    resize: 'vertical',
    autoGrow: false,
  },
});

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'size'>,
    VariantProps<typeof textarea> {
  topContent?: React.ReactNode;
  bottomContent?: React.ReactNode;
  wrapperClassName?: string;
  maxLength?: number;
  showCount?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      size,
      state,
      resize,
      autoGrow,
      topContent,
      bottomContent,
      wrapperClassName,
      maxLength,
      showCount,
      value,
      onChange,
      disabled,
      ...props
    },
    ref
  ) => {
    const [currentValue, setCurrentValue] = React.useState(value || '');
    const textareaRef = React.useRef<HTMLTextAreaElement | null>(null);
    const combinedRef = useCombinedRefs(ref, textareaRef);

    const styles = textarea({ variant, size, state, resize, autoGrow });

    // Handle auto-growing
    React.useEffect(() => {
      if (autoGrow && textareaRef.current) {
        textareaRef.current.style.height = 'auto';
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
      }
    }, [autoGrow]);

    // Handle value changes
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentValue(e.target.value);
      onChange?.(e);
    };

    return (
      <div className={cn(styles.base(), wrapperClassName)}>
        {(topContent || showCount) && (
          <div className={styles.topContent()}>
            {topContent}
            {showCount && maxLength && (
              <span>
                {currentValue.toString().length}/{maxLength}
              </span>
            )}
          </div>
        )}
        <textarea
          ref={combinedRef}
          className={cn(styles.textarea(), className)}
          value={value}
          onChange={handleChange}
          maxLength={maxLength}
          disabled={disabled}
          {...props}
        />
        {bottomContent && (
          <div className={styles.bottomContent()}>{bottomContent}</div>
        )}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// Helper hook to combine refs
function useCombinedRefs<T>(...refs: Array<React.Ref<T>>) {
  const targetRef = React.useRef<T>(null);

  React.useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return;

      if (typeof ref === 'function') {
        ref(targetRef.current);
      } else {
        (ref as React.MutableRefObject<T | null>).current = targetRef.current;
      }
    });
  }, [refs]);

  return targetRef;
}

export { Textarea, textarea };
