import { headerThemeContext } from '@/context/headerThemeContext';
import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
const Logo = () => {
  const { theme } = useContext(headerThemeContext);

  return (
    <Link className='block' href='/'>
      {theme === 'white' ? (
        <Image src={'/logo-dark.svg'} priority={true} width={255} height={52} alt='Logo'></Image>
      ) : (
        <Image src={'/logo.svg'} priority={true} width={255} height={52} alt='Logo'></Image>
      )}
    </Link>
  );
};

export default Logo;
