import { motion } from 'framer-motion';

import { headerThemeContext } from '@/context/headerThemeContext';
import { useContext, useEffect } from 'react';

const HeroMain = ({ data }) => {
  const { theme, setTheme } = useContext(headerThemeContext);
  useEffect(() => {
    setTheme('dark');
  }, []);

  const heroVariants = {
    initial: {
      borderBottomLeftRadius: '0px',
      borderBottomRightRadius: '0px',
    },
    animate: {
      borderBottomLeftRadius: '60px',
      borderBottomRightRadius: '60px',
    },
  };
  return (
    <motion.section
      variants={heroVariants}
      initial='initial'
      whileInView='animate'
      viewport={{
        margin: '0px 0px -100%',
        amount: 0,
      }}
      className='section relative min-h-screen overflow-hidden  text-white'
    >
      <video className='blackout absolute inset-0 -z-10 h-full  w-full object-cover' autoPlay muted loop>
        <source src={data.video.url} type='video/mp4' />
      </video>
      <div className='absolute flex top-0 h-full w-full font-[350] items-center justify-center text-white'>
        <div className='flex max-w-3xl flex-col items-center gap-6'>
          <h1 className='text-center text-4xl font-medium lg:text-7xl'>{data.title}</h1>
          {data.description && <p className='text-center text-lg f md:text-xl'>{data.description}</p>}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroMain;
