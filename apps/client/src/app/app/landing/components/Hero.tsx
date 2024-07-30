import { Heading, Paragraph } from '@client/components/Typography';
import { ABOUT_TEXT, HERO_TITLE, NAME } from './constants';

export const Hero: React.FC = () => {
   return (
      <div className="flex w-full flex-col items-center justify-center">
         <div className="flex flex-col items-start px-12 pt-8 leading-[1.3] md:leading-normal">
            <Paragraph variant="p" size="base" className="max-md:max-w-full">
               {HERO_TITLE}
            </Paragraph>

            <Heading variant="h1" size="8xl" font="bold" className="text-gradient-100 max-md:max-w-full">
               {NAME}
            </Heading>

            <Paragraph variant="p" size="sm" className="max-md:max-w-full">
               {ABOUT_TEXT}
            </Paragraph>
         </div>
      </div>
   );
};
