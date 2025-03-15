'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Heading, Paragraph, Section } from '@/ui';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export const ContactHero: FC = () => {
  return (
    <Section className="min-h-[calc(100vh-9.5rem)] flex-row items-center overflow-hidden bg-gradient-to-t from-background-secondary via-transparent to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute left-1/3 top-1/4 size-64 rounded-full bg-background-primary/30 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 size-48 rounded-full bg-secondary/30 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative -top-16 z-10 mx-auto flex max-w-7xl flex-col justify-center">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col gap-6 text-center"
          {...fadeInUp}
        >
          <Heading
            as="h1"
            weight="bold"
            className="text-3xl sm:text-4xl lg:text-5xl"
          >
            {"Let's Work Together"}
          </Heading>
          <Paragraph
            variant="body-md"
            weight="regular"
            className="text-body/90"
          >
            {
              "Whether you're looking for a technical collaborator, consultant, or discussing potential opportunities, I'd love to connect."
            }
          </Paragraph>
        </motion.div>
      </div>
    </Section>
  );
};
