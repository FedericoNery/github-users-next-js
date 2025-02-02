import Image from 'next/image';
import { TypographyMuted } from './ui/typography/muted';

const Footer = () => {
  return <footer className='static bottom-0 left-0 w-full flex justify-center rounded-none border-none pt-6 pb-6'>
        <Image
          src='/github.svg'
          alt='Github Logo'
          width={24}
          height={24}
          className='pl-1 pr-1'
        />
        <TypographyMuted>&copy; 2024 GitHub, Inc.</TypographyMuted>
      </footer>
};

export default Footer;
