import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './index.css'

const ObserverAnimation = ({ children, animationClass = 'fadeIn' }) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentElement = elementRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`${isVisible ? animationClass : 'opacity-0 transition-opacity duration-700'}`}
    >
      {children}
    </div>
  );
};

// Adding PropTypes for prop validation
ObserverAnimation.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is required and can be any renderable element
  animationClass: PropTypes.string,    // Ensures animationClass is a string
};

// Default prop for animationClass
ObserverAnimation.defaultProps = {
  animationClass: 'fadeIn',            // Default animation if none is provided
};

export default ObserverAnimation;
