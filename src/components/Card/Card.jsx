import { useState, useRef } from "react";
import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { IoRocket } from "react-icons/io5";
import ContactUs from "../Pages/Contact/Contact";

// Styled Components for Modal
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

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  transition: color 0.3s ease;
  &:hover {
    color: #ff6b6b;
  }
`;

// Styled Components for Card
const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(to right, #cbd5e1, #475569, #0f172a);
  color: white;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  padding: 2rem;
  max-width: 800px;
  margin: 2rem auto;
  gap: 1.5rem;
`;

const CardTitle = styled(motion.h1)`
  font-size: 2rem;
  font-family: gothambl;
  text-align: center;
`;

const CardText = styled(motion.p)`
  font-size: 1rem;
  text-align: center;
  color: #e2e8f0;
  font-family: gothambl;
`;

const CardButton = styled(motion.button)`
  align-self: center;
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: white;
  border: 2px solid #cbd5e1;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-family: gothambl;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: #cbd5e1;
    color: #0f172a;
  }
`;

// Main Card Component
const Card = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <CardContainer
        ref={cardRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9 }}
      >
        <CardTitle
          initial={{ x: -60, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : {}}
          transition={{ delay: 0.2, duration: 0.7 }}
        >
          Ready to Collaborate?
        </CardTitle>
        <CardText
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          Let&apos;s work together to bring your ideas to life. Drop me a
          message, and let’s create something amazing!
        </CardText>
        <CardButton
          onClick={openModal}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
        >
          Get in Touch <IoRocket style={{ marginLeft: "8px" }} />
        </CardButton>
      </CardContainer>

      {/* Modal */}
      <ModalContainer isVisible={isModalOpen} onClick={closeModal}>
       
          <div onClick={(e) => e.stopPropagation()} className="relative">
          <ContactUs />
          <CloseButton onClick={closeModal} className="mt-8">×</CloseButton>
        </div>
      </ModalContainer>
    </>
  );
};

export default Card;
