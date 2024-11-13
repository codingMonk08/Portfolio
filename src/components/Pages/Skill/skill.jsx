import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJs, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGit, FaJava, FaGithub,
  FaCloud, FaCode, FaServer,FaRegWindowClose
} from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiMysql } from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const SkillsSection = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const skills = [
    { id: 1, name: "Salesforce", subtitle: "Cloud-based CRM", icon: <FaCloud style={{ color: "#00A1E0" }} /> },
    { id: 2, name: "Apex", subtitle: "Salesforce programming", icon: <FaCode style={{ color: "#00A1E0" }} /> },
    { id: 3, name: "JavaScript", subtitle: "Programming Language", icon: <FaJs style={{ color: "#f0db4f" }} /> },
    { id: 4, name: "Java", subtitle: "Backend language", icon: <FaJava style={{ color: "#007396" }} /> },
    { id: 5, name: "HTML", subtitle: "Markup Language", icon: <FaHtml5 style={{ color: "#e34c26" }} /> },
    { id: 6, name: "CSS", subtitle: "Styling Language", icon: <FaCss3Alt style={{ color: "#264de4" }} /> },
    { id: 7, name: "React JS", subtitle: "Frontend Library", icon: <FaReact style={{ color: "#61dafb" }} /> },
    { id: 8, name: "Node.js", subtitle: "JavaScript Runtime", icon: <FaNodeJs style={{ color: "#68a063" }} /> },
    { id: 9, name: "MongoDB", subtitle: "NoSQL Database", icon: <SiMongodb style={{ color: "#4DB33D" }} /> },
    { id: 10, name: "Git", subtitle: "Version Control", icon: <FaGit style={{ color: "#f34f29" }} /> },
    { id: 11, name: "Tailwind CSS", subtitle: "CSS Framework", icon: <FaCss3Alt style={{ color: "#06b6d4" }} /> },
    { id: 12, name: "Express", subtitle: "Node.js Framework", icon: <FaServer style={{ color: "#000000" }} /> },
    { id: 13, name: "Next.js", subtitle: "React Framework", icon: <SiNextdotjs style={{ color: "#000000" }} /> },
    { id: 14, name: "MySQL", subtitle: "Relational Database", icon: <SiMysql style={{ color: "#4479a1" }} /> },
    { id: 15, name: "REST API", subtitle: "Web API Standard", icon: <FaServer style={{ color: "#6e39a6" }} /> },
    { id: 16, name: "Github", subtitle: "Code Hosting", icon: <FaGithub style={{ color: "#000000" }} /> },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    skillRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <section className="py-8 rounded-md mt-4">
      <div className="grid grid-cols-3   sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.id}
            layoutId={skill.id}
            onClick={() => setSelectedId(skill.id)}
            onMouseEnter={() => setHoveredId(skill.id)}
            onMouseLeave={() => setHoveredId(null)}
            onMouseMove={handleMouseMove}
            ref={(el) => (skillRefs.current[index] = el)}
            className="flex flex-col items-center text-center transform transition duration-300 hover:scale-110 cursor-pointer relative"
          >
            <div className="text-3xl">{skill.icon}</div>
            <h3 className="text-sm font-semibold text-teal-500 mt-1">{skill.name}</h3>
          </motion.div>
        ))}
      </div>

      {/* Tooltip on Cursor */}
      <AnimatePresence>
        {hoveredId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed text-xs font-medium text-white bg-gradient-to-r from-slate-300 via-slate-600 to-slate-900 py-1 px-2 rounded-lg pointer-events-none"
            style={{
              top: cursorPosition.y + 15, 
              left: cursorPosition.x + 15, 
            }}
          >
            Click me
          </motion.div>
        )}
      </AnimatePresence>

    <AnimatePresence>
  {selectedId && (
    <motion.div
      layoutId={selectedId}
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 "
    >
      <motion.div className="relative bg-white p-8 rounded-md text-center w-80">
        
        <button
          onClick={() => setSelectedId(null)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg font-bold  "
        >
          <FaRegWindowClose/>
        </button>

        <motion.h5 className="text-lg font-medium text-gray-500">
          {skills.find(skill => skill.id === selectedId).subtitle}
        </motion.h5>
        <motion.h2 className="text-2xl font-semibold text-gray-800 mt-2">
          {skills.find(skill => skill.id === selectedId).name}
        </motion.h2>
        
       
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default SkillsSection;
