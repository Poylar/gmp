import { HeaderThemeProvider } from '@/context/headerThemeContext';
import VideoLazyLoad from '@/scripts/videoLazyLoad';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <HeaderThemeProvider>
      <VideoLazyLoad />
      <Component {...pageProps} />
    </HeaderThemeProvider>
  );
}
