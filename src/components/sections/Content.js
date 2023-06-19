const Content = ({ data }) => {
  return (
    <section className='section section--md container'>
      <div className='prose prose-xl' dangerouslySetInnerHTML={{ __html: data.cotnent }}></div>
    </section>
  );
};

export default Content;
