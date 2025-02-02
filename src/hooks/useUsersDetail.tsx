import { useFetch } from './useFetch';

export function useUsersDetail(username: string) {
  const {data: user, loading, error } = useFetch(`/api/users/${username}`)
  return { user, loading, error };
}
