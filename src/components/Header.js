import LangDropdown from '@/components/ui/LangDropdown';
import Logo from '@/components/ui/Logo';
import Nav from '@/components/ui/Nav';
import Button from './ui/Button';

const Header = ({ nav }) => {
  return (
    <header className='text-white absolute inset-x-0 flex w-full items-center justify-between px-14 py-8 text-gray-200 z-20'>
      <Logo />
      <Nav nav={nav} />
      <div className='flex gap-2'>
        <LangDropdown />
        <Button variant='primary'>Contact us</Button>
      </div>
    </header>
  );
};

export default Header;
