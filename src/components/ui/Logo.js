import { useHeaderTheme } from '@/context/headerThemeContext';
import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
  const { currentTheme } = useHeaderTheme();

  return (
    <Link className='block' href='/'>
      {currentTheme === 'white' ? (
        <Image src={'/logo-dark.svg'} priority={true} width={255} height={52} alt='Logo'></Image>
      ) : (
        <Image src={'/logo.svg'} priority={true} width={255} height={52} alt='Logo'></Image>
      )}
    </Link>
  );
};

export default Logo;
