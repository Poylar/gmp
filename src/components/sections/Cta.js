import { motion, stagger } from 'framer-motion';
import Button from '../ui/Button';

const Cta = () => {
  const variants = {
    initial: {
      opacity: 0,
      scale: 0.5,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: stagger(0.2),
      },
    },
  };
  return (
    <section className='section rounded-bl-[60px] rounded-br-[60px] overflow-hidden'>
      <div className='container'>
        <div className='flex flex-col items-center gap-12'>
          <div className='flex flex-col gap-6'>
            <motion.h2
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                },
              }}
              className='text-4xl md:text-6xl font-medium flex items-center gap-5 green-circle'
            >
              Let’s create
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                },
              }}
              className='text-gray-700 text-lg md:text-xl '
            >
              Unleashing the potential of your brand
            </motion.p>
          </div>
          <div className='flex'>
            {[1, 2, 3, 4].map((item, index) => (
              <motion.div
                variants={variants}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: index * 0.2,
                  },
                }}
                className='flex w-32 h-32 rounded-full overflow-hidden flex-1 -mr-3 last:mr-0 border-4 border-white'
              >
                <video className='w-full h-full object-cover' autoPlay muted loop>
                  <source src='https://amkai.hamburg/assets/userfiles/videos/video.mp4' type='video/mp4' />
                </video>
              </motion.div>
            ))}
          </div>
          <Button className='py-5 px-8'>Get in touch</Button>
        </div>
      </div>
    </section>
  );
};

export default Cta;
