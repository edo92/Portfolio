import Link from 'next/link';
import { Container } from '@client/app/components/Container';
import { Paragraph, Heading } from '@client/components/Typography';
import { OrbitParticals } from '@client/app/components/OrbitParticals';

export default function ProjectsPage() {
   return (
      <Container>
         <div className="flex size-full flex-col items-center justify-center">
            <div className="absolute flex size-full justify-center overflow-hidden">
               <OrbitParticals className="w-full" />
            </div>

            <div className="relative flex size-full flex-col">
               <div className="flex size-full justify-center px-40 py-5">
                  <div className="relative bottom-32 flex w-full flex-col items-center justify-center">
                     <div className="mb-5 flex flex-col gap-2 text-center">
                        <Heading
                           variant="h1"
                           size="4xl"
                           font="black"
                           className="text-gradient-200 leading-tight"
                        >
                           Projects Showcase
                        </Heading>

                        <Heading
                           variant="h1"
                           size="sm"
                           font="regular"
                           className="text-gradient-200 leading-normal"
                        >
                           Live demo and source code
                        </Heading>
                     </div>

                     <div className="flex flex-wrap justify-center p-1">
                        <button className="flex items-center justify-center rounded-full bg-[#019863] px-5">
                           <Link href="/app/3d" className="px-4 py-2">
                              <Paragraph
                                 variant="span"
                                 font="bold"
                                 className="dark:text-dark-300 text-light-100 truncate"
                              >
                                 Check Out
                              </Paragraph>
                           </Link>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </Container>
   );
}
