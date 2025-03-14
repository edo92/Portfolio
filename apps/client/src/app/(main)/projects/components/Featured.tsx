'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Badge, Button, Heading, Icons, Paragraph, Link, Section } from '@/ui';

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
    <Section className="pt-12" background="secondary">
      <div className="">
        <motion.div
          initial="hidden"
          animate={isLoaded ? 'visible' : 'hidden'}
          variants={parentVariant}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="max-w-7xl px-6 md:px-8 lg:px-12">
            <Heading as="h3" variant="h3">
              Featured Project
            </Heading>
          </div>

          <div className="w-full scale-[93%]">
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
                      className="mb-4 border-white/20 bg-black/40"
                    >
                      <Paragraph as="span" variant="label-sm">
                        {category}
                      </Paragraph>
                    </Badge>
                    <Heading
                      as="h3"
                      variant="h3"
                      className="text-2xl md:text-3xl"
                    >
                      {title}
                    </Heading>
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-6 lg:p-8">
                  <div className="hidden lg:block">
                    <Badge variant="outline" className="mb-4">
                      <Paragraph as="span" variant="label-sm">
                        {category}
                      </Paragraph>
                    </Badge>
                    <Heading as="h3" variant="h3">
                      {title}
                    </Heading>
                  </div>

                  <Paragraph as="p" variant="body" className="text-body/80">
                    {description}
                  </Paragraph>

                  <div className="grid grid-cols-3 gap-4">
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="rounded-lg bg-background p-4 text-center"
                      >
                        <Paragraph as="p" weight="bold" variant="body-md">
                          {stat.value}
                        </Paragraph>
                        <Paragraph
                          as="p"
                          variant="label-sm"
                          weight="medium"
                          className="text-body/80"
                        >
                          {stat.label}
                        </Paragraph>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="px-3 py-1"
                      >
                        <Paragraph
                          as="span"
                          variant="label-xs"
                          weight="semibold"
                        >
                          {tag}
                        </Paragraph>
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                    <Link href={`/projects/${id}`} className="flex-1">
                      <Button className="group h-12 w-full">
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
                    <div className="flex gap-4">
                      {githubUrl && (
                        <Link
                          external
                          href={githubUrl}
                          aria-label="View GitHub repository"
                        >
                          <Button
                            size="icon"
                            variant="outline"
                            className="size-12"
                          >
                            <Icons.GitHub className="size-5" />
                          </Button>
                        </Link>
                      )}
                      {demoUrl && (
                        <Link
                          external
                          href={demoUrl}
                          aria-label="View live demo"
                        >
                          <Button
                            size="icon"
                            variant="outline"
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
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
