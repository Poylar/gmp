import clsx from 'clsx';
import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import PlayButton from '/public/play-button.svg';

const VideoPlayer = ({ src, className }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const playVideo = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const handleButtonClick = () => {
    if (isPlaying) {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
      }
    }
    playVideo();
    openPopup();
  };

  return (
    <>
      {showPopup && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          layout
          className='fixed inset-0 z-[90] bg-overlay'
        >
          <div className='absolute max-w-5xl left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full'>
            <button onClick={closePopup} className='p-1 bg-white rounded-lg absolute right-4 top-4 z-10'>
              <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='white' viewBox='0 0 24 24' stroke='black'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
              </svg>
            </button>
            <video className='w-full h-full object-cover rounded-3xl block overflow-hidden' ref={videoRef} controls autoPlay loop playsInline muted>
              <source src={src} type='video/mp4' />
            </video>
          </div>
        </motion.div>
      )}
      <div className={clsx('flex h-full w-full rounded-3xl pb-[56.25%] relative overflow-hidden', className)}>
        <button className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' onClick={handleButtonClick}>
          <PlayButton />
        </button>
        <video className='w-full h-full object-cover absolute inset-0' ref={videoRef} autoPlay loop playsInline muted>
          <source src={src} type='video/mp4' />
        </video>
      </div>
    </>
  );
};

export default VideoPlayer;
