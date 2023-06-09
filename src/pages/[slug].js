import { getAllPageIds, getPageData } from '@/api/api';
import { getMenu } from '@/api/getMenu';
import Layout from '@/components/layout';
import Head from 'next/head';
import { useRouter } from 'next/router';
function Page({ pageData, nav }) {
  const router = useRouter();
  return (
    <Layout nav={nav}>
      <Head>
        <title>{pageData.pagetitle}</title>
      </Head>
    </Layout>
  );
}

export async function getStaticProps({ params, locale }) {
  const pageData = await getPageData(locale, params.slug);
  const nav = await getMenu(locale);
  return {
    props: {
      pageData,
      nav,
    },
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
