import { useRef } from 'react';
import PlayButton from '/public/play-button.svg';

const VideoPlayer = ({ src }) => {
  const ref = useRef(null);
  return (
    <div className='flex h-full w-full rounded-3xl pb-[56.25%] relative overflow-hidden'>
      <button className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
        <PlayButton />
      </button>
      <video className='w-full h-full object-cover absolute inset-0' ref={ref} loop playsInline autoPlay muted>
        <source src={src} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
