const Blog = ({ params }) => {
    const { id } = params;
    return (
      <>
        <p>One Blog {id}</p>
      </>
    );
  };
  
  export default Blog;