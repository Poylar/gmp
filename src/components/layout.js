import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';

const Layout = ({ children, nav, pageContext }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className='flex min-h-screen flex-col justify-between text-gray-950'
    >
      <div className='flex-1 '>
        <Header nav={nav} />
        <div>{children}</div>
        <Footer />
      </div>
    </motion.div>
  );
};

export default Layout;
