import { Divider } from '@client/components/Divider';
import { Typography } from '@client/components/Typography';
import { divideIntoChunks } from '@client/util/divideChunks';

import { projects } from './data';
import { Project } from './Project';

export const Projects = () => {
   const projectList = divideIntoChunks(projects, 3);

   return (
      <div className="flex w-full flex-col justify-center gap-3">
         <Divider />

         <div className="mt-10 px-24 max-md:mt-10 max-md:max-w-full">
            <Typography variant="h1" className="text-dark-100/80 text-2xl font-bold">
               Latest Projects
            </Typography>
         </div>

         <div className="flex flex-col items-center justify-center gap-9 px-20 max-md:max-w-full max-md:px-5">
            {projectList.map((projects, index) => (
               <div key={index} className="flex gap-5 max-md:flex-col">
                  {projects.map((project) => (
                     <Project key={project.name} {...project} />
                  ))}
               </div>
            ))}
         </div>

         <Divider className="my-10" />
      </div>
   );
};
