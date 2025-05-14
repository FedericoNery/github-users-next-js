import { useCallback } from "react";
import { useFetch } from "./useFetch";
import { getUserByUsername } from "@/api/users";

export function useUsersDetail(username: string) {
	const method = useCallback(async () => {return await getUserByUsername(username)}, [username]);
	const { data: user, loading, error } = useFetch(method, null, true);
	return { user, loading, error };
}
