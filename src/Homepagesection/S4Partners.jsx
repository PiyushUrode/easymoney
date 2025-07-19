import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

import Str1 from "../assets/partners/c1.webp"
import Str2 from "../assets/partners/c2.webp"
import Str3 from "../assets/partners/c3.webp"
import Str4 from "../assets/partners/c4.webp"
import Str5 from "../assets/partners/c5.webp"
import Str6 from "../assets/partners/c6.webp"

const logos = [Str1, Str2, Str3, Str4, Str5, Str6]

const S4Partners = () => {
  return (
    <div className="py-4 flex flex-col items-center text-center bg-usecase-gradient">
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
              loading="lazy"
              alt={`partner-${index}`}
              className="object-contain w-48"  />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default S4Partners
