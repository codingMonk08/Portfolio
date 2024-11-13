import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive CSS
import { gsap } from "gsap";

export default function App() {
  const scrollRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    // Initialize LocomotiveScroll
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    // Cleanup LocomotiveScroll on unmount
    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  useEffect(() => {
    // Custom cursor movement
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);

    // Cursor hover effects on interactive elements
    const interactiveElements = document.querySelectorAll("a, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        gsap.to(cursorRef.current, { scale: 1.5, backgroundColor: "rgba(255, 255, 255, 0.8)", duration: 0.3 });
      });
      el.addEventListener("mouseleave", () => {
        gsap.to(cursorRef.current, { scale: 1, backgroundColor: "rgba(255, 255, 255, 0.5)", duration: 0.3 });
      });
    });

    // Cleanup event listeners on unmount
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", () => {});
        el.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <Router>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed fixed-cursor pointer-events-none w-8 h-8 bg-white rounded-full opacity-50 transform -translate-x-1/2 -translate-y-1/2 z-50"
      />
      
      {/* Locomotive Scroll Container */}
      <div ref={scrollRef} data-scroll-container>
        <Routes />
      </div>
    </Router>
  );
}
