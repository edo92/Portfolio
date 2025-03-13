import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { PROJECTS } from '../../content';
import { Hero } from './components/Hero';

export const metadata: Metadata = {
  title: {
    absolute: 'Portfolio | Projects',
  },
  description: 'Portfolio projects.',
};

// dynamic import
const FeaturedProject = dynamic(() =>
  import('./components/Featured').then((c) => c.FeaturedProject)
);

const ProjectsGrid = dynamic(() =>
  import('../../components/Projects').then((c) => c.ProjectsGrid)
);

export default function ProjectsPage() {
  return (
    <div className="size-full">
      <Hero />
      <FeaturedProject project={PROJECTS[0]} />
      <ProjectsGrid projects={PROJECTS} />
    </div>
  );
}
