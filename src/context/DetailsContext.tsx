import { createContext, useState, useContext } from "react";

const DetailsContext = createContext();

export const DetailsStateProvider = ({ children }) => {
	const [starredUsers, setStarredUsers] = useState([]);

	const addStarToUser = (userId) => {
		console.log("AGREGO")
		setStarredUsers([...starredUsers, userId]);
	};

	const removeStarToUser = (userId) => {
		console.log("QUITO")
		setStarredUsers([...starredUsers.filter((id) => id !== userId)]);
	};

    const isStarredUserBy = (id) => {
        return starredUsers.includes(id)
    }

	return (
		<DetailsContext.Provider
			value={{ starredUsers, addStarToUser, removeStarToUser, isStarredUserBy }}
		>
			{children}
		</DetailsContext.Provider>
	);
};

export const useStarredUsersState = () => {
	return useContext(DetailsContext);
};
