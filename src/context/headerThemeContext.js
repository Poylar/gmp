import { createContext, useState } from 'react';

const headerThemeContext = createContext();

const HeaderThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark');
  return <headerThemeContext.Provider value={{ theme, setTheme }}>{children}</headerThemeContext.Provider>;
};

export { HeaderThemeProvider, headerThemeContext };
