import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';

export default function HomePage() {
  return (
    <div className="size-full">
      <Hero />
      <Timeline />
    </div>
  );
}
