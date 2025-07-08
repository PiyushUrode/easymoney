import Americoinvideo from "../assets/faq/americoinvideo.mp4";
import Buildingvideo from "../assets/faq/building.mp4";

import 'swiper/css';
import 'swiper/css/autoplay';

const S7AmeriVideo = () => {
  return (
    <div className="w-full bg-black flex flex-col items-center gap-6 px-4 py-8">
      
      {/* First Video - Force into rectangle even if original is square */}
      <div className="w-full max-w-7xl aspect-video rounded-lg overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={Americoinvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Second Video - Already working fine, keep as-is */}
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
