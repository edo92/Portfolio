import { Project } from '@client/app/components/Project';
import { projects } from '@client/app/content/projects';
import { Heading } from '@client/components/Typography';
import { divideIntoChunks } from '@client/util/divideChunks';

export const Projects: React.FC = () => {
   const projectList = divideIntoChunks(projects, 3);

   return (
      <div className="flex w-full grow items-center justify-center p-16">
         <div className="flex w-full flex-col items-start justify-center">
            <Heading size="4xl">Projects</Heading>

            <div className="flex w-full flex-col items-center justify-center gap-9">
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
