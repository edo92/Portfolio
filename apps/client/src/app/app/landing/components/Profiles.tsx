import { cn } from '@client/lib/cn';
import { Button } from '@client/components/Button';
import { Paragraph } from '@client/components/Typography';
import { links } from '@client/app/content/profiles';

export const Profiles = () => (
   <div className="mt-2 flex w-full scale-75 self-stretch pt-12 md:scale-100 md:px-0 md:pt-28">
      <div className="flex w-full flex-wrap items-center justify-center gap-4 px-3">
         {links.map((item, index) => (
            <div
               key={index}
               className={cn(
                  'flex cursor-pointer flex-col justify-center whitespace-nowrap rounded-md  text-center text-lg font-light'
               )}
            >
               <Button variant="ghost" className="from-gradient-17 to-gradient-18 bg-gradient-to-tr p-0.5">
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
);
