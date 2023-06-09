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

  return (
    <motion.section
      ref={ref}
      viewport={{
        margin: '0px 0px 100%',
        amount: 0,
      }}
      className='section pt-[--header-height] flex items-center relative rounded-bl-3xl md:rounded-bl-[60px] rounded-br-3xl md:rounded-br-[60px] min-h-[500px] md:min-h-screen overflow-hidden bg-overlay  text-white'
    >
      <motion.video
        poster={imageUrlWrapper(data.background.url)}
        className='blackout absolute inset-0 -z-10 h-full  w-full object-cover'
        autoPlay
        muted
        loop
      >
        <source src={imageUrlWrapper(data.video?.url)} type='video/mp4' />
      </motion.video>
      <div className='relative flex top-0 h-full w-full font-[350] items-center justify-center text-white'>
        <motion.div className='flex max-w-4xl container mx-auto  flex-col items-center gap-6' style={{ y, opacity }}>
          <motion.h1
            className='text-center text-4xl font-medium lg:text-7xl'
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              delay: 1,
            }}
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
                duration: 0.5,
                delay: 1.2,
              }}
              className='text-center text-lg f md:text-xl'
            >
              {data.description}
            </motion.p>
          )}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroMain;
