import Accordion from '@/components/ui/Accordion';
import { useState } from 'react';

const FeaturesAccordion = ({ data }) => {
  const [clicked, setClicked] = useState('0');

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked('0');
    }
    setClicked(index);
  };
  return (
    <section className='section section--md bg-gray-900 text-white'>
      <div className='container'>
        <h2 className='text-3xl md:text-6xl text-gradient-dark md:text-center mb-8 md:mb-24 font-medium max-w-2xl md:mx-auto'>{data.title}</h2>
        <div className='grid md:grid-cols-2'>
          <div className='flex flex-col gap-2'>
            {data.items.map((item, index) => {
              return <Accordion key={index} onToggle={() => handleToggle(index)} active={clicked === index} data={item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
