const Manifest = ({ data }) => {
  return (
    <section className='section section--md'>
      <div className='container'>
        <div className='flex justify-between gap-8'>
          <h2 className='text-3xl md:text-6xl font-medium max-w-xl'>{data.title}</h2>
          <div className='flex flex-col gap-24 max-w-xl'>
            <div className='prose text-lg md:text-xl' dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Manifest;
