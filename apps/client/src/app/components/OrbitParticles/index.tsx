'use client';

import './orbit-particles.scss';
import { cn } from '@client/lib/cn';

interface OrbitParticlesProps {
   className?: string;
}

export const OrbitParticles: React.FC<OrbitParticlesProps> = ({ className }) => {
   const totalParticles = Array.from({ length: 500 }, (_, i) => i + 1);
   return (
      <div className={cn('orbit-wrap', className)}>
         {totalParticles.map((particle) => (
            <i key={particle} className={cn('orbit', `orbit-${particle}`)} />
         ))}
      </div>
   );
};
