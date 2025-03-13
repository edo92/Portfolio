'use client';

import { motion } from 'framer-motion';
import { Icons } from '@/ui';

interface ThemeButtonProps {
  theme: string | undefined;
  onClick: () => void;
}

export const ThemeButton: React.FC<ThemeButtonProps> = ({ theme, onClick }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
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
