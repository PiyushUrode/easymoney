
import heroimg from "../assets/roadmap/ameriicon.png";
import herovideo from "../assets/video/Roadmap.mp4";
import icon from "../assets/roadmap/roadmap_text.png";

const Roadmaphero = () => {
  return (
    <section className="relative w-full flex flex-col justify-center align-middle items-center -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-40"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Dark Overlay for better text visibility */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-[1]" /> */}

      {/* Overlay Content */}
      <div className="relative  w-full h-full flex flex-col justify-between items-center py-10 lg:py-20 px-4">
        
        {/* Top Content */}
        <div className="flex flex-col items-center text-center w-full">
          <img src={icon} alt="Roadmap Text" className="w-auto h-auto   md:max-w-xl mb-6" />
          <img
            src={heroimg}
            alt="Golden City Skyline"
            className="w-full max-w-full lg:max-w-xl object-contain"
          />
        </div>

        {/* H1 Text */}
        <div className="pt-10 px-4 w-full flex justify-center">
          <h1 className="text-base sm:text-lg md:text-xl text-white font-montserrat font-normal max-w-2xl text-center leading-relaxed capitalize">
            AmeriCoin offers income-sharing, staking rewards, and governance rights—backed by premium properties in Dubai and India.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Roadmaphero;
