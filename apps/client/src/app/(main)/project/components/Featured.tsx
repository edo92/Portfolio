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
  description: string;
  tags: string[];
  stats: {
    label: string;
    value: string;
  }[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
};

type FeaturedProjectProps = {
  project: ProjectProps;
};

const parentVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const {
    id,
    title,
    category,
    description,
    tags,
    stats,
    imageUrl,
    demoUrl,
    githubUrl,
  } = project;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Section className="pt-12" secondary>
      <div className="mx-auto max-w-7xl px-6 md:px-8 lg:px-12">
        <motion.div
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={parentVariant}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <Heading as="h2" weight="semibold" className="text-2xl sm:text-3xl">
            Featured Project
          </Heading>

          <motion.div
            className="overflow-hidden rounded-xl border border-border/50 bg-card/40 shadow-lg"
            initial="hidden"
            animate="visible"
            variants={cardVariant}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <Image
                  fill
                  alt={title}
                  className="object-cover"
                  src={imageUrl || '/static/projects/placeholder.svg'}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent lg:bg-gradient-to-t" />

                <div className="absolute bottom-0 left-0 p-6 lg:hidden">
                  <Badge
                    variant="outline"
                    className="mb-4 border-white/20 bg-black/40 text-white"
                  >
                    {category}
                  </Badge>
                  <Heading as="h3" size="2xl" weight="bold">
                    {title}
                  </Heading>
                </div>
              </div>

              <div className="flex flex-col gap-6 p-6 lg:p-8">
                <div className="hidden lg:block">
                  <Badge variant="outline" className="mb-4">
                    {category}
                  </Badge>
                  <Heading as="h3" size="2xl" weight="bold" className="mt-4">
                    {title}
                  </Heading>
                </div>

                <Paragraph
                  as="p"
                  size="md"
                  weight="normal"
                  className="text-muted-foreground"
                >
                  {description}
                </Paragraph>

                <div className="grid grid-cols-3 gap-4">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="rounded-lg bg-background p-4 text-center"
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

                <div className="flex flex-wrap gap-3">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="px-3 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                  <Link href={`/project/${id}`} className="flex-1">
                    <Button className="group h-12 w-full">
                      <Paragraph
                        as="span"
                        size="sm"
                        weight="medium"
                        className="text-primary-foreground"
                      >
                        View Project
                      </Paragraph>
                      <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                  <div className="flex gap-4">
                    {githubUrl && (
                      <Link
                        external
                        href={githubUrl}
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
                    {demoUrl && (
                      <Link external href={demoUrl} aria-label="View live demo">
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
