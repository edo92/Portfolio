'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Icons } from '@libs/ui';

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

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleTheme}
      className="relative flex size-8 items-center justify-center rounded-lg border border-border/40 bg-background/80 text-foreground shadow-sm backdrop-blur-sm"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
        }}
        transition={{ duration: 0.4 }}
        className="relative flex size-5 items-center justify-center overflow-hidden"
      >
        {theme === 'dark' ? (
          <Icons.Moon className="text-primary size-5" />
        ) : (
          <Icons.Sun className="text-primary size-5" />
        )}
      </motion.div>
    </motion.button>
  );
};
