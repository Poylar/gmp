import Header from '@/components/Header';
import Footer from './Footer';

const Layout = ({ children, nav, pageContext }) => {
  return (
    <div className='flex min-h-screen flex-col justify-between text-gray-950'>
      <div className='flex-1 '>
        <Header nav={nav} />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
