import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import bg11 from "../assets/dev/bg-11.jpg"



import d1 from "../assets/dev/d1.webp";
import d2 from "../assets/dev/d2.webp";
import d3 from "../assets/dev/d3.webp";
import d4 from "../assets/dev/d4.webp";
import d5 from "../assets/dev/d5.webp";
import d6 from "../assets/dev/d6.webp";
import d7 from "../assets/dev/d7.webp";

const S7DeveloperApi = () => {
  const [features, setFeatures] = useState([
    { title: "Build Payment Workflows That Fit Your Stack", img: d1  },
    { title: "Full documentation with live sandbox", img: d2 },
    { title: "Merchant onboarding API", img: d3 },
    { title: "Transaction API (pay-in + payout)", img: d4 },
    { title: "Settlement and refund API", img: d5 },
    { title: "Custom webhooks", img: d6 },
    { title: "API key-based authentication", img: d7 },
  ]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Shuffle logic to change card position every 5 seconds
    const interval = setInterval(() => {
      setFeatures(prev => {
        const shuffled = [...prev];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>


      <section className="bg-white text-center px-4 py-12" id="developer">
        <h2 className="text-[14px] md:text-[16px] font-bold uppercase text-[#042D61] mb-2 tracking-wide" data-aos="fade-down">
          Developer API Kit
        </h2>
        <h3 className="text-[#008001] font-semibold text-lg md:text-xl mb-10" data-aos="fade-up">
          Build Payment Workflows That Fit Your Stack
        </h3>

        <div className="flex flex-col gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-6 border border-green-600 rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300`}
            >
              <img
                src={feature.img}
                alt={feature.title}
                className="w-16 h-16 hover:animate-bounce"
              />
              <h1 className="text-blue-900 font-bold text-md text-center md:text-left leading-relaxed">
                {feature.title}
              </h1>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default React.memo(S7DeveloperApi);
