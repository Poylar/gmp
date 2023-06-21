import { imageUrlWrapper } from '@/utils/imageUrlWrapper';

const Opengraph = ({ data }) => {
  const { og_title, og_description, og_image, og_image_alt, og_locale, og_locale_alternate, og_site_name } = data;
  return (
    <>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={og_title} />
      <meta property='og:description' content={og_description} />
      <meta property='og:image' content={imageUrlWrapper(og_image?.replace(/^\/+/, ''))} />
      <meta property='og:image:alt' content={og_image_alt} />
      <meta property='og:image:width' content='1200' />

      <meta property='og:image:height' content='630' />
      <meta property='og:locale' content={og_locale} />
      <meta property='og:locale:alternate' content={og_locale_alternate} />
      <meta property='og:url' content={og_site_name} />
    </>
  );
};

export default Opengraph;
