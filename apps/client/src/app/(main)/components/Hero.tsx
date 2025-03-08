'use client';

import { motion } from 'framer-motion';

import { cn } from '@libs/util';
import { Paragraph, Link, Heading } from '@libs/ui';
import { SOCIAL_LINKS } from '../../content';
import { Section } from '../../components/Section';
import { HeroIllustration } from './Illustration';

export const Hero = () => {
  return (
    <Section className="relative min-h-[92vh] w-full overflow-hidden !pt-36 pb-0">
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen pointer-events-none hidden lg:block z-[999]">
        <HeroIllustration />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-start lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-16">
          <div className="lg:w-1/2 max-w-2xl">
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Paragraph
                  as="span"
                  weight="normal"
                  className="text-foreground/60 text-sm"
                >
                  Hey, I&apos;m
                </Paragraph>
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Heading
                  as="h1"
                  weight="bold"
                  className="text-4xl md:text-5xl lg:text-6xl tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent"
                >
                  Eduard Jacobs
                </Heading>
              </motion.div>

              <motion.div
                className={cn(
                  'text-sm md:text-lg leading-relaxed md:backdrop-blur-sm md:bg-background/80 md:rounded-lg'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paragraph
                  as="p"
                  size="md"
                  weight="normal"
                  className="text-body/80"
                >
                  Software Engineer with over 5 years of expertise in backend
                  and full-stack development, specializing in cloud-native
                  architectures and microservices. Demonstrated success in
                  designing scalable systems using Python, TypeScript, and AWS
                  technologies. Proven track record in implementing DevOps
                  practices and maintaining high-performance production
                  environments.
                </Paragraph>
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center gap-4 md:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {SOCIAL_LINKS.map((link) => (
                  <Link
                    external
                    key={link.name}
                    href={link.href}
                    aria-label={`Visit ${link.name}`}
                    className="flex items-center gap-2 md:gap-3 rounded-md p-2 md:p-3 text-body/80"
                  >
                    {link.icon}
                    <Paragraph as="span" size="sm" weight="medium">
                      {link.name}
                    </Paragraph>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
