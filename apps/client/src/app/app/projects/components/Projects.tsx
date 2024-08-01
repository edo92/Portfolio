import { Heading } from '@client/components/Typography';
import { projects } from '@client/app/content/projects';
import { divideIntoChunks } from '@client/util/divideChunks';
import { Project } from '@client/app/components/Project';

export const Projects = () => {
   const projectList = divideIntoChunks(projects, 3);

   return (
      <section className="px-26 my-9 flex w-full grow items-center justify-center px-20 md:px-0">
         <div className="flex w-full flex-col items-start justify-center gap-9 sm:w-3/4 md:w-11/12 lg:w-3/4 xl:w-4/6">
            <div className="flex w-full flex-col items-start">
               <Heading variant="h3" size="2xl">
                  Latest Projects
               </Heading>
            </div>

            <div className="flex w-full flex-col items-center justify-center gap-20">
               {projectList.map((chunk, index) => (
                  <div key={index} className="flex flex-row gap-20 max-md:flex-col md:gap-9">
                     {chunk.map((project) => (
                        <Project key={project.name} {...project} />
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
