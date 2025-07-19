import herovideo from "../assets/video/tokenomics.webm";
import icon from "../assets/tokenomics/TOKONOMICS.webp";
import tokenchart from "../assets/tokenomics/tokenchart.webp";

const TokenHero = () => {
  return (
    <section className="relative w-full h-full overflow-hidden py-20 md:py-0  -z-30">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        preload="metadata"
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full max-w-7xl mx-auto px-4 py-12">
        {/* Top Icon */}
        <img
          src={icon}
          alt="Tokenomics Icon"
          width={300}
          height={80}
          loading="lazy"
          className="max-w-full h-auto "
        />

        {/* Token Chart */}
        <img
          src={tokenchart}
          alt="Token Chart"
          width={800}
          height={600}
          loading="lazy"
          className="max-w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Optional Bottom Blur (for effect) */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 backdrop-blur-xl" />
    </section>
  );
};

export default TokenHero;
