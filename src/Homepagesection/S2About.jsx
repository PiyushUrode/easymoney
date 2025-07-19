import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import ab1 from "../assets/About/About1.webp";
import ab2 from "../assets/About/about2.webp";
import ab3 from "../assets/About/about3.webp";
import "../index.css"; // where your .text-gradient-gold class is defined
import S4Partners from "./S4Partners";

const AboutUs = () => {
  return (
    <>   
          <div> <S4Partners /></div>
   
    <div className="bg-[#141414] text-white w-full px-4 md:px-10 py-10">
      <h2  id="about" className="text-center text-xl sm:text-2xl md:text-5xl font-montserrat font-medium text-gradient-gold mb-14 tracking-wide">
        ABOUT US
      </h2>

      <div className="grid lg:grid-cols-2 border border-[#4A4A4A] overflow-hidden rounded-xl">
        {/* Left Panel */}
        <div className="border-b lg:border-b-0 lg:border-r border-[#4a4a4a] p-6 md:p-10 flex flex-col justify-center items-start text-left space-y-4">
          <h3 className="text-gradient-gold text-3xl md:text-5xl font-montserrat font-medium max-w-xs">
            What Is AmeriCoin?
          </h3>
          <p className="text-base md:text-xl text-[#d0d0d0] leading-relaxed font-gilroyL max-w-xl tracking-tight">
            AmeriCoin (AMERI) is a BEP-20 token built on the BNB Smart Chain,
            designed to revolutionize real estate investment by enabling global
            access to luxury properties in Dubai and India. Token holders
            benefit from profit-sharing, staking rewards, and governance rights.
          </p>
          <ul className="list-disc pl-5 space-y-1 text-sm md:text-base text-[#cccccc]">
            <li>Real-world asset backing</li>
            <li>Community-driven decision-making</li>
            <li>Passive income through staking and rentals</li>
            <li>Scalable and secure BEP-20 token</li>
          </ul>
        </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px">
  {/* CARD 1 - ID 1 */}
  <div className="order-1 sm:order-none bg-[#1c1c1c] p-5 flex flex-col justify-between min-w-[300px] min-h-[180px]" id="1">
    <p className="text-base sm:text-lg text-white font-gilroyL mb-4">Real-World Asset Backing</p>
    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
      <FiArrowUpRight className="text-white text-lg" />
    </div>
  </div>

  {/* CARD 2 - ID 2 */}
  <div className="order-2 sm:order-none bg-[#1c1c1c] min-w-[300px]" id="2">
    <img src={ab1} alt="Passive Income" className="w-full h-full object-cover"  loading="lazy" decoding="async" />
  </div>

  {/* CARD 3 - ID 3 (we want it to appear after ID 4 on mobile) */}
  <div className="order-4 sm:order-none bg-[#1c1c1c] min-w-[300px]" id="3">
    <img src={ab2} alt="Passive Income" className="w-full h-full object-cover" loading="lazy" decoding="async" />
  </div>

  {/* CARD 4 - ID 4 (should appear before ID 3 on mobile) */}
  <div className="order-3 sm:order-none bg-[#1c1c1c] p-5 flex flex-col justify-between min-h-[180px] min-w-[300px]" id="4">
    <p className="text-base sm:text-lg text-white font-gilroyL mb-4">Passive income through staking and rentals</p>
    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
      <FiArrowUpRight className="text-white text-lg" />
    </div>
  </div>

  {/* CARD 5 - ID 5 */}
  <div className="order-5 sm:order-none bg-[#1c1c1c] p-5 flex flex-col justify-between min-h-[180px] min-w-[300px]" id="5">
    <p className="text-base sm:text-lg text-white font-gilroyL mb-4">Scalable and secure BEP-20 token</p>
    <div className="w-10 h-10 border border-white rounded-full flex items-center justify-center">
      <FiArrowUpRight className="text-white text-lg" />
    </div>
  </div>

  {/* CARD 6 - ID 6 */}
  <div className="order-6 sm:order-none bg-[#1c1c1c] min-w-[300px]" id="6">
    <img src={ab3} alt="Passive Income" className="w-full h-full object-cover" loading="lazy" decoding="async" />
  </div>
</div>


      </div>
    </div>
 
  </>
  );
};

export default AboutUs;
