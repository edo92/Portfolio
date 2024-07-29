'use client';

import React, { createContext, useContext, useState } from 'react';

const Context = createContext<{
   selected: string;
   handleSelect: (id: string) => void;
}>({
   selected: '0',
   handleSelect: () => void 0,
});

export const Provider: React.FC<React.PropsWithChildren> = ({ children }) => {
   const [selected, setSelected] = useState<string>('0');

   const handleSelect = (id: string) => {
      setSelected(id);
   };

   return (
      <Context.Provider
         value={{
            selected,
            handleSelect,
         }}
      >
         <>{children}</>
      </Context.Provider>
   );
};

export const useProvider = () => {
   return useContext(Context);
};
