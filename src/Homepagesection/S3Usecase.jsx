// src/components/S3Usecase.jsx
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const S3Usecase = () => {
  const boxRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animate the box from top with fade-in
    gsap.from(boxRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Animate the heading from right with fade-in
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-black text-white space-y-10">
      <div
        ref={boxRef}
        className="w-40 h-40 bg-green-500 rounded-lg shadow-lg"
      ></div>

      <h1
        ref={textRef}
        className="text-4xl font-bold"
      >
        GSAP Basic Animation
      </h1>
    </div>
  );
};

export default S3Usecase;
