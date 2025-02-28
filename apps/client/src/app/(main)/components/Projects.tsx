'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@libs/util';
import { Badge, Button, Heading, Icons, Paragraph } from '@libs/ui';
import { Section } from '../../components/Section';

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
};

type ProjectGridProps = {
  projects: ProjectProps[];
};

export const ProjectsGrid = ({ projects }: ProjectGridProps) => {
  const [filter, setFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category))],
    [projects]
  );

  const filteredProjects =
    filter === 'All'
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <Section>
      <div className="mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-center mb-10 md:mb-12">
          <Heading as="h2" variant="title" className="mb-6 md:mb-8">
            Projects
          </Heading>

          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant="ghost"
                onClick={() => setFilter(category)}
                className={cn(
                  'rounded-full px-5 py-1.5 font-medium text-sm transition-colors',
                  filter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10"
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
                className="group overflow-hidden rounded-lg border border-border/50 bg-card/40 shadow-md transition-all duration-300 ease-in-out hover:border-primary/20 hover:shadow-lg"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-56 md:h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <motion.div
                    className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 20,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-black/40 text-white border-white/20"
                        >
                          <Paragraph as="span" size="sm" weight="medium">
                            {tag}
                          </Paragraph>
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  <div className="mb-3 md:mb-4 flex items-center justify-between">
                    <Badge variant="secondary" className="text-xs">
                      <Paragraph as="span" size="sm" weight="medium">
                        {project.category}
                      </Paragraph>
                    </Badge>
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Icons.GitHub className="size-5" />
                      </a>
                      {project?.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-foreground transition-colors"
                          aria-label="View live demo"
                        >
                          <Icons.ExternalLink className="size-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <Heading
                    as="h3"
                    size="xl"
                    weight="semibold"
                    className="mb-2 md:mb-3 line-clamp-1"
                  >
                    {project.title}
                  </Heading>

                  <Paragraph
                    as="p"
                    weight="normal"
                    size="lg"
                    className="mb-4 md:mb-6 line-clamp-2 text-muted-foreground"
                  >
                    {project.description}
                  </Paragraph>

                  <Link href={`/project/${project.id}`}>
                    <Button variant="outline" className="group w-full">
                      <Paragraph as="span" weight="medium" size="sm">
                        View Details
                      </Paragraph>
                      <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </Section>
  );
};
