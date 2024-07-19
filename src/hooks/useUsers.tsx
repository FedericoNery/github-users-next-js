import { useEffect, useState } from 'react';

export function useUsers(initialUsers = [], searchUsernameValue = '') {
  const [users, setUsers] = useState(initialUsers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchUsers() {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }

  async function fetchSearchUsers(term = '') {
    try {
      const response = await fetch(`/api/users/search?term=${term}`);
      const data = await response.json();
      const { total_count, incomplete_results, items } = data;
      setUsers(items);
      setLoading(false);
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (searchUsernameValue != '') {
      fetchSearchUsers(searchUsernameValue);
    } else {
      fetchUsers();
    }
  }, [searchUsernameValue]);

  return { users, loading, error };
}
