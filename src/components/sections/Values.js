import { motion, useAnimationFrame, useMotionValue, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import { useRef } from 'react';

const data = [
  ['Fitness', 'Clarity', 'Creativity', 'Health', 'Networking', 'Fitness', 'Clarity', 'Creativity', 'Health', 'Networking'],
  ['Communication', 'Stress reduction', 'Productivity', 'Health', 'Networking', 'Fitness', 'Clarity', 'Creativity', 'Health', 'Networking'],
  ['Fitness', 'Clarity', 'Creativity', 'Health', 'Networking', 'Fitness', 'Clarity', 'Creativity', 'Health', 'Networking'],
  ['Fitness', 'Clarity', 'Creativity', 'Health', 'Networking', 'Fitness', 'Clarity', 'Creativity', 'Health', 'Networking'],
];

const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

const Values = ({ children }) => {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 300,
  });
  const skewVelocity = useSpring(scrollVelocity, {
    stiffness: 100,
    damping: 30,
  });

  const skewVelocityFactor = useTransform(skewVelocity, [-1000, 1000], [-30, 30]);

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * -5 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }
    if (velocityFactor.get() !== 0) {
      moveBy += directionFactor.current * moveBy * velocityFactor.get();
      baseX.set(baseX.get() + moveBy);
    }
  });

  return (
    <section className='overflow-hidden section section--md'>
      <div className='parallax'>
        {data.map((item, index) => {
          return (
            <motion.div className='scroller' style={{ x }}>
              <motion.span className='text-7xl'>
                {item.map((item, index) => {
                  return (
                    <>
                      <span className='text-3xl md:text-7xl odd:text-blue-600 font-medium whitespace-nowrap mr-4'>{item}</span>
                      <span className='text-3xl md:text-7xl odd:text-blue-600 font-medium whitespace-nowrap mr-4'>{item}</span>
                      <span className='text-3xl md:text-7xl odd:text-blue-600 font-medium whitespace-nowrap mr-4'>{item}</span>
                      <span className='text-3xl md:text-7xl odd:text-blue-600 font-medium whitespace-nowrap mr-4'>{item}</span>
                    </>
                  );
                })}
              </motion.span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Values;
