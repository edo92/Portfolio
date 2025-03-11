'use client';

import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Heading, Paragraph } from '@libs/ui';
import { Section } from '../../../components/Section';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

export const ContactHero: FC = () => {
  return (
    <Section className="from-background-secondary min-h-[calc(100vh-4rem)] flex-row items-center overflow-hidden bg-gradient-to-t via-transparent to-transparent">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="bg-background-primary/30 absolute left-1/3 top-1/4 size-64 rounded-full blur-3xl" />
        <div className="bg-secondary/30 absolute right-1/4 top-1/2 size-48 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col justify-center">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col gap-6 text-center"
          {...fadeInUp}
        >
          <Heading as="h1" size="3xl" weight="bold">
            {"Let's Work Together"}
          </Heading>
          <Paragraph
            as="p"
            size="lg"
            variant="subtle"
            leading="relaxed"
            className="mb-8"
          >
            {`Have a project in mind or want to discuss potential opportunities?
            I'm always open to new ideas and collaborations. Let's create
            something amazing together.`}
          </Paragraph>
        </motion.div>
      </div>
    </Section>
  );
};
