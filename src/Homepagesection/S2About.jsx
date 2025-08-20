import { useEffect } from "react";
import "../index.css"; 
import handTechImage from "../assets/About/EMGTCOIN.png"; 
import abouticon1 from "../assets/About/icon1.png"

const AboutUs = () => {

  useEffect(() => {
    const coin = document.getElementById("coin");

    const handleMouseMove = (e) => {
      const rect = coin.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X inside the element
      const y = e.clientY - rect.top;  // mouse Y inside the element
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 12; // max 10deg
      const rotateY = ((x - centerX) / centerX) * 12; // max 10deg

      coin.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    };

    const resetTransform = () => {
      coin.style.transform = "rotateX(0deg) rotateY(0deg)";
    };

    coin.addEventListener("mousemove", handleMouseMove);
    coin.addEventListener("mouseleave", resetTransform);

    return () => {
      coin.removeEventListener("mousemove", handleMouseMove);
      coin.removeEventListener("mouseleave", resetTransform);
    };
  }, []);

  return (
    <div className=" text-white w-full px-4 md:px-10 lg:px-20 py-14 relative" id="about">
      <div className="absolute top-0 left-0 w-full h-10 bg-black/0 backdrop-blur-xl z-10" />

      <div className="absolute top-[0%] left-0 w-40 h-40 hidden sm:block bg-[#ffa2008f] rounded-full blur-3xl translate-y-[-50%]"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-5">
          <p className="text-[#FFA100] text-sm font-gilroyR">About EMGT</p>

          <h2 className="text-3xl md:text-4xl text-white font-bold leading-snug">
            Introducing EM Global Token <span className="text-[#FFA100]">(EMGT)</span>
          </h2>

          <p className="text-gray-300 text-base leading-relaxed">
            A next-generation token designed for earning, spending, and growing in a unified ecosystem.
          </p>

          <h3 className="text-[#FFA100] text-lg font-open font-bold tracking-wide">
            One Ecosystem. Infinite Possibilities.
          </h3>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed font-montserrat font-normal">
            EM Global Token (EMGT) aims to simplify and grow your earnings with real utility, smart automation, 
            and passive income — creating a sustainable ecosystem where every interaction benefits you.
          </p>

          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-3 font-montserrat font-medium">Why EMGT?</h4>
            <ul className="space-y-2 text-sm md:text-base text-white">
              <li className="flex items-start gap-2 font-montserrat font-normal">
                <span className="text-[#FFA100] mt-1"> <img src={abouticon1} alt="" width={20} /> </span> Multi-stream income mode
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFA100] mt-1"> <img src={abouticon1} alt="" width={20} /> </span> Global partner integration
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFA100] mt-1"> <img src={abouticon1} alt="" width={20} /> </span> Seamless real-world usage
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#FFA100] mt-1"> <img src={abouticon1} alt="" width={20} /> </span> Transparent, decentralized architecture
              </li>
            </ul>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <img
            src={handTechImage}
            alt="EMGT Technology"
            className="w-full max-w-md object-contain coin-hover"
            id="coin"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
