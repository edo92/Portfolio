import { cn } from '@client/lib/cn';
import { Button } from '@client/components/Button';
import { Paragraph } from '@client/components/Typography';
import { links } from '@client/app/content/profiles';

export const Profiles: React.FC = () => (
   <div className="mt-10 flex w-full justify-center self-stretch pt-12 md:px-0 md:pt-28">
      <div className="w-full p-3 lg:max-w-[45rem]">
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
                     <div className="bg-light-100 dark:bg-dark-300 flex w-36 flex-row items-center justify-center gap-3 rounded py-3">
                        <Paragraph variant="p" className="flex items-center justify-center text-[1rem]">
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
