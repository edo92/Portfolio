import { Fragment } from 'react';
import { cn } from '@client/lib/cn';

import { links } from './data';
import { ABOUT_TEXT, NAME, HERO_TITLE } from './constants';

export const PageHero: React.FC = () => {
   return (
      <Fragment>
         <div className="flex w-full flex-col items-center justify-center p-9">
            <div className="mt-5 w-5/6 px-3 py-px">
               <div className="flex flex-col items-start px-12 pt-8">
                  <div className="text-dark-300 dark:text-light-400 text-base max-md:max-w-full">
                     {HERO_TITLE}
                  </div>
                  <div className="text-gradient-100 text-8xl font-bold max-md:max-w-full">{NAME}</div>
                  <div className="text-dark-300 dark:text-light-400 text-sm max-md:max-w-full">
                     {ABOUT_TEXT}
                  </div>
               </div>
            </div>
         </div>

         <div className="flex w-full self-stretch pt-36">
            <div className="flex w-full flex-wrap items-center justify-center gap-4 px-3">
               {links.map((item, index) => (
                  <div
                     key={index}
                     className={cn(
                        'bg-gradient-to-tr',
                        item.style,
                        'flex flex-col justify-center whitespace-nowrap rounded-sm p-0.5 text-center text-lg font-light'
                     )}
                  >
                     <div className="bg-light-100 dark:bg-dark-300 dark:text-light-400 text-dark-300 flex items-center justify-center gap-2.5 px-3 py-2">
                        <div>{item.name}</div>
                        <item.Icon className="dark:text-light-400 text-dark-100/85 aspect-square w-5 shrink-0" />
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </Fragment>
   );
};
