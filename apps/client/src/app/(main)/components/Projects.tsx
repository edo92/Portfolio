'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button, Heading, Icons, Paragraph } from '@libs/ui';
import { cn } from '@libs/util';

const projects = [
  {
    id: 1,
    title: 'Minimalist Brand Identity',
    description: 'Clean and modern visual communication for a tech startup',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',
    category: 'Branding',
  },
  {
    id: 2,
    title: 'Sleek Web Experience',
    description: 'Elegant online presence for a luxury fashion brand',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',
    category: 'Web Design',
  },
  {
    id: 3,
    title: 'Intuitive Mobile App',
    description: 'User-friendly app design for a health and wellness company',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',
    category: 'Mobile App',
  },
  {
    id: 4,
    title: 'Elegant Digital Campaign',
    description:
      'Sophisticated marketing strategy for a luxury automotive brand',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',
    category: 'Digital Marketing',
  },
  {
    id: 5,
    title: 'Refined UI/UX Design',
    description:
      'Streamlined user interfaces for a financial services platform',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',
    category: 'UI/UX',
  },
  {
    id: 6,
    title: 'Minimalist Product Design',
    description: 'Sleek and functional design for a smart home device',
    imageUrl:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%209.59.15%E2%80%AFPM-nqPjCZngmJvkCawEyYZv4TV6S9iz4v.png',
    category: 'Product Design',
  },
];

const categories = [
  'All',
  ...new Set(projects.map((project) => project.category)),
];

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section className="py-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Heading as="h2" weight="bold" className="text-3xl sm:text-4xl">
            Projects
          </Heading>
          <Paragraph variant="p" weight="regular" size="md" className="mt-4">
            A showcase of our minimalist designs and creative solutions.
          </Paragraph>
        </motion.div>

        <div className="mb-8 flex justify-center space-x-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setFilter(category)}
              className={cn(
                'rounded-full px-4 font-medium text-sm transition-colors',
                filter === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              )}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="hover-lift overflow-hidden rounded-lg border-[0.5px] shadow-lg transition-all duration-300 ease-in-out hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || '/placeholder.svg'}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1, backdropFilter: 'blur(1.3px)' }}
                  >
                    <Paragraph
                      variant="p"
                      weight="medium"
                      size="base"
                      className="px-4 text-center text-white"
                    >
                      {project.description}
                    </Paragraph>
                  </motion.div>
                </div>
                <div className="p-6">
                  <Paragraph
                    variant="p"
                    weight="medium"
                    size="sm"
                    className="mb-1"
                  >
                    {project.category}
                  </Paragraph>

                  <Heading
                    variant="h3"
                    weight="semibold"
                    size="xl"
                    className="mb-1"
                  >
                    {project.title}
                  </Heading>
                  <Button variant="ghost" className="group px-0">
                    <Paragraph
                      variant="span"
                      weight="medium"
                      size="xs"
                      className="group-hover:text-accent-foreground/80"
                    >
                      View Project
                    </Paragraph>
                    <Icons.ArrowRight className="ml-2 size-[14px]" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
