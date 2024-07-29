'use client';

import { createContext, useContext, useState } from 'react';

const Context = createContext<{
   darkMode: boolean;
   toggleMode: () => void;
}>({
   darkMode: true,
   toggleMode: () => void 0,
});

export const DarkModeProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
   const [darkMode, setMode] = useState(true);

   const toggleMode = () => {
      setMode(!darkMode);
      if (darkMode) document.documentElement.classList.add('dark');
      else document.documentElement.classList.remove('dark');
   };

   return (
      <Context.Provider value={{ darkMode, toggleMode }}>
         <>{children}</>
      </Context.Provider>
   );
};

export const useDarkMode = () => {
   return useContext(Context);
};
