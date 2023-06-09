import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link className="block" href="/">
      <Image src={'/logo.svg'} width={255} height={52} alt="Logo"></Image>
    </Link>
  );
};

export default Logo;
