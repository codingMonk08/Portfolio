import { useState } from "react";
import { NavLink } from "react-router-dom";
import SkillSection from "./Skill/skill";
import Card from "../Card/Card";
import { Typewriter } from "react-simple-typewriter";
import { BsBoxArrowInUpRight } from "react-icons/bs"; // Icon for CTA button
import "../Style/font.css";
import { motion } from "framer-motion";

function Home() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div
      id="main-container"
      className="min-h-screen bg-gray-900 flex items-center justify-center sm:px-6 lg:px-8 transition-all duration-300 text-gray-900  "
    >
      {" "}
      <div className="mx-auto flex rounded-3xl flex-col justify-center items-center transition-all duration-300">
        {/* Introduction Section */}
        <div className="text-center p-20 mt-10 rounded-md">
          <h1 className="text-teal-500 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight transition-transform transform-gpu duration-300 hover:scale-105 mb-4">
            <h1> 👋 Hello, I&apos;m Shantanu Deshpande!</h1>{" "}
            <Typewriter
              words={["JavaScript Developer.", "Salesforce Enthusiast."]}
              loop={true}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
              cursor
            />
          </h1>
        </div>

        {/* Optimized Hero Image with Lazy Loading */}
        <div className="w-full flex justify-center mb-8 mt-10 sm:mt-20 md:mt-24">
          <img
            className={`object-contain w-full max-w-xs sm:max-w-md lg:max-w-2xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src="https://mattfarley.ca/img/hero-devices.svg"
            alt="Developer holding devices showcasing responsive web design"
            width="600"
            height="400"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")}
          />
        </div>

        {/* Text Content */}
        <div
          to="/about"
          className="text-center px-6 sm:px-8 md:px-16 lg:px-24 xl:px-32  text-gray-900 dark:bg-gray-800 dark:text-gray-200 rounded-xl py-4 sm:py-6 md:py-8 lg:py-10 drop-shadow-lg text-primary border-2 border-slate-950 -mt-8 max-w-4xl mx-auto transition-all duration-300"
        >
          <div className="p-6 bg-gray-900 ">
            <h2 className="text-2xl font-semibold text-teal-400"> Expertise</h2>
            <p
              className="text-gray-300 mt-2 "
              style={{ fontFamily: "gothambo" }}
            >
              I&apos;m JavaScript Salesforce Developer with over 2 years of
              experience in building interactive and user-friendly web
              applications. I specialize in technologies such as JavaScript,
              React, Tailwind CSS, Bootstrap, and Git, with a strong focus on
              staying up-to-date with the latest web trends. My background in
              databases, including MySQL and MongoDB, empowers me to create
              dynamic user experiences. I am passionate about collaboration and
              believe in working together to achieve project success. Currently,
              I am enhancing my expertise in Salesforce, focusing on Apex, SOQL,
              and Lightning Web Components (LWC) to develop scalable,
              high-performance applications on the Salesforce platform.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center mt-6">
          <NavLink
            to="/project"
            className="inline-flex  items-center bg-gradient-to-r from-slate-300 via-slate-600 to-slate-900 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition-transform  hover:scale-105 "
          >
            See My Work
            <motion.div
              className="ml-2"
              whileHover={{ x: 5, rotate: 45 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <BsBoxArrowInUpRight size={20} />
            </motion.div>
          </NavLink>
        </div>

        {/* Skill Section */}
        <SkillSection />

        {/* Projects Section with Card Component */}
        <Card />
      </div>
    </div>
  );
}

export default Home;
