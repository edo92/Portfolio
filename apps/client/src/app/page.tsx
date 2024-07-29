import { PageHero } from './components/Hero';
import { LinkButtons } from './components/Buttons/Buttons';

export default function Index() {
   return (
      <div className="dark:bg-dark-300 bg-light-100 h-screen w-full px-5">
         <PageHero />
         <LinkButtons />
      </div>
   );
}
