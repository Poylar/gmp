import Link from 'next/link';

const Nav = ({ nav }) => {
  return (
    <nav className='block'>
      <ul className='flex flex-wrap items-center gap-10'>
        {nav.map((item) => {
          return (
            <li className='block' key={item.pagetitle}>
              <Link href={item.uri}>{item.pagetitle}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
