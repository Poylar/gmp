import { useGlobalData } from '@/context/GlobalDataContext';
import { useHeaderTheme } from '@/context/headerThemeContext';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
const Logo = ({ className }) => {
  const { currentTheme } = useHeaderTheme();
  const { globalData } = useGlobalData();
  // FIXME: logo from backend
  return (
    <Link className={clsx('block h-14', className)} href='/'>
      {currentTheme === 'white' ? (
        <Image src={`/logo-dark.svg`} className='w-full h-full block' priority={true} width={87} height={52} alt='Logo'></Image>
      ) : (
        <Image src={'/logo.svg'} className='w-full h-full block' priority={true} width={87} height={52} alt='Logo'></Image>
      )}
    </Link>
  );
};

export default Logo;
