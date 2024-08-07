import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Paragraph } from '@client/components/Typography';

const ThemeSwitch = dynamic(() => import('./ThemeSwitch').then((c) => c.ThemeSwitch), {
   ssr: true,
});

export const Header: React.FC = () => {
   return (
      <header className="border-b-0.5 border-dark-100/10 dark:border-light-200/10 dark:border-b-px flex w-full items-center justify-center whitespace-nowrap px-16 py-7 shadow-sm max-md:max-w-full max-md:px-5">
         <div className="flex w-full items-center justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
            <Link href="/">
               <Paragraph
                  variant="span"
                  size="xl"
                  className="dark:hover:text-light-100 hover:text-dark-200/70 transition-100 transition-colors"
               >
                  EJ
               </Paragraph>
            </Link>

            <div className="flex items-center justify-center gap-5 self-start px-1">
               <Link href="/app/projects">
                  <Paragraph
                     size="sm"
                     variant="span"
                     className="dark:hover:text-primary-100 hover:text-primary-200"
                  >
                     Projects
                  </Paragraph>
               </Link>

               <Link href="/static/resume.pdf" target="_blank">
                  <Paragraph
                     size="sm"
                     variant="span"
                     className="dark:hover:text-primary-100 hover:text-primary-200"
                  >
                     Resume
                  </Paragraph>
               </Link>

               <Link href="/app/contact">
                  <Paragraph
                     size="sm"
                     variant="span"
                     className="dark:hover:text-primary-100 hover:text-primary-200"
                  >
                     Contact
                  </Paragraph>
               </Link>

               <ThemeSwitch />
            </div>
         </div>
      </header>
   );
};
