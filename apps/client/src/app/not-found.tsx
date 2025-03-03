'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button, Heading, Paragraph } from '@libs/ui';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-9xl font-bold text-primary mb-4"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 0.8,
            type: 'spring',
            stiffness: 200,
          }}
        >
          404
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Heading as="h2" weight="bold" className="text-3xl text-foreground">
            Page Not Found
          </Heading>

          <Paragraph
            as="p"
            weight="normal"
            size="sm"
            className="text-muted-foreground mb-8 max-w-md mx-auto"
          >
            {`The page you're looking for doesn't exist or has been moved. Let's
            get you back on track.`}
          </Paragraph>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border-2 border-primary/20 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 0.2, 0.1],
        }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-primary/10 -z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 0.2, 0.1],
        }}
        transition={{ duration: 1.8, delay: 0.4 }}
      />
    </div>
  );
}
