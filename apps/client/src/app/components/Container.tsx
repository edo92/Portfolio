import { cn } from '@client/lib/cn';

interface ContainerProps extends React.PropsWithChildren {
   className?: string;
   innerClassName?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className, innerClassName }) => (
   <div className={cn('relative mt-3 flex h-screen w-screen py-16 sm:py-32 md:mt-0 md:py-28', className)}>
      <div className={cn('flex w-full flex-col items-center gap-16 sm:gap-32 md:gap-28', innerClassName)}>
         <>{children}</>
      </div>
   </div>
);
