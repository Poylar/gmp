import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Opengraph from '@/components/meta/Opengraph';
import Head from 'next/head';

const Layout = ({ children, nav, pageContext }) => {
  return (
    <div className='flex min-h-screen flex-col justify-between text-gray-950'>
      <Head>
        <Opengraph />
      </Head>
      <div className='flex-1 '>
        <Header nav={nav} />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
