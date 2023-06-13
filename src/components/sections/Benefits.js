import Counter from '@/components/ui/Counter';

const Benefits = ({ data }) => {
  return (
    <section className='section section--sm bg-gray-100'>
      <div className='container'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4'>
          {data.items.map((benefit, index) => {
            return (
              <div key={index} className='flex flex-col items-center'>
                <h3 className='text-gray-500'>{benefit.subtitle}</h3>
                <p className='text-4xl md:text-6xl font-medium'>
                  <Counter value={benefit.title} />
                  {benefit.title.replace(/\d+/g, '')}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
