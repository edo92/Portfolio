import { cn } from '@client/lib/cn';
import { Icons } from '@client/components/Icons';
import { ButtonGradiant } from '@client/app/components/Button';
import { Heading, Paragraph } from '@client/components/Typography';
import { ABOUT_TEXT, HERO_TITLE, NAME } from './constants';

export const links = [
   {
      name: 'GitHub',
      Icon: Icons.GitHub,
      style: 'from-gradient-17 to-gradient-18',
      link: 'https://github.com',
   },
   {
      name: 'LinkedIn',
      Icon: Icons.LinkedIn,
      style: 'from-gradient-18 to-gradient-19',
      link: 'https://linkedin.com',
   },
   {
      name: 'GitHub',
      Icon: Icons.GitHub,
      style: 'from-gradient-20 to-gradient-21',
      link: 'https://github.com',
   },
   {
      name: 'LinkedIn',
      Icon: Icons.LinkedIn,
      style: 'from-gradient-22 to-gradient-23',
      link: 'https://linkedin.com',
   },
];

export const Hero: React.FC = () => {
   return (
      <div className="flex w-full flex-col items-center justify-center p-0 pt-9 md:pt-12 xl:pl-12">
         <div className="flex w-full flex-col items-center justify-center p-0 lg:pl-9">
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

         <div className="mt-2 flex w-full scale-75 self-stretch pt-12 md:scale-100 md:px-0 md:pt-28">
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
                     <ButtonGradiant>
                        <Paragraph variant="p" className="flex items-center justify-center">
                           {item.name}
                        </Paragraph>
                     </ButtonGradiant>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
