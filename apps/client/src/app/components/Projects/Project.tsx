import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@client/components/Icons';
import { Typography } from '@client/components/Typography';

interface ProjectProps {
   name: string;
   description: string;
   stack: string[];
   link: string;
   imageUrl: string;
}

export const Project: React.FC<ProjectProps> = ({ name, description, stack, imageUrl, link }) => {
   return (
      <div className="ml-5 flex w-2/6 flex-col max-md:ml-0 max-md:w-full">
         <div className="flex grow flex-col gap-3 text-sm font-light">
            <div className="border-light-400 rounded border p-1">
               <Image
                  src={imageUrl}
                  className="aspect-[1.45] w-full rounded"
                  alt="Project image"
                  width={2000}
                  height={1380}
               />
            </div>

            <div className="ml-1 flex w-full flex-col gap-3">
               <Typography variant="h3">{name}</Typography>
               <Typography variant="p">{description}</Typography>
               <Typography variant="p" className="text-primary-300 dark:text-primary-100 py-3 leading-6">
                  {stack.join(' - ')}
               </Typography>

               <div className="from-gradient-20 to-gradient-21 hover:from-gradient-19 hover:to-gradient-20 cursor-pointer rounded bg-gradient-to-tr p-0.5 transition-all duration-300 ease-in-out">
                  <Link
                     href={link}
                     className="bg-light-100 flex flex-row items-center justify-center gap-3 py-3"
                  >
                     <Icons.Link className="text-dark-300/85 dark:text-light-400 size-[16px]" />
                     <Typography variant="p">Live demo</Typography>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};
