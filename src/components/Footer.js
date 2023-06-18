import Link from 'next/link';
import LangDropdown from './ui/LangDropdown';
import ArrowLink from '/public/arrow-link.svg';
import instagram from '/public/socials/instagram.svg';
import linkedin from '/public/socials/linkedin.svg';
import twitter from '/public/socials/twitter.svg';
import youtube from '/public/socials/youtube.svg';

const socials = [
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/globalmediaproduction/',
    component: instagram,
  },

  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/company/global-media-production/',
    component: linkedin,
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/GMP_Berlin',
    component: twitter,
  },
  {
    name: 'Youtube',
    link: 'https://www.youtube.com/channel/UC4QX6Z3Z2Z3Z2Z3Z2Z3Z2Z3Z',
    component: youtube,
  },
];

const Footer = ({ nav }) => {
  return (
    <footer className='pt-20 pb-12 overflow-hidden bg-gray-100 footer'>
      <div className='container relative flex flex-col z-10'>
        <div className='inline-flex gap-3 md:gap-10'>
          <div className='flex flex-1 max-w-4xl w-full'>
            <h4 className='text-4xl md:text-5xl lg:text-8xl font-medium leading-none'>Global Media Production</h4>
          </div>
          <Link
            href='/contacts'
            className='w-11 h-11 lg:w-32 lg:h-32 flex rounded-full hover:bg-blue-500 transition-colors bg-blue-600 flex-none items-center justify-center group'
          >
            <ArrowLink className='text-white group-hover:-rotate-45  transition-transform' viewBox='0 0 16 14' />
          </Link>
        </div>
        <div className='mb-10 md:mb-32 grid md:grid-cols-[max-content_1fr] gap-10 md:gap-32 mt-10 md:mt-16'>
          <div className='flex flex-col-reverse md:flex-col gap-6'>
            <div className='flex flex-col gap-5'>
              <h5 className='text-gray-700'>Structure</h5>
              <nav className='mb-5'>
                <ul className='grid grid-cols-2 gap-y-2 gap-x-16'>
                  {nav?.map((item) => {
                    return (
                      <li className='text-gray-950'>
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
          <div className='grid grid-cols-2 md:grid-cols-4 gap-10'>
            <div className='flex flex-col gap-5'>
              <h5 className='text-gray-700'>Berlin</h5>
              <nav>
                <ul className='grid  gap-y-2 gap-x-16'>
                  <li className='text-gray-950'>
                    <a className='link-hover' href='/'>
                      berlin@gmp.de
                    </a>
                  </li>
                  <li className='text-gray-950'>
                    <a className='link-hover' href='/'>
                      +49 123 4567
                    </a>
                  </li>
                  <li className='text-gray-950'>
                    <address>8880 Cali Shores, Berlin, Germany</address>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='text-gray-700'>Singapore</h5>
              <nav>
                <ul className='grid  gap-y-2 gap-x-16'>
                  <li className='text-gray-950'>
                    <Link className='link-hover' href='/'>
                      singapore@gmp.de
                    </Link>
                  </li>
                  <li className='text-gray-950'>
                    <Link className='link-hover' href='/'>
                      +65 123 4567
                    </Link>
                  </li>
                  <li className='text-gray-950'>
                    <address>4229 Stracke Park, Singapore, Singapore</address>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='text-gray-700'>London</h5>
              <nav>
                <ul className='grid  gap-y-2 gap-x-16'>
                  <li className='text-gray-950'>
                    <Link className='link-hover' href='/'>
                      london@gmp.de
                    </Link>
                  </li>
                  <li className='text-gray-950'>
                    <Link className='link-hover' href='/'>
                      +44 123 4567
                    </Link>
                  </li>
                  <li className='text-gray-950'>
                    <address>43828 Reginald Ridges, London, United Kingdom</address>
                  </li>
                </ul>
              </nav>
            </div>
            <div className='flex flex-col gap-5'>
              <h5 className='text-gray-700'>Dubai</h5>
              <nav>
                <ul className='grid  gap-y-2 gap-x-16'>
                  <li className='text-gray-950'>
                    <Link className='link-hover' href='/'>
                      dubai@gmp.de
                    </Link>
                  </li>
                  <li className='text-gray-950'>
                    <Link className='link-hover' href='/'>
                      +971 123 4567
                    </Link>
                  </li>
                  <li className='text-gray-950'>
                    <address>58244 McCullough Expressway, Dubai, UAE</address>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row gap-6 md:gap-0 justify-between'>
          <div className='flex flex-col-reverse md:flex-row md:items-center gap-8 md:gap-6'>
            <span className='text-gray-500'>GMP © 2023</span>
            <div className='flex items-center gap-3'>
              {socials.map((item, index) => {
                const Icon = item.component;
                return (
                  <a href={item.link} key={index} aria-label={item.name} title={item.name} target='_blank' className='group flex items-center'>
                    <Icon className='transition-colors text-gray-500 group-hover:text-gray-950' />
                  </a>
                );
              })}
            </div>
          </div>
          <nav>
            <ul className='flex gap-5'>
              <li>
                <Link className='link-hover' href='/'>
                  Impressum
                </Link>
              </li>
              <li>
                <Link className='link-hover' href='/'>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link className='link-hover' href='/'>
                  Cookies erstellung
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
