import ky from 'ky';

const client = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});

export async function getPageData(lang, slug) {
  return await client.get(`${lang}/resource/${slug}`).json();
}

export async function getAllPageIds(lang) {
  const response = await client.get(`${lang}/resources`).json();
  return response;
}
