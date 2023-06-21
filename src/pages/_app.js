import { GlobalDataProvider } from '@/context/GlobalDataContext';
import { HeaderThemeProvider } from '@/context/headerThemeContext';
import '@/styles/globals.css';
import { Player } from '@lottiefiles/react-lottie-player';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => (url !== router.asPath ? setLoading(true) : setLoading(false));
    const handleComplete = (url) =>
      setTimeout(() => {
        setLoading(false);
      }, 1000);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);
  return loading ? (
    <div className='fixed inset-0 z-[100] bg-blue-600 loader-animation flex items-center justify-center'>
      <Player className='w-full h-full' autoplay src={'lottie/loader.json'}></Player>
    </div>
  ) : null;
}

export default function App({ Component, pageProps }) {
  return (
    <GlobalDataProvider>
      <HeaderThemeProvider>
        <Loading />
        <Component {...pageProps} />
      </HeaderThemeProvider>
    </GlobalDataProvider>
  );
}
