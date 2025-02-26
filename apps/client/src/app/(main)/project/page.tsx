import type { Metadata } from 'next';
import { ProjectsHero } from './components/Hero';

export const metadata: Metadata = {
  title: {
    absolute: 'Portfolio | Projects',
  },
  description: 'Portfolio projects.',
};

export default function ProjectPage() {
  return (
    <main className="min-h-screen size-full">
      <ProjectsHero />
    </main>
  );
}
