'use client';

import { useTheme } from 'next-themes';
import { Icons } from '@libs/ui';
import { cn } from '@libs/util';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      className={cn(
        'group flex h-auto min-h-0 flex-col items-center p-0 ring-0',
        className
      )}
    >
      <Icons.LightBulb
        className="mt-0.5 aspect-square size-6 shrink-0 self-start transition-colors duration-200 hover:text-accent-foreground/80"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      />
    </button>
  );
};
