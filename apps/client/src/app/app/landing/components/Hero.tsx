import { cn } from '@client/lib/cn';
import { Button } from '@client/components/Button';
import { Heading, Paragraph } from '@client/components/Typography';
import { HeroContainer } from '@client/app/app/landing/components/HeroContainer';

import * as intro from '@client/app/content/intro';
import { links } from '@client/app/content/profiles';

export const Hero: React.FC = () => {
   return (
      <div className="flex w-full flex-col items-center justify-center p-0 pt-9 md:pt-12 xl:pl-12">
         <div className="flex w-full flex-col items-center justify-center p-0 lg:pl-9">
            <HeroContainer className="flex flex-col items-start gap-3 p-0 leading-tight md:gap-0 md:p-3 md:leading-normal">
               <Paragraph variant="p" size="base" className="text-center">
                  {intro.HERO_TITLE}
               </Paragraph>

               <Heading
                  variant="h1"
                  font="bold"
                  className="text-gradient-100 text-7xl md:truncate lg:text-8xl"
               >
                  {intro.NAME}
               </Heading>

               <Paragraph variant="p" size="sm" className="relative inline-block pt-3 leading-[1.7]">
                  {intro.ABOUT_TEXT}
               </Paragraph>
            </HeroContainer>
         </div>

         <div className="mt-2 flex w-full scale-75 self-stretch pt-12 md:scale-100 md:px-0 md:pt-28">
            <div className="flex w-full flex-wrap items-center justify-center gap-4 px-3">
               {links.map((item, index) => (
                  <div
                     key={index}
                     className={cn(
                        'flex cursor-pointer flex-col justify-center whitespace-nowrap rounded-md  text-center text-lg font-light'
                     )}
                  >
                     <Button
                        variant="ghost"
                        className="from-gradient-17 to-gradient-18 bg-gradient-to-tr p-0.5"
                     >
                        <div className="bg-light-100 dark:bg-dark-300 flex w-48 flex-row items-center justify-center gap-3 rounded py-3">
                           <Paragraph variant="p" size="base" className="flex items-center justify-center">
                              {item.name}
                           </Paragraph>
                           <item.Icon className="dark:text-light-400 text-dark-100/85 aspect-square w-[18px] shrink-0" />
                        </div>
                     </Button>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
