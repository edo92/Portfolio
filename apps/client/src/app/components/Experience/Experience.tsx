import { Typography } from '@client/components/Typography';
import { Timeline } from './Timeline';

export const Experience: React.FC = () => (
   <div className="flex flex-col justify-center px-16 py-6 pt-48 max-md:max-w-full max-md:px-5">
      <div className="p-3 max-md:max-w-full">
         <div className="flex w-full flex-row justify-start gap-2">
            <Typography variant="h1" className="font-bold">
               Experience
            </Typography>
         </div>
         <Timeline />
      </div>
   </div>
);
