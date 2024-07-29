import { cn } from '@client/lib/cn';

interface DividerProps {
   className?: string;
}

export const Divider: React.FC<DividerProps> = ({ className }) => (
   <div className={cn('flex flex-col justify-center px-16 py-3 max-md:max-w-full', className)}>
      <div className="bg-dark-300/25 dark:bg-light-300 mx-9 h-px w-full max-w-full shrink-0 max-md:mr-2.5" />
   </div>
);
