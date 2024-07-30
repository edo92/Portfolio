'use client';

import { useTheme } from 'next-themes';

export const ThemeSwitch: React.FC = () => {
   const { resolvedTheme, setTheme } = useTheme();

   return (
      <button
         className="rounded-md bg-black px-4 py-2 font-semibold text-white dark:bg-white dark:text-black"
         onClick={() => {
            setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
         }}
      >
         Change Theme {resolvedTheme}
      </button>
   );
};
