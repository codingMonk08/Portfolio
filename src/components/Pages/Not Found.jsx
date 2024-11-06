import { useState, useEffect } from "react";
import WaterfallLoader from "../Loader/WaterfallLoader";
import { Link } from "react-router-dom";

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (isLoading) {
    return <WaterfallLoader />; // Render the WaterfallLoader if still loading
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center">
      <h1 className="shadow-xl hover:text-white hover:bg-black text-black py-2 px-4 m-4 rounded inline-flex items-center">
        Oops! We ran out of code❌.
      </h1>
      <Link 
        to="/" 
        className="shadow-xl hover:text-white hover:bg-black text-black py-2 px-4 m-4 rounded inline-flex items-center transition"
      >
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
