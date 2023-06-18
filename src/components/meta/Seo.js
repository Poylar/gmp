const Seo = ({ data }) => {
  return (
    <>
      <title>{data?.longtitle}</title>
      <meta name='description' content={data.description} />
    </>
  );
};

export default Seo;
