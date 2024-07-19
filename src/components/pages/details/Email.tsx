import { Mail } from 'lucide-react';

export const Email = ({ email }) => {
  return (
    email && (
      <div className='flex justify-center items-center'>
        <Mail className='w-4 h-4 mr-1 text-gray-500' />
        {email}
      </div>
    )
  );
};
