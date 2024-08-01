import { cn } from '@client/lib/cn';

interface SectionProps extends React.PropsWithChildren {
   className?: string;
}

export const Section: React.FC<SectionProps> = ({ children, className }) => (
   <div
      className={cn(
         'dark:bg-dark-400 bg-light-300/90 flex w-full flex-col gap-16 px-0 pt-16 md:gap-28 md:px-14 md:pt-32',
         className
      )}
   >
      {children}
   </div>
);
