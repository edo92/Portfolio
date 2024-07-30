'use client';

import { useTheme } from 'next-themes';
import { Icons } from '@client/components/Icons';

export const ThemeSwitch: React.FC = () => {
   const { resolvedTheme, setTheme } = useTheme();

   return (
      <button className="btn btn-ghost flex flex-col items-center">
         <Icons.LightBulb
            className="text-dark-300/85 dark:text-light-400 mt-0.5 aspect-square size-6 shrink-0 self-start"
            onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
         />
      </button>
   );
};
