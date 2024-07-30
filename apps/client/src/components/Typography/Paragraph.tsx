import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const ParagraphVariants = cva('dark:text-light-400 text-dark-300 truncate', {
   variants: {
      variant: {
         p: '',
         span: '',
         small: '',
      },

      size: {
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
      },
   },
});

interface ParagraphProps extends React.PropsWithChildren, VariantProps<typeof ParagraphVariants> {
   className?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ className, variant, size, font, children }) => {
   switch (variant) {
      case 'p':
         return <p className={cn(ParagraphVariants({ variant, size, font }), className)}>{children}</p>;

      case 'span':
         return <span className={cn(ParagraphVariants({ variant, size, font }), className)}>{children}</span>;

      case 'small':
         return (
            <small className={cn(ParagraphVariants({ variant, size, font }), className)}>{children}</small>
         );

      default:
         return <p className={cn(ParagraphVariants({ variant, size, font }), className)}>{children}</p>;
   }
};