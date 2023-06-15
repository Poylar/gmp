import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import VideoCircle from '../ui/VideoCircle';

const Skills = ({ data }) => {
  const splitedTitle = data.title.split(' ');
  return (
    <section className='section section--md bg-gray-100'>
      <div className='container'>
        <div className='flex flex-col  items-center gap-6'>
          <VideoCircle data={data} className={'md:hidden'} />
          <h2 className='text-3xl md:text-6xl inline-flex justify-center gap-x-3 flex-wrap font-medium max-w-3xl text-center'>
            {splitedTitle.map((word, index) =>
              index == 2 ? <VideoCircle className={'hidden md:inline-flex'} data={data} /> : <span>{word + ' '}</span>
            )}
          </h2>
        </div>
        <Tabs selectedTabClassName='is-selected'>
          <TabList className={'flex gap-4 items-center justify-center'}>
            {data.tabs.map((tab, index) => {
              return (
                <Tab
                  className={
                    'py-4 px-8 border text-md font-medium border-gray-400 transition-colors cursor-pointer [&.is-selected]:bg-white [&.is-selected]:border-blue-600 rounded-2xl'
                  }
                  key={index}
                >
                  {tab.title}
                </Tab>
              );
            })}
          </TabList>
          {data.tabs.map((tab, index) => {
            return (
              <TabPanel>
                {tab.items.map((item, index) => {
                  return (
                    <div className='flex flex-col' key={index}>
                      <h3 className='text-3xl'>{item.title}</h3>
                      <p className='text-gray-700'>{item.description}</p>
                    </div>
                  );
                })}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
