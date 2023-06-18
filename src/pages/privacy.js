import { getPageData } from '@/api/api';
import { getMenu } from '@/api/getMenu';
import Layout from '@/components/layout';
import Opengraph from '@/components/meta/Opengraph';
import Sections from '@/components/sections';
import Head from 'next/head';

const RenderBlock = ({ type, data }) => {
  const Component = Sections[type];
  if (!Component) return null;
  return <Component data={data} />;
};

const Page = ({ data, nav }) => {
  return (
    <Layout nav={nav}>
      <Head>
        <title>{data.pagetitle}</title>
        <Opengraph data={data.seo} />
      </Head>
      <section className='section'></section>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const data = await getPageData(locale, 'privacy');
  const nav = await getMenu(locale);
  return {
    props: {
      data,
      nav,
    },
    revalidate: 1,
  };
}

export default Page;
