import Link from 'next/link';
import { Icons } from '@client/components/Icons';
import { Button } from '@client/components/Button';
import { Project } from '@client/app/components/Project';
import { Heading, Paragraph } from '@client/components/Typography';

import { projects } from '@client/app/content/projects';
import { divideIntoChunks } from '@client/util/divideChunks';

const ProjectComponent: React.FC<{
   name: string;
   description: string;
   stack: string[];
   imageUrl: string;
   gitRepo: string;
   type: string;
}> = ({ imageUrl, name, description, stack, gitRepo, type }) => (
   <Project imageUrl={imageUrl}>
      <div className="ml-1 flex w-full flex-col gap-3">
         <div className="flex w-full flex-row justify-between gap-3">
            <Heading variant="h3" size="xl">
               {name}
            </Heading>

            <div className="flex flex-row gap-3 px-3">
               <Link href={gitRepo}>
                  <Button variant="ghost" className="group h-6 !bg-transparent shadow-none">
                     <Icons.GitHub className="dark:text-light-400 text-dark-300 transition-100 m-0 aspect-[1.05] size-[1.1rem] shrink-0 transition-all group-hover:scale-[110%]" />
                  </Button>
               </Link>

               {type === 'Demo' ? (
                  <Link href={gitRepo}>
                     <Button variant="ghost" className="group h-6 !bg-transparent shadow-none">
                        <Icons.Link className="dark:text-light-400 text-dark-300 transition-100 m-0 aspect-[1.05] size-[1.1rem] shrink-0 transition-all group-hover:scale-[110%]" />
                     </Button>
                  </Link>
               ) : (
                  <span className="h-6 bg-transparent"></span>
               )}
            </div>
         </div>

         <Paragraph variant="p" size="base" font="light" className="mt-2 leading-6 max-md:max-w-full">
            {description}
         </Paragraph>

         <Paragraph
            font="light"
            variant="p"
            className="text-primary-200 dark:text-primary-100 py-2 max-md:max-w-full"
         >
            {stack.join(' - ')}
         </Paragraph>
      </div>
   </Project>
);

export const Projects: React.FC = () => {
   const projectList = divideIntoChunks(projects, 3);

   return (
      <section className="px-26 my-9 mb-36 flex w-full grow items-center justify-center px-20 md:px-0">
         <div className="flex w-full flex-col items-start justify-center gap-9 sm:w-3/4 md:w-11/12 lg:w-3/4 xl:w-4/6">
            <Heading id="projects" variant="h3" size="2xl">
               Projects
            </Heading>

            <div className="flex w-full flex-col items-center justify-center gap-20">
               {projectList.map((list, index) => (
                  <div key={index} className="flex flex-row gap-20 max-md:flex-col md:gap-9">
                     {list.map((project) => (
                        <ProjectComponent key={project.name} {...project} />
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
