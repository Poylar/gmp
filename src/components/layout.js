import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useGlobalData } from '@/context/GlobalDataContext';
import { useEffect } from 'react';
const Layout = ({ children, globalProps, pageContext }) => {
  const { changeGlobalData } = useGlobalData();

  useEffect(() => {
    changeGlobalData(globalProps);
  });
  return (
    <div className='flex-1'>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
