import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

import { useHeaderTheme } from '@/context/headerThemeContext';
import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import { useEffect, useRef } from 'react';

const HeroMain = ({ data }) => {
  const { currentTheme, changeTheme } = useHeaderTheme();

  useEffect(() => {
    changeTheme('dark');
  }, []);

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'center start'],
  });
  const spring = useSpring(scrollYProgress, { damping: 100, stiffness: 1000 });
  const y = useTransform(spring, [0, 1], [0, -200]);
  const opacity = useTransform(spring, [0, 1], [1, 0]);

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
      ref={ref}
      viewport={{
        margin: '0px 0px 100%',
        amount: 0,
      }}
      className='section relative min-h-screen overflow-hidden  text-white'
    >
      <motion.video className='blackout absolute inset-0 -z-10 h-full  w-full object-cover' autoPlay muted loop>
        <source src={imageUrlWrapper(data.video.url)} type='video/mp4' />
      </motion.video>
      <div className='absolute flex top-0 h-full w-full font-[350] items-center justify-center text-white'>
        <div className='flex max-w-3xl flex-col items-center gap-6'>
          <motion.h1
            className='text-center text-4xl font-medium lg:text-7xl'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            style={{ y, opacity }}
          >
            {data.title}
          </motion.h1>
          {data.description && (
            <motion.p
              initial={{
                y: 100,
                opacity: 0,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 1,
              }}
              className='text-center text-lg f md:text-xl'
            >
              {data.description}
            </motion.p>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroMain;
