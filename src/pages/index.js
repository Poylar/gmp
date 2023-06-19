import { getGlobalData, getPageData } from '@/api/api';
import Layout from '@/components/layout';
import Opengraph from '@/components/meta/Opengraph';
import Sections from '@/components/sections';
import Head from 'next/head';

const RenderBlock = ({ type, data }) => {
  const Component = Sections[type];
  if (!Component) return null;
  return <Component data={data} />;
};

const Page = ({ data, globalProps }) => {
  return (
    <Layout globalProps={globalProps}>
      <Head>
        <title>{data?.seo.longtitle}</title>
        <meta name='description' content={data?.seo.description} />
        <Opengraph data={data.seo} />
      </Head>
      {data.blocks.map((block, index) => (
        <RenderBlock key={index} data={block.values} type={block.chunk} />
      ))}
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  const data = await getPageData(locale, 'index');
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
