import { cn } from '@client/lib/cn';

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = ({ className, ...props }) => (
   <input
      className={cn(
         'input input-bordered dark:bg-dark-300/80 bg-light-300/80 text-dark-400 dark:text-light-100 w-full',
         className
      )}
      {...props}
   />
);

export const TextArea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
   className,
   ...props
}) => (
   <textarea
      className={cn(
         'textarea textarea-bordered dark:bg-dark-300/80 bg-light-300/80 text-dark-400 dark:text-light-100 w-full',
         className
      )}
      {...props}
   />
);

export const Label: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ children, ...props }) => (
   <label className="dark:text-light-400 text-dark-300 block" {...props}>
      <>{children}</>
   </label>
);
