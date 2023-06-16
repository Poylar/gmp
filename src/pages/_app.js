import { HeaderThemeProvider } from '@/context/headerThemeContext';
import VideoLazyLoad from '@/scripts/videoLazyLoad';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence initial={false} onExitComplete={() => window.scrollTo(0, 0)}>
      <HeaderThemeProvider>
        <VideoLazyLoad />
        <Component {...pageProps} />
      </HeaderThemeProvider>
    </AnimatePresence>
  );
}
