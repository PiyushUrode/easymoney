import React from "react";
import heroimg from "../assets/hero/hero1.png";
import herovideo from "../assets/video/herovideo.mp4";
import icon from "../assets/hero/AMERICOINTEXT.png"; 

const S1Hero = () => {
  return (
    <>

    <section className="relative w-full h-[100dvh] md:h-full justify-center flex  gap-20 py-10 lg:py-20 px-5 md:px-10 lg:px-20 overflow-hidden" id="home">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover  md:object-contain "
      >
        <source src={herovideo} type="video/mp4" />
      </video>



      {/* Hero Content */}
      <div className="relative  flex  flex-col justify-center items-center  text-center">
        {/* Title */}
        <div className="flex flex-col gap-4 justify-center items-center align-middle">  
 <img src={icon} alt="" className="   md:max-w-xs" />

        {/* Subtext */}
        <p className="text-sm md:text-lg lg:text-2xl tracking-wider  text-[#D6D6D6]  font-gilroyR">
          Real Estate Meets Blockchain
        </p>
        </div>

        {/* Skyline */}
        <img
          src={heroimg}
          alt="Golden City Skyline"
          className="w-full max-w-m lg:max-w-4xl  object-cover md:object-contain mb-10 px-4"
        />

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 ">
          <button className="bg-[#E7B764] text-black px-6 py-1  text-lg hover:brightness-110 transition-all font-gilroyR border border-[#E7B764]">
            Buy Token
          </button>
          <button className="border border-[#E7B764] text-white text-lg px-6 py-1  hover:bg-white hover:text-black transition-all font-gilroyR">
            Whitepaper
          </button>
        </div>
      </div>


            <div className="w-full h-10 bg-black absolute bottom-0 left-0  hidden md:block backdrop-blur-2xl  "></div>
      {/* Bottom Blur Strip */}

    </section>




          </>
  );
};

export default S1Hero;
