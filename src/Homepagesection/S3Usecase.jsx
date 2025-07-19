import { useRef, useLayoutEffect, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import usecase1 from '../assets/usecases/usecase1.webp';
import usecase2 from '../assets/usecases/usecase2.webp';
import usecase3 from '../assets/usecases/usecase3.webp';
import usecase4 from '../assets/usecases/usecase4.webp';
import usecase5 from "../assets/usecases/usecase5.webp"
import usecase6 from '../assets/usecases/usecase6.webp';

gsap.registerPlugin(ScrollTrigger);

const usecases = [usecase1, usecase2, usecase3, usecase4, usecase5, usecase6];

const S3Usecase = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const [imagesLoaded, setImagesLoaded] = useState(0);

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // 👇 This ensures all images are fully loaded
  useEffect(() => {
    if (imagesLoaded === usecases.length) {
      ScrollTrigger.refresh(); // ✅ Refresh scroll trigger after all images load
    }
  }, [imagesLoaded]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Initial state
      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          xPercent: 0,
          yPercent: 100,
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
          markers: false, // ✅ set to true for debug
        },
      });

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

    return () => ctx.revert();
  }, []);

  return (
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center">
        <h1
          id="usecase"
          className="absolute top-0 w-full text-center z-20 font-montserrat font-medium text-xl sm:text-2xl md:text-4xl uppercase text-gradient-gold py-10 md:py-5"
        >
          Use Cases
        </h1>
      </div>

      <div
        className="relative w-full h-screen bg-black overflow-hidden"
        ref={containerRef}
      >
        <div className="relative w-full h-full flex flex-col py-7 justify-center items-center">
          <div className="w-full h-full relative">
            {usecases.map((img, i) => (
              <div
                key={i}
                ref={addToRefs}
                className={`absolute top-10 w-full h-full flex items-center p-4 ${
                  window.innerWidth < 768
                    ? 'justify-center'
                    : i % 2 === 0
                    ? 'justify-start'
                    : 'justify-end'
                }`}
              >
                <img
                  src={img}
                  alt={`usecase-${i}`}
                  loading="lazy"
                  decoding="async"
                  onLoad={() => setImagesLoaded((prev) => prev + 1)} // ✅ Count loaded images
                  className="max-h-[100%] w-auto max-w-[100%] md:max-w-[70%] xl:max-w-[80%] lg:px-14 object-contain rounded-lg drop-shadow-lg"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default S3Usecase;
