import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@client/lib/cn';

const HeadingVariants = cva('dark:text-light-400 text-dark-300', {
   variants: {
      variant: {
         h1: '',
         h2: '',
         h3: '',
         h4: '',
         h5: '',
         h6: '',
      },

      size: {
         '8xl': 'text-8xl',
         '4xl': 'text-4xl',
         '3xl': 'text-3xl',
         '2xl': 'text-2xl',
         xl: 'text-xl',
         lg: 'text-lg',
         md: 'text-md',
         sm: 'text-sm',
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
         variant: 'h1',
         size: 'text-2xl',
         font: 'medium',
      },
   },
});

interface HeadingProps
   extends React.PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>,
      VariantProps<typeof HeadingVariants> {
   className?: string;
}

export const Heading: React.FC<HeadingProps> = ({ className, variant, size, font, children, ...props }) => {
   switch (variant) {
      case 'h1':
         return (
            <h1 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h1>
         );

      case 'h2':
         return (
            <h2 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h2>
         );

      case 'h3':
         return (
            <h3 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h3>
         );

      case 'h4':
         return (
            <h4 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h4>
         );

      case 'h5':
         return (
            <h5 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h5>
         );

      case 'h6':
         return (
            <h6 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h6>
         );

      default:
         return (
            <h1 className={cn(HeadingVariants({ variant, size, font, className }), className)} {...props}>
               {children}
            </h1>
         );
   }
};
