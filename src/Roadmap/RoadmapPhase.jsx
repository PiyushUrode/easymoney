import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgQ3 from "../assets/roadmap/phase1.webp";
import imgQ4 from "../assets/roadmap/phase2.webp";
import imgQ1 from "../assets/roadmap/phase3.webp";
import imgQ2 from "../assets/roadmap/phase5.webp";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    quarter: "Q3 2025",
    title: "Foundation & Strategic Launch",
    points: [
      "Token Development & Smart Contract Deployment",
      "Official Website & Whitepaper Release",
      "Community Building & Airdrop Campaigns",
    ],
    image: imgQ3,
  },
  {
    quarter: "Q4 2025",
    title: "Public Launch & Revenue Generation",
    points: [
      "Public sale & listing on PancakeSwap",
      "Income from Samal Business Bay leasing",
      "Staking platform rollout",
    ],
    image: imgQ4,
  },
  {
    quarter: "Q1 2026",
    title: "Real Estate Expansion & Income Sharing",
    points: [
      "Start construction: Ameri Hotel Apartments (Meydan)",
      "First token-holder income distribution",
      "Partner onboarding for third-party tokenization",
    ],
    image: imgQ1,
  },
  {
    quarter: "Q2 2026",
    title: "Scaling & Payment Integration",
    points: [
      "Listing on Tier-1 CEX",
      "Rollout of AmeriPay (token-based real estate payment solution)",
      "Expansion to Tier-2 Indian & GCC cities",
    ],
    image: imgQ2,
  },
];

const RoadmapPhase = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  cardsRef.current = [];

  const addToRefs = (el) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        gsap.set(card, {
          yPercent: 100,
          opacity: 0,
        });
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${cardsRef.current.length * 100}%`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          markers: false,
        },
      });

      cardsRef.current.forEach((card) => {
        tl.to(
          card,
          {
            yPercent: 0,
            opacity: 1,
            duration: 4,
            ease: "power2.out",
          },
          ">-0.8"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen bg-[#0e0e0e] overflow-hidden"
    >
      {/* Roadmap Heading */}
      <h2 className="absolute top-0 w-full text-center text-2xl md:text-4xl font-semibold text-[#E7B764] py-6 z-20">
        Roadmap
      </h2>

      {/* Cards Container */}
      <div className="relative w-full h-full  flex flex-col items-center justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center px-4 md:px-10 py-10"
          >
            <div className="bg-[#111111] text-white border border-[#E7B764] rounded-lg p-4 md:p-8 w-full h-[400px] max-w-full flex flex-col lg:flex-row gap-8 items-center">
              {/* Left: Text */}
              <div className="lg:w-1/2  space-y-2">
                <h2 className="text-lg md:text-4xl font-bold text-[#E7B764]">
                  {card.quarter}
                </h2>
                <h3 className="text-md md:text-xl font-semibold text-[#E7B764] underline">
                  {card.title}
                </h3>
                <ul className="list-disc pl-5 text-sm md:text-base font-montserrat font-medium">
                  {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Right: Image */}
              <div className="lg:w-1/2 flex justify-center items-center">
                <img
                  src={card.image}
                  loading="lazy"
                  alt={card.quarter}
                  className="w-full max-w-sm md:max-w-lg rounded-md object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoadmapPhase;
