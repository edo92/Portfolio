import Link from 'next/link';
import { projects } from '@client/app/content/projects';
import { divideIntoChunks } from '@client/util/divideChunks';

import { Icons } from '@client/components/Icons';
import { Button } from '@client/components/Button';
import { Project } from '@client/app/components/Project';
import { Heading, Paragraph } from '@client/components/Typography';

export const Projects: React.FC = () => {
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
               {projectList.map((list, index) => (
                  <div key={index} className="flex flex-row gap-20 max-md:flex-col md:gap-9">
                     {list.map(({ name, description, stack, link, imageUrl }) => (
                        <Project key={name} imageUrl={imageUrl}>
                           <div className="ml-1 flex w-full flex-col gap-3">
                              <Heading variant="h3" size="xl">
                                 {name}
                              </Heading>

                              <div className="h-36 w-full">
                                 <Paragraph variant="p" size="base" font="light">
                                    {description}
                                 </Paragraph>
                              </div>

                              <div className="h-14 w-full">
                                 <Paragraph
                                    variant="p"
                                    className="text-primary-200 dark:text-primary-100 py-2"
                                 >
                                    {stack.join(' - ')}
                                 </Paragraph>
                              </div>

                              <div className="bg-gradient-100 flex w-full cursor-pointer flex-col justify-center whitespace-nowrap rounded-md p-0.5 text-center text-lg font-light">
                                 <Button variant="ghost">
                                    <Link
                                       href={link}
                                       target="_blank"
                                       className="bg-light-100 dark:bg-dark-300 flex w-full flex-row items-center justify-center gap-3 rounded py-3"
                                    >
                                       <Icons.Link className="dark:text-light-400 text-dark-100/85 aspect-square w-[16px] shrink-0" />
                                       <Paragraph variant="p">Live demo</Paragraph>
                                    </Link>
                                 </Button>
                              </div>
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
