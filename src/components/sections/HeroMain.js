import Button from '../ui/Button';
import Play from '/public/play.svg';

import { motion } from 'framer-motion';

const HeroMain = () => {
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
        <source src='https://amkai.hamburg/assets/userfiles/videos/video.mp4' type='video/mp4' />
      </video>
      <div className='absolute flex h-full w-full items-center justify-center text-white'>
        <div className='flex max-w-3xl flex-col items-center gap-6'>
          <h1 className='text-center text-4xl font-medium lg:text-7xl'>Transforming visions into reality</h1>
          <Button variant='primary' className='mt-6 px-10 flex items-center gap-6 rounded-3xl'>
            Find out more
            <Play />
          </Button>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroMain;
