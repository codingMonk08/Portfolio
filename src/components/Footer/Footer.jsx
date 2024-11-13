import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import CustomCursor from "../Style/CustomCursor"; // Import the custom cursor component

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 lg:py-8 mx-auto px-6 lg:px-8 transition-all duration-300">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-8">
        
        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="font-semibold">
            Handcrafted by me &copy; 2024
          </h2>
          <span className="font-semibold">
            Made with ❤️
          </span>
        </div>
        
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/codingMonk08"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition-colors duration-300 cursor-pointer"
            aria-label="Visit my GitHub profile"
          >
            <FaGithubSquare className="h-8 w-8" />
          </a>
          <a
            href="https://www.instagram.com/shantanu.deshpande18/"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition-colors duration-300 cursor-pointer"
            aria-label="Visit my Instagram profile"
          >
            <FaInstagramSquare className="h-8 w-8" />
          </a>
          <a
            href="https://www.linkedin.com/in/shankar-deshpande/"
            target="_blank"
            rel="noopener noreferrer"
            className=" transition-colors duration-300 cursor-pointer"
            aria-label="Visit my LinkedIn profile"
          >
            <FaLinkedin className="h-8 w-8" />
          </a>
        </div>
        
      </div>
      <CustomCursor /> {/* Render the custom cursor */}
    </footer>
  );
};

export default Footer;
