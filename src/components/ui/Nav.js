import { useGlobalData } from '@/context/GlobalDataContext';
import clsx from 'clsx';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav = ({ nav }) => {
  const router = useRouter();
  const { globalData } = useGlobalData();

  return (
    <nav className='hidden md:block'>
      <ul className='flex flex-wrap items-center gap-10'>
        {globalData?.menu?.map((item) => {
          return (
            <li className={clsx('block', router.asPath == `/${item.uri}` ? 'font-medium' : '')} key={item.pagetitle}>
              <Link className='link-hover' href={item.uri === 'index' ? '/' : '/' + item.uri}>
                {item.pagetitle}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
