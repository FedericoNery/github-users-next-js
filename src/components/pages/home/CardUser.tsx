import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent
} from '@/components/ui/card';
import { useGlobalState } from '@/context/UserContext';
import Link from 'next/link';
import { FavButton } from './FavButton';

export function CardUser({ user, isStarred }) {
  const { starredUsers, setStarredUsers } = useGlobalState();

  const toggleFavUser = (userId) => {
    if(starredUsers.includes(userId)){
        setStarredUsers([...starredUsers.filter((id) => id !== userId)])
    }
    else{
        setStarredUsers([...starredUsers, userId])
    }
  }

  const { login, avatar_url, url, id } = user;
  
  return (
    <Card className='
    w-11/12 md:w-[700px] lg:w-[700px] xl:w-[700px]'>
      <CardContent className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Avatar>
            <AvatarImage src={avatar_url} alt={`${login}Avatar`} />
            <AvatarFallback>{login.substring(0, 2)}</AvatarFallback>
          </Avatar>
          <Link href={`/users/${login}`} className="ml-2">{login}</Link>
        </div>
        <div className='mr-2'>
          <FavButton isStarred={isStarred} onClick={() => toggleFavUser(id)}/>
        </div>
      </CardContent>
    </Card>
  );
}
