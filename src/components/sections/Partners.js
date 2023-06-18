import Counter from '@/components/ui/Counter';
import { useHeaderTheme } from '@/context/headerThemeContext';
import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import clsx from 'clsx';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useLayoutEffect } from 'react';

const Partners = ({ data }) => {
  const { currentTheme, changeTheme } = useHeaderTheme();
  const router = useRouter();

  useLayoutEffect(() => {
    if (data.theme !== currentTheme) {
      changeTheme('dark');
    }
  }, [router, currentTheme]);
  return (
    <section
      className={clsx(
        data.theme === 'white' ? 'bg-white text-gray-950' : 'bg-gradient-dark text-white',
        'rounded-br-[60px] rounded-bl-[60px] overflow-hidden'
      )}
    >
      <div className='flex flex-col gap-10 md:gap-28 pb-16 md:pb-44 pt-36 md:pt-60'>
        <div className='flex flex-col items-center gap-4 md:gap-6 max-w-3xl mx-auto max-md:container'>
          <h1 className='text-4xl md:text-7xl text-center font-medium'>{data.title}</h1>
          {data.description && (
            <div
              className={clsx('text-lg md:text-xl text-center', data.theme === 'white' ? 'text-gray-700' : 'text-gray-200')}
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          )}
          <div className='flex flex-col mt-6 md:mt-11'>
            <div className='flex gap-8  md:gap-24'>
              {data.items.map((item, index) => {
                return (
                  <div className='flex flex-col items-center gap-4 '>
                    <h2 className='text-sm md:text-base text-gray-400'>{item.subtitle}</h2>
                    <p className='text-3xl md:text-5xl font-medium'>
                      <Counter value={item.title} />
                      {item.title.replace(/\d+/g, '')}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className='grid grid-cols-2 max-md:container md:grid-cols-4  max-w-5xl mx-auto  max-md:[&>*:nth-child(-n+6)]:logo-border-bottom md:[&>*:nth-child(-n+4)]:logo-border-bottom max-md:[&>nth-last-child(-n+2)]:logo-border-bottom  [&>*:nth-child(4n)]:border-none'>
          {data.logos.map((logo, index) => {
            return (
              <div className='flex px-14 py-8 border-r border-gray-700 max-md:even:border-none'>
                <Image src={imageUrlWrapper(logo.url)} width={154} height={60} alt='logo' />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Partners;
