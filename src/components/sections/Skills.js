import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Link from 'next/link';

import React from 'react';

import Accordion from '@/components/ui/Accordion';
import VideoCircle from '@/components/ui/VideoCircle';
import clsx from 'clsx';

const Skills = ({ data }) => {
  const splitedTitle = data.title.split(' ');

  return (
    <section className='section section--md bg-gray-100'>
      <div className='container'>
        <div className='flex flex-col mb-6 md:mb-8 items-center gap-6'>
          <VideoCircle data={data} className={'md:hidden'} />
          <h2 className='text-3xl md:text-6xl inline-flex justify-center gap-x-3 flex-wrap font-medium max-w-3xl text-center'>
            {splitedTitle.map((word, index) =>
              index == 2 ? (
                <React.Fragment key={index}>
                  <VideoCircle className={'hidden md:inline-flex'} data={data} />
                  <span>{word + ' '}</span>
                </React.Fragment>
              ) : (
                <span key={index}>{word + ' '}</span>
              )
            )}
          </h2>
        </div>
        <Tabs selectedTabClassName='is-selected'>
          <TabList className={'flex gap-4 items-center justify-center mb-8 md:mb-16'}>
            {data.tabs.map((tab, index) => {
              return (
                <Tab
                  className={
                    'py-4 px-8 border text-lg font-medium border-gray-400 transition-colors cursor-pointer [&.is-selected]:bg-white [&.is-selected]:border-blue-600 rounded-2xl'
                  }
                  key={index}
                >
                  {tab.title}
                </Tab>
              );
            })}
          </TabList>
          {data.tabs.map((tab, tabIndex) => {
            return (
              <React.Fragment key={tabIndex}>
                <TabPanel key={tabIndex}>
                  <div className='md:grid grid-cols-2  lg:grid-cols-3 md:gap-6 gap-4 flex flex-col'>
                    <Accordion
                      wrapperClassNames={clsx('md:hidden flex flex-col gap-4')}
                      activeClassNames={clsx('bg-white')}
                      rootClassNames={clsx('border border-gray-400 transition-colors rounded-2xl last:hidden')}
                      buttonClassNames={clsx('p-6')}
                      contentClassNames={clsx('text-gray-700 pt-0 p-6')}
                      onToggle={() => handleToggle(index)}
                      data={tab.items}
                    />
                    {tab.items.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={clsx(
                            'last-not-hidden  md:flex flex-col justify-between p-8 border border-gray-400 rounded-3xl',
                            index === tab.items.length - 1 ? 'bg-blue-500 text-white bg-card-gradient' : null
                          )}
                        >
                          <h3 className='text-3xl mb-12 font-medium'>{item.title}</h3>
                          <div
                            className={clsx(
                              'prose mt-auto mb-5 text-base relative',
                              index === tab.items.length - 1 ? 'bg-blue-500 text-gray-200' : 'text-gray-700'
                            )}
                            dangerouslySetInnerHTML={{ __html: item.description }}
                          />
                          {item.button ? (
                            <Link className='btn btn--secondary self-start' href={item.button.href}>
                              {item.button.caption}
                            </Link>
                          ) : null}
                        </div>
                      );
                    })}
                  </div>
                </TabPanel>
              </React.Fragment>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
