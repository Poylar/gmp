import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import VideoPlayer from '../ui/VideoPlayer';

const Manifest = ({ data }) => {
  return (
    <section className='section section--md'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between gap-8'>
          <h2 className='text-3xl md:text-6xl font-medium max-w-xl'>{data.title}</h2>
          <div className='flex flex-col gap-6 md:gap-24 max-w-xl'>
            <div className='prose text-lg md:text-xl' dangerouslySetInnerHTML={{ __html: data.content }} />
            <div className='max-md:order-first max-w-sm'>
              <VideoPlayer src={imageUrlWrapper(data.video.url)} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifest;
