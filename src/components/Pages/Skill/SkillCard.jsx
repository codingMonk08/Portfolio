import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 20, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="max-w-xs w-full bg-white rounded-lg shadow-lg p-6 m-4 text-center transform hover:scale-105 transition-transform duration-300"
    >
      <div className="text-3xl mb-4">
        {skill.icon ? skill.icon : <span className="text-gray-500">🌐</span>}
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{skill.name}</h3>
      <p className="text-gray-600 mt-2">{skill.description}</p>
    </div>
  );
};

export default SkillCard;
