import { useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { IoHomeOutline, IoPersonOutline, IoFolderOutline, IoMailOutline } from "react-icons/io5";
import ContactUs from "../Pages/Contact/Contact";

// Navbar Container
const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 10px;
  width: 100%;
  z-index: 1000;
`;

// Carousel Wrapper with gradient background
const Carousel = styled.div`
  display: flex;
  gap: 1.5rem;
  background: linear-gradient(to right, #cbd5e1, #475569, #0f172a);
  color: white;
  backdrop-filter: blur(10px);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

// Icon Container (using motion here with transient prop $isActive)
const IconContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  color: ${({ $isActive }) => ($isActive ? "#FFF" : "#FFF")};
  font-size: ${({ $isActive }) => ($isActive ? "1rem" : "1rem")};
  transition: color 0.3s, font-size 0.3s;
  &:hover {
    color: #FFF;
  }
`;

// Label styling
const Label = styled.span`
  font-size: 0.9rem;
  margin-top: 0.2rem;
  color: ${({ $isActive }) => ($isActive ? "#cbd5e1" : "#FFF")};
`;

// Modal Container styling for the Contact form modal
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${({ isVisible }) => (isVisible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2000;
`;

// Close Button styling
const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navItems = [
    { name: "Home", slug: "/" },
    { name: "About", slug: "/about" },
    { name: "Projects", slug: "/project" },
    { name: "Contact", slug: "/contact" },
  ];

  const handleIconClick = (slug) => {
    if (slug === "/contact") {
      setIsModalOpen(true);
    } else {
      navigate(slug);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <NavbarContainer>
        <Carousel>
          {navItems.map((item, index) => {
            const isActive = window.location.pathname === item.slug;
            return (
              <IconContainer
                key={index}
                $isActive={isActive}
                onClick={() => handleIconClick(item.slug)}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div>
                  {index === 0 ? (
                    <IoHomeOutline />
                  ) : index === 1 ? (
                    <IoPersonOutline />
                  ) : index === 2 ? (
                    <IoFolderOutline />
                  ) : (
                    <IoMailOutline />
                  )}
                </motion.div>
                <Label $isActive={isActive}>{item.name}</Label>
              </IconContainer>
            );
          })}
        </Carousel>
      </NavbarContainer>

      {/* Contact Form Modal */}
      <ModalContainer isVisible={isModalOpen} onClick={closeModal}>
        <div onClick={(e) => e.stopPropagation()} className="relative">
          <ContactUs />
          {/* Close Button */}
          <CloseButton onClick={closeModal} className="mt-8">×</CloseButton>
        </div>
      </ModalContainer>
    </>
  );
};

export default Header;
