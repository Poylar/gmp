import { getGlobalData, getPageData } from '@/api/api';
import Layout from '@/components/layout';
import Opengraph from '@/components/meta/Opengraph';
import { useHeaderTheme } from '@/context/headerThemeContext';
import clsx from 'clsx';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import IconError from '/public/404.svg';

const Page = ({ data, globalProps }) => {
  const { currentTheme, changeTheme } = useHeaderTheme();
  const router = useRouter();

  useEffect(() => {
    if (data.theme !== currentTheme) {
      changeTheme('dark');
    }
  }, [router, currentTheme]);
  return (
    <Layout globalProps={globalProps}>
      <Head>
        <title>{data?.seo.longtitle}</title>
        <meta name='description' content={data?.seo.description} />
        <Opengraph data={data.seo} />
      </Head>
      <section className={clsx('bg-gradient-dark text-white', 'rounded-br-[60px] rounded-bl-[60px] overflow-hidden')}>
        <div className='flex flex-col items-center gap-6 pt-60 pb-44 max-w-3xl mx-auto'>
          <div className='flex w-56 h-56 items-center justify-center'>
            <IconError className='w-full h-full' />
          </div>
          <h1 className='text-4xl md:text-6xl text-center font-medium'>Seite nicht gefunden</h1>

          <div
            className={clsx('text-lg md:text-xl text-center', 'text-gray-200')}
            dangerouslySetInnerHTML={{
              __html: 'As an established International video publisher, GMP collaborates with global and regional brands across sectors. ',
            }}
          />

          <Link href='/' className='btn btn--primary py-4 px-8'>
            Back to homepage
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const data = await getPageData(locale, '404');
  const globalProps = await getGlobalData(locale);
  return {
    props: {
      data,
      globalProps,
    },
    revalidate: 1,
  };
}

export default Page;
