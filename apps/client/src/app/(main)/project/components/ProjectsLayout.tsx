'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heading } from '@libs/ui';

import { FeaturedProject } from './Featured';
import { featuredProject, projects } from '../contents';
import { ProjectsGrid } from '../../components/Projects';

export const ProjectsLayout = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="flex flex-col w-full bg-background">
      {/* Featured Project */}
      <section className="bg-background-secondary pt-16 pb-8 md:pt-24 md:pb-12 lg:pt-32 lg:pb-16">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 md:space-y-8"
          >
            <Heading
              as="h2"
              weight="semibold"
              className="mb-6 md:mb-8 text-2xl sm:text-3xl"
            >
              Featured Project
            </Heading>
            <FeaturedProject project={featuredProject} />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-16 lg:pb-32">
        <div className="container mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProjectsGrid projects={projects} className="py-0" />
          </motion.div>
        </div>
      </section>
    </div>
  );
};
