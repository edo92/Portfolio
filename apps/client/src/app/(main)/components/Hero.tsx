'use client';

import { motion } from 'framer-motion';
import { cn } from '@libs/util';
import { Paragraph, Heading } from '@libs/ui';
import { DESCRIPTION, SOCIAL_LINKS } from '../../content';
import { Section } from '../../components/Section';
import { HeroIllustration } from './Illustration';
import { Link } from '@libs/ui';

export const Hero = () => {
  return (
    <Section className="relative min-h-[92vh] w-full overflow-hidden !pt-36 pb-0">
      <div className="pointer-events-none absolute right-0 top-0 z-[999] hidden h-screen w-full lg:block lg:w-1/2">
        <HeroIllustration />
      </div>

      <div className="container relative mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <div className="flex flex-col items-start gap-8 md:gap-12 lg:flex-row lg:items-center lg:gap-16">
          <div className="max-w-2xl lg:w-1/2">
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
                <Paragraph as="span" size="sm" weight="normal" variant="muted">
                  Hey, I&apos;m
                </Paragraph>
              </motion.span>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Heading as="h1" size="4xl" weight="bold" variant="gradient">
                  Eduard Jacobs
                </Heading>
              </motion.div>

              <motion.div
                className={cn(
                  'md:rounded-lg md:bg-background/80 md:backdrop-blur-sm'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paragraph
                  as="p"
                  size="lg"
                  weight="normal"
                  variant="body"
                  leading="relaxed"
                >
                  {DESCRIPTION}
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
                    className="group flex items-center gap-2 rounded-md p-2 text-body/80 md:gap-3 md:p-3"
                  >
                    {link.icon}
                    <Paragraph
                      as="span"
                      size="sm"
                      weight="medium"
                      className="transition-all duration-200 group-hover:text-body/65"
                    >
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
