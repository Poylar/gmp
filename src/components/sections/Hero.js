import clsx from 'clsx';

import { headerThemeContext } from '@/context/headerThemeContext';
import { useContext, useEffect } from 'react';

const Hero = ({ data }) => {
  const { theme, setTheme } = useContext(headerThemeContext);
  useEffect(() => {
    setTheme(data.theme);
  }, []);
  return (
    <section
      className={clsx(
        data.theme === 'white' ? 'bg-white text-gray-950' : 'bg-gradient-dark text-white',
        'rounded-br-[60px] rounded-bl-[60px] overflow-hidden'
      )}
    >
      <div className='flex flex-col items-center gap-6 pt-60 pb-44 max-w-3xl mx-auto'>
        <h1 className='text-4xl md:text-7xl text-center font-medium'>{data.title}</h1>
        {data.description && <div className='text-gray-700 text-lg md:text-xl text-center' dangerouslySetInnerHTML={{ __html: data.description }} />}
      </div>
    </section>
  );
};

export default Hero;
