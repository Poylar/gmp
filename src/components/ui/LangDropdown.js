import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

const LangDropdown = () => {
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
    <div className='relative flex flex-col ' ref={dropdownRef}>
      <button className='flex items-center gap-3 rounded-2xl border border-gray-500 px-5 py-3' onClick={toggleDropdown}>
        <Image src={'/' + locale + '.svg'} width={24} height={24} alt='' className='overflow-hidden rounded-full' />
        <span className='capitalize'>{locale}</span>
        <Image src={'/arrow-down.svg'} width={20} height={20} alt='' className={'transition-transform' + (dropDown ? ' rotate-180' : '')} />
      </button>

      <div
        className={clsx(
          'absolute top-full z-10 mt-1 flex w-full flex-col overflow-hidden rounded-2xl bg-white text-gray-950 transition-all duration-300',
          dropDown ? 'visible -translate-y-0 opacity-100' : 'invisible -translate-y-6 opacity-0'
        )}
      >
        {locales.map((locale) => {
          return (
            <Link
              locale={locale}
              href={locale}
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
