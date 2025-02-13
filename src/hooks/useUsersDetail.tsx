import { useFetch } from "./useFetch";

export function useUsersDetail(username: string) {
	const endpoint = `/api/users/${username}`;
	const { data: user, loading, error } = useFetch(endpoint);
	return { user, loading, error };
}
