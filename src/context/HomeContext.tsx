import { createContext, useState, useContext } from 'react';

const HomeContext = createContext();

export const HomeStateProvider = ({ children }) => {
  const [searchUsernameValue, setSearchUsernameValue] = useState("");

  const onChangeSearchUsernameValue = (username) => {
    setSearchUsernameValue(username)
  }

  return (
    <HomeContext.Provider value={{ searchUsernameValue, onChangeSearchUsernameValue }}>
      {children}
    </HomeContext.Provider>
  );
};

export const useHomeState = () => {
    return useContext(HomeContext)
}
