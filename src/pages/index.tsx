import { CardUser } from '@/components/pages/home/CardUser';
import { SkeletonCardUser } from '@/components/pages/home/SkeletonCardUser';
import { useGlobalState } from '@/context/UserContext';
import { useUsers } from '@/hooks/useUsers';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

interface UserInterface {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export default function Home({ initialUsers }) {
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

  if (loading) {
    return (
      <div className='flex justify-center flex-col items-center'>
        <div className='flex items-center flex-col mb-3 gap-4 mt-4 w-full'>
          <SkeletonCardUser quantity={8} />;
        </div>
      </div>
    );
  }

  if (error) {
    return <p>Error</p>;
  }

  if (!users) {
    return <></>;
  }

  return (
    <div className='flex justify-center flex-col items-center'>
      <div className='flex items-center flex-col w-full gap-4 mt-4'>
        {users.map((user, index) => (
          <CardUser
            key={`Paragraph${index}`}
            user={user}
            isStarred={starredUsers.includes(user?.id)}
          />
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/users/');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const initialUsers = await response.json();

    return { props: { initialUsers } };
  } catch (error) {
    return { props: { initialUsers: [] } };
  }
}
