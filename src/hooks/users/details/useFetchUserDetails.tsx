import { useCallback } from "react";
import { useFetch } from "../../useFetch";
import { getUserByUsername } from "@/services/usersService";

export function useFetchUserDetails(username: string) {
	const method = useCallback(async () => await getUserByUsername(username), [username]);
	const { data: user, loading, error } = useFetch(method, null, true);
	return { user, loading, error };
}
