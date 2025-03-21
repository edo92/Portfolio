'use client';

import { motion } from 'framer-motion';

interface HeadingMotionProps {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  type?: 'spring' | 'tween' | 'inertia';
  stiffness?: number;
  initial?: number;
  animate?: number;
}

export const HeadingMotion: React.FC<HeadingMotionProps> = ({
  children,
  duration = 0.8,
  type = 'spring',
  stiffness = 200,
  initial = 0.8,
  animate = 1,
  ...props
}) => (
  <motion.h1
    initial={{ scale: initial }}
    animate={{ scale: animate }}
    transition={{
      duration,
      type,
      stiffness,
    }}
    {...props}
  >
    {children}
  </motion.h1>
);
