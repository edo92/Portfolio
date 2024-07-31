import './style.css';
import { cn } from '@client/lib/cn';

interface HeroContainerProps extends React.PropsWithChildren {
   className?: string;
}

export const HeroContainer: React.FC<HeroContainerProps> = ({ children, className }) => {
   return (
      <div className={cn('hero-container', className)}>
         <>{children}</>
      </div>
   );
};
