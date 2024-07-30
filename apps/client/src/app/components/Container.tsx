export const Container: React.FC<React.PropsWithChildren> = ({ children }) => (
   <div className="relative flex h-screen w-screen">
      <div className="flex w-full flex-col items-center p-3">
         <>{children}</>
      </div>
   </div>
);
