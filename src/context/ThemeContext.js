import React, {createContext, useEffect} from 'react';
import tw, {useAppColorScheme, useDeviceContext} from 'twrnc';

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  useDeviceContext(tw, {withDeviceColorScheme: false});
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  useEffect(() => {
    setColorScheme(colorScheme);
  }, [colorScheme]);

  return (
    <ThemeContext.Provider value={{tw, colorScheme, toggleColorScheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
