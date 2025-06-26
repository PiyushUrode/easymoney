import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import d1 from "../assets/dev/d1.png";
import d2 from "../assets/dev/d2.png";
import d3 from "../assets/dev/d3.png";
import d4 from "../assets/dev/d4.png";
import d5 from "../assets/dev/d5.png";
import d6 from "../assets/dev/d6.png";
import d7 from "../assets/dev/d7.png";

const S7DeveloperApi = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const apiFeatures = [
    { title: "Build Payment Workflows That Fit Your Stack", img: d1 },
    { title: "Full documentation with live sandbox", img: d2 },
    { title: "Merchant onboarding API", img: d3 },
    { title: "Transaction API (pay-in + payout)", img: d4 },
    { title: "Settlement and refund API", img: d5 },
    { title: "Custom webhooks", img: d6 },
    { title: "API key-based authentication", img: d7 }
  ];

  return (
    <section className="bg-white text-center px-4 py-12 " id="dev">
      <h2
        className="text-[14px] md:text-[16px] font-bold uppercase text-[#042D61] mb-2 tracking-wide"
        data-aos="fade-down"
      >
        Developer API Kit
      </h2>
      <h3
        className="text-[#008001] font-semibold text-lg md:text-xl mb-10"
        data-aos="fade-up"
      >
        Build Payment Workflows That Fit Your Stack
      </h3>

      <div className="flex flex-row justify-center items-center align-middle flex-wrap gap-x-20 gap-y-10 max-w-6xl mx-auto">
        {apiFeatures.map((feature, index) => (
          <div key={index} className="flex justify-center w-full sm:w-auto">
            <article
              tabIndex="0"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="border border-green-600 rounded-lg p-6 flex flex-col items-center shadow-sm hover:shadow-md transition duration-300 w-[300px] h-[170px]"
            >
              <img
                src={feature.img}
                alt={`Icon representing ${feature.title}`}
                className="w-12 h-12 mb-4"
              />
              <h1 className="text-blue-900 font-bold text-md text-center leading-relaxed">
                {feature.title}
              </h1>
            </article>
          </div>
        ))}
      </div>
    </section>
  );
};

export default React.memo(S7DeveloperApi);
