import { cn } from '@client/lib/cn';
import { type VariantProps, cva } from 'class-variance-authority';

const TypographyVariants = cva('text-dark-300 dark:text-light-400', {
   variants: {
      variant: {
         h1: 'text-4xl',
         h2: 'text-3xl',
         h3: 'text-2xl',
         p: 'text-base',
         span: 'text-sm',
         small: 'text-xs',
      },
      defaultVariants: {
         variant: 'p',
      },
   },
});

interface TypographyProps extends React.PropsWithChildren, VariantProps<typeof TypographyVariants> {
   className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ className, variant, children }) => {
   switch (variant) {
      case 'h1':
         return <h1 className={cn(TypographyVariants({ variant }), className)}>{children}</h1>;

      case 'h2':
         return <h2 className={cn(TypographyVariants({ variant }), className)}>{children}</h2>;

      case 'h3':
         return <h3 className={cn(TypographyVariants({ variant }), className)}>{children}</h3>;

      case 'small':
         return <small className={cn(TypographyVariants({ variant }), className)}>{children}</small>;

      case 'p':
         return <p className={cn(TypographyVariants({ variant }), className)}>{children}</p>;

      case 'span':
         return <span className={cn(TypographyVariants({ variant }), className)}>{children}</span>;

      default:
         return <p className={cn(TypographyVariants({ variant }), className)}>{children}</p>;
   }
};
