import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import logo from "../assets/logo/logo_hr_lght.png";

import footericon1 from "../assets/footer/f1.png";

import footericon2 from "../assets/footer/f2.png";
import footericon3 from "../assets/footer/f3.png";
import footericon4 from "../assets/footer/f4.png";
import footericon5 from "../assets/footer/f5.png";
import footericon6 from "../assets/footer/f6.png"

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

      <footer className="bg-black z-10 border-[#FFA200] border-t-2 rounded-2xl ">
        <div className="mx-auto w-full max-w-screen-2xl px-3 md:px-10  py-6 lg:py-8 z-10 gap-3 flex flex-col">
        <div className="flex flex-wrap justify-between items-center md:items-start w-full p-6  sm:gap-5  z-10">
  {/* Left Section */}
  <div className="flex flex-col gap-6 md:gap-4 max-w-full  sm:max-w-[100%] pb-2 md:max-w-[27%]  text-center md:text-left tablet:text-center">
        {/* Logo Section */}
    
      <Link to="/" className="flex justify-center md:justify-start items-center">
        <img src={logo} className="h-10" alt="" />
      </Link>
    <p className="text-[#DADADA] text-base pl-3 font-gilroyR  font-medium">
The Americoin Project combines the enduring value of real state with the transformative power of blockchain technology. With innovative use cases and a clear vision, we’re redefining the way you invest in and interact with gold.
    </p>


  </div>

  {/* Links Section */}
  <div className="flex flex-wrap justify-evenly md:justify-end w-full md:w-auto gap-8 md:gap-8 lg:gap-12 xl:gap-16  mt-10 sm:mt-2">
    
    {/* Important Links */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-sm md:text-base text-[#E7B764]  ">
        Important Links
      </h2>
      <ul className="text-white font-light flex flex-col gap-3 text-sm  xl:text-base">
        <li className="text-center md:text-left  hover:text-white hover:border-white"><a href="#home">Home </a></li>
        <li className="text-center md:text-left  hover:text-white hover:border-white"><a href="#about">About Us</a></li>
        <li className="text-center md:text-left hover:text-white hover:border-white"><a href="#usecase">Use Cases  </a></li>
        <li className="text-center md:text-left hover:text-white hover:border-white"><a href="#presale">Presale Information </a></li>
        <li className="text-center md:text-left hover:text-white hover:border-white"><a href="#contactus">Contact Us </a></li>
      </ul>
    </div>

    {/* About Us */}
    <div className="flex flex-col items-center md:items-start">
      <h2 className="mb-4 font-semibold text-sm md:text-base  uppercase text-[#E7B764] ">
        Legal
      </h2>
      <ul className="text-white font-light flex flex-col gap-3 text-sm  xl:text-base">
        <li className="text-center md:text-left hover:text-white hover:border-white  "> <a  href="#privacypolicy">Privacy Policy </a></li>
        <li className="text-center md:text-left hover:text-white hover:border-white"><a href="#termsandcondition"> Terms and Condition </a></li>
        <li className="text-center md:text-left hover:text-white hover:border-white"><a href="#disclaimer"> Disclaimer </a></li>
      </ul>
    </div>

    {/* Social Media Icons */}

    <div className="flex flex-col items-center md:items-start gap-5">
      <div className="flex flex-col ">
       <h1 className=" mb-4 font-medium text-sm md:text-base justify-center text-center md:text-left  uppercase text-[#E7B764]" > Contact Us</h1>
       <div className=" text-white  flex flex-col gap-3 text-sm  xl:text-base justify-center text-center md:text-left ">
        <h1 className=" text-white  font-light"> Address : [Inser Company Address]</h1>
        <h1 className=" text-white  font-light">Email : Support@ameri-crypto.com</h1>
        <h1 className=" text-white  font-light">Phone : [Insert Phone Number]</h1>
       </div>
      </div>
      <div>  
      <h2 className="mb-4 font-semibold text-sm md:text-base   uppercase justify-center text-center md:text-left  text-white ">
Follow us on social platform’s      </h2>
    <div className="flex justify-start space-x-3 lg:space-x-3">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon1} alt="Instagram" className="w-7  transition-transform hover:scale-110 duration-300" />
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
        <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={footericon6} alt="Discord" className="w-7 transition-transform hover:scale-110 duration-300" />
      </a>
    </div>
    </div>
    </div>



  </div>
</div>

      


          <div className="flex flex-row items-center tablet:text-center justify-between px-4">
            <span className="text-sm sm:text-center text-[#ffffff]">
            <span className="text-[#E7B764]">    © {currentYear} Americoin .  </span>    All Rights Reserved.
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
