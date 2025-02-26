import type { Metadata } from 'next';
import { Hero } from './components/Hero';
import { Header } from './components/Header';
import { Timeline } from './components/Timeline';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

export const metadata: Metadata = {
  title: {
    default: "E.J's",
    template: 'Portfolio %s',
  },
  description: "Eduard Jacobs' personal portfolio",
};

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
