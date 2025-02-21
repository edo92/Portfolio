'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn, Icons, Paragraph, paragraphVariants } from '@libs/ui';

export const Hero = () => (
  <div className="mx-auto max-w-7xl px-6 py-52 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
    <div className="flex w-full">
      <div className="mx-auto mt-16 max-w-2xl lg:mx-0 lg:max-w-lg lg:shrink-0">
        <motion.span
          className={cn(
            paragraphVariants({
              variant: 'span',
              size: 'sm',
              weight: 'regular',
            }),
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hey I&apos;m
        </motion.span>
        <motion.h1
          className="mt-4 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 bg-clip-text font-bold text-4xl tracking-tight text-transparent sm:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Eduard Jacobs
        </motion.h1>
        <motion.p
          className={cn(
            paragraphVariants({ variant: 'p', weight: 'regular' }),
            'mt-6 text-lg leading-8',
          )}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Backend Engineer with 5 years of experience in designing scalable and
          secure systems. Experienced in cloud technologies and distributed
          systems. I enjoy creating things that live on the internet.
        </motion.p>

        {/* Social Links */}
        <motion.div
          className="mt-10 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="https://github.com"
            className="flex items-center gap-2 rounded-md p-2"
          >
            <Icons.GitHub className="size-5" />
            <Paragraph variant="span" size="sm" weight="medium">
              GitHub
            </Paragraph>
          </Link>
          <Link
            href="https://linkedin.com"
            className="flex items-center gap-2 rounded-md p-2"
          >
            <Icons.LinkedIn className="size-4" />
            <Paragraph variant="span" size="sm" weight="medium">
              LinkedIn
            </Paragraph>
          </Link>
          <Link
            href="https://medium.com"
            className="flex items-center gap-2 rounded-md p-2"
          >
            <Icons.Medium className="size-5" />
            <Paragraph variant="span" size="sm" weight="medium">
              Medium
            </Paragraph>
          </Link>
        </motion.div>
      </div>

      {/* Image Section */}
      <motion.div
        className="relative mx-auto mt-16 lg:mt-0"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 opacity-30 blur" />
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png"
            alt="Portfolio Preview"
            width={600}
            height={600}
            className="relative w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
          />
        </div>
      </motion.div>
    </div>
  </div>
);
