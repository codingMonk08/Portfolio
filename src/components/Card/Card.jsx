// Card.jsx

const Card = () => {
  
  return (
    <div className="flex flex-col md:flex-row items-center justify-between text-white  bg-indigo-500  rounded-lg shadow-lg p-8 md:max-w-4xl mx-auto mt-12">
      {/* Left Section */}
      <h1 className="text-2xl font-bold  dark:text-white md:w-1/3">
        Start a Project
      </h1>

      {/* Middle Section */}
      <p className="text-lg  dark:text-gray-300 text-center md:w-1/3 mt-4 md:mt-0">
        Interested in working together? We should queue up a time to chat. I’ll
        buy the coffee.
      </p>

      {/* Right Section */}
      <a
        href="/Contact"
        className=" hover:text-black hover:bg-white font-semibold rounded-lg shadow-lg px-6 py-3 text-lg mt-4 md:mt-0 border-2  transition-colors text-center"
      >
        Let’s Do This
      </a>

  
    </div>
  );
};

export default Card;
