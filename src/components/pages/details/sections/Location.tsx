import { MapPin } from 'lucide-react';

export const Location = ({ location }) => {
  return (
    location && (
      <div className='flex justify-center items-center'>
        <MapPin className='w-4 h-4 mr-1 text-gray-500' /> {location}
      </div>
    )
  );
};
