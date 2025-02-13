import { useHomeState } from "@/context/HomeContext";
import { useEffect } from "react";
import { useFetch } from "./useFetch";

export function useUsers(initialUsers) {
	const { searchUsernameValue } = useHomeState();
	const endpoint = `/api/users/search?term=${searchUsernameValue}`;
	const isNotEmptyUsername = searchUsernameValue.trim() !== "";

	const { data, loading: loadingFetch, error: errorFetch, setEndpoint } = useFetch(
		endpoint,
		initialUsers,
		isNotEmptyUsername,
	);

	useEffect(() => {
		setEndpoint(`/api/users/search?term=${searchUsernameValue}`);
	}, [searchUsernameValue]);

	const processedData = isNotEmptyUsername ? data?.items : initialUsers;
	const loading = isNotEmptyUsername ? loadingFetch : false
	const error = isNotEmptyUsername ? errorFetch : false
	return { data: processedData, loading, error };
}
