'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button, Heading, Icons, Paragraph, Badge } from '@libs/ui';

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
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

export const ProjectDetail = ({ projects }: { projects: ProjectProps[] }) => {
  const params = useParams();
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState(false);

  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);

  useEffect(() => {
    setIsLoaded(true);

    // Redirect to projects page if project not found
    if (!project) {
      router.push('/project');
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden lg:h-[50vh]">
          <Image
            src={project.imageUrl || '/placeholder.svg'}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
            <div className="container mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.8 }}
              >
                <Badge
                  variant="outline"
                  className="mb-4 border-white/20 bg-black/40 text-white"
                >
                  {project.category}
                </Badge>
                <Heading
                  as="h1"
                  weight="bold"
                  className="mb-4 text-3xl text-white sm:text-4xl lg:text-5xl"
                >
                  {project.title}
                </Heading>
                <Paragraph
                  variant="p"
                  weight="medium"
                  size="lg"
                  className="max-w-3xl text-white/90"
                >
                  {project.description}
                </Paragraph>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="bg-background-secondary px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div
              className="lg:col-span-2"
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Heading
                as="h2"
                weight="semibold"
                className="mb-6 text-2xl sm:text-3xl"
              >
                Overview
              </Heading>
              <Paragraph
                variant="p"
                weight="regular"
                size="md"
                className="mb-8 text-muted-foreground"
              >
                {project.longDescription}
              </Paragraph>

              <div className="mb-12 space-y-8">
                <div>
                  <Heading as="h3" weight="semibold" className="mb-4 text-xl">
                    Challenges
                  </Heading>
                  <ul className="space-y-2">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <Icons.CheckCircle className="mr-2 mt-1 size-5 text-primary" />
                        <Paragraph
                          variant="p"
                          weight="regular"
                          size="md"
                          className="text-muted-foreground"
                        >
                          {challenge}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Heading as="h3" weight="semibold" className="mb-4 text-xl">
                    Solutions
                  </Heading>
                  <ul className="space-y-2">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <Icons.CheckCircle className="mr-2 mt-1 size-5 text-primary" />
                        <Paragraph
                          variant="p"
                          weight="regular"
                          size="md"
                          className="text-muted-foreground"
                        >
                          {solution}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Heading as="h3" weight="semibold" className="mb-4 text-xl">
                    Results
                  </Heading>
                  <ul className="space-y-2">
                    {project.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <Icons.CheckCircle className="mr-2 mt-1 size-5 text-primary" />
                        <Paragraph
                          variant="p"
                          weight="regular"
                          size="md"
                          className="text-muted-foreground"
                        >
                          {result}
                        </Paragraph>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="rounded-xl border border-border/50 bg-card/40 p-6 shadow-md">
                <Heading as="h3" weight="semibold" className="mb-6 text-xl">
                  Project Details
                </Heading>

                <div className="mb-6 space-y-4">
                  <div>
                    <Paragraph
                      variant="p"
                      weight="medium"
                      size="sm"
                      className="text-muted-foreground"
                    >
                      Category
                    </Paragraph>
                    <Paragraph variant="p" weight="semibold" size="md">
                      {project.category}
                    </Paragraph>
                  </div>

                  <div>
                    <Paragraph
                      variant="p"
                      weight="medium"
                      size="sm"
                      className="text-muted-foreground"
                    >
                      Technologies
                    </Paragraph>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Paragraph
                      variant="p"
                      weight="medium"
                      size="sm"
                      className="text-muted-foreground"
                    >
                      Key Metrics
                    </Paragraph>
                    <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
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
                  </div>
                </div>

                <div className="space-y-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full"
                    >
                      <Button className="group w-full">
                        <Icons.ExternalLink className="mr-2 size-4" />
                        <Paragraph
                          variant="span"
                          weight="medium"
                          size="sm"
                          className="text-primary-foreground"
                        >
                          View Live Demo
                        </Paragraph>
                      </Button>
                    </a>
                  )}

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button variant="outline" className="w-full">
                      <Icons.GitHub className="mr-2 size-4" />
                      <Paragraph variant="span" weight="medium" size="sm">
                        View Source Code
                      </Paragraph>
                    </Button>
                  </a>

                  <Link href="/projects" className="block w-full">
                    <Button variant="ghost" className="w-full">
                      <Icons.ArrowRight className="mr-2 size-4" />
                      <Paragraph variant="span" weight="medium" size="sm">
                        Back to Projects
                      </Paragraph>
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="bg-background px-4 py-16 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Heading
              as="h2"
              weight="semibold"
              className="mb-8 text-2xl sm:text-3xl"
            >
              Related Projects
            </Heading>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter(
                  (p) => p.id !== projectId && p.category === project.category
                )
                .slice(0, 3)
                .map((relatedProject) => (
                  <Link
                    key={relatedProject.id}
                    href={`/projects/${relatedProject.id}`}
                    className="group overflow-hidden rounded-lg border border-border/50 bg-card/40 shadow-md transition-all duration-300 ease-in-out hover:border-primary/20 hover:shadow-lg"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={relatedProject.imageUrl || '/placeholder.svg'}
                        alt={relatedProject.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </div>

                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {relatedProject.category}
                      </Badge>

                      <Heading
                        variant="h3"
                        weight="semibold"
                        size="lg"
                        className="mb-2 line-clamp-1"
                      >
                        {relatedProject.title}
                      </Heading>

                      <Paragraph
                        variant="p"
                        weight="regular"
                        size="sm"
                        className="mb-4 line-clamp-2 text-muted-foreground"
                      >
                        {relatedProject.description}
                      </Paragraph>

                      <div className="flex items-center text-primary">
                        <Paragraph variant="span" weight="medium" size="sm">
                          View Project
                        </Paragraph>
                        <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};
