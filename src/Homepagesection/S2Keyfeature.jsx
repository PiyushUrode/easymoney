import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import key1 from "../assets/keyfeatures/key1.png";
import key2 from "../assets/keyfeatures/key2.png";
import key3 from "../assets/keyfeatures/key3.png";
import key4 from "../assets/keyfeatures/key4.png";
import key5 from "../assets/keyfeatures/key5.png";

const S2Keyfeature = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      offset: 80,
    });
  }, []);

  const features = [
    {
      title: "All Payment Modes",
      description: "Cards, UPI, NetBanking, Wallets, EMI",
      icon: key1,
      animation: "flip-left",
      delay: 0
    },
    {
      title: "Complete Dashboard Access",
      description: "Track every transaction in real-time",
      icon: key2,
      animation: "zoom-in",
      delay: 150
    },
    {
      title: "Pay-in + Payouts",
      description: "Accept payments and disburse funds globally",
      icon: key3,
      animation: "flip-right",
      delay: 300
    },
    {
      title: "No Data Storage",
      description: "100% PCI-compliant and aggregator-approved",
      icon: key4,
      animation: "fade-up-left",
      delay: 450
    },
    {
      title: "Custom Pricing",
      description: "Monetization per merchant type and use-case",
      icon: key5,
      animation: "fade-up-right",
      delay: 600
    },
  ];

  const FeatureCard = ({ icon, title, description, animation, delay }) => (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      className="relative bg-[#39A736] rounded-xl text-white px-6 pt-6 w-full sm:w-[270px] text-center shadow-md h-[200px] mx-auto"
    >
      {/* Circle Icon */}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#002D6A] w-20 h-20 rounded-full flex items-center justify-center shadow-lg">
        <img src={icon} alt={title} className="w-20 h-20" />
      </div>
      <div className="mt-10">
        <h1 className="text-lg md:text-xl font-bold mb-2 text-white">{title}</h1>
        <p className="text-sm font-semibold text-gray-200">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0080011A] pb-5">
      <div className="flex flex-col max-w-5xl text-center mx-auto py-10 px-4 space-y-5">
        <h1
          className="text-xl md:text-3xl lg:text-4xl text-[#042D61]"
          data-aos="fade-down"
        >
          What We Do
        </h1>
        <p
          className="text-black text-sm md:text-base"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          EverSafePay enables businesses of all sizes to accept and disburse payments effortlessly.
          Whether you're running an eCommerce store, an agency, a SaaS platform, or a retail chain — we offer tailored payment solutions, dashboards, and full-stack APIs.
        </p>
      </div>

      <div className="flex flex-col items-center gap-14 py-10 px-4">
        <h1
          className="text-xl md:text-3xl lg:text-4xl text-[#042D61]"
          data-aos="zoom-in-up"
        >
          Key Features
        </h1>

        {/* Row 1: 3 Cards */}
        <div className="flex flex-wrap justify-center gap-6 w-full">
          {features.slice(0, 3).map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        {/* Row 2: 2 Cards */}
        <div className="flex flex-wrap justify-center lg:px-40  xl:px-56 gap-6 w-full">
          {features.slice(3, 5).map((feature, index) => (
            <FeatureCard key={index + 3} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default S2Keyfeature;
