import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Arrow from '/public/arrow-link.svg';
import Corner from '/public/corner.svg';

const Features = ({ data }) => {
  return (
    <section className='section section--lg bg-gradient-dark text-gray-50 py'>
      <div className='flex flex-col  gap-14 md:gap-32 container'>
        {data.items.map((item, index) => {
          const isEven = index % 2 === 0;
          const cornerPositionTop = !isEven ? 'right-0 rotate-90' : 'left-0 rotate-270';
          const cornerPositionBottom = !isEven ? 'left-0 -rotate-90' : 'right-0 rotate-180';

          return (
            <motion.div
              key={index}
              className={clsx('flex flex-col gap-8 xl:items-center md:gap-16 xl:flex-row', {
                'xl:flex-row-reverse': isEven,
              })}
            >
              <div className='flex max-w-3xl rounded-3xl aspect-16/9 object-cover overflow-hidden lg:flex-grow-[1] flex-shrink-0 relative'>
                <motion.div
                  className='absolute inset-0 w-full h-full bg-gray-950'
                  initial={{ x: 0 }}
                  viewport={{ once: true }}
                  whileInView={{ x: index % 2 === 0 ? '100%' : '-100%' }}
                  transition={{ duration: 0.7 }}
                ></motion.div>

                <video className='w-full h-full object-cover ' loop playsInline autoPlay muted>
                  <source src={item.video ? imageUrlWrapper(item.video.url) : ''} />
                </video>
              </div>

              <div className='flex flex-col gap-4 md:gap-6 lg:py-8 lg:px-12 relative'>
                <Corner className={clsx('hidden lg:block absolute top-0', cornerPositionTop)} />
                <Corner className={clsx('hidden lg:block absolute bottom-0', cornerPositionBottom)} />

                <motion.h2
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className='text-3xl md:text-5xl font-medium'
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{
                    once: true,
                  }}
                  className='text-xl md:text-lg'
                >
                  {item.description}
                </motion.p>
                <Link href={`${item.button?.href}`} className='text-gradient text-lg mt-8 group flex items-center gap-4 font-medium'>
                  <span>{item.button.caption}</span>
                  <Arrow className='text-blue-500 transition-transform group-hover:translate-x-1' />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
