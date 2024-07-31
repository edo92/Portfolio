import { Project } from '@client/app/components/Project';
import { projects } from '@client/app/content/projects';
import { Heading } from '@client/components/Typography';
import { divideIntoChunks } from '@client/util/divideChunks';

export const Projects: React.FC = () => {
   const projectList = divideIntoChunks(projects, 3);

   return (
      <div className="flex w-full grow items-center justify-center p-16 pt-36">
         <div className="flex w-full flex-col items-start justify-center gap-9 sm:w-3/4 md:w-11/12 lg:w-3/4 xl:w-4/6">
            <div className="flex w-full flex-col items-start">
               <Heading variant='h3' size="2xl">Latest Projects</Heading>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-9 ">
               {projectList.map((chunk, index) => (
                  <div key={index} className="flex flex-row gap-9 max-md:flex-col">
                     {chunk.map((project) => (
                        <Project key={project.name} {...project} />
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
