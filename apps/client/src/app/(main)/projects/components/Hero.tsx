'use client';

import { motion } from 'framer-motion';
import { Heading, Paragraph, Badge, Section } from '@/ui';
import { PROJECTS_INTRODUCTION, SKILLS } from '../../../content';
import { Illustration } from './Illustration';

export const Hero = () => (
  <Section className="min-h-[calc(100vh-10rem)] bg-gradient-to-t from-background-secondary via-transparent to-transparent">
    {/* Background Pattern */}
    <div className="absolute inset-0 z-0 opacity-10">
      <div className="absolute left-1/3 top-1/4 size-64 rounded-full bg-background-primary/25 blur-3xl" />
      <div className="absolute right-1/4 top-1/2 size-48 rounded-full bg-secondary/25 blur-3xl" />
    </div>

    {/* Content Container */}
    <div className="container relative z-10 mx-auto mt-10 max-w-7xl px-6 md:px-8 lg:px-12">
      <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
        <motion.div
          className="flex flex-col justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Badge variant="secondary">Portfolio</Badge>
          </motion.div>

          <Heading as="h2" variant="h1">
            Projects
          </Heading>

          <Paragraph
            as="p"
            variant="body-md"
            weight="regular"
            className="text-body/80"
          >
            {PROJECTS_INTRODUCTION}
          </Paragraph>

          {/* Skills Tags */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {SKILLS.map((skill) => (
              <Badge
                key={skill}
                variant="outline"
                className="bg-background/50 "
              >
                <Paragraph as="span" variant="label-sm">
                  {skill}
                </Paragraph>
              </Badge>
            ))}
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <Illustration />
      </div>
    </div>
  </Section>
);
