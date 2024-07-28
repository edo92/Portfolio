import { createContext, useContext, useState } from 'react';

const Context = createContext<{
  darkMode: boolean;
  toggleMode: () => void;
}>({
  darkMode: true,
  toggleMode: () => void 0,
});

export const DarkModeProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [darkMode, setMode] = useState(true);

  const toggleMode = () => {
    setMode(!darkMode);
  };

  return (
    <Context.Provider value={{ darkMode, toggleMode }}>
      <div className="relative size-full">
        <>{children}</>
      </div>
    </Context.Provider>
  );
};

export const useDarkMode = () => {
  return useContext(Context);
};
