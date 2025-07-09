import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import usecase1 from '../assets/usecases/usecase1.png';
import usecase2 from '../assets/usecases/usecase2.png';
import usecase3 from '../assets/usecases/usecase3.png';
import usecase4 from '../assets/usecases/usecase4.png';
import usecase5 from '../assets/usecases/usecase5.png';
import usecase6 from '../assets/usecases/usecase6.png' ;

gsap.registerPlugin(ScrollTrigger);

const usecases = [usecase1, usecase2, usecase3, usecase4, usecase5, usecase6];

const S3Usecase = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Har card ki shuruaati position set karein
      cardsRef.current.forEach((card) => {
        // ✅ UPDATED: Sabhi cards ko shuru mein x-axis par center mein rakhein
        gsap.set(card, {
          xPercent: 0, // Horizontal movement nahi
          yPercent: 100, // Sirf neeche se
          opacity: 0,
        });
      });

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: `+=${cardsRef.current.length * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 2,
          markers: false,
        },
      });

      // Har card ko uski final position par animate karein
      cardsRef.current.forEach((card) => {
        timeline.to(
          card,
          {
            xPercent: 0,
            yPercent: 0,
            opacity: 1,
            ease: 'power2.out',
            duration: 5,
          },
          ">-0.8"
        );
      });
    }, containerRef);

    // Best cleanup practice
    return () => ctx.revert();
  }, []);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <div
      className="relative w-full h-svh md:h-screen bg-black overflow-hidden"
      ref={containerRef}
    >
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h1
          id="usecase"
          className="absolute top-0 w-full text-center z-20 font-montserrat font-medium text-xl sm:text-2xl md:text-4xl uppercase text-gradient-gold py-10 md:py-5 "
        >
          Use Cases
        </h1>

        <div className="w-full h-full relative">
          {usecases.map((img, i) => (
            <div
              key={i}
              ref={addToRefs}
              // Tailwind CSS se card ko left ya right align kiya jaa raha hai
            className={`absolute top-0 left-0 w-full h-full flex items-center p-4 lg:p-20 
  ${
    // For small devices (up to md breakpoint), always center
    // For medium and larger devices, apply alternating justification
    window.innerWidth < 768 
      ? 'justify-center' // On small screens, always center horizontally
      : i % 2 === 0 ? 'justify-start' : 'justify-end'
  }`
}
            >
              <img
                src={img}
                alt={`usecase-${i}`}
                className="max-h-[70vh] w-auto max-w-[80%] md:max-w-[50%] xl:max-w-[40%] object-contain  rounded-lg drop-shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default S3Usecase;