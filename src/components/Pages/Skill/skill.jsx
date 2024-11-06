import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import {
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaGit,
  FaJava,
  FaGithub,
  FaCloud,
  FaCode,
  FaDatabase,
  FaServer,
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiMysql } from "react-icons/si"; // Importing additional icons

const SkillsSection = () => {
  const skills = [
    {
      name: "Salesforce",
      icon: <FaCloud style={{ color: "#00A1E0" }} />,
      description: "CRM platform with custom objects and automation",
    },
    {
      name: "Apex",
      icon: <FaCode style={{ color: "#00A1E0" }} />,
      description: "Strong-typed programming language for Salesforce",
    },
    {
      name: "JavaScript",
      icon: <FaJs style={{ color: "#f0db4f" }} />,
      description: "Versatile programming language for the web.",
    },
    {
      name: "Java",
      icon: <FaJava style={{ color: "#007396" }} />,
      description: "Object-oriented programming language",
    },

    {
      name: "HTML",
      icon: <FaHtml5 style={{ color: "#e34c26" }} />,
      description: "Semantic and accessible HTML",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt style={{ color: "#264de4" }} />,
      description: "Styling with Tailwind and responsive layouts",
    },
    {
      name: "React JS",
      icon: <FaReact style={{ color: "#61dafb" }} />,
      description: "Efficient UI components",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs style={{ color: "#68a063" }} />,
      description: "Backend development with Express",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb style={{ color: "#4DB33D" }} />,
      description: "NoSQL database for fast data storage",
    },
    {
      name: "Git",
      icon: <FaGit style={{ color: "#f34f29" }} />,
      description: "Version control for projects",
    },
    {
      name: "Tailwind CSS",
      icon: <FaCss3Alt style={{ color: "#06b6d4" }} />,
      description: "Utility-first CSS framework",
    },
    {
      name: "Express",
      icon: <FaServer style={{ color: "#000000" }} />,
      description: "Backend server framework",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs style={{ color: "#000000" }} />,
      description: "React framework for server-side rendering",
    },
    {
      name: "MySQL",
      icon: <SiMysql style={{ color: "#4479a1" }} />,
      description: "Relational database management system",
    },
    {
      name: "REST API",
      icon: <FaServer style={{ color: "#6e39a6" }} />,
      description: "RESTful API design for web services",
    },
    {
      name: "Github",
      icon: <FaGithub style={{ color: "#000000" }} />,
      description: "Code collaboration platform",
    },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.15, // Stagger animation for each skill
          scrollTrigger: {
            trigger: el,
            start: "top 85%", // Starts animation when skill enters viewport
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className=" py-12 rounded-md  mt-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-4 ">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            ref={(el) => (skillRefs.current[index] = el)}
            className="p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105"
            style={{ backgroundColor: skill.color || "#f3f4f6" }}
          >
            <div className="text-5xl mb-4 text-white">{skill.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {skill.name}
            </h3>
            <p className="text-gray-600 text-center mt-2">
              {skill.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
