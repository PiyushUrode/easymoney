import React from "react";
import heroimg from "../assets/roadmap/ameriicon.png";
import herovideo from "../assets/video/Roadmap.mp4";
import icon from "../assets/roadmap/roadmap_text.png"; 

const Roadmaphero = () => {
  return (
    <>

    <section className="relative w-full   gap-20 py-10 lg:py-20  overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={herovideo} type="video/mp4" />
      </video>



      {/* Hero Content */}
      <div className="relative z-20 flex gap-3 flex-col justify-center items-center  text-center">
        {/* Title */}
 <img src={icon} alt="" className="   md:max-w-xs   " />


        {/* Skyline */}
        <img
          src={heroimg}
          alt="Golden City Skyline"
          className="w-full max-w-m lg:max-w-2xl  object-cover md:object-contain mb-10 px-4"
        />


      </div>



    </section>




          </>
  );
};


export default Roadmaphero