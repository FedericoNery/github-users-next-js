import { FavButton } from '@/components/pages/home/FavButton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { TypographyH1 } from '@/components/ui/typography/h1';
import { TypographyMuted } from '@/components/ui/typography/muted';
import { useGlobalState } from '@/context/UserContext';
import { useUsersDetail } from '@/hooks/useUsersDetail';
import {
  Building,
  Link as LinkIcon,
  Mail,
  MapPin,
  Twitter,
  Users,
} from 'lucide-react';
import { useRouter } from 'next/router';

export default function UserDetailPage() {
  const router = useRouter();
  const { username } = router.query;
  const { starredUsers, setStarredUsers } = useGlobalState();
  const { user, loading, error } = useUsersDetail(username);

  if (loading) {
    return <div className='flex justify-center items-center'>
      <LoadingSpinner className='mr-2 animate-spin' width={48} height={48}/>
    </div>
  }

  if (error) {
    return <p>Error...</p>;
  }

  if (!user) {
    return <p>Not Found</p>;
  }

  const {
    login,
    avatar_url,
    url,
    followers,
    following,
    blog,
    twitter_username,
    email,
    bio,
    location,
    company,
    name,
  } = user;

  const toggleFavUser = (userId) => {
    if (starredUsers.includes(userId)) {
      setStarredUsers([...starredUsers.filter((id) => id !== userId)]);
    } else {
      setStarredUsers([...starredUsers, userId]);
    }
  };

  const processedCompanies = company
    ?.match(/@\w[\w-]*/g)
    ?.map((name) => name.slice(1)) ?? null;

  return (
    <div className='mt-4 flex justify-center items-center content-center flex-col'>
      <Card className='w-[700px]'>
        <CardContent className='flex items-center flex-col p-4'>
          <Avatar className='w-[300px] h-[300px] rounded-full'>
            <AvatarImage src={avatar_url} alt={`${login}Avatar`} />
            <AvatarFallback>{login.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <div className='flex justify-center items-center gap-2'>
            <TypographyH1>{name}</TypographyH1>
            <FavButton
              isStarred={starredUsers.includes(user?.id)}
              onClick={() => toggleFavUser(id)}
            />
          </div>
          <TypographyMuted>{login}</TypographyMuted>
          <div className='flex justify-center'>
            <span className='flex'>
              <Users className='pr-2 text-gray-500' />
              <b className='pr-1'>{followers}</b> followers
            </span>
            <span className='pl-2'>
              <b> - </b>
            </span>
            <span className='flex pl-2'>
              <b className='pr-1'>{following}</b> following
            </span>
          </div>
          {blog && (
            <div className='flex justify-center items-center'>
              <LinkIcon className='w-4 h-4 mr-2 text-gray-500' />
              <a href={blog} className='hover:underline'>
                {blog}
              </a>
            </div>
          )}

          {twitter_username && (
            <div className='flex justify-center items-center'>
              <Twitter className='w-4 h-4 text-gray-500 mr-1' />
              <a
                href={`https://twitter.com/${twitter_username}`}
                className='hover:underline'
              >
                @{twitter_username}
              </a>
            </div>
          )}
          {email && (
            <div className='flex justify-center items-center'>
              <Mail className='w-4 h-4 mr-1 text-gray-500' />
              {email}
            </div>
          )}
          {location && (
            <div className='flex justify-center items-center'>
              <MapPin className='w-4 h-4 mr-1 text-gray-500' /> {location}
            </div>
          )}
         {processedCompanies && <div className='flex justify-center items-center'>
            <Building className='w-4 h-4 mr-1 text-gray-500' />
             {processedCompanies.map((company, index) => (
              <a
                href={`https://github.com/${company}`}
                className='hover:underline mr-1'
              >
                @{company}
              </a>
            ))}
          </div>
         }
        </CardContent>
      </Card>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { username } = context.params;

  return {
    props: {
      username,
    },
  };
}
