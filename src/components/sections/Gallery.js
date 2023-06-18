import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import clsx from 'clsx';
import Image from 'next/image';
import VideoPlayer from '../ui/VideoPlayer';

const Gallery = ({ data }) => {
  let counter = 0;
  return (
    <section className={clsx('section section--md', data.theme !== 'white' ? 'bg-gray-900 text-white' : '')}>
      <div className='container'>
        <div className='grid md:grid-cols-12 gap-5'>
          {data.items.map((item, index) => {
            if (item.logo !== null) {
              return (
                <div
                  key={index}
                  className={clsx(
                    'col-span-12 md:col-span-5 py-7 md:p-12 rounded-3xl',
                    data.theme !== 'white' ? ' md:bg-[#161E2F] md:border border-gray-700' : ' md:bg-white md:border border-gray-200'
                  )}
                >
                  <Image className='mb-8 md:mb-56' src={imageUrlWrapper(item.logo.url)} width={200} height={44} alt='' />
                  <div className='flex flex-col gap-6'>
                    <h3 className='text-3xl md:text-5xl font-medium'>{item.title}</h3>
                    <div className='text-lg md:text-xl' dangerouslySetInnerHTML={{ __html: item.description }} />
                  </div>
                </div>
              );
            } else if (item.video !== null) {
              return (
                <div key={index} className='max-md:-order-1 col-span-12 md:col-span-7'>
                  <VideoPlayer src={item.video ? item.video.url : ''} />
                </div>
              );
            } else if (item.image !== null) {
              counter++;
              return (
                <div
                  key={index}
                  className={clsx(
                    counter > 3 && counter < 6 ? 'md:col-span-6 max-md:order-last' : 'md:col-span-4',
                    'rounded-3xl col-span-12 overflow-hidden',
                    counter > 5 ? 'md:col-span-4' : ''
                  )}
                >
                  <Image className='h-full' src={imageUrlWrapper(item.image.url)} width={item.image.width} height={item.image.height} alt='' />
                </div>
              );
            } else if (item.description !== null && !item.logo !== null) {
              return (
                <div
                  key={index}
                  className={clsx(
                    'col-span-12 md:col-span-4 max-md:order-5  py-8 md:p-12 rounded-3xl',
                    data.theme !== 'white' ? 'md:bg-[#161E2F] text-white md:border border-gray-700' : ' md:bg-white md:border border-gray-200'
                  )}
                >
                  <div className={clsx('prose', data.theme !== 'white' ? 'text-white' : '')} dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
