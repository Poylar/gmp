import { getPageData } from '@/api/api';
import { getMenu } from '@/api/getMenu';
import Layout from '@/components/layout';
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
      </Head>
      {data.blocks.map((block, index) => (
        <RenderBlock key={index} data={block.values} type={block.chunk} />
      ))}
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const data = await getPageData(locale, 'home');
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
