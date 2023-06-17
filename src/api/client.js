import ky from 'ky';

const client = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});

export default client;
