'use client';

import { useMemo, useState, useCallback, FC, useRef } from 'react';
import { AnimatePresence, motion, useInView } from 'framer-motion';

import { cn } from '@/util';
import {
  Badge,
  Button,
  Heading,
  Icons,
  Paragraph,
  Link,
  Image,
  Section,
  Card,
} from '@/ui';

export type Project = {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
};

type ProjectsGridProps = {
  projects: Project[];
};

type CategoryFilterProps = {
  categories: readonly string[];
  selected: string;
  onSelect: (category: string) => void;
};

const CategoryFilter: FC<CategoryFilterProps> = ({
  categories,
  selected,
  onSelect,
}) => {
  const filterRef = useRef<HTMLDivElement>(null);
  const isFilterInView = useInView(filterRef, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={filterRef}
      className="flex flex-wrap justify-center gap-4"
      initial={{ opacity: 0, y: 20 }}
      animate={isFilterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      {categories.map((category, index) => (
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isFilterInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
        >
          <Button
            variant="ghost"
            onClick={() => onSelect(category)}
            className={cn(
              'rounded-full px-5 py-1.5 text-sm font-medium transition-colors',
              selected === category
                ? 'bg-background-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
            )}
          >
            {category}
          </Button>
        </motion.div>
      ))}
    </motion.div>
  );
};

type ProjectCardProps = {
  project: Project;
  index: number;
  isHovered?: boolean;
  onHover?: (id: string) => void;
  onLeave?: () => void;
  isInView: boolean;
};

export const ProjectCard: FC<ProjectCardProps> = ({
  project,
  index,
  isHovered,
  onHover,
  onLeave,
  isInView,
}) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
    exit={{ opacity: 0, y: 20 }}
    transition={{ duration: 0.6, delay: Math.min(0.2 + index * 0.1, 1.5) }}
    className="hover:border-primary/20 group relative overflow-hidden rounded-lg border border-border/50 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
    onMouseEnter={() => onHover?.(project.id)}
    onMouseLeave={onLeave && onLeave}
    role="article"
    aria-labelledby={`project-title-${project.id}`}
  >
    <Card
      key={project.id}
      className="group overflow-hidden bg-card/40 p-0 transition-all duration-300 hover:shadow-md"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="p-1">
          {project.imageUrl && (
            <Image
              src={project.imageUrl || '/placeholder.svg'}
              alt={project.title}
              fill
              className="min-h-52 rounded-t-md object-cover opacity-60 transition-transform duration-500 group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <motion.div
          className="absolute inset-x-0 bottom-0 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-white/20 bg-black/50"
              >
                <Paragraph
                  as="span"
                  variant="label-xs"
                  weight="medium"
                  className="text-white"
                >
                  {tag}
                </Paragraph>
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-xs">
            <Paragraph as="span" variant="label-xs" weight="medium">
              {project.category}
            </Paragraph>
          </Badge>
          <div className="flex gap-3">
            <Link
              external
              href={project.githubUrl}
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="View GitHub repository"
            >
              <Icons.GitHub className="size-5" />
            </Link>
            {project.demoUrl && (
              <Link
                external
                href={project.demoUrl}
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="View live demo"
              >
                <Icons.ExternalLink className="size-5" />
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-3 py-2">
          <Heading
            as="h3"
            variant="h5"
            className="line-clamp-1"
            id={`project-title-${project.id}`}
          >
            {project.title}
          </Heading>

          <Paragraph variant="label-sm" className="line-clamp-2 text-body/80">
            {project.summary}
          </Paragraph>
        </div>
        <Link href={`/projects/${project.id}`} className="flex-1">
          <Button className="group w-full py-2.5">
            <Paragraph
              as="span"
              variant="button-lg"
              className="text-primary-foreground"
            >
              View Project
            </Paragraph>
            <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </Card>
  </motion.div>
);

export const ProjectsGrid: FC<ProjectsGridProps> = ({ projects }) => {
  const [filter, setFilter] = useState<string>('All');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.1,
  });
  const isGridInView = useInView(gridRef, {
    once: true,
    amount: 0.1,
  });

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(projects.map((project) => project.category)),
    ];
    return ['All', ...uniqueCategories];
  }, [projects]);

  const filteredProjects = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter, projects]
  );

  const handleHover = useCallback((id: string) => setHoveredProject(id), []);
  const handleLeave = useCallback(() => setHoveredProject(null), []);

  return (
    <Section ref={containerRef}>
      <motion.div
        className="container mx-auto max-w-xl px-6 md:max-w-7xl md:px-8 lg:px-12"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="mb-8 flex flex-col items-center justify-center gap-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <Heading as="h2" variant="h2">
              Projects
            </Heading>
          </motion.div>

          <CategoryFilter
            categories={categories}
            selected={filter}
            onSelect={setFilter}
          />
        </div>

        <motion.div
          ref={gridRef}
          layout
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isHovered={hoveredProject === project.id}
                onHover={handleHover}
                onLeave={handleLeave}
                isInView={isGridInView}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </Section>
  );
};
