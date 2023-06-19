import { useScroll, useSpring, useTransform } from 'framer-motion';
import { useContext } from 'react';
import { MapContext } from 'react-simple-maps';

import { useEffect, useRef, useState } from 'react';

import { motion } from 'framer-motion';

const MotionLineComponent = ({ coordinates, stroke, strokeWidth, strokeLinecap }) => {
  const _useContext = useContext(MapContext),
    path = _useContext.path;
  const [dPath, setDPath] = useState('');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'center start'],
  });
  const spring = useSpring(scrollYProgress, { damping: 100, stiffness: 1000 });
  const pathMotion = useTransform(spring, [0, 1], [0, -200]);
  useEffect(() => {
    const lineData = {
      type: 'LineString',
      coordinates: coordinates,
    };

    setDPath(path(lineData));
  }, []);
  return (
    <motion.path
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      d={dPath}
      className={`rsm-line`}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
    />
  );
};

export default MotionLineComponent;
