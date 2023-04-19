import React, { useRef, useEffect, useState } from "react";
import AnimatedHeader from "./globalStyle";

const AnimatedHeader = () => {
  const [isVisible, setVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(headerRef.current);

          // Select all p elements on the page
          const paragraphs = document.querySelectorAll("p");
          paragraphs.forEach((paragraph) => {
            // Add the animation class to the p element
            paragraph.classList.add("slideIn");
          });
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(headerRef.current);
  }, []);

  return <h1 ref={headerRef}>Animated Header</h1>;
};

export default AnimatedHeader;
