'use client';

import { createContext, useContext, useState } from 'react';
import { Toast } from './Toast';

interface ToastProps {
   type: 'success' | 'error' | 'info';
   message: string;
}

type TostPosition = 'start' | 'center' | 'end' | 'top' | 'middle' | 'bottom';
interface ToastProviderProps {
   position?: TostPosition[];
}

export const Context = createContext<{
   toasts: ToastProps[];
   addToast: (toast: ToastProps) => void;
}>({
   toasts: [],
   addToast: () => void 0,
});

export const ToastProvider: React.FC<React.PropsWithChildren<ToastProviderProps>> = ({
   children,
   position = ['top', 'right'],
}) => {
   const [toasts, setToasts] = useState<ToastProps[]>([
    
   ]);

   const addToast = (toast: ToastProps) => {
      setToasts([...toasts, toast]);
   };

   return (
      <Context.Provider
         value={{
            toasts,
            addToast,
         }}
      >
         {children}
         <Toast position={position.map((pos) => `toast-${pos}`).join(' ')} />
      </Context.Provider>
   );
};

export const useToast = () => {
   return useContext(Context);
};
