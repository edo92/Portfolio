'use client';

import { motion } from 'framer-motion';

export const Illustration = () => (
  <motion.div
    className="relative hidden items-center justify-center md:flex lg:justify-end"
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    <div className="relative size-64 sm:size-80 md:size-96">
      {/* Code Block Visual */}
      <div className="absolute inset-0 rounded-lg border border-border/50 bg-card/40 p-6 shadow-lg backdrop-blur-sm">
        <div className="flex items-center space-x-3">
          <div className="size-3 rounded-full bg-destructive/70"></div>
          <div className="size-3 rounded-full bg-secondary/70"></div>
          <div className="size-3 rounded-full bg-success/70"></div>
        </div>
        <div className="mt-6 space-y-3">
          <div className="h-4 w-3/4 rounded bg-foreground/10"></div>
          <div className="h-4 w-1/2 rounded bg-foreground/10"></div>
          <div className="h-4 w-5/6 rounded bg-foreground/10"></div>
          <div className="h-4 w-2/3 rounded bg-background-primary/20"></div>
          <div className="h-4 w-3/4 rounded bg-foreground/10"></div>
          <div className="h-4 w-1/2 rounded bg-secondary/20"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -right-6 -top-6 rounded-lg border border-border/50 bg-card/40 p-4 shadow-lg backdrop-blur-sm"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 2, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
          ease: 'easeInOut',
        }}
      >
        <div className="size-8 rounded-full bg-background-primary/30"></div>
      </motion.div>

      <motion.div
        className="absolute -bottom-8 left-12 rounded-lg border border-border/50 bg-card/40 p-4 shadow-lg backdrop-blur-sm"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -2, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 4,
          ease: 'easeInOut',
          delay: 1,
        }}
      >
        <div className="h-6 w-16 rounded bg-secondary/30"></div>
      </motion.div>

      <motion.div
        className="absolute -left-10 top-1/3 rounded-lg border border-border/50 bg-card/40 p-3 shadow-lg backdrop-blur-sm"
        animate={{
          x: [0, -5, 0],
          rotate: [0, -1, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 6,
          ease: 'easeInOut',
          delay: 0.5,
        }}
      >
        <div className="size-5 rounded-full bg-success/30" />
      </motion.div>
    </div>
  </motion.div>
);
