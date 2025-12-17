import React, { createContext, useContext, useState } from 'react';
import { useColorScheme } from 'react-native';
import { App_Max_Scale, App_Min_Scale } from '../constent/constent';

const AppContext = createContext({
  textScale: 1,
  isDarkMode: false,
  setAppTextScale: (scale: number) => { },
});

export const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  // default scale (1 = normal)
  const [textScale, setTextScale] = useState(1);
  const isDarkMode = useColorScheme() === 'dark';

  const setAppTextScale = (scale: number) => {
    if (scale > App_Max_Scale || scale < App_Min_Scale) return;
    setTextScale(scale);
  };

  return (
    <AppContext.Provider value={{ textScale, setAppTextScale, isDarkMode }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
export const useAppContext = () => {
  return useContext(AppContext);
};
