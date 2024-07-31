import { Heading, Paragraph } from '@client/components/Typography';
import { HeroContainer } from '@client/app/app/landing/components/HeroContainer';
import * as intro from '@client/app/content/intro';

export const Hero: React.FC = () => {
   return (
      <div className="flex w-full flex-col items-center justify-center p-0 pt-9 md:pt-12 xl:pl-12">
         <div className="flex w-full flex-col items-center justify-center p-0 lg:pl-9">
            <HeroContainer className="flex flex-col items-start gap-3 p-0 leading-tight md:gap-0 md:p-3 md:leading-normal">
               <Paragraph variant="p" size="base" className="pl-8 md:pl-0">
                  {intro.HERO_TITLE}
               </Paragraph>

               <Heading
                  variant="h1"
                  font="bold"
                  className="text-gradient-100 pl-8 text-7xl md:truncate md:pl-0 lg:text-8xl"
               >
                  {intro.NAME}
               </Heading>

               <Paragraph variant="p" size="sm" className="relative inline-block pt-3 leading-[1.7]">
                  {intro.ABOUT_TEXT}
               </Paragraph>
            </HeroContainer>
         </div>
      </div>
   );
};
