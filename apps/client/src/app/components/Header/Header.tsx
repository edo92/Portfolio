import Link from 'next/link';
import { DarkModeToggle } from './Toggle';
import { Typography } from '@client/components/Typography';

export const Header: React.FC = () => (
   <div className="dark:bg-dark-300 bg-light-100 border-b-0.5 border-dark-100/10 flex w-full items-center justify-center whitespace-nowrap px-16 py-7 max-md:max-w-full max-md:px-5">
      <div className="flex w-full justify-between gap-2.5 max-md:max-w-full max-md:flex-wrap">
         <div className="text-lg">DR</div>

         <div className="flex items-center justify-center gap-5 self-start px-1">
            <Link href="/projects">
               <Typography
                  variant="span"
                  className="hover:text-primary-300 dark:hover:text-primary-100 text-sm"
               >
                  Projects
               </Typography>
            </Link>

            <Link href="/resume">
               <Typography
                  variant="span"
                  className="hover:text-primary-300 dark:hover:text-primary-100 text-sm"
               >
                  Resume
               </Typography>
            </Link>

            <Link href="/contact">
               <Typography
                  variant="span"
                  className="hover:text-primary-300 dark:hover:text-primary-100 text-sm"
               >
                  Contact
               </Typography>
            </Link>

            <div className="cursor-pointer">
               <DarkModeToggle />
            </div>
         </div>
      </div>
   </div>
);
