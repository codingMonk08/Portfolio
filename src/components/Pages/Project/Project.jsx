import { FaGithub } from "react-icons/fa";
import { RiArrowRightUpFill } from "react-icons/ri";
import EdTech from '../../../assets/EdTech.png';
import JWTAuth from '../../../assets/JWTAuth.png';
import BlogApp from '../../../assets/BlogApp.jpeg';
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "Blog App",
      description: "A dynamic blogging app that empowers users to create, share, and explore engaging content on diverse topics. It features an intuitive editor, seamless content management, and a user-friendly interface designed for optimal reading and writing experiences.",
      imageUrl: BlogApp,
      githubLink: "https://github.com/codingMonk08/Blog-App",
      demoLink: "https://blog-app-shantanus-projects-03adc9d0.vercel.app/",
    },
    {
      id: 2,
      title: "Authentication Web",
      description: "A secure authentication and authorization system using JWT and bcrypt. User passwords are hashed with bcrypt for protection, while JWT enables safe and stateless session management.",
      imageUrl: JWTAuth,
      githubLink: "https://github.com/codingMonk08/JWT_Auth",
      demoLink: "https://example.com/project2-demo",
    },
    {
      id: 3,
      title: "EdTech",
      description: "An interactive EdTech app designed to enhance learning through engaging courses, quizzes, and video tutorials. Provides personalized learning paths and collaborative tools.",
      imageUrl: EdTech,
      githubLink: "https://github.com/example/project1",
      demoLink: "https://example.com/project1-demo",
    },
  ];

  useEffect(() => {
    // ScrollTrigger animation for the project cards
    gsap.utils.toArray(".project-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Hover animation for project cards
    gsap.utils.toArray(".project-card").forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card, { scale: 1.05, duration: 0.3 });
      });
      card.addEventListener("mouseleave", () => {
        gsap.to(card, { scale: 1, duration: 0.3 });
      });
    });
  }, []);

  return (
    <div className="bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <section className="min-h-screen">
        <h2 className="text-4xl text-center text-white mb-8 font-extrabold leading-none tracking-tight lg:text-5xl py-4">
          My Work
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card shadow-lg rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-75"></div>
              </div>
              <div className="p-6 bg-gray-800 flex flex-col justify-between text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-base mb-4 line-clamp-3">{project.description}</p>
                <div className="flex space-x-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
                    >
                      Github
                      <FaGithub className="ml-2" />
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-black font-bold py-2 px-4 rounded inline-flex items-center transition-colors duration-300"
                    >
                      Live
                      <RiArrowRightUpFill className="ml-2" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
