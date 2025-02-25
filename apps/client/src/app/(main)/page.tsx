import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <Hero />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}
