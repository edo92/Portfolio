import { Fragment } from 'react';
import Link from 'next/link';
import { cn } from '@client/lib/cn';
import { Typography } from '@client/components/Typography';

import { links } from './data';
import { ABOUT_TEXT, NAME, HERO_TITLE } from './constants';

export const PageHero: React.FC = () => {
   return (
      <Fragment>
         <div className="flex w-full flex-col items-center justify-center p-9">
            <div className="mt-5 w-5/6 px-3 py-px">
               <div className="flex flex-col items-start px-12 pt-8">
                  <Typography variant="p" className="text-base max-md:max-w-full">
                     {HERO_TITLE}
                  </Typography>

                  <Typography variant="h1" className="text-gradient-100 text-8xl font-bold max-md:max-w-full">
                     {NAME}
                  </Typography>

                  <Typography variant="p" className="text-sm max-md:max-w-full">
                     {ABOUT_TEXT}
                  </Typography>
               </div>
            </div>
         </div>

         <div className="flex w-full self-stretch pt-36">
            <div className="flex w-full flex-wrap items-center justify-center gap-4 px-3">
               {links.map((item, index) => (
                  <div
                     key={index}
                     className={cn(
                        item.style,
                        'bg-gradient-to-tr',
                        'flex cursor-pointer flex-col justify-center whitespace-nowrap rounded p-0.5 text-center text-lg font-light'
                     )}
                  >
                     <Link
                        target="_blank"
                        href={item.link}
                        className="bg-light-100 dark:bg-dark-300 flex flex-row items-center justify-center gap-2.5 rounded px-3 py-2"
                     >
                        <Typography variant="p" className="flex items-center justify-center">
                           {item.name}
                        </Typography>

                        <item.Icon className="dark:text-light-400 text-dark-100/85 aspect-square w-5 shrink-0" />
                     </Link>
                  </div>
               ))}
            </div>
         </div>
      </Fragment>
   );
};
