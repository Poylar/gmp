import clsx from 'clsx';

import { useHeaderTheme } from '@/context/headerThemeContext';
import { useRouter } from 'next/router';

import { useEffect } from 'react';

const Hero = ({ data }) => {
  const { currentTheme, changeTheme } = useHeaderTheme();
  const router = useRouter();

  useEffect(() => {
    if (data.theme !== currentTheme) {
      changeTheme(data.theme);
    }
  }, [router, currentTheme]);

  return (
    <section
      className={clsx(
        currentTheme === 'white' ? 'bg-white text-gray-950' : 'bg-gradient-dark text-white',
        'rounded-br-[60px] rounded-bl-[60px] overflow-hidden pt-[--header-height]'
      )}
    >
      <div className='flex flex-col items-center gap-6 pt-8 md:pt-28 pb-16 container md:pb-44 max-w-4xl mx-auto'>
        <h1 className='text-4xl md:text-7xl text-center font-medium'>{data.title}</h1>
        {data.description && (
          <div
            className={clsx('text-lg md:text-xl text-center', currentTheme === 'white' ? 'text-gray-700' : 'text-gray-200')}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
      </div>
    </section>
  );
};

export default Hero;
