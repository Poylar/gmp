export const imageUrlWrapper = (url) => {
  if (!url) return null;
  if (url.startsWith('http')) return url;
  return process.env.NEXT_PUBLIC_BACKEND_URL + '/' + url;
};
