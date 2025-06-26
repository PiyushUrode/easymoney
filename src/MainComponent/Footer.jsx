import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo/logo2.png";

import footericon1 from "../assets/footer/f1.png";

import footericon2 from "../assets/footer/f2.png";
import footericon3 from "../assets/footer/f3.png";
import footericon4 from "../assets/footer/f4.png";
import footericon5 from "../assets/footer/f5.png";

import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  

  const scrollToTop = () => {
    const duration = 1000; // Duration in milliseconds (1 second)
    const start = window.scrollY; // Starting scroll position
    const startTime = performance.now(); // Time when the scroll starts

    // Perform the scroll gradually
    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress between 0 and 1

      // Scroll to the top with smooth easing
      window.scrollTo(0, start - start * progress);

      if (progress < 1) {
        requestAnimationFrame(animateScroll); // Keep animating until 100% progress
      }
    };

    requestAnimationFrame(animateScroll); // Start the smooth scroll animation
  };

  const currentYear = new Date().getFullYear();

  return (
    <>

      <footer className="bg-[#042D61] z-10 ">
        <div className="mx-auto w-full max-w-screen-xl  py-6 lg:py-8 z-10 gap-3 flex flex-col">
        <div className="flex flex-wrap justify-between items-center md:items-start w-full p-6  sm:gap-5  z-10">
  {/* Left Section */}
  <div className="flex flex-col gap-6 md:gap-4 max-w-full  sm:max-w-[100%] pb-2 md:max-w-[30%]  text-center md:text-left tablet:text-center">
        {/* Logo Section */}
    
      <Link to="/" className="flex justify-center md:justify-start items-center">
        <img src={logo} className="h-16" alt="" />
      </Link>
    <p className="text-gray-400 text-md pl-3 font-medium">
EverSafePay is a full-stack payment facilitator platform designed for modern businesses to manage pay-ins and payouts with ease.
    </p>


  </div>

  {/* Links Section */}
  <div className="flex flex-wrap justify-evenly md:justify-end w-full md:w-auto gap-8 md:gap-8 lg:gap-12 xl:gap-16  mt-10 sm:mt-2">
    
    {/* Important Links */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-sm md:text-md  uppercase text-white ">
        Important Links
      </h2>
      <ul className="text-gray-400 font-medium flex flex-col gap-3 text-sm  lg:text-lg">
        <li className="text-center md:text-left"><a href="#about">About Us</a></li>
        <li className="text-center md:text-left"><a href="#service">Service  </a></li>
        <li className="text-center md:text-left"><a href="#merchant">Merchant </a></li>
      </ul>
    </div>

    {/* About Us */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-sm md:text-md  uppercase text-white ">
        About Us
      </h2>
      <ul className="text-gray-400 font-medium flex flex-col gap-3 text-sm  lg:text-lg">
        <li className="text-center md:text-left"> <a  href="#dev">Developer </a></li>
        <li className="text-center md:text-left"><a href="#contact"> Contact Us </a></li>
      </ul>
    </div>

    {/* Social Media Icons */}

    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-sm md:text-md   uppercase text-white ">
Follow us on social platform’s      </h2>
    <div className="flex justify-center  tablet:justify-center  space-x-3 lg:space-x-3">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon1} alt="Instagram" className="w-7 transition-transform hover:scale-110 duration-300" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon2} alt="Telegram" className="w-7 transition-transform hover:scale-110 duration-300" />
      </a>
      <a href="mailto:support@or" target="_blank" rel="noopener noreferrer">
        <img src={footericon3} alt="Email" className="w-7 transition-transform hover:scale-110 duration-300" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon4} alt="Twitter" className="w-7 transition-transform hover:scale-110 duration-300" />
      </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon5} alt="Twitter" className="w-7 transition-transform hover:scale-110 duration-300" />
      </a>
    </div>
    </div>



  </div>
</div>

      


          <div className="flex flex-row items-center tablet:text-center justify-between px-4">
            <span className="text-sm sm:text-center text-[#ffffff]">
              © {currentYear} Eversafepay . All Rights Reserved.
            </span>
            <button onClick={scrollToTop}>
              <IoIosArrowDropup className="w-10 h-10 text-white" />
            </button>
          </div>
        </div>



      </footer>

    </>
  );
};

export default Footer;
