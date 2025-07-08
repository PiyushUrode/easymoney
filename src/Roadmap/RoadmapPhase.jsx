import React from "react";
import PropTypes from "prop-types";


// Placeholder images – replace with real paths
import imgQ3 from "../assets/roadmap/phase1.png";
import imgQ4 from "../assets/roadmap/phase2.png";
import imgQ1 from "../assets/roadmap/phase3.png";
import imgQ2 from "../assets/roadmap/phase4.png";

// 1. Card data array
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

const RoadmapCard = ({ quarter, title, points, image }) => (
  <div className="bg-black text-white border border-yellow-600 rounded-md p-2 p-6 py-10 flex flex-col lg:flex-row items-center gap-10 mb-10">
    <div className="lg:w-1/2 space-y-2 md:space-y-4">
      <h2 className=" text-md md:text-3xl font-bold text-yellow-400">{quarter}</h2>
      <h3 className=" text-sm md:text-lg font-semibold text-yellow-300">{title}</h3>
      <ul className="list-disc list-inside text-xs md:text-sm space-y-1 text-gray-300">
        {points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    </div>
    <div className="lg:w-1/2 mt-6 md:mt-0 flex justify-end items-center">
      <img src={image} alt={quarter} className="lg:max-w-xl" />
    </div>
  </div>
);

RoadmapCard.propTypes = {
  quarter: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  points: PropTypes.arrayOf(PropTypes.string).isRequired,
  image: PropTypes.string.isRequired,
};


// 3. Main Roadmap section
const RoadmapPhase = () => {
  return (
    <section className="bg-[#0e0e0e] px-6 py-10 md:px-20">
      {cards.map((card, index) => (
        <RoadmapCard key={index} {...card} />
      ))}
    </section>
  );
};




export default RoadmapPhase