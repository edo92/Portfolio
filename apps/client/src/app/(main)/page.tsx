'use client';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Timeline from './components/Timeline';
import ProjectsShowcase from './components/Projects';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <Hero />
      <Timeline />
      <ProjectsShowcase />
    </div>
  );
}
