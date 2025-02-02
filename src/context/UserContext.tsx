import { createContext, useState, useContext } from 'react';

const GlobalContext = createContext();

export const GlobalStateProvider = ({ children }) => {
  const [searchUsernameValue, setSearchUsernameValue] = useState("");
  const [homeEndpoint, setHomeEndpoint] = useState("/api/users");
  const [starredUsers, setStarredUsers] = useState([]);

  const onChangeSearchUsernameValue = (username) => {
    setSearchUsernameValue(username)
    const endpoint =
		username !== ""
			? `/api/users/search?term=${username}`
			: "/api/users";
    setHomeEndpoint(endpoint)
  }

  return (
    <GlobalContext.Provider value={{ searchUsernameValue, setSearchUsernameValue, starredUsers, setStarredUsers, homeEndpoint, onChangeSearchUsernameValue }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
    return useContext(GlobalContext)
}
