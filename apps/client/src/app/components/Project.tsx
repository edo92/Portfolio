import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@client/components/Icons';
import { Button } from '@client/components/Button';
import { Paragraph, Heading } from '@client/components/Typography';

interface ProjectProps {
   name: string;
   description: string;
   stack: string[];
   link: string;
   imageUrl: string;
}

export const Project: React.FC<ProjectProps> = ({ name, description, stack, imageUrl, link }) => (
   <div className="flex w-2/6 flex-col max-md:w-full">
      <div className="flex grow flex-col gap-3 text-sm font-light">
         <div className="border-light-400 dark:border-light-200/70 rounded border p-[3px] shadow-sm">
            <Image
               src={imageUrl}
               className="aspect-[1.45] w-full rounded"
               alt="Project image"
               width={2000}
               height={1380}
            />
         </div>

         <div className="ml-1 flex w-full flex-col gap-3">
            <Heading variant="h3" size="xl">
               {name}
            </Heading>

            <div className="h-20 w-full">
               <Paragraph variant="p" size="base" font="light">
                  {description}
               </Paragraph>
            </div>

            <div className="h-14 w-full">
               <Paragraph variant="p" className="text-primary-200 dark:text-primary-100 py-2">
                  {stack.join(' - ')}
               </Paragraph>
            </div>

            <div className="bg-gradient-100 flex w-full cursor-pointer flex-col justify-center whitespace-nowrap rounded-md p-0.5 text-center text-lg font-light">
               <Button variant="ghost">
                  <Link href={link} className="bg-light-100 dark:bg-dark-300 flex w-full flex-row items-center justify-center gap-3 rounded py-3">
                     <Icons.Link className="dark:text-light-400 text-dark-100/85 aspect-square w-[16px] shrink-0" />
                     <Paragraph variant="p">Live demo</Paragraph>
                  </Link>
               </Button>
            </div>
         </div>
      </div>
   </div>
);
