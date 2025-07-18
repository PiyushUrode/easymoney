import herovideo from "../assets/video/tokenomics.mp4";
import icon from "../assets/tokenomics/TOKONOMICS.png";
import tokenchart from "../assets/tokenomics/tokenchart.png";

const TokenHero = () => {
  return (
    <section className="relative w-full h-full py-20 md:py-0    -z-10 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-20"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col   items-center justify-between h-full px-4   md:py-10">
        
        {/* Top Icon */}
        <img
          src={icon}
          alt="Tokenomics Icon"
          className="max-w-[180px] md:max-w-[320px]  object-contain"
        />

        {/* Center Chart */}
        <div className="flex-grow flex items-center justify-center w-full">
          <img
            src={tokenchart}
            alt="Token Chart"
            className="w-full max-w-2xl lg:max-w-3xl h-auto rounded-lg"
          />
        </div>
      </div>

      {/* Bottom Blur Strip */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 backdrop-blur-xl" />
    </section>
  );
};

export default TokenHero;
