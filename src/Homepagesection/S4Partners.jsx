import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import Str1 from "../assets/partners/img1.png"
import Str2 from "../assets/partners/img2.png"
import Str3 from "../assets/partners/img3.png"
import Str4 from "../assets/partners/img4.png"
import Str5 from "../assets/partners/img5.png"
import Str6 from "../assets/partners/img6.png"

const logos = [Str1, Str2, Str3, Str4, Str5, Str6]

const S4Partners = () => {
  return (
    <div className="py-10 flex flex-col items-center text-center bg-black">
      {/* Responsive heading */}
      <h1 className="text-center text-xl sm:text-2xl md:text-4xl font-montserrat font-bold text-gradient-gold mb-12 tracking-wide">
        STRATEGIC PARTNERS
      </h1>

      {/* Swiper */}
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={4000}
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          0: { slidesPerView: 2 },       // very small screens
          480: { slidesPerView: 3 },     // small phones
          768: { slidesPerView: 4 },     // tablets
          1024: { slidesPerView: 5 },    // desktops
        }}
        className="w-full "
      >
        {logos.concat(logos).map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`partner-${index}`}
              className="object-contain w-48"  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default S4Partners
