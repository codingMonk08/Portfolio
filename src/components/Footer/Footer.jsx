import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 shadow-2xl bg-indigo-500  rounded-lg py-4 lg:py-8 mx-auto px-6 lg:px-8 text-white">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
        <div className="text-center md:text-left">
          <h2 className=" font-semibold">
            Handcrafted by me &copy; 2024
          </h2>
          <span className=" font-semibold">
            Made with ❤️
          </span>
        </div>
        <div className="flex space-x-6">
          <a href="https://github.com/codingMonk08" target="_blank" rel="noopener noreferrer" className=" hover:text-slate-300 dark:hover:text-white">
            <FaGithubSquare className="h-8 w-8" />
          </a>
          <a href="https://www.instagram.com/shantanu.deshpande18/" target="_blank" rel="noopener noreferrer" className=" hover:text-slate-300 dark:hover:text-white">
            <FaInstagramSquare className="h-8 w-8" />
          </a>
          <a href="https://www.linkedin.com/in/shankar-deshpande/" target="_blank" rel="noopener noreferrer" className=" hover:text-slate-300 dark:hover:text-white">
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
