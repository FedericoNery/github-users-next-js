import { Twitter as TwitterIcon } from 'lucide-react';

export const Twitter = ({ twitter_username }) => {
  return (
    twitter_username && (
      <div className='flex justify-center items-center'>
        <TwitterIcon className='w-4 h-4 text-gray-500 mr-1' />
        <a
          href={`https://twitter.com/${twitter_username}`}
          className='hover:underline'
        >
          @{twitter_username}
        </a>
      </div>
    )
  );
};
