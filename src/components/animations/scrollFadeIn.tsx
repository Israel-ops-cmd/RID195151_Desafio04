import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"

const AnimatedDiv = styled.div<{ visible: boolean }>`
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transform: ${({ visible }) => (visible ? "translateY(0)" : "translateY(50px)")};
  transition: opacity 0.8s ease, transform 0.8s ease;
`

const ScrollFadeIn: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <AnimatedDiv ref={ref} visible={isVisible}>
      {children}
    </AnimatedDiv>
  );
};

export default ScrollFadeIn;
