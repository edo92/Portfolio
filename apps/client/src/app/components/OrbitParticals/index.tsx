'use client';

import './orbit-particals.scss';
import { cn } from '@client/lib/cn';

interface OrbitParticalsProps {
   className?: string;
}

export const OrbitParticals: React.FC<OrbitParticalsProps> = ({ className }) => {
   const totalParticles = Array.from({ length: 500 }, (_, i) => i + 1);
   return (
      <div className={cn('orbit-wrap', className)}>
         {totalParticles.map((particle) => (
            <i key={particle} className={cn('orbit', `orbit-${particle}`)} />
         ))}
      </div>
   );
};
