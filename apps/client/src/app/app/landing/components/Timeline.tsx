'use client';

import { useState } from 'react';
import { cn } from '@client/lib/cn';
import { experience } from '@client/app/content/experiance';

export const Timeline = () => {
   const [selected, setSelected] = useState('0');
   const { role, location, timeline, bulletPoints } = experience[parseInt(selected)];

   return (
      <div className="flex w-full flex-col items-center justify-center p-3">
         <div className="flex w-full flex-row items-start justify-center gap-3">
            <div className="flex w-4/12 flex-col">
               <div className="flex w-full flex-col items-center border-l-2 border-zinc-100 p-4">
                  {experience.map((exp, index) => (
                     <div
                        key={exp.role + index}
                        className={cn(
                           'w-full cursor-pointer items-start rounded p-1 text-base font-light',
                           selected === index.toString()
                              ? 'bg-dark-100/80 text-light-100 dark:bg-dark-100 dark:text-light-300'
                              : 'text-dark-300 dark:text-light-400 bg-transparent'
                        )}
                     >
                        <p onClick={() => setSelected(index.toString())} className="ml-1 text-lg font-light">
                           {exp.role}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex w-8/12 flex-col gap-2">
               <div className="flex grow flex-col p-2.5 max-md:mt-3 max-md:max-w-full">
                  <div className="flex justify-between gap-5 p-2 max-md:max-w-full max-md:flex-wrap">
                     <div className="text-dark-300 dark:text-light-400 text-2xl">{role}</div>
                     <div className="text-dark-300/75 dark:text-light-400 my-auto text-base">
                        {timeline.start} - {timeline.end}
                     </div>
                  </div>
                  <div className="text-primary-400 dark:text-primary-200 p-2 text-base max-md:max-w-full">
                     {location}
                  </div>
                  <div className="flex flex-col py-3 pl-3 text-base font-light max-md:max-w-full">
                     {bulletPoints.map((bullet, index) => (
                        <div
                           key={index}
                           className="text-dark-300 dark:text-light-400 mt-2 first:mt-0 max-md:max-w-full"
                        >
                           - {bullet}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
