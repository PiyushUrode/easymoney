
import herovideo from "../assets/video/tokenomics.mp4";
import icon from "../assets/tokenomics/TOKONOMICS.png";

const TokenHero = () => {
  return (
    <section className="relative w-full h-[100dvh]  overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src={herovideo} type="video/mp4" />
      </video>

      {/* Overlay Content */}
      <div className="relative  w-full h-full flex items-start justify-center pt-10 px-4">
        <img
          src={icon}
          alt="Tokenomics"
          className="max-w-[200px] md:max-w-[400px] lg:max-w-[500px]"
        />
      </div>

      {/* Bottom Blur Strip */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black bg-opacity-50 backdrop-blur-xl " />
    </section>
  );
};

export default TokenHero;
