import LangDropdown from '@/components/ui/LangDropdown';
import Logo from '@/components/ui/Logo';
import Nav from '@/components/ui/Nav';
import { useGlobalData } from '@/context/GlobalDataContext';
import { useHeaderTheme } from '@/context/headerThemeContext';
import clsx from 'clsx';
import { motion, useScroll } from 'framer-motion';
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

  const { scrollY } = useScroll();

  const [sticky, setSticky] = useState(false);

  function update() {
    if (scrollY?.current > 500) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  }

  useEffect(() => {
    update();
    return scrollY.onChange(() => update());
  });

  const variants = {
    sticky: {
      background: 'rgba(0,0,0,.8)',
      backdropFilter: 'blur(4px)',
      padding: '24px 40px',
      top: '24px',
      borderRadius: '32px',
    },
    normal: { background: 'none' },
  };

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
        variants={variants}
        animate={sticky ? 'sticky' : 'normal'}
        className={clsx(
          'fixed inset-x-0 gap-6 w-full flex md:grid md:grid-cols-[max-content_max-content_1fr] lg:grid-cols-[1fr_max-content_1fr] items-center justify-between px-4 lg:px-14 py-8 z-20',
          currentTheme === 'dark' ? 'text-gray-200 ' : 'text-gray-700',
          sticky && 'container '
        )}
      >
        <Logo className='justify-self-start flex-none' />
        <Nav />
        <div className='flex gap-1 md:gap-2 justify-self-end'>
          <div className='flex-none max-md:hidden'>
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
