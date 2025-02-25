'use client';

import type React from 'react';

import crypto from 'crypto';
import { createContext, useContext, useState } from 'react';
import { Toast as ToastComponent, type ToastInternal } from './Toast';

type Toast = Omit<ToastInternal, 'id'>;

interface ToastContext {
  toast: (toast: Toast) => void;
  clear: (id: string) => void;
  clearAll: () => void;
}

const Context = createContext<ToastContext>({
  toast: () => void 0,
  clear: () => void 0,
  clearAll: () => void 0,
});

export const ToastProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<ToastInternal[]>([]);

  const generateId = () => crypto.randomBytes(9).toString('hex');

  const addToast = (toast: Toast) => {
    const id = generateId();
    setToasts((prevToasts) => [...prevToasts, { ...toast, id }]);
  };

  const closeToast = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const closeAllToasts = () => {
    setToasts([]);
  };

  return (
    <Context.Provider
      value={{
        toast: addToast,
        clear: closeToast,
        clearAll: closeAllToasts,
      }}
    >
      {children}
      <ToastComponent handleClose={closeToast} toasts={toasts} />
    </Context.Provider>
  );
};

export const useToast = () => useContext(Context);
