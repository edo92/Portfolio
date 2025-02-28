'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { cn } from '@libs/util';
import { Icons, Paragraph, paragraphVariants } from '@libs/ui';
import { Section } from '../../components/Section';

const SOCIAL_LINKS = [
  {
    name: 'GitHub',
    href: 'https://github.com',
    icon: <Icons.GitHub className="w-5 h-5" />,
  },
  {
    name: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: <Icons.LinkedIn className="w-5 h-5" />,
  },
  {
    name: 'Medium',
    href: 'https://medium.com',
    icon: <Icons.Medium className="w-5 h-5" />,
  },
];

export const Hero = () => {
  const socialLinks = useMemo(() => SOCIAL_LINKS, []);

  return (
    <Section className="relative min-h-[92vh] w-full overflow-hidden !pt-32 !pb-0">
      {/* Uncomment the following block when the Earth component is ready */}
      {/*
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen pointer-events-none hidden lg:block z-[999]">
        <EarthComponent />
      </div>
      */}

      <div className="container relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-start lg:flex-row lg:items-center gap-8 md:gap-12 lg:gap-16">
          <div className="lg:w-1/2 max-w-2xl">
            <motion.div
              className="space-y-6 md:space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className={cn(
                  paragraphVariants({ size: 'sm', weight: 'normal' }),
                  'inline-block text-foreground/60'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hey, I&apos;m
              </motion.span>

              <motion.h1
                className="text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Eduard Jacobs
              </motion.h1>

              <motion.div
                className={cn(
                  paragraphVariants({ weight: 'normal' }),
                  'text-base md:text-lg leading-relaxed md:backdrop-blur-sm md:bg-background/80 md:rounded-lg'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Paragraph
                  as="p"
                  size="lg"
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
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
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
