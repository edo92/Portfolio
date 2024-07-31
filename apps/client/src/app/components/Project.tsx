import Link from 'next/link';
import Image from 'next/image';
import { Icons } from '@client/components/Icons';
import { Paragraph, Heading } from '@client/components/Typography';

interface ProjectProps {
   name: string;
   description: string;
   stack: string[];
   link: string;
   imageUrl: string;
}

const VersionOne: React.FC<ProjectProps> = ({ name, description, stack, imageUrl, link }) => {
   return (
      <div className="ml-5 flex w-2/6 flex-col max-md:ml-0 max-md:w-full">
         <div className="flex grow flex-col gap-3 text-sm font-light">
            <div className="border-light-400 rounded border p-1 shadow-sm">
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

               <Paragraph variant="p" size="base">
                  {description}
               </Paragraph>

               <Paragraph variant="p" className="text-primary-200 dark:text-primary-100 py-2">
                  {stack.join(' - ')}
               </Paragraph>

               <div className="from-gradient-20 to-gradient-21 hover:from-gradient-19 hover:to-gradient-20 cursor-pointer rounded bg-gradient-to-tr p-0.5 transition-all duration-300 ease-in-out">
                  <Link
                     href={link}
                     className="bg-light-100 dark:bg-dark-300 flex flex-row items-center justify-center gap-3 py-3"
                  >
                     <Icons.Link className="text-dark-300/85 dark:text-light-400 size-[16px]" />
                     <Paragraph variant="p">Live demo</Paragraph>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export const Project: React.FC<{ version: 'one' | 'two' } & ProjectProps> = ({ version, ...props }) => {
   return version === 'one' ? <VersionOne {...props} /> : <div>Version two</div>;
};