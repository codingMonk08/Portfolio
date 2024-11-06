import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const TypewriterText = ({ text, speed = 0.1 }) => {
  const textRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, {
      textContent: text,
      duration: text.length * speed,
      ease: "power1.inOut",
      onUpdate: function () {
        textRef.current.innerHTML = text.substring(0, Math.floor(this.progress() * text.length)) + "_";
      },
      onComplete: function () {
        textRef.current.innerHTML = text; // Removes the cursor at the end
      },
    });
  }, [text, speed]);

  return (
    <div>
      <span ref={textRef} className="text-2xl font-bold"></span>
    </div>
  );
};

export default TypewriterText;
