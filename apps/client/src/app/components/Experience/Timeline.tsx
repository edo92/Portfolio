import { Provider } from './provider';
import { ExperainceView, ExperianceTimeline } from './Select';

export const Timeline: React.FC = () => (
   <Provider>
      <div className="flex flex-row justify-center gap-5">
         <div className="flex w-4/12 flex-col">
            <ExperianceTimeline />
         </div>

         <div className="flex w-8/12 flex-col gap-2">
            <ExperainceView />
         </div>
      </div>
   </Provider>
);
