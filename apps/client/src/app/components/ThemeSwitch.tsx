'use client';

import { useTheme } from 'next-themes';
import { Button, Icons } from '@libs/ui';
import { cn } from '@libs/util';

interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ className }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      className={cn(
        'group flex flex-col items-center p-0 text-body',
        className
      )}
    >
      <Icons.LightBulb
        className="mt-0.5 aspect-square size-6 shrink-0 self-start transition-colors duration-200 group-hover:text-accent-foreground/80"
        onClick={() => setTheme(resolvedTheme === 'light' ? 'dark' : 'light')}
      />
    </Button>
  );
};
