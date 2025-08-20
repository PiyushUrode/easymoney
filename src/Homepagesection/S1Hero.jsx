import React from "react";
import { ArrowRight } from "lucide-react";
import herovideo from "../assets/video/herovideo1.mp4";
import { useNavigate, Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import "../index.css";



const S1Hero = () => {
  
  const navigate = useNavigate();
  return (
    <section id="home" className="relative w-full bg-black text-white overflow-hidden">
      
      {/* Top glow effect */}
      <div className="absolute top-[7%] left-0 w-40 h-40 hidden sm:block bg-[#ffa2008f] rounded-full blur-3xl -translate-y-1/2"></div>

      {/* Right vertical text */}
      <div className="hidden lg:block absolute right-20 top-[90%] -translate-y-1/2 rotate-90 origin-right 
        font-montserrat font-normal text-[42px] leading-[100%] tracking-[0.05em] text-center 
        text-white opacity-100 z-20 px-4 py-2 text-stroke">
        Easy Money Global Token
      </div>

      {/* TOP SECTION (Static, no video) */}
      <div className="relative  flex flex-col justify-center items-center text-center gap-6 py-16 px-5 md:px-10 lg:px-20">
        {/* Top Badge */}
        <div className="px-4 py-1 rounded-full shadow-[0px_0px_10px_4px_#ffa2007e]">
          <h3 className="text-[#FFA100] text-sm md:text-lg font-montserrat font-medium">
            Welcome to EMGT Token
          </h3>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-3xl text-white leading-snug">
          Spend Less, Earn More with EMGT
        </h1>

        {/* Buttons */}
<div className="flex flex-wrap justify-center gap-4">
  {/* Buy Now Button */}
  <div className="flex flex-row gap-0 sm:gap-1 items-center border-2 p-[2px] rounded-full group">
  <Link smooth="true" to="/commingsoon">
    <button
      className="relative rounded-full text-xs md:text-md px-1 md:px-4 py-1 text-white sm:h-full"
      onClick={() => navigate("/commingsoon")}
    >
      BUY NOW
    </button>
  </Link>

  {/* Icon Animation */}
  <div
    className="w-5 md:w-10 h-5 md:h-10 rounded-full bg-white text-black flex justify-center items-center
               transition-all duration-500 ease-in-out 
               group-hover:rotate-90 group-hover:scale-110 group-hover:bg-gray-200"
  >
    <MdOutlineArrowOutward className="transition-transform duration-500 ease-in-out" />
  </div>
</div>


  {/* Whitepaper Button */}
  <a className="bg-[#FFA10033] text-white px-6 py-2 text-sm font-gilroyR flex flex-row justify-center items-center gap-4 rounded-full 
                     hover:brightness-110 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out"
                     
                     href="https://emgt.gitbook.io/emgt-docs"
  target="_blank"
  rel="noopener noreferrer"
                     >

    Whitepaper <FaArrowRight className="transition-transform duration-500 ease-in-out hover:translate-x-1" />
  </a>
</div>

      </div>

      {/* BOTTOM SECTION (Video with fade overlays) */}
      <div className="relative w-full h-[45vh] md:h-[50vh] overflow-hidden flex flex-col justify-center items-start px-5 md:px-20 text-center">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          preload="none"
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover "
        >
          <source src={herovideo} type="video/mp4" />
        </video>

        {/* Black overlay on top (fix line issue) */}
        <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-black to-transparent z-10"></div>

        {/* Black overlay at bottom (blur/fade like Figma) */}
        {/* <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black via-black/70 to-transparent z-10"></div> */}

        {/* Foreground content */}
        <div className="relative z-20 flex flex-col justify-start gap-4">
          <button className="flex w-fit items-center gap-2 text-white  hover:brightness-110 hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out bg-white bg-opacity-10 border border-white rounded-full px-5 py-2 hover:bg-opacity-20 transition-all text-sm md:text-base">
            Explore <ArrowRight size={18} className=" transition-transform duration-500 ease-in-out hover:translate-x-1"  />
          </button>
          <p className="text-white text-xs md:text-sm max-w-[17rem] opacity-80 text-left">
            🔗 Earn Daily | Spend Globally | Grow Passively | 100M Supply 🔗
          </p>
        </div>
      </div>
    </section>
  );
};

export default React.memo(S1Hero);
