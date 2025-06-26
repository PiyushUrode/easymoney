import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const useCasesRow1 = ["Retailers", "Aggregators", "SaaS", "D2C Brands"];
const useCasesRow2 = ["NBFCs", "Gaming", "Travel", "Utility Platforms"];

const Divider = () => (
  <span className="text-green-500 px-3 hidden sm:inline-block">|</span>
);

const UseCases = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="bg-[#042D61] py-14 px-4">
      {/* Heading */}
      <h2
        className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white mb-8"
        data-aos="fade-down"
      >
        USE CASES
      </h2>

      {/* Use Cases Container */}
      <div className="max-w-5xl mx-auto space-y-6 text-center text-white">
        {/* Row 1 */}
        <div
          className="flex flex-wrap justify-around items-center text-base sm:text-2xl font-medium"
          data-aos="fade-up"
        >
          {useCasesRow1.map((item, index) => (
            <React.Fragment key={index}>
              <span data-aos="zoom-in" data-aos-delay={index * 100}>
                {item}
              </span>
              {index !== useCasesRow1.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>

        {/* Row 2 */}
        <div
          className="flex flex-wrap justify-around items-center text-base sm:text-2xl font-medium"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {useCasesRow2.map((item, index) => (
            <React.Fragment key={index}>
              <span data-aos="zoom-in" data-aos-delay={index * 100}>
                {item}
              </span>
              {index !== useCasesRow2.length - 1 && <Divider />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
