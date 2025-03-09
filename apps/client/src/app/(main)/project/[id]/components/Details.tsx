'use client';

import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { Button, Heading, Icons, Paragraph, Badge, Link } from '@libs/ui';

type ProjectProps = {
  id: string;
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
  <li className="flex items-start">
    <Icons.CheckCircle className="text-primary mr-2 mt-1 size-5" />
    <Paragraph
      as="p"
      size="base"
      weight="normal"
      className="text-muted-foreground"
    >
      {text}
    </Paragraph>
  </li>
);

export const ProjectDetail = ({ projects }: { projects: ProjectProps[] }) => {
  const { id } = useParams();
  const router = useRouter();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    router.push('/projects');
    return null;
  }

  return (
    <>
      {/* Navigation Header */}
      <div className="sticky top-0 z-50 w-full bg-background/80 px-6 py-4 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl">
          <Link href="/project" className="group inline-flex pt-12">
            <Button
              size="sm"
              variant="ghost"
              className="gap-2 transition-colors duration-200 group-hover:text-body/75"
              onClick={() => router.back()}
            >
              <Icons.ArrowLeft className="size-4 transition-transform duration-200 group-hover:-translate-x-1" />
              <Paragraph
                as="span"
                size="sm"
                weight="medium"
                className="text-inherit"
              >
                Back to Projects
              </Paragraph>
            </Button>
          </Link>
        </div>
      </div>

      <div className="min-h-screen bg-background pt-6">
        {/* Project Header Section */}
        <section className="relative">
          <div className="relative mt-8 h-[35vh] min-h-[300px] w-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-background-secondary via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 w-full p-6 lg:p-12">
              <div className="container mx-auto max-w-7xl">
                <FadeIn delay={0} yOffset={20} className="flex flex-col gap-4">
                  <Badge
                    variant="outline"
                    className="w-fit border-white/20 bg-black/40 text-white"
                  >
                    {project.category}
                  </Badge>
                  <Heading as="h1" variant="title">
                    {project.title}
                  </Heading>
                  <Paragraph as="p" variant="subtle" className="max-w-3xl">
                    {project.description}
                  </Paragraph>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview Section */}
        <section className="bg-background-secondary p-6">
          <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <FadeIn delay={0.2} yOffset={0} className="lg:col-span-2">
                <Heading
                  as="h2"
                  weight="semibold"
                  className="mb-6 text-2xl sm:text-3xl"
                >
                  Overview
                </Heading>
                <Paragraph
                  as="p"
                  size="base"
                  weight="normal"
                  className="mb-8 text-muted-foreground"
                >
                  {project.longDescription}
                </Paragraph>

                <div className="space-y-8">
                  {/* Challenges */}
                  <div className="flex flex-col gap-4">
                    <Heading as="h3" weight="semibold" className="text-xl">
                      Challenges
                    </Heading>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <IconListItem key={index} text={challenge} />
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div className="flex flex-col gap-4">
                    <Heading as="h3" weight="semibold" className="text-xl">
                      Solutions
                    </Heading>
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <IconListItem key={index} text={solution} />
                      ))}
                    </ul>
                  </div>

                  {/* Results */}
                  <div className="flex flex-col gap-4">
                    <Heading as="h3" weight="semibold" className="text-xl">
                      Results
                    </Heading>
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <IconListItem key={index} text={result} />
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>

              {/* Project Details Sidebar */}
              <FadeIn delay={0.4} yOffset={0}>
                <div className="rounded-xl border border-border/50 bg-card/40 p-6 shadow-md">
                  <Heading as="h3" weight="semibold" className="mb-6 text-xl">
                    Project Details
                  </Heading>

                  <div className="flex flex-col gap-6">
                    {/* Category */}
                    <div className="flex flex-col gap-2">
                      <Paragraph
                        as="p"
                        size="sm"
                        weight="medium"
                        className="text-muted-foreground"
                      >
                        Category
                      </Paragraph>
                      <Paragraph as="p" size="base" weight="semibold">
                        {project.category}
                      </Paragraph>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-col gap-2">
                      <Paragraph
                        as="p"
                        size="sm"
                        weight="medium"
                        className="text-muted-foreground"
                      >
                        Technologies
                      </Paragraph>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="flex flex-col gap-2">
                      <Paragraph
                        as="p"
                        size="sm"
                        weight="medium"
                        className="text-muted-foreground"
                      >
                        Key Metrics
                      </Paragraph>
                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
                        {project.stats.map((stat, index) => (
                          <div
                            key={index}
                            className="rounded-lg bg-background p-3 text-center"
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
                              size="xs"
                              weight="medium"
                              className="text-muted-foreground"
                            >
                              {stat.label}
                            </Paragraph>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-col gap-3">
                    {project.demoUrl && (
                      <Link
                        external
                        href={project.demoUrl}
                        className="block w-full"
                      >
                        <Button className="group w-full">
                          <Icons.ExternalLink className="mr-2 size-4" />
                          <Paragraph
                            as="span"
                            size="sm"
                            weight="medium"
                            className="text-primary-foreground"
                          >
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
                      <Button variant="outline" className="w-full">
                        <Icons.GitHub className="mr-2 size-4" />
                        <Paragraph as="span" size="sm" weight="medium">
                          View Source Code
                        </Paragraph>
                      </Button>
                    </Link>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Related Projects Section */}
        <section className="bg-background px-6 py-16">
          <div className="container mx-auto max-w-7xl">
            <FadeIn delay={0.6} yOffset={0} className="flex flex-col gap-8">
              <Heading
                as="h2"
                weight="semibold"
                className="text-2xl sm:text-3xl"
              >
                Related Projects
              </Heading>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects
                  .filter((p) => p.id !== id && p.category === project.category)
                  .slice(0, 3)
                  .map((relatedProject) => (
                    <Link
                      key={relatedProject.id}
                      href={`/projects/${relatedProject.id}`}
                      className="hover:border-primary/20 group overflow-hidden rounded-lg border border-border/50 bg-card/40 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg"
                    >
                      <div className="relative h-48 overflow-hidden">
                        {/* Image component can be added here */}
                      </div>
                      <div className="flex flex-col gap-3 p-6">
                        <Badge variant="secondary" className="w-fit text-xs">
                          {relatedProject.category}
                        </Badge>
                        <Heading
                          as="h3"
                          size="lg"
                          weight="semibold"
                          className="line-clamp-1"
                        >
                          {relatedProject.title}
                        </Heading>
                        <Paragraph
                          as="p"
                          size="sm"
                          weight="normal"
                          className="line-clamp-2 text-muted-foreground"
                        >
                          {relatedProject.description}
                        </Paragraph>
                        <div className="text-primary mt-auto flex items-center">
                          <Paragraph as="span" size="sm" weight="medium">
                            View Project
                          </Paragraph>
                          <Icons.ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </FadeIn>
          </div>
        </section>
      </div>
    </>
  );
};
