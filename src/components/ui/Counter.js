import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export default function Counter({ value, direction = 'up' }) {
  const ref = useRef(null);
  const [count, setCount] = useState(0);
  const motionValue = useMotionValue(direction === 'down' ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 100,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === 'down' ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on('change', (latest) => {
        setCount(Intl.NumberFormat('en-US').format(latest.toFixed(0)));
      }),
    [springValue]
  );

  return <span ref={ref}>{count}</span>;
}
