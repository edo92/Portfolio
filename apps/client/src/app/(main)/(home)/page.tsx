import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { PROJECTS } from '../../content';
import { ProjectsGrid } from '../../components/Projects';

export default function HomePage() {
  return (
    <div className="size-full">
      <Hero />
      <Timeline />
      <ProjectsGrid projects={PROJECTS} />
    </div>
  );
}
