export const ExperianceTimeline = () => (
   <div className="flex flex-col justify-center px-16 py-6 max-md:max-w-full max-md:px-5">
      <div className="mx-9 p-3 max-md:mr-2.5 max-md:max-w-full">
         <div className="flex gap-5 max-md:flex-col">
            <div className="flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
               <div className="flex grow flex-col max-md:mt-3 max-md:max-w-full">
                  <div className="text-lg text-zinc-50 max-md:max-w-full">EXPERIENCE</div>
                  <div className="mt-5 flex flex-col items-start border-l-2 border-zinc-100 p-4 text-base font-light text-stone-300 max-md:max-w-full max-md:pr-5">
                     {[
                        'Full Stack Developer',
                        'Full Stack Developer',
                        'Full Stack Developer',
                        'Full Stack Developer',
                     ].map((role, index) => (
                        <div key={index} className="mt-2 rounded bg-stone-900 px-3 py-2 first:mt-0">
                           {role}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
            <div className="ml-5 flex w-6/12 flex-col max-md:ml-0 max-md:w-full">
               <div className="flex grow flex-col p-2.5 max-md:mt-3 max-md:max-w-full">
                  <div className="flex justify-between gap-5 p-2 max-md:max-w-full max-md:flex-wrap">
                     <div className="text-2xl text-zinc-50">Full Stack Developer</div>
                     <div className="my-auto text-base text-stone-300">Jun 2021 - Present</div>
                  </div>
                  <div className="py-2 text-base text-blue-400 max-md:max-w-full">Los Angeles, CA</div>
                  <div className="flex flex-col py-3 pl-3 text-base font-light text-stone-300 max-md:max-w-full">
                     {[
                        'Fixing UI issues and integrating backend APIs with Redux Saga.',
                        'Developing screens and UI components for the web application using React and Tailwind.',
                        'Developing screens and UI components for the web application using React and Tailwind.',
                        'Developing screens and UI components for the web application using React and Tailwind.',
                     ].map((task, index) => (
                        <div key={index} className="mt-2 first:mt-0 max-md:max-w-full">
                           - {task}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
);
