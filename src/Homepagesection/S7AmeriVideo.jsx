import amerilogo from "../assets/logo/logo_hr_lght.png";
import Buildingvideo from "../assets/faq/building.mp4";

import 'swiper/css';
import 'swiper/css/autoplay';

const S7AmeriVideo = () => {
  return (
    <div className="w-full max-h-svh  flex flex-col items-center justify-center">
      
      {/* Logo Section */}
      {/* Logo Section with blur and background */}
<div className="relative w-full w-2/3 max-w-[10rem] md:max-w-md lg:max-w-lg">
  <div className="absolute inset-0 bg-black/50 w-full  backdrop-blur-[23px] rounded-xl z-0"></div>
  
  <img
    src={amerilogo}
    alt="amerilogo"
    className="relative z-10 w-full h-auto object-contain"
  />
</div>


      {/* Video Section */}
      <div className="w-full  aspect-video rounded-lg overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={Buildingvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default S7AmeriVideo;
