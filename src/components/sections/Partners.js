import Counter from '@/components/ui/Counter';
import clsx from 'clsx';

const Partners = ({ data }) => {
  return (
    <section
      className={clsx(
        data.theme === 'white' ? 'bg-white text-gray-950' : 'bg-gradient-dark text-white',
        'rounded-br-[60px] rounded-bl-[60px] overflow-hidden'
      )}
    >
      <div className='flex flex-col items-center gap-4 md:gap-6 pt-60 pb-44 max-w-3xl mx-auto'>
        <h1 className='text-4xl md:text-7xl text-center font-medium'>{data.title}</h1>
        {data.description && (
          <div
            className={clsx('text-lg md:text-xl text-center', data.theme === 'white' ? 'text-gray-700' : 'text-gray-200')}
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
        )}
        <div className='flex flex-col mt-6 md:mt-11'>
          <div className='flex gap-24'>
            {data.items.map((item, index) => {
              return (
                <div className='flex flex-col items-center gap-4 '>
                  <h2 className='text-sm md:text-base text-gray-400'>{item.subtitle}</h2>
                  <p className='text-3xl md:text-5xl font-medium'>
                    <Counter value={item.title} />
                    {item.title.replace(/\d+/g, '')}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
