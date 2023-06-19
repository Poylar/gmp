import { useHeaderTheme } from '@/context/headerThemeContext';
import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import clsx from 'clsx';
import Image from 'next/image';

import Link from 'next/link';
import { useEffect } from 'react';

const Services = ({ data }) => {
  const { currentTheme, changeTheme } = useHeaderTheme();

  useEffect(() => {
    changeTheme('dark');
  }, []);
  return (
    <section className={clsx('bg-gradient-dark text-white', 'rounded-br-[60px] rounded-bl-[60px] overflow-hidden')}>
      <div className='flex flex-col items-center gap-12 pt-60 pb-44 max-w-3xl mx-auto'>
        <div className='flex w-56 h-56 items-center relative justify-center rounded-full overflow-hidden'>
          <video className='w-full h-full object-cover' src={imageUrlWrapper(data.video.url)} autoPlay muted loop></video>
          <Image
            className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            src={imageUrlWrapper(data.icon.url)}
            alt=''
            width={data.icon.width}
            height={data.icon.height}
          />
        </div>
        <div className='flex flex-col gap-6'>
          <h1 className='text-4xl md:text-6xl text-center font-medium'>{data.title}</h1>

          <div
            className={clsx('text-lg md:text-xl text-center', 'text-gray-200')}
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
          />
        </div>

        <Link href='/' className='btn btn--primary py-4 px-8'>
          {data.button.caption}
        </Link>
      </div>
    </section>
  );
};

export default Services;
