import { useMemo } from 'react';
import { cn } from '@client/lib/cn';
import { Icons } from '@client/components/Icons';
import { Button } from '@client/components/Button';
import { Heading, Paragraph } from '@client/components/Typography';
import { links } from '@client/app/content/profiles';

const colors = ['bg-gradient-100', 'bg-gradient-200', 'bg-gradient-300', 'bg-gradient-400'];

export const Header: React.FC = () => {
   const memoizedColors = useMemo(() => colors, []);

   return (
      <section className="flex w-full flex-col items-center justify-center gap-7 px-12">
         <div className="flex w-full flex-col items-center justify-center">
            <div className="flex w-3/4 items-start justify-center px-3 pl-9 md:w-full md:items-center md:pl-0">
               <Heading variant="h1" size="4xl" font="bold">
                  I Would Love to Hear from You
               </Heading>
            </div>
         </div>

         <div className="flex items-center justify-center px-12 py-5 max-md:max-w-full md:px-9">
            <div className="flex items-center justify-center gap-4 max-md:flex-wrap">
               {links.map(({ name }, index) => (
                  <div
                     key={`${name}-${index}`}
                     className={cn(
                        'transition-100 flex flex-col justify-center whitespace-nowrap rounded-sm p-0.5 text-center text-lg font-light text-stone-300 transition-all hover:scale-[95%]',
                        memoizedColors[index]
                     )}
                  >
                     <Button variant="ghost" className="flex h-9 flex-row items-center gap-2.5 px-7">
                        <Paragraph variant="span" size="base" font="light">
                           {name}
                        </Paragraph>
                        <Icons.GitHub className="size-5" />
                     </Button>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
