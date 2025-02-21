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
        'group flex h-auto min-h-0 flex-col items-center p-0 ring-0',
        className,
      )}
    >
      <Icons.LightBulb
        className="text-foreground mt-0.5 aspect-square size-6 shrink-0 self-start hover:text-muted-foreground transition-colors duration-200"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      />
    </button>
  );
};
