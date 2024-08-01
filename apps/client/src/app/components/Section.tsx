export const Section: React.FC<React.PropsWithChildren> = ({ children }) => (
   <div className="dark:bg-dark-400 bg-light-100 flex w-full flex-col gap-16 px-0 pt-16 md:gap-28 md:px-14 md:pt-32">
      {children}
   </div>
);
