import { createContext, useContext, useEffect, useState } from 'react';

const headerThemeContext = createContext('dark'); // default theme there

export const HeaderThemeProvider = ({ children }) => {
  const { currentTheme } = useHeaderTheme();
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    setTheme(currentTheme);
  }, [currentTheme]);

  return <headerThemeContext.Provider value={theme}>{children}</headerThemeContext.Provider>;
};

export const useHeaderTheme = () => {
  const themeContextData = useContext(headerThemeContext);
  const [localTheme, setLocalTheme] = useState(themeContextData);

  return {
    currentTheme: localTheme,
    changeTheme: (newTheme) => setLocalTheme(newTheme),
  };
};
