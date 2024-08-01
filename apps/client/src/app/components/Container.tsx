import { cn } from '@client/lib/cn';

interface ContainerProps extends React.PropsWithChildren {
   className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
   <div className={cn('relative flex h-screen w-screen py-32', className)}>
      <div className="flex w-full flex-col items-center gap-32">
         <>{children}</>
      </div>
   </div>
);
