import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import { motion, stagger } from 'framer-motion';
import Link from 'next/link';

const Cta = ({ data }) => {
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
        <div className='flex flex-col items-center gap-8 md:gap-12'>
          <div className='flex flex-col items-center gap-4 md:gap-6'>
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
              {data.title}
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
              {data.subtitle}
            </motion.p>
          </div>
          <div className='flex'>
            {data.videos.map((item, index) => (
              <motion.div
                variants={variants}
                key={index}
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
                className='flex w-20 md:w-32 h-20 md:h-32 rounded-full overflow-hidden flex-1 -mr-3 last:mr-0 border-4 border-white'
              >
                <video className='w-full h-full object-cover' autoPlay muted loop>
                  <source src={imageUrlWrapper(item.url)} />
                </video>
              </motion.div>
            ))}
          </div>
          <Link className='py-5 w-full md:w-auto text-center text-lg px-8 btn btn--primary' href='/contacts#form'>
            {data.button.caption}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Cta;
