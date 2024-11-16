import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 pb-20 text-white py-4 lg:py-8 px-6 lg:px-8 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Handcrafted by me</h2>
          <span className="block font-semibold">Made with ❤️</span>
          <p className="text-sm mt-2">
            &copy; {new Date().getFullYear()} Shantanu Deshpande. All rights reserved.
          </p>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/codingMonk08"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 cursor-pointer hover:text-gray-500"
            aria-label="Visit my GitHub profile"
          >
            <FaGithubSquare className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/shantanu.deshpande18/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 cursor-pointer hover:text-pink-500"
            aria-label="Visit my Instagram profile"
          >
            <FaInstagramSquare className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/shankar-deshpande/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-300 cursor-pointer hover:text-blue-500"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
