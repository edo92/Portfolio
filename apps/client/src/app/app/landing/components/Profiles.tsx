import { cn } from '@client/lib/cn';
import { Button } from '@client/components/Button';
import { Paragraph } from '@client/components/Typography';
import { links } from '@client/app/content/profiles';
import Link from 'next/link';

export const Profiles: React.FC = () => (
   <div className="flex w-full justify-center self-stretch">
      <div className="md:mb-18 w-full p-3 sm:mb-3 lg:mb-10 lg:max-w-[45rem]">
         <div className="flex w-full flex-wrap items-center justify-center gap-4 lg:justify-start">
            {links.map((item, index) => (
               <div
                  key={index}
                  className={cn(
                     item.style,
                     'flex cursor-pointer flex-col justify-start whitespace-nowrap rounded p-0.5 text-center text-lg font-light'
                  )}
               >
                  <Button variant="ghost">
                     <Link href={item.link} target="_blank">
                        <div className="bg-light-100 dark:bg-dark-300 flex w-36 flex-row items-center justify-center gap-3 rounded py-3">
                           <Paragraph variant="p" className="flex items-center justify-center text-[1rem]">
                              {item.name}
                           </Paragraph>
                           <item.Icon className="dark:text-light-400 text-dark-100/85 aspect-square w-[18px] shrink-0" />
                        </div>
                     </Link>
                  </Button>
               </div>
            ))}
         </div>
      </div>
   </div>
);
