import Image from 'next/image';
import { useRouter } from 'next/router';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useGlobalState } from '@/context/UserContext';
import useDebounce from '@/hooks/useDebounce';
import { useEffect } from 'react';

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;
  const isHome = pathname === '/';
  const { searchUsernameValue, setSearchUsernameValue } = useGlobalState()

  const debouncedSearchUsernameValue = useDebounce(searchUsernameValue, 500); 

  useEffect(() => {
    setSearchUsernameValue(debouncedSearchUsernameValue);
  }, [debouncedSearchUsernameValue]);

  return (
    <>
      <header className='flex items-center pt-4 pb-4 rounded-none border'>
        <Image
          src='/github.svg'
          alt='Github Logo'
          width={32}
          height={32}
          className='ml-6'
        />
        {isHome && (
          <div className='flex items-center w-full ml-3 mr-3 border rounded-md focus-visible:border-black'>
            <div className='pt-2 pl-2 pb-2'>
              <Search />
            </div>
            <Input
              type='search'
              placeholder='Username'
              id='inputUsername'
              onChange={(e) => setSearchUsernameValue(e.target.value)}
              className='border-none pl-2 focus-visible:ring-0 focus-visible:ring-offset-0'
            />
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
