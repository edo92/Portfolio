'use client';

import { Icons } from '@client/components/Icons';
import { useDarkMode } from '@client/app/providers/darkmode';

export const DarkModeToggle = () => {
  const darkMode = useDarkMode();

  return (
    <Icons.LightBulb
      className="text-dark-300 dark:text-light-400 aspect-square w-6 shrink-0 self-start"
      onClick={() => darkMode.toggleMode()}
    />
  );
};
