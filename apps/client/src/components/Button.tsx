import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const buttonVariants = cva('btn bg-light-100 dark:bg-dark-300 min-h-0 rounded p-0.5 shadow-sm ring-0', {
   variants: {
      variant: {
         ghost: 'btn-ghost',
      },
   },
   defaultVariants: {
      variant: 'ghost',
   },
});

interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, variant, ...props }) => (
   <button {...props} className={cn(buttonVariants({ variant, className }), className)}>
      {children}
   </button>
);
