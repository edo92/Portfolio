'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { ThemeButton } from './motion/button';

export const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="size-8 rounded-lg bg-transparent">
        <div className="size-full animate-pulse rounded-lg bg-muted/10" />
      </div>
    );
  }

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeButton theme={theme} onClick={toggleTheme} />;
};
