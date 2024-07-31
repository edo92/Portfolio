'use client';

import { useState } from 'react';
import { cn } from '@client/lib/cn';
import { experience } from '@client/app/content/experiance';
import { Heading, Paragraph } from '@client/components/Typography';

export const Timeline = () => {
   const [selected, setSelected] = useState('0');
   const { role, location, timeline, bulletPoints } = experience[parseInt(selected)];

   return (
      <section className="flex w-full flex-col items-center justify-center p-5 pt-24">
         <div className="flex w-10/12 flex-col items-center justify-center gap-7 md:w-11/12 md:flex-row md:gap-12 lg:w-9/12 xl:w-2/3">
            <div className="flex w-11/12 flex-col md:w-3/12">
               <div className="flex w-full flex-col items-start gap-y-5 border-l-2 border-zinc-100 p-4 md:items-center">
                  {experience.map((exp, index) => (
                     <div
                        key={exp.role + index}
                        className={cn(
                           'cursor-pointer items-start rounded p-1.5 px-3 text-base font-light',
                           selected === index.toString()
                              ? 'bg-dark-100/80 text-light-100 dark:bg-dark-100 dark:text-light-300'
                              : 'text-dark-300 dark:text-light-400 bg-transparent'
                        )}
                        onClick={() => setSelected(index.toString())}
                     >
                        <Paragraph variant="p" size="lg" font="light" className="ml-1 whitespace-nowrap">
                           {exp.role}
                        </Paragraph>
                     </div>
                  ))}
               </div>
            </div>
            <div className="flex w-11/12 flex-col gap-2 md:w-8/12">
               <div className="flex grow flex-col p-2.5 max-md:mt-3 max-md:max-w-full">
                  <div className="flex justify-between gap-5 p-2 max-md:max-w-full max-md:flex-wrap">
                     <Heading variant="h4" size="2xl" font="light">
                        {role}
                     </Heading>
                     <Paragraph variant="span" size="base" font="light" className="my-auto">
                        {timeline.start} - {timeline.end}
                     </Paragraph>
                  </div>

                  <Paragraph
                     variant="span"
                     size="base"
                     className="text-primary-400 dark:text-primary-200 p-2 max-md:max-w-full"
                  >
                     {location}
                  </Paragraph>

                  <div className="flex flex-col py-3 pl-3 text-base font-light max-md:max-w-full">
                     {bulletPoints.map((bullet, index) => (
                        <Paragraph
                           key={index}
                           variant="span"
                           font="regular"
                           size="base"
                           className="mt-2 first:mt-0 max-md:max-w-full"
                        >
                           - {bullet}
                        </Paragraph>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
