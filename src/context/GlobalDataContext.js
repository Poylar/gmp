import { createContext, useContext, useState } from 'react';

const GlobalDataContext = createContext({});

export const GlobalDataProvider = ({ children }) => {
  const data = useContext(GlobalDataContext);

  const [globalData, setGlobalData] = useState(data);

  return <GlobalDataContext.Provider value={[globalData, setGlobalData]}>{children}</GlobalDataContext.Provider>;
};

export const useGlobalData = () => {
  const [globalData, setGlobalData] = useContext(GlobalDataContext);

  const changeGlobalData = (newGlobalData) => {
    setGlobalData(newGlobalData);
  };

  return {
    globalData: globalData,
    changeGlobalData: changeGlobalData,
  };
};
