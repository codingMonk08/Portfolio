import { useEffect, useState } from "react";
import WaterfallLoader from "../Loader/WaterfallLoader";
import { NavLink } from "react-router-dom";
import SkillSection from "./Skill/skill";
import Card from "../Card/Card";
import { Typewriter } from "react-simple-typewriter";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000); // 2 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <WaterfallLoader />;
  }

  return (
    <div
      id="main-container"
      className="min-h-screen flex items-center justify-center sm:px-6 lg:px-8 bg-neutral-light dark:bg-neutral-dark"
    >
      <div className="mx-auto flex rounded-3xl flex-col justify-center items-center bg-primary DEFAULT text-neutral-light dark:bg-primary-dark dark:text-neutral-dark">
        {/* Introduction Section */}
         <div className="text-center p-20 mt-10 rounded-md">
          <h1 className="neon-text rotating-text text-indigo-500 font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight text-neutral-light dark:text-neutral-light transition-all duration-300 mb-4">
            <Typewriter
              words={["👋Hello, I'm Shantanu Deshpande!"]}
              loop={true} // Set this to 'true' for infinite loop
              typeSpeed={70}
              deleteSpeed={50}  
              delaySpeed={2000}
              cursor
            />
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-500 md:text-3xl text-neutral-dark dark:text-neutral-light">
            A JavaScript Salesforce Developer Based in India
          </p>
        </div>
        {/* Optimized Hero Image with Lazy Loading */}
        <div className="w-full flex justify-center mb-8 mt-10 sm:mt-20 md:mt-24">
          <img
            className={`object-contain w-full max-w-xs sm:max-w-md lg:max-w-2xl transition-opacity duration-500 ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            src="https://mattfarley.ca/img/hero-devices.svg"
            alt="Responsive Hero Devices"
            width="600"
            height="400"
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => (e.target.src = "/path/to/fallback-image.jpg")} // Add fallback image path here
          />
        </div>

        {/* Text Content */}
        <div className="text-center px-8 bg-indigo-500 text-white rounded-2xl py-3 drop-shadow-2xl text-text-primary dark:text-neutral-light border-y border-neutral-dark dark:border-neutral-light bg-neutral-light dark:bg-neutral-dark -mt-8 p-6 lg:p-32 mx-auto transition-all duration-300">
          <p className="text-sm md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light leading-relaxed mx-auto">
            I&apos;m a JavaScript Salesforce Developer with over 2 years of
            experience in creating interactive and user-friendly web
            applications. I am skilled in HTML, CSS, JavaScript, React, jQuery,
            Tailwind CSS, Bootstrap, and Git, and I continually learn the latest
            web trends. My knowledge of MySQL and MongoDB enables me to create
            dynamic user experiences. I believe in collaboration for project
            success and am currently expanding my skill set in Salesforce,
            focusing on Apex, SOQL, and Lightning Web Components (LWC) to
            develop scalable applications.
          </p>
        </div>

        <SkillSection />
        <Card />
    
      </div>
    </div>
  );
}

export default Home;
