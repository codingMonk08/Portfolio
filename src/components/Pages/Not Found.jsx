import { Link } from "react-router-dom";

const NotFound = () => {
  


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 text-center">
      <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 max-w-lg w-full mx-4 transform transition-transform duration-300 hover:scale-105">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
          Oops! Page Not Found ❌
        </h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          It looks like the page you’re looking for doesn’t exist. You may have
          mistyped the URL or followed a broken link.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-lg font-medium transition-all duration-300 transform hover:bg-gray-700 hover:scale-105"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
