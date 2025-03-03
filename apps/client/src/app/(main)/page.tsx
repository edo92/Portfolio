import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { ProjectsGrid } from './components/Projects';
import { Contact } from './components/Contact';
import { PROJECTS } from '../content';

export default function HomePage() {
  return (
    <div className="space-y-0">
      <Hero />
      <Timeline />
      <ProjectsGrid projects={PROJECTS} />
      <Contact />
    </div>
  );
}
