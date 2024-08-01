import Link from 'next/link';
import { Button } from '@client/components/Button';
import { Paragraph, Heading } from '@client/components/Typography';
import { OrbitParticals } from '@client/app/components/OrbitParticals';

export const Hero: React.FC = () => (
   <div className="flex size-full min-h-full flex-col items-center justify-center">
      <div className="absolute flex size-full justify-center overflow-hidden">
         <OrbitParticals className="w-full" />
      </div>

      <div className="relative flex size-full flex-col items-center justify-center">
         <div className="relative flex size-full flex-col items-center justify-center gap-2">
            <div className="flex flex-col gap-2 text-center">
               <Heading variant="h1" size="4xl" font="black" className="text-gradient-200 leading-tight">
                  Projects Showcase
               </Heading>

               <Heading variant="h1" size="sm" font="regular" className="text-gradient-200 leading-normal">
                  Live demo and source code
               </Heading>
            </div>

            <div className="flex flex-wrap justify-center p-1">
               <Button
                  variant="ghost"
                  className="bg-gradient-600 flex items-center justify-center rounded-full px-2"
               >
                  <Link href="#projects" className="px-4 py-2">
                     <Paragraph
                        variant="span"
                        font="bold"
                        size="lg"
                        className="dark:text-dark-100 text-light-100 truncate"
                     >
                        Check Out
                     </Paragraph>
                  </Link>
               </Button>
            </div>
         </div>
      </div>
   </div>
);
