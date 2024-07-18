import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [searchUsernameValue, setSearchUsernameValue] = useState("");
  const [starredUsers, setStarredUsers] = useState([]);

  return (
    <UserContext.Provider value={{ searchUsernameValue, setSearchUsernameValue, starredUsers, setStarredUsers }}>
      {children}
    </UserContext.Provider>
  );
};



export const useGlobalState = () => {
    return useContext(UserContext)
}

export const useUser = () => {
  return useContext(UserContext);
};