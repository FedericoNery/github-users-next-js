import { getUsersBySearch } from "@/services/usersService";
import { useHomeState } from "@/context/HomeContext";
import { useEffect, useState } from "react";

function useUsers(initialUsers){
	const [users, setUsers] = useState(initialUsers);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);

	return { users, loading, error, setUsers, setLoading, setError };
}

export function useFetchUsers(initialUsers) {
	const { searchUsernameValue } = useHomeState();
	const { users, loading, error, setUsers, setLoading, setError } = useUsers(initialUsers);

	const fetchUsers = async (username) => {
		try{
			setLoading(true)
			const usersByUsername = await getUsersBySearch(username)
			setUsers(usersByUsername?.items)
			setLoading(false)
		}
		catch(error){
			setLoading(false)
			setError(true)
		}
	}

	useEffect(() => {
		console.log(searchUsernameValue, "searchUsernameValue");
		if(searchUsernameValue.trim() !== "") {
			fetchUsers(searchUsernameValue)
		}else{
			setUsers(initialUsers)
		}
	}, [searchUsernameValue]);

	return { users, loading, error };
}
