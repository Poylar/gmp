import clsx from 'clsx';
import { useRef, useState } from 'react';
import PlayButton from '/public/play-button.svg';

const VideoPlayer = ({ src, className }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playVideo = () => {
    videoRef.current.play();
    setIsPlaying(true);
  };

  const openFullScreen = () => {
    const videoElement = videoRef.current;
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  };

  const handleButtonClick = () => {
    if (isPlaying) {
      videoRef.current.currentTime = 0;
    }
    playVideo();
    openFullScreen();
  };

  return (
    <div className={clsx('flex h-full w-full rounded-3xl pb-[56.25%] relative overflow-hidden', className)}>
      <button className='absolute z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2' onClick={handleButtonClick}>
        <PlayButton />
      </button>
      <video className='w-full h-full object-cover absolute inset-0' ref={videoRef} autoPlay loop playsInline muted>
        <source src={src} type='video/mp4' />
      </video>
    </div>
  );
};

export default VideoPlayer;
