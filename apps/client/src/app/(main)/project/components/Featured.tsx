'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Badge, Button, Heading, Icons, Paragraph } from '@libs/ui';

type ProjectProps = {
  id: string;
  title: string;
  category: string;
  detailed: string;
  tags: string[];
  stats: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
};

export const FeaturedProject = ({ project }: { project: ProjectProps }) => {
  return (
    <motion.div
      className="overflow-hidden rounded-xl border border-border/50 bg-card/40 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-64 overflow-hidden lg:h-auto">
          <Image
            fill
            alt={project.title}
            className="object-cover"
            src={project.imageUrl || '/placeholder.svg'}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent lg:bg-gradient-to-t" />

          <div className="absolute bottom-0 left-0 p-6 text-white lg:hidden">
            <Badge
              variant="outline"
              className="mb-2 border-white/20 bg-black/40 text-white"
            >
              {project.category}
            </Badge>
            <Heading
              variant="h3"
              weight="bold"
              size="2xl"
              className="mb-2 text-white"
            >
              {project.title}
            </Heading>
          </div>
        </div>

        <div className="p-6 lg:p-8">
          <div className="hidden lg:block">
            <Badge variant="outline" className="mb-2">
              {project.category}
            </Badge>
            <Heading variant="h3" weight="bold" size="2xl" className="mb-4">
              {project.title}
            </Heading>
          </div>

          <Paragraph
            variant="p"
            weight="regular"
            size="md"
            className="mb-6 text-muted-foreground lg:mb-8"
          >
            {project.detailed}
          </Paragraph>

          <div className="mb-6 grid grid-cols-3 gap-4">
            {project.stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-lg bg-background p-3 text-center"
              >
                <Paragraph
                  variant="p"
                  weight="bold"
                  size="lg"
                  className="text-primary"
                >
                  {stat.value}
                </Paragraph>
                <Paragraph
                  variant="p"
                  weight="medium"
                  size="xs"
                  className="text-muted-foreground"
                >
                  {stat.label}
                </Paragraph>
              </div>
            ))}
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href={`/projects/${project.id}`} className="flex-1">
              <Button className="group w-full">
                <Paragraph
                  variant="span"
                  weight="medium"
                  size="sm"
                  className="text-primary-foreground"
                >
                  View Case Study
                </Paragraph>
                <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <div className="flex gap-3">
              {project.githubUrl && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View GitHub repository"
                >
                  <Button variant="outline" size="icon">
                    <Icons.GitHub className="size-5" />
                  </Button>
                </Link>
              )}
              {project.demoUrl && (
                <Link
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View live demo"
                >
                  <Button variant="outline" size="icon">
                    <Icons.ExternalLink className="size-5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
