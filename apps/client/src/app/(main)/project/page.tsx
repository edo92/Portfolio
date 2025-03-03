import type { Metadata } from 'next';
import { ProjectsHero } from './components/Hero';

import { PROJECTS, FEATURED_PROJECT } from '../../content';
import { ProjectsGrid } from '../components/Projects';
import { FeaturedProject } from './components/Featured';

export const metadata: Metadata = {
  title: {
    absolute: 'Portfolio | Projects',
  },
  description: 'Portfolio projects.',
  twitter: {
    card: 'summary_large_image',
    title: 'Projects | Eduard Jacobs Portfolio',
    description: 'Explore featured projects from Eduard Jacobs.',
    images: ['/images/projects-og.png'],
  },
  openGraph: {
    title: 'Projects | Eduard Jacobs Portfolio',
    description: 'Browse a collection of software projects by Eduard Jacobs.',
    url: 'https://ejresume.com/projects',
    siteName: 'Eduard Jacobs Portfolio',
    images: [
      {
        url: '/images/projects-og.png',
        width: 1200,
        height: 630,
        alt: 'Eduard Jacobs Projects',
      },
    ],
    type: 'website',
  },
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen size-full">
      <ProjectsHero />
      <FeaturedProject project={FEATURED_PROJECT} />
      <ProjectsGrid projects={PROJECTS} />
    </main>
  );
}
