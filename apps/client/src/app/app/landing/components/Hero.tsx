import { Heading, Paragraph } from '@client/components/Typography';
import { ABOUT_TEXT, HERO_TITLE, NAME } from './constants';

export const Hero: React.FC = () => {
   return (
      <div className="flex w-full flex-col items-center justify-center p-0 xl:pl-12">
         <div className="flex w-full flex-col items-center justify-center p-0 md:pl-7 lg:pl-9">
            <div className="flex w-7/12 flex-col items-start gap-3 p-0 leading-tight md:gap-0 md:p-3 md:leading-normal">
               <Paragraph variant="p" size="base" className="text-center">
                  {HERO_TITLE}
               </Paragraph>

               <Heading
                  variant="h1"
                  font="bold"
                  className="text-gradient-100 text-7xl md:truncate lg:text-8xl"
               >
                  {NAME}
               </Heading>

               <Paragraph variant="p" size="sm" className="relative inline-block pt-3 leading-[1.7]">
                  {ABOUT_TEXT}
               </Paragraph>
            </div>
         </div>
      </div>
   );
};
