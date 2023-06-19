import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LangDropdown from './LangDropdown';
import MenuButton from '/public/menu-btn-close.svg';

import { useGlobalData } from '@/context/GlobalDataContext';

const MobileNav = ({ state, handleChange }) => {
  const router = useRouter();
  const { globalData } = useGlobalData();
  return (
    <div className={clsx('flex-col bg-white fixed inset-0 z-50 max-h-screen overflow-auto', state ? 'flex' : 'hidden')}>
      <header
        className={clsx(
          ' gap-6 w-full flex md:grid md:grid-cols-[max-content_max-content_1fr] lg:grid-cols-[1fr_max-content_1fr] items-center justify-between px-4 lg:px-14 py-8 z-20'
        )}
      >
        <Link className={clsx('block h-14 justify-self-start')} href='/'>
          <Image src={'/logo-dark.svg'} className='w-full h-full block' priority={true} width={87} height={52} alt='Logo'></Image>
        </Link>

        <div className='flex gap-1 md:gap-2 justify-self-end'>
          <div className='flex-none'>
            <LangDropdown />
          </div>
          <Link className='btn btn--primary max-md:py-2 max-md:px-3  flex-none' href='/'>
            Contact us
          </Link>
          <button className='flex items-center justify-center w-10 h-10' onClick={handleChange}>
            <MenuButton />
          </button>
        </div>
      </header>
      <div className='flex flex-col px-4 pb-6 h-full'>
        <nav className='flex flex-col'>
          <ul className='flex flex-col'>
            {globalData?.menu?.map((item) => {
              return (
                <li
                  className={clsx('block py-5 text-2xl border-b border-gray-200 font-medium', router.asPath == `/${item.uri}` ? 'text-blue-600' : '')}
                  key={item.pagetitle}
                >
                  <Link href={item.uri}>{item.pagetitle}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <Link className='btn btn--primary mt-auto text-center py-5 text-lg' href='/contacts'>
          Contact us
        </Link>
      </div>
    </div>
  );
};
export default MobileNav;
