import dynamic from 'next/dynamic';
import { Hero } from './components/Hero';
import { PROJECTS } from '../../content';

const Timeline = dynamic(() =>
  import('./components/Timeline').then((c) => c.Timeline)
);

const Projects = dynamic(() =>
  import('../../components/Projects').then((c) => c.ProjectsGrid)
);

export default function HomePage() {
  return (
    <div className="size-full">
      <Hero />
      <Timeline />
      <Projects projects={PROJECTS} />
    </div>
  );
}
