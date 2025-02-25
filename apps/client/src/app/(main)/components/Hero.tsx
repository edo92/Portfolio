'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@libs/util';
import { Icons, Paragraph, paragraphVariants } from '@libs/ui';
import EarthComponent from './3dPlanet';

export const Hero = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com',
      icon: <Icons.GitHub className="size-5" />,
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: <Icons.LinkedIn className="size-5" />,
    },
    {
      name: 'Medium',
      href: 'https://medium.com',
      icon: <Icons.Medium className="size-5" />,
    },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Earth Component */}
      <div className="absolute right-0 top-0 w-full lg:w-1/2 h-screen pointer-events-none hidden lg:block">
        <EarthComponent />
      </div>

      {/* Content Container */}
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 py-24 md:py-32 lg:py-40">
        <div className="flex flex-col items-center md:items-center lg:flex-row lg:items-start gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 max-w-2xl text-start md:text-left">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span
                className={cn(
                  paragraphVariants({
                    variant: 'span',
                    size: 'sm',
                    weight: 'medium',
                  }),
                  'inline-block text-gray-600 dark:text-gray-300'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Hey, I&apos;m
              </motion.span>

              <motion.h1
                className="mt-4 text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Eduard Jacobs
              </motion.h1>

              <motion.p
                className={cn(
                  paragraphVariants({ variant: 'p', weight: 'regular' }),
                  'mt-6 text-base md:text-lg leading-relaxed text-gray-700 dark:text-gray-200 md:backdrop-blur-sm md:bg-background/80 md:rounded-lg md:py-4'
                )}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Software Engineer with over 5 years of expertise in backend and
                full-stack development, specializing in cloud-native
                architectures and microservices. Demonstrated success in
                designing scalable systems using Python, TypeScript, and AWS
                technologies. Proven track record in implementing DevOps
                practices and maintaining high-performance production
                environments.
              </motion.p>

              {/* Social Links */}
              <motion.div
                className="mt-8 flex items-center justify-center md:justify-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {socialLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center gap-2 rounded-md p-2 text-gray-700 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-200 md:backdrop-blur-sm md:bg-background/80"
                    aria-label={`Visit ${link.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {link.icon}
                    <Paragraph variant="span" size="sm" weight="medium">
                      {link.name}
                    </Paragraph>
                  </Link>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
