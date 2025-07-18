import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import S7AmeriVideo from "../Homepagesection/S7AmeriVideo";

import imgQ3 from "../assets/roadmap/phase1.png";
import imgQ4 from "../assets/roadmap/phase2.png";
import imgQ1 from "../assets/roadmap/phase3.png";
import imgQ2 from "../assets/roadmap/phase4.png";

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

const RoadmapCard = ({ quarter, title, points, image, index }) => {
  const cardRef = useRef();

  useEffect(() => {
    const el = cardRef.current;
    gsap.fromTo(
      el,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="roadmap-card bg-black text-white border border-[#E7B764] rounded-md p-2 md:p-6 py-10 flex flex-col lg:flex-row items-center gap-10 mb-10"
    >
      <div className="lg:w-1/2 space-y-2 gap-2 flex flex-col md:space-y-4">
        <h2 className="text-md md:text-5xl font-bold text-[#E7B764]">
          {quarter}
        </h2>
        <h3 className="text-sm md:text-lg font-semibold text-[#E7B764] underline">
          {title}
        </h3>
        <ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-white font-montserrat font-medium">
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
      <div className="lg:w-1/2 mt-6 md:mt-0 flex justify-center items-center">
        <img src={image} alt={quarter} className="lg:max-w-xl" />
      </div>
    </div>
  );
};

const RoadmapPhase = () => {
  return (
    <>
      <section className="bg-[#0e0e0e] px-6 py-10 md:px-20 w-full">
        {cards.map((card, index) => (
          <RoadmapCard key={index} index={index} {...card} />
        ))}
      </section>
      <S7AmeriVideo />
    </>
  );
};

export default RoadmapPhase;
