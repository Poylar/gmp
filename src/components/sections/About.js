import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';

import Link from 'next/link';

const About = ({ data }) => {
  return (
    <section className='section section--lg'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className='flex flex-col items-center py-48 relative max-w-5xl mx-auto font-medium'
      >
        <Player className='absolute inset-x-0 top-1/2 w-full h-full -z-10 -translate-y-1/2' autoplay loop src='/lottie/data.json'></Player>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='text-2xl md:text-6xl text-center text-shadow'
        >
          {data.title}
        </motion.p>
        <Link href={`${data.button.href}`} className='text-gradient text-lg mt-8 group flex items-center gap-4 font-medium'>
          <span>{data.button.caption}</span>
        </Link>
      </motion.div>
    </section>
  );
};

export default About;
