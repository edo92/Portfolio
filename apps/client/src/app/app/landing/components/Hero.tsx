import { Heading, Paragraph } from '@client/components/Typography';
import * as intro from '@client/app/content/intro';

export const Hero: React.FC = () => {
   return (
      <section className="flex w-full flex-col items-center justify-center">
         <div className="flex w-full flex-col items-center justify-center px-5 md:px-0">
            <div className="flex w-11/12 flex-col items-start gap-3 p-0 leading-tight md:max-w-[45rem] md:gap-0 md:p-3 md:leading-normal">
               <Paragraph variant="p" size="base" font="light">
                  {intro.HERO_TITLE}
               </Paragraph>

               <Heading
                  variant="h1"
                  font="bold"
                  className="text-gradient-500 text-7xl md:truncate lg:text-8xl"
               >
                  {intro.NAME}
               </Heading>

               <Paragraph
                  variant="p"
                  size="md"
                  font="light"
                  className="relative inline-block pt-3 leading-normal"
               >
                  {intro.ABOUT_TEXT}
               </Paragraph>
            </div>
         </div>
      </section>
   );
};
