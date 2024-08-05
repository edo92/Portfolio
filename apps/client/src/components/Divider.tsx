import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const dividerVariant = cva('bg-dark-300 dark:bg-light-100 w-full', {
   variants: {
      variant: {
         horizontal: 'divider-horizontal',
         vertical: 'divider-vertical',
      },
   },
   defaultVariants: {
      variant: 'horizontal',
   },
});

interface DividerProps extends VariantProps<typeof dividerVariant> {
   className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className, variant }) => {
   return <hr className={cn(dividerVariant({ variant, className }), className)} />;
};
