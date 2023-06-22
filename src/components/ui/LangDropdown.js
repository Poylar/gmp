import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import ArrowDown from '/public/arrow-down.svg';

const LangDropdown = ({ className, self, direction, border = true }) => {
  const { locale, locales, asPath } = useRouter();
  const [dropDown, setDropDown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropDown(false);
    }
  };
  const toggleDropdown = () => {
    setDropDown(!dropDown);
  };
  return (
    <div className={clsx('relative flex flex-col', self ? self : 'self-start')} ref={dropdownRef}>
      <button
        className={clsx('flex h-full items-center gap-3 rounded-2xl  px-3 md:px-5 py-2 md:py-3', border === true ? 'border border-gray-500' : '')}
        onClick={toggleDropdown}
      >
        <Image src={'/' + locale + '.svg'} width={24} height={24} alt='' className='overflow-hidden rounded-full' />
        <span className='capitalize'>{locale}</span>
        <ArrowDown width={20} height={20} alt='' className={'transition-transform' + (dropDown ? ' rotate-180' : '')} />
      </button>

      <div
        className={clsx(
          `absolute ${className} z-10 mt-1 flex w-full flex-col overflow-hidden rounded-2xl bg-white text-gray-950 transition-all duration-300 border border-gray-200`,
          dropDown ? 'visible -translate-y-0 opacity-100' : 'invisible -translate-y-6 opacity-0',
          direction ? direction : 'top-full'
        )}
      >
        {locales.map((locale) => {
          return (
            <Link
              locale={locale}
              href={asPath}
              key={locale}
              className='flex gap-3 border-b border-gray-200  px-5 py-3 transition-colors last:border-b-0 hover:bg-gray-100'
            >
              <Image src={'/' + locale + '.svg'} width={24} height={24} alt='' className='overflow-hidden rounded-full' />
              <span className='capitalize'>{locale}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LangDropdown;
