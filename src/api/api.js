import client from './client';

export async function getPageData(lang, slug) {
  try {
    const response = await client.get(`${lang}/resource/${slug}`).json();
    return response;
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при получении данных страницы:', error);
    throw error;
  }
}

export async function getAllPageIds(lang) {
  try {
    const response = await client.get(`${lang}/resources`).json();
    return response;
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при получении всех идентификаторов страниц:', error);
    throw error;
  }
}
