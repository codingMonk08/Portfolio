import Routes from "./Routes/Routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css'; // Import Locomotive CSS

export default function App() {
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <Router>
      <div ref={scrollRef} data-scroll-container>
        <Routes />
      </div>
    </Router>
  );
}
