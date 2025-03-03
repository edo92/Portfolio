'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge, Button, Heading, Icons, Paragraph, Link } from '@libs/ui';
import { Section } from '../../../components/Section';

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

export const FeaturedProject: React.FC<{ project: ProjectProps }> = ({
  project,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Section className="pt-12" secondary>
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6 md:gap-8"
        >
          <Heading as="h2" weight="semibold" className="text-2xl sm:text-3xl">
            Featured Project
          </Heading>

          <motion.div
            className="overflow-hidden rounded-xl border border-border/50 bg-card/40 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-72 overflow-hidden sm:h-80 lg:h-auto">
                <Image
                  fill
                  alt={project.title}
                  className="object-cover"
                  src={project.imageUrl || '/placeholder.svg'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent lg:bg-gradient-to-t" />

                <div className="absolute bottom-0 left-0 p-6 md:p-8 lg:hidden">
                  <Badge
                    variant="outline"
                    className="mb-4 border-white/20 bg-black/40 text-white"
                  >
                    {project.category}
                  </Badge>
                  <Heading as="h3" size="2xl" weight="bold">
                    {project.title}
                  </Heading>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 md:p-8 lg:p-10">
                <div className="hidden lg:block">
                  <Badge variant="outline" className="mb-4">
                    {project.category}
                  </Badge>
                  <Heading as="h3" size="2xl" weight="bold" className="mt-4">
                    {project.title}
                  </Heading>
                </div>

                <Paragraph
                  as="p"
                  size="md"
                  weight="normal"
                  className="text-muted-foreground"
                >
                  {project.detailed}
                </Paragraph>

                <div className="grid grid-cols-3 gap-3 md:gap-4 lg:gap-6">
                  {project.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-background p-3 md:p-4 text-center"
                    >
                      <Paragraph
                        as="p"
                        size="lg"
                        weight="bold"
                        className="text-primary"
                      >
                        {stat.value}
                      </Paragraph>
                      <Paragraph
                        as="p"
                        weight="medium"
                        size="xs"
                        className="text-muted-foreground"
                      >
                        {stat.label}
                      </Paragraph>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto">
                  <Link href={`/project/${project.id}`} className="flex-1">
                    <Button className="group w-full h-12">
                      <Paragraph
                        as="span"
                        size="sm"
                        weight="medium"
                        className="text-primary-foreground"
                      >
                        View Case Study
                      </Paragraph>
                      <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <div className="flex gap-3 md:gap-4">
                    {project.githubUrl && (
                      <Link
                        external
                        href={project.githubUrl}
                        aria-label="View GitHub repository"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-12"
                        >
                          <Icons.GitHub className="size-5" />
                        </Button>
                      </Link>
                    )}
                    {project.demoUrl && (
                      <Link
                        external
                        href={project.demoUrl}
                        aria-label="View live demo"
                      >
                        <Button
                          variant="outline"
                          size="icon"
                          className="size-12"
                        >
                          <Icons.ExternalLink className="size-5" />
                        </Button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
