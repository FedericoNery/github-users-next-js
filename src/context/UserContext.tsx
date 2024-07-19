import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [searchUsernameValue, setSearchUsernameValue] = useState("");
  const [starredUsers, setStarredUsers] = useState([]);

  return (
    <GlobalContext.Provider value={{ searchUsernameValue, setSearchUsernameValue, starredUsers, setStarredUsers }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
    return useContext(GlobalContext)
}
