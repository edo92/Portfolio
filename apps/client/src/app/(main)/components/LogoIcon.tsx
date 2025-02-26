'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { cn } from '@libs/util';

interface EJIconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showBackground?: boolean;
  animated?: boolean;
}

export const LogoIcon = ({
  className,
  size = 'md',
  showBackground = true,
  animated = true,
}: EJIconProps) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) return null;

  const isDark = theme === 'dark';

  const sizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div
      className={cn(
        'relative flex items-center justify-center',
        sizes[size],
        showBackground && 'rounded-lg bg-primary/10',
        className
      )}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="h-full w-full p-2"
        initial={animated ? 'hidden' : 'visible'}
        animate="visible"
      >
        {/* Background Pattern */}
        {showBackground && (
          <motion.g
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <pattern
              id="ej-grid"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke={isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'}
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100" height="100" fill="url(#ej-grid)" />
          </motion.g>
        )}

        {/* E Letter */}
        <motion.g
          variants={letterVariants}
          custom={0}
          className="text-primary"
          style={{ color: 'currentColor' }}
        >
          <motion.path
            d="M30 30 H60 M30 50 H55 M30 70 H60 M30 30 V70"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
        </motion.g>

        {/* J Letter */}
        <motion.g
          variants={letterVariants}
          custom={1}
          className="text-primary"
          style={{ color: 'currentColor' }}
        >
          <motion.path
            d="M70 30 V65 C70 75, 60 80, 50 75"
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            variants={pathVariants}
          />
        </motion.g>

        {/* Decorative Elements */}
        {animated && (
          <>
            <motion.circle
              cx="20"
              cy="20"
              r="3"
              fill="currentColor"
              className="text-primary/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
                delay: 1,
              }}
            />
            <motion.circle
              cx="80"
              cy="80"
              r="3"
              fill="currentColor"
              className="text-primary/40"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: 'reverse',
                delay: 1.5,
              }}
            />
          </>
        )}
      </motion.svg>
    </div>
  );
};
