import { cn } from '@client/lib/cn';
import { useToast } from './Provider';

interface ToastProps {
   className?: string;
   position: string;
}

export const Toast: React.FC<ToastProps> = ({ className, position }) => {
   const { toasts } = useToast();

   return (
      <div className={cn('toast', position, className)}>
         {toasts.map((toast, index) => (
            <div key={`${toast.type}-${index}`} className={cn('alert', `alert-${toast.type}`)}>
               <span>{toast.message}</span>
            </div>
         ))}
      </div>
   );
};
