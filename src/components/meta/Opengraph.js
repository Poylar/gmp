const Opengraph = ({ data }) => {
  const { og_title, og_description, og_image, og_image_alt, og_locale, og_locale_alternate, og_site_name } = data;
  return (
    <>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={og_title} />
      <meta property='og:description' content={og_description} />
      <meta
        name='og:image'
        content={
          // Because OG images must have a absolute URL, we use the
          // `VERCEL_URL` environment variable to get the deployment’s URL.
          // More info:
          // https://vercel.com/docs/concepts/projects/environment-variables
          `${process.env.VERCEL_URL ? 'https://' + process.env.VERCEL_URL : ''}/api/og`
        }
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />
      <meta property='og:image:alt' content={og_image_alt} />

      <meta property='og:locale' content={og_locale} />
      <meta property='og:locale:alternate' content={og_locale_alternate} />
      <meta property='og:url' content={og_site_name} />
    </>
  );
};

export default Opengraph;
