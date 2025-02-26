'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heading, Paragraph } from '@libs/ui';
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
      <section className="relative overflow-hidden bg-background-secondary px-4 py-24 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="mb-12 flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
          >
            <Heading as="h2" weight="bold" className="text-3xl sm:text-4xl">
              Projects showcase
            </Heading>
            <Paragraph
              variant="p"
              weight="regular"
              size="lg"
              className="mt-6 max-w-3xl text-muted-foreground"
            >
              Explore my portfolio of software engineering projects, showcasing
              cloud-native architectures, microservices, and full-stack
              applications built with Python, TypeScript, and AWS.
            </Paragraph>
          </motion.div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="bg-background-secondary px-4 py-6 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading
              as="h2"
              weight="semibold"
              className="mb-8 text-2xl sm:text-3xl"
            >
              Featured Project
            </Heading>
            <FeaturedProject project={featuredProject} />
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-background px-4 py-32 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ProjectsGrid projects={projects} className='py-12'/>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
