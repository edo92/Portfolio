import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Timeline />
      <Projects />
      <Contact />
    </>
  );
}
