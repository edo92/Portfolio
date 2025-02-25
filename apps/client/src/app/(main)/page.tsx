import { Hero } from './components/Hero';
import { Header } from './components/Header';
import Timeline from './components/Timeline';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Header />
      <Hero />
      <Timeline />
    </div>
  );
}
