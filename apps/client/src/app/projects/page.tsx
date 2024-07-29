import { Typography } from '@client/components/Typography';
import Image from 'next/image';

export default function ProjectsPage() {
   return (
      <div className="dark:bg-dark-300 bg-light-100 size-full px-5">
         <div className="flex w-full gap-5 px-16 py-14 max-md:max-w-full max-md:flex-col max-md:px-5">
            <div className="flex w-6/12 flex-col max-md:w-full">
               <div className="flex grow flex-col whitespace-nowrap py-14 text-8xl font-light leading-tight max-md:mt-10 max-md:text-4xl">
                  <Typography variant="h1" className="text-gradient-100 text-8xl font-bold max-md:text-4xl">
                     Projects
                  </Typography>
                  <Typography variant="h1" className="text-gradient-100 text-8xl font-bold max-md:text-4xl">
                     Showcase
                  </Typography>
                  <div className="from-gradient-17 to-gradient-21 flex w-24 cursor-pointer flex-col justify-start whitespace-nowrap rounded bg-gradient-to-tr p-0.5 text-center text-lg font-light">
                     <div className="bg-light-100 dark:bg-dark-300 flex flex-row gap-2.5 rounded px-3 py-2">
                        <Typography variant="p" className="flex items-center justify-center">
                           Checkout
                        </Typography>
                     </div>
                  </div>
               </div>
            </div>

            <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
               <div className="flex grow flex-col justify-center max-md:mt-10 max-md:max-w-full">
                  <Image
                     src="https://cdn.builder.io/api/v1/image/assets/TEMP/00011267a3048e5d53a5b57943ee77c241070c73648d526ba0eeeea15c6ff0ce?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=2000"
                     className="w-full"
                     alt="Project showcase"
                     width={500}
                     height={500}
                  />
               </div>
            </div>
         </div>
      </div>
   );
}
