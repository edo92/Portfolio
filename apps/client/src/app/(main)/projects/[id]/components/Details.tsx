'use client';

import React, { useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { AnimatePresence, motion, useInView } from 'framer-motion';
import {
  Button,
  Card,
  Icons,
  Badge,
  Heading,
  Paragraph,
  Container,
  CardContent,
  Link,
  Section,
} from '@/ui';
import { ProjectCard } from '../../../../components/Projects';

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  summary: string;
  imageUrl: string;
  category: string;
  tags: string[];
  stats: { label: string; value: string }[];
  githubUrl: string;
  demoUrl: string;
  challenges: string[];
  solutions: string[];
  results: string[];
};

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  yOffset?: number;
  className?: string;
}

const FadeIn = ({
  children,
  delay = 0,
  yOffset = 20,
  className = '',
}: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: yOffset }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

interface IconListItemProps {
  text: string;
}

const IconListItem = ({ text }: IconListItemProps) => (
  <li className="flex flex-row items-center gap-3">
    <Icons.CheckCircle className="size-5 shrink-0" />
    <Paragraph as="p" variant="body-md" className="text-body/80">
      {text}
    </Paragraph>
  </li>
);

export const ProjectDetail = ({ projects }: { projects: ProjectProps[] }) => {
  const { id } = useParams();
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const isGridInView = useInView(gridRef, {
    once: true,
    amount: 0.1,
  });

  const project = projects.find((p) => p.id === id);

  const relatedProjects = projects
    .filter((p) => p.id !== id && p.category === project?.category)
    .slice(0, 3);

  if (!project) {
    router.push('/projects');
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Container size="7xl" padding="md" className="px-9">
        <div className="mb-16 mt-3 flex flex-col gap-12">
          <FadeIn delay={0.1} className="flex flex-col gap-3">
            <Link href="/project" className="group inline-flex pt-12">
              <Button
                size="sm"
                variant="ghost"
                className="gap-2 p-0 transition-colors duration-200 group-hover:text-body/75"
                onClick={() => router.back()}
              >
                <Icons.ArrowLeft className="size-5 text-body/80 transition-transform duration-200 group-hover:-translate-x-1" />
                <Paragraph
                  as="span"
                  variant="button-lg"
                  className="text-body/80"
                >
                  Back to Projects
                </Paragraph>
              </Button>
            </Link>
          </FadeIn>
        </div>

        <section className="relative">
          <div className="relative w-full overflow-hidden">
            <FadeIn delay={0.1} className="flex flex-col gap-3">
              <Badge
                variant="outline"
                className="mb-1 w-fit border-white/20 bg-black/40 text-white"
              >
                {project.category}
              </Badge>
              <Heading as="h1" variant="h2">
                {project.title}
              </Heading>
              <Paragraph variant="body-md" className="max-w-3xl text-body/80">
                {project.summary}
              </Paragraph>
            </FadeIn>
          </div>
        </section>

        <section className="container py-16">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <FadeIn delay={0.2} className="lg:col-span-2">
              <div className="flex flex-col gap-12">
                <div className="space-y-4">
                  <Heading as="h2" variant="h3">
                    Overview
                  </Heading>
                  <Paragraph
                    as="p"
                    variant="body-md"
                    className="mb-8 text-body/80"
                  >
                    {project.description}
                  </Paragraph>
                </div>

                {/* Challenges */}
                <div className="space-y-5">
                  <Heading as="h2" variant="h4">
                    Challenges
                  </Heading>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <IconListItem key={index} text={challenge} />
                    ))}
                  </ul>
                </div>

                {/* Solutions */}
                <div className="space-y-5">
                  <Heading as="h2" variant="h4">
                    Solutions
                  </Heading>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <IconListItem key={index} text={solution} />
                    ))}
                  </ul>
                </div>

                {/* Results */}
                <div className="space-y-5">
                  <Heading as="h2" variant="h4">
                    Results
                  </Heading>
                  <ul className="space-y-3">
                    {project.results.map((result, index) => (
                      <IconListItem key={index} text={result} />
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>

            {/* Project Details Sidebar */}
            <FadeIn delay={0.4}>
              <Card className="sticky top-24">
                <CardContent className="space-y-8 p-4">
                  <Heading as="h3" variant="h4">
                    Project Details
                  </Heading>

                  <div className="space-y-8">
                    {/* Category */}
                    <div className="space-y-2">
                      <Paragraph variant="label-xs">Category</Paragraph>
                      <Paragraph weight="medium">{project.category}</Paragraph>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <Paragraph variant="label-xs">Technologies</Paragraph>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="space-y-2">
                      <Paragraph variant="label-xs">Key Metrics</Paragraph>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3">
                        {project.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="rounded-lg bg-muted p-3 text-center"
                          >
                            <Paragraph variant="label-sm" weight="bold">
                              {stat.value}
                            </Paragraph>
                            <Paragraph variant="metadata" weight="semibold">
                              {stat.label}
                            </Paragraph>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    {project.demoUrl && (
                      <Link
                        external
                        href={project.demoUrl}
                        className="block w-full"
                      >
                        <Button className="w-full gap-2">
                          <Icons.ExternalLink className="size-4" />
                          <Paragraph variant="button-md">
                            View Live Demo
                          </Paragraph>
                        </Button>
                      </Link>
                    )}

                    <Link
                      external
                      href={project.githubUrl}
                      className="block w-full"
                    >
                      <Button variant="outline" className="w-full gap-2">
                        <Icons.GitHub className="size-4" />
                        <Paragraph variant="button-md">
                          View Source Code
                        </Paragraph>
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>
      </Container>

      {/* Related Projects Section */}
      {!!relatedProjects.length && (
        <Section ref={containerRef} className="border-t">
          <FadeIn delay={0.6} className="space-y-10">
            <Heading as="h2" variant="h3">
              Related Projects
            </Heading>
            <motion.div
              ref={gridRef}
              layout
              className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
            >
              <AnimatePresence>
                {relatedProjects.map((project, index) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={index}
                    isInView={isGridInView}
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </FadeIn>
        </Section>
      )}
    </div>
  );
};
