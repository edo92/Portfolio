import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const dividerVariant = cva('my-1 w-full', {
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
   return <div className={cn(dividerVariant({ variant, className }), className)} />;
};
