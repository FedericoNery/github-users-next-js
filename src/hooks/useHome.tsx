import { useGlobalState } from "@/context/UserContext";
import { useUsers } from "@/hooks/useUsers";
import { useEffect } from "react";
import { useRouter } from "next/router";

export function useHome(initialUsers) {
	const { data, loading, error } = useUsers(initialUsers);

	/* useEffect(() => {
    const handleRouteChange = () => {
      setSearchUsernameValue('');
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, [router, setSearchUsernameValue]); */

	return { users: data, loading, error /* starredUsers */ };
}
