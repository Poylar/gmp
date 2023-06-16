import { SplitText } from '@/scripts/splitText';
import { Player } from '@lottiefiles/react-lottie-player';
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from 'framer-motion';

import Link from 'next/link';
import { useRef } from 'react';

const About = ({ data }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center start'],
  });
  const spring = useSpring(scrollYProgress, { damping: 100, stiffness: 1000 });
  const scale = useTransform(spring, [0, 1], [0.5, 4]);
  return (
    <section className='section section--lg overflow-hidden' ref={ref}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center py-48 relative max-w-5xl mx-auto font-medium'
      >
        <motion.div className='absolute inset-x-0 top-0 w-full h-full -z-10 ' style={{ scale }}>
          <Player className='absolute w-full h-full inset-0' autoplay loop src='/lottie/data.json'></Player>
        </motion.div>

        <AnimatePresence>
          <motion.div
            className='inline-flex flex-wrap justify-center'
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-label={data.title}
          >
            <SplitText
              initial={{ y: '100%' }}
              whileInView='visible'
              viewport={{ once: true }}
              className='text-2xl md:text-6xl text-center text-shadow'
              variants={{
                visible: (i) => ({
                  y: 0,
                  transition: {
                    delay: i * 0.1,
                  },
                }),
              }}
            >
              {data.title}
            </SplitText>
          </motion.div>
        </AnimatePresence>
        <Link href={`${data.button.href}`} className='text-gradient text-lg mt-8 group flex items-center gap-4 font-medium'>
          <span>{data.button.caption}</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
