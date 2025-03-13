'use client';

import { motion } from 'framer-motion';
import { cn } from '@/util';
import { Paragraph, Link, Heading, Section } from '@/ui';

import { HeroIllustration } from './Illustration';
import { DESCRIPTION, SOCIAL_LINKS } from '../../../content';
import { MotionWrapper } from '../../../components/motion/wrapper';

export const Hero = () => {
  return (
    <Section className="relative mt-12 min-h-[92vh] w-full overflow-hidden pb-0">
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
              <MotionWrapper>
                <Paragraph
                  variant="body-sm"
                  as="span"
                  weight="regular"
                  className="text-foreground/60"
                >
                  Hey, I&apos;m
                </Paragraph>
              </MotionWrapper>

              <MotionWrapper delay={0.1}>
                <Heading
                  as="h1"
                  variant="hero"
                  className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent"
                >
                  Eduard Jacobs
                </Heading>
              </MotionWrapper>

              <MotionWrapper
                delay={0.2}
                className={cn(
                  'md:rounded-lg md:bg-background/80 md:backdrop-blur-sm'
                )}
              >
                <Paragraph
                  variant="body-md"
                  weight="regular"
                  className="text-body/90"
                >
                  {DESCRIPTION}
                </Paragraph>
              </MotionWrapper>

              <MotionWrapper
                delay={0.4}
                className="flex flex-wrap items-center gap-4 md:gap-6"
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
                      variant="body-sm"
                      weight="medium"
                      className="transition-all duration-200 group-hover:text-body/65"
                    >
                      {link.name}
                    </Paragraph>
                  </Link>
                ))}
              </MotionWrapper>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
};
