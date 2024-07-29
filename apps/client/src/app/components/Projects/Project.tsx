import { Icons } from '@client/components/Icons';
import { Typography } from '@client/components/Typography';

interface ProjectProps {
   name: string;
   description: string;
   stack: string[];
   link: string;
}

export const Project: React.FC<ProjectProps> = ({ name, description, stack, link }) => {
   return (
      <div className="ml-5 flex w-2/6 flex-col max-md:ml-0 max-md:w-full">
         <div className="flex grow flex-col gap-3 text-sm font-light">
            <img
               loading="lazy"
               srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/f2e97ab2969ac6aac36b09f470d6fece325a7c2323fcdc929d0eb7e72f629629?apiKey=e3660d42c58b4c259ebe598b9e99176a&width=2000 2000w"
               className="aspect-[1.45] w-full rounded"
            />

            <Typography variant="h3">{name}</Typography>
            <Typography variant="p">{description}</Typography>
            <Typography variant="p" className="text-primary-300 dark:text-primary-100 py-3 leading-6">
               {stack.join(' - ')}
            </Typography>

            <div className="from-gradient-20 to-gradient-21 w-full rounded bg-gradient-to-tr p-0.5">
               <div className="bg-light-100 flex flex-row items-center justify-center gap-3 self-start px-10 py-3">
                  <Icons.Link className="text-dark-300/85 dark:text-light-400 size-[16px] shrink-0" />
                  <Typography variant="p">Live demo</Typography>
               </div>
            </div>
         </div>
      </div>
   );
};