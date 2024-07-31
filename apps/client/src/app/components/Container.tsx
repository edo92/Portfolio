import { cn } from '@client/lib/cn';

interface ContainerProps extends React.PropsWithChildren {
   className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className }) => (
   <div className={cn('relative flex h-screen w-screen', className)}>
      <div className="flex w-full flex-col items-center">
         <>{children}</>
      </div>
   </div>
);
