import React from 'react';
import T1 from "../assets/contract/Solidproff.png"; // Your image path

const S8TrustedSignal = () => {
  return (
    <div className="w-full  flex flex-col gap-2 md:gap-10 items-center justify-center bg-black px-4 py-5 md:py-10  lg:py-20">
      
      {/* Top Heading */}
      <h1 className="text-[#E7B764] text-2xl md:text-4xl font-montB mb-4 text-center">
        Trust Signals
      </h1>

      {/* Subheading */}
      <h2 className="text-[#E7B764] text-xl md:text-2xl font-monrR  text-center">
        AUDITED BY
      </h2>

      {/* Logo & Text Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <img
          src={T1}
          alt="Solid Proof"
          className="w-28 md:w-48 object-contain"
        />

        <h1 className="text-white text-[7vw] font-latoB tracking-tighter">
          <span className=" text-white">SOLID</span>
                    <span className=" font-light text-white">Proof</span>

        </h1>
      </div>
    </div>
  );
};

export default S8TrustedSignal;
