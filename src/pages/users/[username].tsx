import DetailsContainer from '@/components/pages/details/DetailsContainer';

import RenderData from '@/components/renderData';

import { useUsersDetail } from '@/hooks/useUsersDetail';

import { useRouter } from 'next/router';

export default function UserDetailPage() {
  const router = useRouter();
  const { username } = router.query;
  const { user, loading, error } = useUsersDetail(username);

  return <RenderData
    loading={loading}
    error={error}
    DataComponent={DetailsContainer}
    data={user}
  />
}

export async function getServerSideProps(context) {
  const { username } = context.params;

  return {
    props: {
      username,
    },
  };
}
