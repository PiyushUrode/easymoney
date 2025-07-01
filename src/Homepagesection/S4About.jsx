import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'


const S4About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    });
  }, []);

  return (

    <>   


    <section>
      {/* Top Section */}
      <div className="bg-[#0080011A] pt-6 md:pt-12 pb-6" id='about'>
        <div className="max-w-7xl mx-auto">

          {/* ABOUT US Title */}
          <h2
            className="text-center text-xl md:text-4xl font-bold uppercase tracking-normal text-[#042D61] mb-4 rounded-md"
            data-aos="fade-down"
          >
            ABOUT US
          </h2>

          {/* Main Heading */}
          <h1
            className="text-center text-xl sm:text-2xl lg:text-4xl font-extrabold text-green-700 mb-8 leading-tight rounded-md"
            data-aos="fade-up"
          >
            EverSafePay – India's Trusted Payment Facilitator
          </h1>

          {/* Who We Are */}
          <h3
            className="text-center text-2xl sm:text-3xl font-bold mb-6 rounded-md"
            data-aos="zoom-in"
          >
            Who We Are
          </h3>

          {/* Paragraph */}
          <p
            className="max-w-3xl mx-auto text-center text-xs px-2  md:text-base text-gray-600 mb-12 leading-relaxed rounded-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            EverSafePay is a next-generation Payment Facilitator (PayFac) empowering businesses with
            the tools to manage payments at scale – from onboarding to settlement. We are a
            technology-first company offering full-stack pay-in and payout infrastructure backed by
            strong compliance, secure APIs, and merchant-centric support.
            <br /><br />
            We believe every business, whether small or large, deserves access to fast,
            flexible, and fully integrated digital payments without complexity.
          </p>
        </div>
      </div>

      {/* Vision and Mission Section */}
      <div className="flex flex-col md:flex-row bg-[#0080011A] w-full gap-10 md:gap-20 lg:gap-32 pb-10 md:pb-20  lg:px-20">

        {/* Vision Card */}
        <div
          className="bg-blue-900 text-white p-8 rounded-xl shadow-lg flex-1 flex flex-col justify-between items-end text-right transform transition duration-300 hover:scale-105"
          data-aos="fade-right"
        >
          <h4 className="text-3xl font-bold text-green-400 mb-4 rounded-md">Vision</h4>
          <p className=" text-sm md:text-lg  leading-relaxed rounded-md max-w-sm">
            To enable seamless digital payment access for every business in India and beyond, with zero compromise on security, speed, or scale.
          </p>
        </div>

        {/* Mission Card */}
        <div
          className="bg-blue-900 text-white p-8 rounded-xl shadow-lg flex-1 flex flex-col justify-between items-start text-left transform transition duration-300 hover:scale-105"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h4 className="text-3xl font-bold text-green-400 mb-4 rounded-md">Mission</h4>
          <p className="text-sm md:text-lg leading-relaxed rounded-md max-w-lg">
            To deliver the most flexible and developer-friendly PayFac platform
            that simplifies merchant onboarding, boosts revenue, and unlocks
            enterprise-level payment capabilities for all.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default S4About
