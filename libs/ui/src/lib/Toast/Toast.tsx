import type React from 'react';
import { memo } from 'react';
import { cn } from '@libs/util';

import { Icons } from '../Icons';
import { Button } from '../Button';
import { StatusIcon } from './Icon';
import { Paragraph } from '../Typography';

export type ToastType = 'success' | 'error' | 'warning' | 'info';

export type ToastInternal = {
  id: string;
  title: string;
  message: string;
  type: ToastType;
};

export interface ToastProps {
  className?: string;
  handleClose: (id: string) => void;
  toasts: ToastInternal[];
}

export const Toast: React.FC<ToastProps> = memo(
  ({ className, handleClose, toasts }) => (
    <div
      className={cn('fixed right-0 top-0 z-50 w-full max-w-sm p-4', className)}
    >
      <div className="space-y-3">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            role="alert"
            aria-labelledby={`toast-title-${toast.id}`}
            className="max-w-xs rounded-xl border border-dark-100 bg-dark-300 shadow-lg"
          >
            <div className="flex gap-4 p-4">
              <div className="shrink-0">
                <StatusIcon type={toast.type} />
              </div>

              <div className="w-full">
                <Paragraph
                  variant="p"
                  size="sm"
                  weight="semibold"
                  id={`toast-title-${toast.id}`}
                  className="text-neutral-100"
                >
                  {toast.title}
                </Paragraph>
                <Paragraph
                  variant="p"
                  size="sm"
                  weight="regular"
                  aria-label="toast-message"
                  className="mt-1 text-neutral-100/90"
                >
                  {toast.message}
                </Paragraph>
              </div>

              <Button
                type="button"
                variant="ghost"
                aria-label="Close"
                onClick={() => handleClose(toast.id)}
                className="group inline-flex h-fit items-start p-0 py-1"
              >
                <Icons.CloseX className="size-3 stroke-1.5 text-neutral-200 transition duration-200 group-hover:text-neutral-400" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
);

Toast.displayName = 'Toast';
