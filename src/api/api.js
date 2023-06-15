import ky from 'ky';

const client = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});

export async function getPageData(lang, slug) {
  try {
    return await client.get(`${lang}/resource/${slug}`).json();
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при получении данных страницы:', error);
    throw error;
  }
}

export async function getAllPageIds(lang) {
  try {
    return await client.get(`${lang}/resources`).json();
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при получении всех идентификаторов страниц:', error);
    throw error;
  }
}

export async function getMenu(lang) {
  try {
    return await client.get(`${lang}/menu`).json()
  } catch (error){
    console.error('Ошибка при получении меню', error)
    throw error;
  }
}

export async function getLangs() { // don't use ?
  try {
    return await client.get(`/languages`).json();
  } catch (error){
    console.error('Ошибка при получении языков', error)
    throw error;
  }
}