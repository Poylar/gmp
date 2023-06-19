import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useGlobalData } from '@/context/GlobalDataContext';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { ScrollerMotion } from 'scroller-motion';

const Layout = ({ children, globalProps, pageContext }) => {
  const { changeGlobalData } = useGlobalData();
  useEffect(() => {
    changeGlobalData(globalProps);
  });
  return (
    <ScrollerMotion>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          duration: 1,
        }}
        className='text-gray-950'
      >
        <div className='flex-1 '>
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </motion.div>
    </ScrollerMotion>
  );
};

export default Layout;
