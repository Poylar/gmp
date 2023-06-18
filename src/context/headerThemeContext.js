import { createContext, useContext, useState } from 'react';

const headerThemeContext = createContext(['dark', (n) => {}]); // default theme there

export const HeaderThemeProvider = ({ children }) => {
  const theme = useContext(headerThemeContext);

  const [themeState, setThemeState] = useState(theme);

  return <headerThemeContext.Provider value={[themeState, setThemeState]}>{children}</headerThemeContext.Provider>;
};

export const useHeaderTheme = () => {
  const [currentTheme, setCurrentTheme] = useContext(headerThemeContext);

  const changeTheme = (newTheme) => {
    setCurrentTheme(newTheme);
  };

  return {
    currentTheme: currentTheme,
    changeTheme: changeTheme,
  };
};
