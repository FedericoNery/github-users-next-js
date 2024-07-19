import { Users } from 'lucide-react';

export const FollowersAndFollowing = ({ followers, following }) => {
  return (
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
  );
};
