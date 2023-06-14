import VideoLazyLoad from '@/scripts/videoLazyLoad';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <VideoLazyLoad />
      <Component {...pageProps} />
    </>
  );
}
