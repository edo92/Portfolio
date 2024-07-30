import { cn } from '@client/lib/cn';

interface ButtonProps extends React.PropsWithChildren {
   className?: string;
}

export const ButtonGradiant: React.FC<ButtonProps> = ({ children, className }) => (
   <button className={cn('from-gradient-17 to-gradient-18 min-w-36 rounded bg-gradient-to-tr p-0.5')}>
      <div
         className={cn(
            'bg-light-100 dark:bg-dark-300 flex w-full flex-row items-center justify-center rounded px-5 py-2',
            className
         )}
      >
         {children}
      </div>
   </button>
);
