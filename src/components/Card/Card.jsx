import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import "../Style/font.css";
import { IoRocket } from "react-icons/io5";

const Card = () => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true });

  return (
    <motion.div
      ref={cardRef}
      className="flex flex-col lg:flex-row items-center justify-between bg-gradient-to-r from-slate-300 via-slate-600 to-slate-900 text-white rounded-xl shadow-xl p-10 max-w-4xl mx-auto mt-16 gap-8"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9 }}
    >
      {/* Left Section */}
      <motion.h1
        className="text-3xl lg:text-4xl text-center lg:text-left lg:w-1/3 transition-all duration-500"
        style={{ fontFamily: "gothambl" }}
        initial={{ x: -60, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Ready to Collaborate?
      </motion.h1>

      {/* Middle Section */}
      <motion.p
        className="text-gray-100 text-center lg:text-left lg:w-1/3 mt-4 lg:mt-0 transition-all duration-500"
        initial={{ y: 30, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.7 }}
        style={{ fontFamily: "gothambl" }}
      >
        Let&apos;s work together to bring your ideas to life. Drop me a message, and let’s create something amazing!
      </motion.p>

      {/* Right Section */}
      <NavLink to="/Contact">
        <motion.div
          className="inline-flex text-white border-2 border-slate-300 hover:bg-slate-50 hover:text-slate-950 rounded-full py-3 px-8 mt-6 lg:mt-0 transition-all duration-500"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          style={{ fontFamily: "gothambl" }}
        >
          Get in Touch
          {/* Rocket icon hover animation */}
          <motion.div
            className="ml-3 inline-flex items-center"
            initial={{ y: 0 }}
            whileHover={{ y: -10 }} // Rocket icon moves upwards when hovering over the button
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
          >
            <IoRocket size={24} />
          </motion.div>
        </motion.div>
      </NavLink>
    </motion.div>
  );
};

export default Card;
