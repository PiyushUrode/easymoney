import React from "react";
import heroimg from "../assets/hero/hero1.webp";
import herovideo from "../assets/video/herovideo.webm";
import icon from "../assets/hero/AMERICOINTEXT.webp";

const S1Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] md:h-auto flex justify-center items-center px-5 md:px-10 lg:px-20 overflow-hidden bg-black -z-10"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        preload="none"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col justify-center items-center text-center gap-6 py-10 lg:py-20">
        {/* Hero Icon */}
        <img
          src={icon}
          alt="Americoin Text"
          loading="lazy"
          decoding="async"
          className="w-auto max-w-xs md:max-w-md lg:max-w-lg"
        />

        {/* Sub Heading */}
        <p className="text-sm md:text-lg lg:text-2xl text-[#D6D6D6] font-gilroyR tracking-wide">
          Real Estate Meets Blockchain
        </p>

        {/* Hero Image */}
        <img
          src={heroimg}
          alt="Golden City Skyline"
          loading="lazy"
          decoding="async"
          className="w-full max-w-xl md:max-w-2xl lg:max-w-4xl object-contain mb-6 px-4"
        />

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-[#E7B764] text-black px-6 py-2 text-lg font-gilroyR hover:brightness-110 transition-all border border-[#E7B764]">
            Buy Token
          </button>
          <button className="border border-[#E7B764] text-white px-6 py-2 text-lg font-gilroyR hover:bg-white hover:text-black transition-all">
            Whitepaper
          </button>
        </div>
      </div>
    </section>
  );
};

export default React.memo(S1Hero);
