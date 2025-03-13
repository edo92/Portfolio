'use client';

import { motion } from 'framer-motion';
import { Button, Heading, Link, Paragraph } from '@/ui';
import { MotionWrapper } from './components/motion/wrapper';
import { HeadingMotion } from './components/motion/heading';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center px-4 py-20">
      <MotionWrapper className="text-center">
        <HeadingMotion className="text-primary mb-4 text-9xl font-bold">
          404
        </HeadingMotion>

        <MotionWrapper
          delay={0.3}
          className="flex flex-col items-center justify-center gap-4"
        >
          <Heading as="h2" weight="bold" className="text-3xl text-foreground">
            Page Not Found
          </Heading>

          <Paragraph
            as="p"
            variant="body-md"
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
        </MotionWrapper>
      </MotionWrapper>
    </div>
  );
}
