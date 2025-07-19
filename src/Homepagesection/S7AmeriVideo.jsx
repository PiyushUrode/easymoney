
import Buildingvideo from "../assets/video/building.webm";
import ameritext from "../assets/video/ameritext.webm"

import 'swiper/css';
import 'swiper/css/autoplay';

const S7AmeriVideo = () => {
  return (
    <div className="w-full max-h-screen flex flex-col items-center justify-center">
      
      {/* Logo Section */}
      {/* Logo Section with blur and background */}
<div className="relative w-full pb-10 max-w-[20rem] md:max-w-md lg:max-w-3xl">
  {/* <div className="absolute inset-0 bg-black/50 w-full  backdrop-blur-[23px] rounded-xl z-0"></div> */}
  
  {/* <img
    src={amerilogo}
    alt="amerilogo"
    className="relative z-10 w-full h-auto object-contain"
  /> */}

     <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-contain"
        >
          <source src={ameritext} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
</div>


       {/* Video Section */}
      <div className="w-full  aspect-video rounded-lg overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-45"
        >
          <source src={Buildingvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};

export default S7AmeriVideo;
