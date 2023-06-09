import clsx from 'clsx';
import { motion } from 'framer-motion';
import Arrow from '/public/arrow-link.svg';
import Corner from '/public/corner.svg';

const Features = () => {
  const data = [1, 2, 3];
  return (
    <section className='section section--lg bg-gradient-dark text-gray-50'>
      <div className='flex flex-col gap-14 md:gap-32 container'>
        {data.map((item, index) => {
          const isEven = index % 2 === 0;
          const cornerPositionTop = !isEven ? 'right-0 rotate-90' : 'left-0 rotate-270';
          const cornerPositionBottom = !isEven ? 'left-0 -rotate-90' : 'right-0 rotate-180';

          return (
            <div
              key={index}
              className={clsx('flex flex-col gap-8 items-center md:gap-16 md:flex-row', {
                'md:flex-row-reverse': isEven,
              })}
            >
              <div className='flex max-w-3xl rounded-3xl h-[500px] object-cover overflow-hidden flex-grow-[1] flex-shrink-0 relative'>
                <motion.div
                  className='absolute inset-0 w-full h-full bg-gray-950'
                  initial={{ width: '100%' }}
                  viewport={{ amount: 1, once: true }}
                  whileInView={{ width: 0 }}
                  transition={{ duration: 0.7 }}
                ></motion.div>
                <video
                  className='w-full h-full object-cover '
                  src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4'
                  loop
                  autoPlay
                  muted
                ></video>
              </div>

              <div className='flex flex-col gap-6 py-8 px-12 relative'>
                <Corner className={clsx('absolute top-0', cornerPositionTop)} />
                <Corner className={clsx('absolute bottom-0', cornerPositionBottom)} />

                <h2 className='text-3xl md:text-5xl font-medium'>We do campaigns that work well for your idea</h2>
                <p className='text-xl md:text-lg'>
                  Our documentary campaigns feature leading figures, organizations, and leaders in open and candid discussions about transformative
                  strategies and mindsets, addressing complex trends.
                </p>
                <a href='' className='text-gradient text-lg mt-8 group flex items-center gap-4 font-medium'>
                  <span>All campaigns</span>
                  <Arrow className='transition-transform group-hover:translate-x-1' />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
