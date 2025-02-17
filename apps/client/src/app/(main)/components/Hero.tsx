'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icons } from '@libs/ui';

export const Hero = () => (
  <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8 min-h-screen">
    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0 mt-16">
      <motion.span
        className="text-sm text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hey I&apos;m
      </motion.span>
      <motion.h1
        className="mt-4 text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Eduard Jacobs
      </motion.h1>
      <motion.p
        className="mt-6 text-lg leading-8 text-gray-300"
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
          className="p-2 rounded-md bg-[#121212] border border-transparent hover:border-purple-500/30 transition-colors flex items-center gap-2 hover:bg-gray-900"
        >
          <Icons.GitHub className="w-5 h-5" />
          <span>GitHub</span>
        </Link>
        <Link
          href="https://linkedin.com"
          className="p-2 rounded-md bg-[#121212] border border-transparent hover:border-blue-500/30 transition-colors flex items-center gap-2 hover:bg-gray-900"
        >
          <Icons.LinkedIn className="w-5 h-5" />
          <span>LinkedIn</span>
        </Link>
        <Link
          href="https://medium.com"
          className="p-2 rounded-md bg-[#121212] border border-transparent hover:border-purple-500/30 transition-colors flex items-center gap-2 hover:bg-gray-900"
        >
          <Icons.Medium className="w-5 h-5" />
          <span>Medium</span>
        </Link>
      </motion.div>
    </div>

    {/* Image Section */}
    <motion.div
      className="mx-auto mt-16 lg:mt-0 relative"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-300 rounded-2xl blur opacity-30" />
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
);
