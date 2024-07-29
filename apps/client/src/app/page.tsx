import { PageHero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { LinkButtons } from './components/Buttons/Buttons';

export default function Index() {
   return (
      <div className="dark:bg-dark-300 bg-light-100 size-full px-5">
         <PageHero />
         <LinkButtons />
         <Experience />
         <Projects />
      </div>
   );
}
