import { PageHero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';

export default function Index() {
   return (
      <div className="dark:bg-dark-300 bg-light-100 size-full px-5">
         <PageHero />
         <Experience />
         <Projects />
      </div>
   );
}
