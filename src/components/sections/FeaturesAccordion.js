import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import { useState } from 'react';

import Accordion from '@/components/ui/Accordion';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import Image from 'next/image';

const FeaturesAccordion = ({ data }) => {
  const [clicked, setClicked] = useState('0');
  const [imageIndex, setImageIndex] = useState(0);
  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setImageIndex(index);
    setClicked(index);
  };

  return (
    <section className='section section--md bg-gray-900 text-white'>
      <div className='container'>
        <h2 className='text-3xl md:text-6xl text-gradient-dark md:text-center mb-8 md:mb-24 font-medium max-w-2xl md:mx-auto'>{data.title}</h2>
        <div className='grid md:grid-cols-2 gap-8 md:gap-0'>
          <div className='flex flex-col gap-2 md:pr-24'>
            <Accordion
              rootClassNames={clsx('border-b border-gray-700')}
              contentClassNames={clsx('md:text-lg text-gray-200 pb-8')}
              data={data.items}
            />
          </div>
          <div className='relative'>
            {data.items.map(
              (item, index) =>
                imageIndex === index && (
                  <motion.div
                    className='rounded-3xl overflow-hidden'
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Image width={800} height={640} src={imageUrlWrapper(item.image.url)} alt={item.image.alt} />
                  </motion.div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
