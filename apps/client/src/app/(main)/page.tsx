import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { ProjectsGrid } from './components/Projects';
import { Contact } from './components/Contact';
import { projects } from './project/contents';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Timeline />
      <ProjectsGrid projects={projects} />
      <Contact />
    </>
  );
}
