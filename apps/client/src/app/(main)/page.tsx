'use client';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import Timeline from './components/Timeline';

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-[#121212] text-white overflow-hidden w-full">
      <Header />
      <Hero />
      <Timeline />
    </div>
  );
}
