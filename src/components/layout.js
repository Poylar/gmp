import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { useGlobalData } from '@/context/GlobalDataContext';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
const Layout = ({ children, globalProps, pageContext }) => {
  const { changeGlobalData } = useGlobalData();

  useEffect(() => {
    const onTab = (e) => {
      if (e.key === 'Tab' || e.keyCode === 9) {
        const el = document.activeElement;
        const rect = el.getBoundingClientRect();

        const windowWidth = window.innerWidth || document.documentElement.clientWidth;
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= windowHeight && rect.right <= windowWidth;

        if (!isInViewport) {
          window.scrollTo(0, el.offsetTop);
        }
      }
    };

    document.addEventListener('keyup', onTab);

    return () => document.removeEventListener('keyup', onTab);
  }, []);

  useEffect(() => {
    const listenHashChange = (e) => {
      const { newURL } = e;
      const [_, id] = newURL.match(/#(.*)$/);

      if (!id) {
        // scroll to top
        window.scrollTo(0, 0);
      }

      const el = document.getElementById(id);
      if (el) {
        // scroll to element
        window.scrollTo(0, el.offsetTop);
      }
    };
    window.addEventListener('hashchange', listenHashChange);

    return () => window.removeEventListener('hashchange', listenHashChange);
  }, []);

  useEffect(() => {
    changeGlobalData(globalProps);
  });
  return (
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
  );
};

export default Layout;
