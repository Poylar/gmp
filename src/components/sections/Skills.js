import VideoCircle from '../ui/VideoCircle';

const Skills = ({ data }) => {
  const splitedTitle = data.title.split(' ');
  return (
    <section className='section section--md'>
      <div className='container'>
        <div className='flex flex-col items-center gap-6'>
          <VideoCircle data={data} className={'md:hidden'} />
          <h2 className='text-3xl md:text-6xl inline-flex justify-center gap-x-3 flex-wrap font-medium max-w-3xl text-center'>
            {splitedTitle.map((word, index) =>
              index == 2 ? <VideoCircle className={'hidden md:inline-flex'} data={data} /> : <span>{word + ' '}</span>
            )}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Skills;
