import LangDropdown from '@/components/ui/LangDropdown';
import Logo from '@/components/ui/Logo';
import Nav from '@/components/ui/Nav';
import { useHeaderTheme } from '@/context/headerThemeContext';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Button from './ui/Button';

const Header = ({ nav }) => {
  const { currentTheme } = useHeaderTheme();

  return (
    <motion.header
      layout
      className={clsx(
        'absolute inset-x-0 flex w-full items-center justify-between px-14 py-8 z-20',
        currentTheme === 'dark' ? 'text-gray-200 ' : 'text-gray-700'
      )}
    >
      {JSON.stringify(currentTheme)}
      <Logo />
      <Nav nav={nav} />
      <div className='flex gap-2'>
        <LangDropdown />
        <Button variant='primary'>Contact us</Button>
      </div>
    </motion.header>
  );
};

export default Header;
