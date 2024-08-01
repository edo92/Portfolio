import Image from 'next/image';

interface ProjectProps extends React.PropsWithChildren {
   imageUrl: string;
}

export const Project: React.FC<ProjectProps> = ({ children, imageUrl }) => (
   <div className="flex w-2/6 flex-col max-md:w-full">
      <div className="flex grow flex-col gap-3 text-sm font-light">
         <div className="border-light-400 dark:border-light-200/70 rounded border p-[3px] shadow-sm">
            <Image
               src={imageUrl}
               className="aspect-[1.45] w-full rounded"
               alt="Project image"
               width={2000}
               height={1380}
            />
         </div>
         {children}
      </div>
   </div>
);
