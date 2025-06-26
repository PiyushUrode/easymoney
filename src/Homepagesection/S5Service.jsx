import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import serv1 from "../assets/service/1payin.webp";
import serv2 from "../assets/service/2payout.webp";
import serv3 from "../assets/service/3merchant.webp";
import serv4 from "../assets/service/4dev.webp";
import serv5 from "../assets/service/5kyc.webp";

import 'swiper/css';
import 'swiper/css/pagination';

const S5Service = () => {
  const services = [
    {
      id: 1,
      title: 'Pay-In Infrastructure',
      img: serv1,
      features: [
        'Accept payments via UPI, cards, wallets, net banking, EMI, links, QR codes',
        'Dynamic routing & success-rate optimization',
        'Real-time dashboard + reconciliation',
      ],
    },
    {
      id: 2,
      title: 'Payout Solutions',
      img: serv2,
      features: [
        'Instant payouts to UPI, bank accounts & wallets',
        'High success rate with intelligent routing',
        'Bulk and scheduled payout options',
      ],
    },
    {
      id: 3,
      title: 'Merchant Dashboard',
      img: serv3,
      features: [
        'Centralized control panel',
        'Manage API keys, users, and reports',
        'Real-time analytics & performance',
      ],
    },
    {
      id: 4,
      title: 'Developer Friendly APIs',
      img: serv4,
      features: [
        'Well-documented API references',
        'Webhook integration & sandbox support',
        'Developer-first SDKs in multiple languages',
      ],
    },
    {
      id: 5,
      title: 'KYC & Compliance',
      img: serv5,
      features: [
        'Fast & secure merchant onboarding',
        'Automated document verification',
        'RBI & regulatory compliant processes',
      ],
    },
  ];

  const ServiceCard = ({ title, features, img, bgClass, isActive ,bgtitle }) => (
    <div
      className={`rounded-2xl shadow-xl border-2 border-transparent hover:border-[#217346] text-white
                  transition-all duration-300 ease-in-out p-6 flex flex-col items-center justify-between h-full
                  mx-2 sm:mx-4 lg:mx-6 transform hover:scale-105 ${bgClass} ${isActive ? 'mt-0 pt-10' : ''}`}
      style={{
        // minHeight: '450px',
        maxWidth: '350px',
        width: 'calc(100% - 32px)',
        margin: '0 auto',
      }}
    >
      <div className={`text-center mb-4 ${bgtitle} ? 'bg-[#008001]' : 'bg-[#042D61]'}`}>
        <h3 className="py-2 px-5 rounded-lg text-lg font-semibold text-white tracking-wide inline-block  ">
          {title}
        </h3>
      </div>

      <ul className="text-sm leading-relaxed list-disc list-inside space-y-2 text-left">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <img src={img} alt={title} className="object-contain my-4 w-[377px]" />
    </div>
  );

  return (
    <div className="bg-white py-12 px-4 font-sans flex flex-col items-center justify-center" id='service'>
      <div className="text-center mb-12">
        <h2 className=" text-2xl md:text-4xl font-extrabold mb-4 tracking-wide">
          SERVICES
        </h2>
        <p className="text-xl text-black">
          Complete Payment Solutions in One Place
        </p>
      </div>

      <div className="w-full max-w-7xl relative">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: '.custom-pagination',
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {services.map((service, index) => (
            <SwiperSlide key={service.id} className="flex justify-center items-center py-10">
              {({ isActive }) => (
                <ServiceCard
                  {...service}
                  isActive={isActive}
                  bgClass={index % 2 === 0 ? 'bg-[#042D61]' : 'bg-[#008001]'}
                  bgtitle={index % 2 === 0 ? 'bg-[#008001]' : 'bg-[#042D61]'}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Below */}
        <div className="custom-pagination absolute -bottom-6 left-0 right-0 flex justify-center z-10" />
      </div>
    </div>
  );
};

export default S5Service;
