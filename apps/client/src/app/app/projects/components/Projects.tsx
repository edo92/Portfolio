import { Icons } from '@client/components/Icons';
import { Project } from '@client/app/components/Project';
import { Heading, Paragraph } from '@client/components/Typography';

import { projects } from '@client/app/content/projects';
import { divideIntoChunks } from '@client/util/divideChunks';

export const Projects = () => {
   const projectList = divideIntoChunks(projects, 3);

   return (
      <section className="px-26 my-9 flex w-full grow items-center justify-center px-20 md:px-0">
         <div className="flex w-full flex-col items-start justify-center gap-9 sm:w-3/4 md:w-11/12 lg:w-3/4 xl:w-4/6">
            <Heading id="projects" variant="h3" size="2xl">
               Projects
            </Heading>

            <div className="flex w-full flex-col items-center justify-center gap-20">
               {projectList.map((list, index) => (
                  <div key={index} className="flex flex-row gap-20 max-md:flex-col md:gap-9">
                     {list.map(({ name, description, stack, imageUrl }) => (
                        <Project key={name} imageUrl={imageUrl}>
                           <div className="ml-1 flex w-full flex-col gap-3">
                              <div className="flex w-full flex-row justify-between gap-3">
                                 <Heading variant="h3" size="xl">
                                    {name}
                                 </Heading>

                                 <div className="flex flex-row gap-3 px-3">
                                    <Icons.GitHub className="dark:text-light-400 text-dark-300 my-auto aspect-[1.05] size-5 shrink-0" />
                                    <Icons.Link className="dark:text-light-400 text-dark-300 my-auto aspect-[1.05] size-5 shrink-0" />
                                 </div>
                              </div>

                              <Paragraph
                                 variant="p"
                                 size="base"
                                 font="light"
                                 className="mt-2 leading-6 max-md:max-w-full"
                              >
                                 {description}
                              </Paragraph>

                              <Paragraph
                                 font="light"
                                 variant="small"
                                 className="text-primary-200 dark:text-primary-100 py-2 max-md:max-w-full"
                              >
                                 {stack.join(' - ')}
                              </Paragraph>
                           </div>
                        </Project>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
};
