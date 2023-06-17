import client from './client';

export async function getLangs() {
  try {
    const response = await client.get(`/languages`).json();
    return response;
  } catch (error) {
    // Обработка ошибок
    console.error('Ошибка при получении данных языков:', error);
    throw error;
  }
}
