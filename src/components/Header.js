import LangDropdown from '@/components/ui/LangDropdown';
import Logo from '@/components/ui/Logo';
import Nav from '@/components/ui/Nav';
import { useGlobalData } from '@/context/GlobalDataContext';
import { useHeaderTheme } from '@/context/headerThemeContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MobileNav from './ui/MobileNav';
import MenuButtonDark from '/public/menu-btn-dark.svg';
import MenuButton from '/public/menu-btn.svg';

const Header = ({ nav }) => {
  const { currentTheme } = useHeaderTheme();
  const { globalData } = useGlobalData();
  const [menu, setMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMenu(false);
  }, [router.asPath]);

  const handleChange = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      <motion.header
        layout
        className={clsx(
          'absolute inset-x-0 gap-6 w-full flex md:grid md:grid-cols-[max-content_max-content_1fr] lg:grid-cols-[1fr_max-content_1fr] items-center justify-between px-4 lg:px-14 py-8 z-20',
          currentTheme === 'dark' ? 'text-gray-200 ' : 'text-gray-700'
        )}
      >
        <Logo className='justify-self-start flex-none' />
        <Nav />
        <div className='flex gap-1 md:gap-2 justify-self-end'>
          <div className='flex-none'>
            <LangDropdown />
          </div>
          <Link className='btn btn--primary max-md:py-2 max-md:px-3  flex-none' href='/contacts#form'>
            {globalData?.header_btn}
          </Link>
          <button className='flex items-center justify-center w-10 h-10 md:hidden' onClick={handleChange}>
            {currentTheme === 'dark' ? <MenuButton /> : <MenuButtonDark />}
          </button>
        </div>
      </motion.header>
      <MobileNav state={menu} handleChange={handleChange} nav={nav} />
    </>
  );
};

export default Header;
