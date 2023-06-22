import { GlobalDataProvider } from '@/context/GlobalDataContext';
import { HeaderThemeProvider } from '@/context/headerThemeContext';
import '@/styles/globals.css';
import { AnimatePresence, motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Loading({ onComplete }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const minDisplayTime = 500; // 1 секунда

  const variants = {
    initial: { x: '-100%' },
    animate: { x: '0%' },
    exit: { x: '100%' },
  };

  useEffect(() => {
    let timer;

    const handleStart = (url) => (url !== router.asPath ? setLoading(true) : setLoading(false));
    const handleComplete = (url) => {
      setLoading(false);
      timer = setTimeout(() => {
        if (!loading) {
          onComplete();
        }
      }, minDisplayTime);
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
      clearTimeout(timer);
    };
  }, [router, loading, onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className='fixed inset-0 bg-blue-500 z-[100]'
          variants={variants}
          initial='initial'
          animate='animate'
          transition={{ duration: 0.5 }}
          exit='exit'
          key={router.asPath}
        />
      )}
    </AnimatePresence>
  );
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [showNextPage, setShowNextPage] = useState(false);
  const minDisplayTime = 1000; // 1 секунда

  useEffect(() => {
    if (showNextPage) {
      const timeout = setTimeout(() => {
        router.push(router.asPath); // Переход на следующую страницу
      }, minDisplayTime);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [showNextPage, router]);

  return (
    <GlobalDataProvider>
      <HeaderThemeProvider>
        <Loading onComplete={() => setShowNextPage(true)} />
        <Component {...pageProps} key={router.asPath} />
      </HeaderThemeProvider>
    </GlobalDataProvider>
  );
}
