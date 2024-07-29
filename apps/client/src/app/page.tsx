import { PageHero } from './components/Hero';
import { LinkButtons } from './components/Buttons/Buttons';
import { ExperianceTimeline } from './components/Experiance';

export default function Index() {
   return (
      <div className="dark:bg-dark-300 bg-light-100 size-full px-5">
         <PageHero />
         <LinkButtons />
         <ExperianceTimeline />
      </div>
   );
}
