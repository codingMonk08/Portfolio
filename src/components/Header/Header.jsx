import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBars } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Define nav items
  const navItems = [
    { name: "Home", slug: "/" },
    { name: "My Work", slug: "/project" },
    { name: "Blog", slug: "/Blog" },
    { name: "Contact", slug: "/Contact" },
  ];

  return (
    <>
      <header className="sticky top-0 bg-white shadow-lg text-indigo-500 z-50 w-full">
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 lg:px-8">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold tracking-wide">
            <div className="flex items-center justify-center w-12 h-12 bg-indigo-500 text-white font-semibold rounded-full hover:scale-105 transform transition-transform duration-300">
              SD
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => navigate(item.slug)}
                className={`text-lg font-medium transition duration-300 px-4 py-2 rounded-lg ${
                  location.pathname === item.slug
                    ? "bg-white text-indigo-500 shadow-md"
                    : "text-indigo-500 hover:bg-indigo-100"
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 border-2 border-indigo-500 font-medium rounded-lg transition duration-300 text-indigo-500 hover:bg-indigo-100"
            >
              Resume Download
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-indigo-500 focus:outline-none"
          >
            {isMenuOpen ? <AiOutlineClose size={28} /> : <FaBars size={28} />}
          </button>

          {/* Mobile Navigation Links */}
          {isMenuOpen && (
            <div className="lg:hidden fixed inset-0 bg-white flex flex-col items-center space-y-6 pt-20 z-40 text-indigo-500">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    navigate(item.slug);
                    setIsMenuOpen(false);
                  }}
                  className={`text-xl font-medium transition duration-300 px-4 py-2 rounded-lg ${
                    location.pathname === item.slug
                      ? "bg-white text-indigo-500 shadow-md"
                      : "hover:bg-indigo-100"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsModalOpen(true);
                  setIsMenuOpen(false);
                }}
                className="px-6 py-3 border-2 border-indigo-500 font-medium rounded-lg text-indigo-500 transition duration-300 hover:bg-indigo-100"
              >
                Resume Download
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* Resume Download Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-75 z-50">
          <div className="bg-white text-indigo-500 p-8 rounded-lg shadow-lg max-w-md text-center relative">
            {/* Close Icon */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-indigo-500 hover:text-gray-500"
            >
              <AiOutlineClose size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Request My Resume</h2>
            <p className="mb-6">
              I'm excited to share my experience and skills with you! To get a copy of my resume, please reach out via the contact form.
            </p>
            <Link
              to="/Contact"
              onClick={() => setIsModalOpen(false)}
              className="px-6 py-3 font-medium text-indigo-500 bg-white border-2 border-indigo-500 rounded-lg shadow-lg hover:bg-indigo-100 transition-all duration-300"
            >
              Go to Contact Form
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
