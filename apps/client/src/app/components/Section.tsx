export const Section: React.FC<React.PropsWithChildren> = ({ children }) => (
   <div className="dark:bg-dark-400 bg-light-100 flex w-full flex-col gap-32 pt-32">{children}</div>
);
