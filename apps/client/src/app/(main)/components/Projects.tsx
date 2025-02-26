'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import { cn } from '@libs/util';
import { Badge, Button, Heading, Icons, Paragraph } from '@libs/ui';

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
  className?: string;
};

export const ProjectsGrid = ({ projects, className }: ProjectGridProps) => {
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
    <div className={cn('w-full py-40', className)}>
      <div className="flex flex-col items-center justify-center mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Heading
          as="h2"
          weight="semibold"
          className="mb-6 text-2xl sm:text-3xl"
        >
          All Projects
        </Heading>

        <div className="mb-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              onClick={() => setFilter(category)}
              className={cn(
                'rounded-full px-4 py-2 font-medium text-sm transition-colors',
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
              className="group overflow-hidden rounded-lg border border-border/50 bg-card/40 shadow-md transition-all duration-300 ease-in-out hover:border-primary/20 hover:shadow-lg"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.imageUrl || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 text-white"
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
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary" className="text-xs">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
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
                  variant="h3"
                  weight="semibold"
                  size="xl"
                  className="mb-2 line-clamp-1"
                >
                  {project.title}
                </Heading>

                <Paragraph
                  variant="p"
                  weight="regular"
                  size="sm"
                  className="mb-4 line-clamp-2 text-muted-foreground"
                >
                  {project.description}
                </Paragraph>

                <Link href={`/project/${project.id}`}>
                  <Button variant="outline" className="group w-full">
                    <Paragraph variant="span" weight="medium" size="sm">
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
  );
};
