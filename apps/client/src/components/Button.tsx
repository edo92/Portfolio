import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const buttonVariants = cva(
   'btn transition-100 rounded px-7 min-h-auto h-auto shadow-sm ring-0 transition-all',
   {
      variants: {
         variant: {
            ghost: 'btn-ghost btn bg-light-100 dark:bg-dark-300 p-0.5',
            primary:
               'border-primary-200 hover:border-primary-300 bg-primary-300 hover:bg-primary-400 hover:text-light-100 border',
         },
      },
      defaultVariants: {
         variant: 'ghost',
      },
   }
);

interface ButtonProps
   extends React.ButtonHTMLAttributes<HTMLButtonElement>,
      VariantProps<typeof buttonVariants> {
   className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, variant, ...props }) => (
   <button className={cn(buttonVariants({ className, variant }), className)} {...props}>
      {children}
   </button>
);
