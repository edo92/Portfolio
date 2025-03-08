'use client';

import { motion } from 'framer-motion';
import { Button, Heading, Link, Paragraph } from '@libs/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-primary mb-4 font-bold text-9xl"
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
            className="mx-auto mb-8 max-w-md text-muted-foreground"
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
        className="border-primary/20 absolute left-1/2 top-1/2 -z-10 size-64 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: [0, 1.2, 1],
          opacity: [0, 0.2, 0.1],
        }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />

      <motion.div
        className="border-primary/10 absolute left-1/2 top-1/2 -z-10 size-96 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
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
