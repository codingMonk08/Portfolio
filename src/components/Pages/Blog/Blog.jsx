const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center bg-gray-100">
      <h1 className="text-3xl font-semibold leading-loose mt-10 mb-8 text-indigo-500">
        Share Your Thoughts with the World!
      </h1>
      <a
        href="https://blog-app-shantanus-projects-03adc9d0.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Write a blog on my blog platform"
        className="px-8 py-3 bg-indigo-500 text-white rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2"
      >
        Click Here to Write a Blog!
      </a>
    </div>
  );
};

export default Blog;
