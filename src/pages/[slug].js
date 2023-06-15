import { getAllPageIds, getPageData } from '@/api/api';
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
      <Head>{typeof data !== undefined ? <title>{data.pagetitle}</title> : null}</Head>
      {data.blocks.map((block, index) => (
        <RenderBlock key={index} data={block.values} type={block.chunk} />
      ))}
    </Layout>
  );
};

export async function getStaticProps({ params, locale }) {
  const data = await getPageData(locale, params.slug);
  const nav = await getMenu(locale);
  return {
    props: {
      data,
      nav,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths({ locales }) {
  const paths = await Promise.all(
    locales.map(async (locale) => {
      const data = await getAllPageIds(locale);
      return data.map((item) => {
        return {
          params: {
            slug: item.alias,
          },
          locale,
        };
      });
    })
  );

  return {
    paths: paths.flat(),
    fallback: true,
  };
}

export default Page;
