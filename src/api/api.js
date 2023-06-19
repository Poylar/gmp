import client from './client';

export async function getPageData(lang, slug) {
  try {
    const response = await client.get(`${lang}/resource/${slug}`).json();
    return response;
  } catch (error) {
    // Обработка ошибок
    console.error('Error get page data:', error);
    throw error;
  }
}

export async function getGlobalData(lang) {
  try {
    const response = await client.get(`${lang}/config`).json();
    return response;
  } catch (error) {
    // Обработка ошибок
    console.error('Error get menu data:', error);
    throw error;
  }
}

export async function getAllPageIds(lang) {
  try {
    const response = await client.get(`${lang}/resources`).json();
    return response;
  } catch (error) {
    // Обработка ошибок
    console.error('Error get all pages data:', error);
    throw error;
  }
}

export async function getAllServicesIds(lang) {
  try {
    const response = await client.get(`${lang}/services`).json();
    return response;
  } catch (error) {
    console.error('Error get all service pages data:', error);
    throw error;
  }
}
