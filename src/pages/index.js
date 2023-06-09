import { getPageData } from '@/api/api';
import { getMenu } from '@/api/getMenu';
import Layout from '@/components/layout';
import About from '@/components/sections/About';
import Features from '@/components/sections/Features';
import HeroMain from '@/components/sections/HeroMain';
import Values from '@/components/sections/Values';
import Head from 'next/head';

function Page({ pageData, nav }) {
  return (
    <Layout nav={nav}>
      <Head>
        <title>{pageData.pagetitle}</title>
      </Head>
      <HeroMain />
      <About />
      <Features />
      <Values />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const pageData = await getPageData(locale, 'index');
  const nav = await getMenu(locale);
  return {
    props: {
      pageData,
      nav,
    },
  };
}

export default Page;
