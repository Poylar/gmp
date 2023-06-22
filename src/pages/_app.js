import { GlobalDataProvider } from '@/context/GlobalDataContext';
import { HeaderThemeProvider } from '@/context/headerThemeContext';
import '@/styles/globals.css';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  NProgress.configure({
    easing: 'ease',
    speed: 800,

    showSpinner: true,
  });

  useEffect(() => {
    const handleStart = (url) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return (
    <GlobalDataProvider>
      <HeaderThemeProvider>
        <Component key={router.asPath} {...pageProps} />
      </HeaderThemeProvider>
    </GlobalDataProvider>
  );
}
