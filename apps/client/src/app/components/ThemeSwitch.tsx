'use client';

import { useTheme } from 'next-themes';
import { cn, Icons } from '@libs/ui';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        'flex h-auto min-h-0 flex-col items-center p-0 ring-0 group',
        className
      )}
    >
      <Icons.LightBulb
        className="text-dark-300/85 dark:text-light-400 dark:group-hover:text-light-500/90 transition-colors duration-200 mt-0.5 aspect-square size-6 shrink-0 self-start"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      />
    </button>
  );
};
