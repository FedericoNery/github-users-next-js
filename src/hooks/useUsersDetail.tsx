import { useEffect, useState } from 'react';

export function useUsersDetail(username) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchUsers() {
    try {
      const response = await fetch(`/api/users/${username}`);
      const data = await response.json();
      setUser(data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers(username);
  }, [username]);

  return { user, loading, error };
}
