import { imageUrlWrapper } from '@/utils/imageUrlWrapper';
import Image from 'next/image';

const Contacts = ({ data }) => {
  return (
    <section className='section section--md bg-gray-900 bg-dotted text-white'>
      <div className='container'>
        <h2 className='text-3xl md:text-6xl font-medium mb-8 md:mb-16 text-center'>{data.title}</h2>

        <div className='grid md:grid-cols-2 gap-4 max-w-4xl mx-auto'>
          {data.items.map((item, index) => {
            return (
              <div key={index} className='flex flex-col  w-full pb-[90%] rounded-3xl overflow-hidden relative'>
                <Image
                  width={400}
                  height={400}
                  alt=''
                  src={imageUrlWrapper(item.image.url)}
                  className='absolute inset-0 w-full  h-full object-cover'
                />
                <div className='flex flex-col justify-between h-full w-full absolute p-6 md:p-8 z-10'>
                  <h3 className='text-3xl font-medium'>{item.title}</h3>
                  <div className='flex flex-col gap-1 items-start text-xl'>
                    <a className='link-hover' href={`mailto:${item.email}`}>
                      {item.email}
                    </a>
                    <a className='link-hover' href={`tel:${item.phone}`}>
                      {item.phone}
                    </a>
                    <address dangerouslySetInnerHTML={{ __html: item.address }} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contacts;
