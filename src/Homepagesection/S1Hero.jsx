import React from 'react';
import heroimg from "../assets/hero/hero1.png";
import { Helmet } from 'react-helmet';

const S1Hero = () => {
  return (
    <>  
   <Helmet>
  <title>EverSafePay – Complete Pay-in & Payout Payment Facilitator for Businesses</title>
  <meta name="description" content="Simplifying digital payments with fast onboarding, real-time settlements, and zero data storage risk. Trusted by businesses across India." />
  <meta name="keywords" content="EverSafePay, pay-in, payout, payment facilitator, payment aggregator, merchant onboarding, UPI, cards, digital payments India" />
</Helmet>



    <headers className="bg-[#042D61] py-0  flex flex-col-reverse  md:flex-row py-10  md:pt-24 px-3 md:px-10 justify-end" id="home">
        
        {/* Left Content */}
        <div className="w-full md:w-[40%]  flex flex-col justify-center ">
     
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-extrabold md:leading-tight md:tracking-normal mb-4 md:space-y-5 font-Prompt  ">
            <span className="  font-prompt block">Simplifying</span>
            <span className="  font-prompt block text-[#48DD49]">Payments for</span>
            <span className="  font-prompt block">Every Business</span>
          </h1>

          <p className=" text-sm md:text-lg text-gray-300 mb-6  w-full ">
            Your trusted partner for seamless pay-in and payout solutions — fast onboarding, real-time settlements, zero data storage risk.
          </p>

        </div>

        {/* Right Image */}
        <div className="w-full md:w-[60%] flex justify-end">
          <img
            src={heroimg}
            alt="Payment Solutions Illustration"
            className="w-full h-auto p-0 object-contain drop-shadow-lg"
          />
        </div>
      
    </headers>
    </>
  );
};

export default S1Hero;
