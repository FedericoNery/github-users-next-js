import { useGlobalState } from '@/context/UserContext';
import { useUsers } from '@/hooks/useUsers';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function useHome(initialUsers) {
  const router = useRouter();
  const { searchUsernameValue, starredUsers, setSearchUsernameValue } =
    useGlobalState();
  const { users, loading, error } = useUsers(initialUsers, searchUsernameValue);

  useEffect(() => {
    const handleRouteChange = () => {
      setSearchUsernameValue('');
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, setSearchUsernameValue]);

  return { users, loading, error, starredUsers };
}
