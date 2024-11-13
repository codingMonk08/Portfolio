import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Card from '../Card/Card';

const AboutPage = () => {
  const aboutRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: 'power3.out' },
    });

    tl.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    )
      .fromTo(
        contentRef.current.children,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, stagger: 0.3 }
      );
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center py-10">
      {/* Header Section */}
      <div ref={aboutRef} className="text-center my-6">
        <h1 className="text-4xl font-bold mb-4 text-teal-400">About Me</h1>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          I&apos;m Shantanu Deshpande, a passionate front-end and JavaScript Salesforce Developer
          with over 2 years of experience. My journey in tech started during my Computer
          Applications studies, where I discovered my love for coding and creating interactive
          interfaces.
        </p>
      </div>

      {/* Content Section with Animation */}
      <div ref={contentRef} className="flex flex-col space-y-6 mt-6 max-w-2xl mx-auto">
        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-teal-400">Salesforce Expertise</h2>
          <p className="text-gray-300 mt-2">
            I specialize in Salesforce development, with a focus on Apex, Lightning Web
            Components (LWC), and SOQL, creating scalable and efficient solutions on the Salesforce
            platform.
          </p>
        </div>


        <div className="p-6 bg-gray-800 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-teal-400">Collaboration & Growth</h2>
          <p className="text-gray-300 mt-2">
            I value collaboration and open communication, working closely with cross-functional
            teams to deliver impactful solutions. I constantly seek new knowledge to stay ahead in
            this ever-evolving field.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-12 text-center text-gray-500">
              <p>Let’s connect and see how we can create innovative Salesforce solutions together!</p>
              <Card/>
          </div>
          
    </div>
  );
};

export default AboutPage;
