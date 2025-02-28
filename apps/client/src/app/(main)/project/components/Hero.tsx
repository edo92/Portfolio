'use client';

import { motion } from 'framer-motion';
import { Heading, Paragraph, Badge } from '@libs/ui';
import { Section } from '../../../components/Section';

export const ProjectsHero = () => {
  const skills = [
    'Python',
    'TypeScript',
    'React',
    'Next.js',
    'AWS',
    'Docker',
    'Kubernetes',
    'Node.js',
    'PostgreSQL',
    'MongoDB',
  ];

  return (
    <Section className="bg-gradient-to-t from-background-secondary via-transparent to-transparent px-0 !pt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute right-1/4 top-1/2 h-48 w-48 rounded-full bg-secondary/25 blur-3xl" />
      </div>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          {/* Text Content */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Badge variant="secondary" className="mb-4 md:mb-6">
                Portfolio
              </Badge>
            </motion.div>

            <Heading
              as="h2"
              weight="bold"
              className="mb-6 md:mb-8 text-3xl sm:text-4xl"
            >
              Projects
            </Heading>

            <Paragraph
              as="p"
              size="md"
              weight="normal"
              className="mb-8 md:mb-10 text-muted-foreground md:text-[1.125rem] md:leading-[1.75rem]"
            >
              Explore my portfolio of software engineering projects, showcasing
              cloud-native architectures, microservices, and full-stack
              applications built with modern technologies.
            </Paragraph>

            {/* Skills Tags */}
            <motion.div
              className="flex flex-wrap gap-2 md:gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="bg-background/50 px-4 py-1.5"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            className="relative flex items-center justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 md:h-96 md:w-96">
              {/* Code Block Visual */}
              <div className="absolute inset-0 rounded-lg border border-border/50 bg-card/40 p-4 md:p-6 shadow-lg backdrop-blur-sm">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-destructive/70"></div>
                  <div className="h-3 w-3 rounded-full bg-secondary/70"></div>
                  <div className="h-3 w-3 rounded-full bg-success/70"></div>
                </div>
                <div className="mt-4 md:mt-6 space-y-3">
                  <div className="h-4 w-3/4 rounded bg-foreground/10"></div>
                  <div className="h-4 w-1/2 rounded bg-foreground/10"></div>
                  <div className="h-4 w-5/6 rounded bg-foreground/10"></div>
                  <div className="h-4 w-2/3 rounded bg-primary/20"></div>
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
                <div className="h-8 w-8 rounded-full bg-primary/30"></div>
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
        </div>
      </div>
    </Section>
  );
};
