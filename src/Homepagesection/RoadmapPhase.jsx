import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import img1 from "../assets/roadmap/r1.jpg";
import img2 from "../assets/roadmap/r2.jpg";
import img3 from "../assets/roadmap/r3.jpg";
import img4 from "../assets/roadmap/r4.jpg";
import img5 from "../assets/roadmap/r5.jpg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    quarter: "Q3 2025",
    title: "Phase 1",
    pointsH1: "Foundation & Token Launch",
    points: [
      "Token Development on BEP-20 Network (100M supply, 18 decimals).",
      "Launch of Token Convert Module (USDT → EMGT).",
      "Whitepaper release.",
      "Implementation of Locking & Vesting Mechanism (tokens locked till presale ends, 6-month vesting).",
      "Website & Dashboard live on Emtoken.io."
    ],
    image: img1,
  },
  {
    quarter: "Q4 2025",
    title: "Phase 2",
    pointsH1: "Ecosystem Build-Up",
    points: [
      "Launch of Forex & Crypto Trading Integration using EMGT Token.",
      "Merchant payment module for businesses to accept EMGT Tokens.",
      "Partnerships with gift card distributors.",
      "Mobile wallet app with integrated swap & staking features."
    ],
    image: img2,
  },
  {
    quarter: "Q1 2026",
    title: "Phase 3",
    pointsH1: "EM Global Card & Real-World Adoption",
    points: [
      "Issue EM Global Card (VISA/Mastercard-powered).",
      "Enable real-world spending at global merchants.",
      "Expansion of cross-border payment services.",
      "Loyalty & cashback program for cardholders."
    ],
    image: img3,
  },
  {
    quarter: "Q3 2026",
    title: "Phase 4",
    pointsH1: "Gift Card Marketplace & Staking",
    points: [
      "Full launch of Gift Card Marketplace supporting global brands.",
      "Staking and rewards programs live with flexible lock-in periods.",
      "Onboard 100+ merchants for EMGT Token acceptance."
    ],
    image: img4,
  },
  {
    quarter: "Q3 2026",
    title: "Phase 5",
    pointsH1: "Multi-Chain & Institutional Expansion",
    points: [
      "Multi-chain token support (Ethereum, Solana, Polygon).",
      "Integration with institutional payment rails and forex platforms.",
      "NFT-based loyalty program and premium card services.",
      "Target 1M+ users and $500M+ ecosystem transactions."
    ],
    image: img5,
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
      className="relative w-full h-screen overflow-hidden"
      id="roadmap"
    >
      {/* Roadmap Heading */}
      <h2 className="absolute top-0 w-full text-center text-2xl md:text-4xl font-semibold text-white py-6 z-20">
        Roadmap
      </h2>

      {/* Cards Container */}
      <div className="relative w-full h-full  flex flex-col items-center justify-center">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={addToRefs}
            className="absolute  top-0 left-0 w-full h-full flex items-center justify-center px-4 md:px-10 py-10"
          >
            <div className="bg-[#423211] z-10 text-white  rounded-lg p-4 md:p-8 w-full min-h-[400px] lg:h-[500px] max-w-full flex flex-col lg:flex-row gap-8 items-center">
              {/* Left: Text */}
              <div className="lg:w-[20%]  space-y-2">
                                <h3 className="text-md md:text-xl font-montserrat font-medium text-white ">
                    {card.title}
                  </h3>
                <h2 className="text-lg md:text-4xl font-bold text-[#FFA100] font-montserrat font-semibold">
                  {card.quarter}
                </h2>


              </div>

              {/* center: Image */}
<div className="relative lg:w-[40%] flex justify-center items-center">
  <img
    src={card.image}
    loading="lazy"
    alt={card.quarter}
    className="w-full max-w-sm md:max-w-lg rounded-md  object-contain relative z-10"
  />
  {/* Golden Overlay */}
  {/* <div className="absolute inset-0 bg-[#ffa2006c]  opacity-80 rounded-md"></div> */}
</div>


              {/* right: Image */}
              <div className="lg:w-[40%] flex justify-center items-center">
                <div className="  space-y-2">
                                <h3 className="text-md md:text-xl lg:text-3xl font-montserrat font-semibold text-white ">
                    {card.pointsH1}
                  </h3>
                               <ul className="list-disc pl-5 text-sm md:text-base font-montserrat font-medium">
                  {card.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default RoadmapPhase;
