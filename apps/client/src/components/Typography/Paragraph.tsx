import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const ParagraphVariants = cva('dark:text-light-400 text-dark-100', {
   variants: {
      variant: {
         p: '',
         span: '',
         small: '',
      },

      size: {
         '2xl': 'text-2xl',
         xl: 'text-xl',
         lg: 'text-lg',
         md: 'text-md',
         base: 'text-base',
         sm: 'text-sm',
         xs: 'text-xs',
      },

      font: {
         black: 'font-black',
         bold: 'font-bold',
         medium: 'font-medium',
         regular: 'font-regular',
         light: 'font-light',
         ultraLight: 'font-ultra-light',
      },

      defaultVariants: {
         variant: 'p',
         size: 'text-sm',
         font: 'regular',
      },
   },
});

interface ParagraphProps extends React.PropsWithChildren, VariantProps<typeof ParagraphVariants> {
   className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ variant, size, font, children, className }) => {
   switch (variant) {
      case 'p':
         return (
            <p className={cn(ParagraphVariants({ variant, size, font, className }), className)}>{children}</p>
         );

      case 'span':
         return (
            <span className={cn(ParagraphVariants({ variant, size, font, className }), className)}>
               {children}
            </span>
         );

      case 'small':
         return (
            <small className={cn(ParagraphVariants({ variant, size, font, className }), className)}>
               {children}
            </small>
         );

      default:
         return (
            <p className={cn(ParagraphVariants({ className, variant, size, font }), className)}>{children}</p>
         );
   }
};
