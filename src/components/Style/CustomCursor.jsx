import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    // Track mouse position
    const handleMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power4.out",
      });
    };

    // Animate cursor size on hover over specified elements
    const handleMouseEnter = () => {
      gsap.to(cursor, { scale: 6, duration: 0.2 });
    };
    const handleMouseLeave = () => {
      gsap.to(cursor, { scale: 1, duration: 0.2 });
    };

    // Apply event listeners to elements
    window.addEventListener("mousemove", handleMouseMove);

    // Add hover effect to links and other elements with class `hover-target`
    document.querySelectorAll("a, .hover-target").forEach((element) => {
      element.addEventListener("mouseenter", handleMouseEnter);
      element.addEventListener("mouseleave", handleMouseLeave);
    });

    // Clean up event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.querySelectorAll("a, .hover-target").forEach((element) => {
        element.removeEventListener("mouseenter", handleMouseEnter);
        element.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-50"
      style={{ mixBlendMode: "difference" }}
    />
  );
};

export default CustomCursor;
