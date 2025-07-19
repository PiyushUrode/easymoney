import heroimg from "../assets/roadmap/ameriicon.webp";
import herovideo from "../assets/video/Roadmap.webm";
import icon from "../assets/roadmap/roadmap_text.webp";

const Roadmaphero = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center overflow-hidden -z-30 ">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 opacity-30"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 w-full max-w-7xl px-4 py-16 lg:py-24 flex flex-col items-center justify-center text-center">
        
        {/* Title Icon */}
        <img
          src={icon}
          alt="Roadmap Text"
          width={600}
          height={120}
          loading="lazy"
          className="max-w-full h-auto mb-6"
        />

        {/* Hero Image */}
        <img
          src={heroimg}
          alt="Golden City Skyline"
          width={600}
          height={300}
          loading="lazy"
          className="max-w-full h-auto object-contain"
        />

        {/* Heading Text */}
        <h1 className="mt-10 text-base sm:text-lg md:text-xl text-white font-montserrat font-normal max-w-3xl leading-relaxed">
          AmeriCoin offers income-sharing, staking rewards, and governance rights—
          backed by premium properties in Dubai and India.
        </h1>
      </div>
    </section>
  );
};

export default Roadmaphero;
