import clsx from 'clsx';

const VideoCircle = ({ data, className }) => {
  return (
    <div className={clsx('flex w-20 h-20 rounded-full  overflow-hidden relative p-1', className)}>
      <div className='absolute inset-0 w-full h-full border-2 border-dashed animate-spin-slow border-blue-600 rounded-full'></div>
      <video src='/video/vid.mp4' muted autoPlay playsInline loop className='rounded-full w-full h-full object-cover'></video>
    </div>
  );
};

export default VideoCircle;
