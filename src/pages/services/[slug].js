import { getAllServicesIds, getGlobalData, getPageData } from '@/api/api';
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
      {data?.blocks?.map((block, index) => (
        <RenderBlock key={index} data={block.values} type={block.chunk} />
      ))}
    </Layout>
  );
};

export async function getStaticProps({ params, locale }) {
  const data = await getPageData(locale, params.slug);
  const globalProps = await getGlobalData(locale);
  return {
    props: {
      data,
      globalProps,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths({ locales }) {
  const paths = await Promise.all(
    locales.map(async (locale) => {
      const data = await getAllServicesIds(locale);
      return data.flatMap((item) => {
        if (item.resources) {
          return item.resources.map((resource) => {
            return {
              params: {
                slug: resource.alias,
              },
              locale,
            };
          });
        } else {
          return {
            params: {
              slug: item.alias,
            },
            locale,
          };
        }
      });
    })
  );

  return {
    paths: paths.flat(),
    fallback: false,
  };
}

export default Page;
