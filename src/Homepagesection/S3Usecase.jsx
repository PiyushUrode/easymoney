import React, { useRef, useState ,useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {   EffectFade, Navigation, Pagination, Autoplay, Controller } from "swiper/modules";


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../Style/usecase.css";

import tradingMain from  "../assets/usecases/new/r1.png";
import defiMain from     "../assets/usecases/new/r2.png";
import nftMain from      "../assets/usecases/new/r3.png";
import img4 from         "../assets/usecases/new/r4.png";
import img5 from         "../assets/usecases/new/r5.png";

// ✅ Slides Data
const slidesData = [
  {
    heading: "Forex & Crypto Trading",
    paragraph:
      "EMGT acts as the base currency for trading tools, enabling users to trade forex and crypto directly, boosting liquidity and minimizing reliance on fiat gateways.",
    mainImage: tradingMain,
    thumbnails: [tradingMain],
  },
  {
    heading: "Global Payment Module",
    paragraph:
      "EMGT enables fast, low-cost cross-border payments, providing a seamless alternative to traditional remittance and banking systems.",
    mainImage: defiMain,
    thumbnails: [defiMain],
  },
  {
    heading: "Gift Card Marketplace",
    paragraph:
      "EMGT can be used to buy digital gift cards from top global brands, turning tokens into real-world value and boosting everyday utility and demand.",
    mainImage: nftMain,
    thumbnails: [nftMain],
  },
  {
    heading: " EMGT Global Card (Debit/Prepaid Card) ",
    paragraph:
      " EMGT integrates with a VISA/Mastercard-powered card, enabling seamless token spending worldwide.It bridges DeFi and traditional retail for everyday transactions.",
    mainImage: img4,
    thumbnails: [img4],
  },
  {
    heading: "Staking & Rewards",
    paragraph:
      "Users can stake EMGT tokens to earn passive rewards, with flexible lock-in options that promote long-term holding, security, and liquidity.",
    mainImage: img5,
    thumbnails: [img5],
  },

  {
    heading: "Token Utility in Ecosystem Apps",
    paragraph:
      "EMGT powers key ecosystem apps like mobile wallets, swap modules, and merchant tools, ensuring constant utility and making it the core of a growing digital infrastructure.",
    mainImage: img4,
    thumbnails: [img4],
  },
];


const UseCaseSlider = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);

  // ✅ Connect both swipers
  useEffect(() => {
    if (mainSwiperRef.current && thumbsSwiperRef.current) {
      mainSwiperRef.current.controller.control = thumbsSwiperRef.current;
      thumbsSwiperRef.current.controller.control = mainSwiperRef.current;
    }
  }, []);

  return (
    <>
      <div className="flex flex-col items-center usecasebg justify-center py-10 bg-gradient-to-br from-black via-[#0a0a0f] to-black relative overflow-hidden" id="usecase">
        {/* Title */}
        <div className="flex justify-center items-center mb-16 relative ">
          <h1 className="font-montserrat font-medium text-3xl lg:text-4xl text-white z-10">
            Use Cases of EM Global Token ({" "}
            <span className="text-yellow-500">EMGT</span> )
          </h1>
        </div>

        {/* Shapecut Background (Right Side) */}
        <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full shapecut bg-no-repeat bg-right bg-cover "></div>

        {/* White + Yellow Circle (Center) */}
       <div className="absolute hidden md:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
  {/* Outer Circle */}
  <div className="w-32 h-32 lg:w-44 lg:h-44 rounded-full bg-black flex items-center justify-center shadow-2xl">
    
    {/* Middle Circle */}
    <div className="w-24 h-24 lg:w-40 lg:h-40 rounded-full circlebg flex items-center justify-center shadow-xl">
      
      {/* Inner Circle */}
      <div className="w-16 h-16 lg:w-28 lg:h-28 rounded-full bg-black flex items-center justify-center shadow-lg">
        
        {/* Core Circle */}
        <div className="w-10 h-10 lg:w-16 lg:h-16 rounded-full bg-white shadow-md"></div>
      
      </div>
    </div>
  </div>
</div>


        {/* Main Grid */}
        <div className="w-full max-w-screen-2xl h-full px-10 py-10 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative ">
          {/* LEFT SECTION */}
          <div className="flex flex-col  w-full h-full gap-20  justify-center text-center lg:text-left overflow-hidden">
            {/* Heading + Paragraph */}
            <div className=" transition-all duration-700">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-montserrat font-medium  text-[#FFA100]  ">
                {slidesData[activeSlideIndex].heading}
              </h1>
              <p className="text-base sm:text-lg text-[#ffffffb9]  font-montserrat font-normal leading-relaxed max-w-lg mx-auto lg:mx-0">
                {slidesData[activeSlideIndex].paragraph}
              </p>
            </div>

<div className="flex flex-col gap-2 mt-10 h-auto">
  {/* Thumbnail Slider */}
  <Swiper
    onSwiper={(swiper) => (thumbsSwiperRef.current = swiper)}
    spaceBetween={3}
    // slidesPerView={3}
    loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
    pagination={{ clickable: true }}
    // navigation={true}
    modules={[Navigation, Pagination, Autoplay, Controller]}
    className="my-thumbs-swiper w-full h-[300px] relative cursor-pointer" // 👈 height fixed
    onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
    breakpoints={{
      320: { slidesPerView: 1, spaceBetween: 10 },
      480: { slidesPerView: 2, spaceBetween: 15 },
      768: { slidesPerView: 3, spaceBetween: 20 },
    }}
  >
    {slidesData.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="flex justify-center items-center h-full  px-2">
          {slide.thumbnails.map((thumbSrc, i) => (
            <img
              key={i}
              src={thumbSrc}
              alt={`Thumbnail ${index + 1}-${i + 1}`}
              className={`w-full h-[70%] object-cover rounded-lg  transition-all duration-300 border-2 card-3d shadow-md ${
                activeSlideIndex === index
                  ? "border-yellow-500 scale-105 shadow-yellow-400/50"
                  : "border-yellow-700 opacity-70 hover:opacity-100"
              }`}
            />
          ))}
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

          </div>

          {/* RIGHT SECTION */}
          <div className="relative w-full flex justify-center lg:justify-end items-center">
            <Swiper
              onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
              modules={[Autoplay, EffectFade, Controller , ]}
              effect="fade"
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              slidesPerView={1}
              className="my-main-swiper max-w-md lg:max-w-lg  relative"
              onSlideChange={(swiper) => setActiveSlideIndex(swiper.realIndex)}
            >
              {slidesData.map((slide, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={slide.mainImage}
                    alt={slide.heading}
                    className="w-full  h-[350px] object-contain rounded-xl  relative  
                    
                    "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default UseCaseSlider;
