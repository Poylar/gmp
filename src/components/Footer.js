import { useGlobalData } from '@/context/GlobalDataContext';
import Link from 'next/link';
import LangDropdown from './ui/LangDropdown';
import ArrowLink from '/public/arrow-link.svg';
import instagram from '/public/socials/instagram.svg';
import linkedin from '/public/socials/linkedin.svg';
import twitter from '/public/socials/twitter.svg';
import youtube from '/public/socials/youtube.svg';

const Footer = () => {
  const { globalData } = useGlobalData();

  const SocialsIcons = {
    instagram: instagram,
    linkedin: linkedin,
    twitter: twitter,
    youtube: youtube,
  };

  const socials = globalData?.socials;

  return (
    <footer className='pt-20 pb-12 overflow-hidden bg-gray-100 footer'>
      <div className='container relative flex flex-col z-10'>
        <div className='inline-flex gap-3 md:gap-10'>
          <div className='flex flex-1 max-w-4xl w-full'>
            <h3 className='text-4xl md:text-5xl lg:text-8xl font-medium leading-none'>Global Media Production</h3>
          </div>
          <Link
            href='/contacts'
            className='w-11 h-11 lg:w-32 lg:h-32 flex rounded-full hover:bg-blue-500 transition-colors bg-blue-600 flex-none items-center justify-center group'
            aria-label='Go to contacts page'
            title='Go to contacts page'
          >
            <ArrowLink className='text-white group-hover:-rotate-45  transition-transform' viewBox='0 0 16 14' />
          </Link>
        </div>
        <div className='mb-10 md:mb-32 grid md:grid-cols-[max-content_1fr] gap-10 md:gap-32 mt-10 md:mt-16'>
          <div className='flex flex-col-reverse md:flex-col gap-6'>
            <div className='flex flex-col gap-5'>
              <h5 className='text-gray-500'>Structure</h5>
              <nav className='mb-5'>
                <ul className='grid grid-cols-2 gap-y-2 gap-x-16'>
                  {globalData?.menu?.map((item, index) => {
                    return (
                      <li className='text-gray-950' key={index}>
                        <Link className='link-hover' href={item.uri}>
                          {item.pagetitle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
            <LangDropdown />
          </div>
          <div className='grid md:grid-cols-2  xl:grid-cols-4 gap-10'>
            {globalData?.contacts?.map((item, index) => {
              return (
                <div className='flex flex-col gap-5' key={index}>
                  <h5 className='text-gray-500'>{item.title}</h5>
                  <nav>
                    <ul className='grid  gap-y-2 gap-x-16'>
                      <li className='text-gray-950'>
                        <a className='link-hover' href={`mailto:${item.email}`}>
                          {item.email}
                        </a>
                      </li>
                      <li className='text-gray-950'>
                        <a className='link-hover' href={`tel:${item.phone.replace(/\s/g, '')}`}>
                          {item.phone}
                        </a>
                      </li>
                      <li className='text-gray-950'>
                        <address dangerouslySetInnerHTML={{ __html: item.address }} />
                      </li>
                    </ul>
                  </nav>
                </div>
              );
            })}
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-between'>
          <div className='flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-6'>
            <span className='text-gray-500'>
              {globalData?.copyright} © {new Date(Date.now()).getFullYear()}
            </span>
            {/* <div className='flex items-center gap-3'>
              {socials?.map((item, index) => {
                const Icon = SocialsIcons[item.name];
                return (
                  <a href={item.link} key={index} aria-label={item.name} title={item.name} target='_blank' className='group flex items-center'>
                    <Icon className='transition-colors text-gray-500 group-hover:text-gray-950' />
                  </a>
                );
              })}
            </div> */}
          </div>
          <nav>
            <ul className='flex gap-5'>
              {globalData?.footer?.map((item, index) => {
                return (
                  <li key={index}>
                    <Link className='link-hover' href={`/${item.uri}`}>
                      {item.pagetitle}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
