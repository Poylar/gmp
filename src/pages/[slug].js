import { getAllPageIds, getMenu, getPageData } from '@/api/api';
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
    <Layout nav={nav !== undefined ? nav : null}>
      <Head>{typeof data !== undefined ? <title>{data?.pagetitle}</title> : null}</Head>
      {data?.blocks.map((block, index) => (
        <RenderBlock key={index} data={block.values} type={block.chunk} />
      ))}
    </Layout>
  );
};

export async function getStaticProps({ params, locale }) {
  return {
    props: {
      data: await getPageData(locale, params.slug),
      nav: await getMenu(locale),
    },
    revalidate: 1,
  };
}

export async function getStaticPaths({ locales }) {
  const paths = await Promise.all(
    locales.map((locale) => getAllPageIds(locale).then((ids) => ids.map((item) => ({ params: { slug: item.alias }, locale }))))
  );

  return {
    paths: paths.flat(),
    fallback: true,
  };
}

export default Page;
