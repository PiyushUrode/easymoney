import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"
import { MdOutlineArrowOutward } from "react-icons/md";
import logo from "../assets/logo/logo_hr_lght.png"
// import Popup from './Popupbuydog';

const Navbar = () => {
  const navigate = useNavigate();
  // const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Toggle popup visibility
  // const togglePopup = () => {
  //   setIsPopupOpen(!isPopupOpen);
  // };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav
      className={`w-full  pt-3 md:pt-0 z-50   overflow-x-hidden  bg-black   top-0 border-b border-none dark:border-gray-600 `}
    >
      <div className="relative max-w-full  flex flex-wrap items-center justify-between mx-auto p-0 px-4 md:p-4 md:px-8">
        {/* Logo */}
        <Link smooth to="/" onClick={closeMenu}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              loading="lazy"
              src={logo}
              className="w-[7rem]  sm:w-[9rem] h-auto"
              alt="ameri-coin"
            />
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex md:order-2 sm:gap-5 space-x-4 md:space-x-0 rtl:space-x-reverse">
 <div className="flex flex-row gap-0 sm:gap-1 items-center border-2 p-[2px] rounded-full group">
  <Link smooth="true" to="/presale">
    <button
      className="relative rounded-full text-xs md:text-md px-1 md:px-4 py-1 text-white sm:h-full"
      onClick={() => navigate("/presale")}
    >
      BUY NOW
    </button>
  </Link>

  {/* Icon Animation */}
  <div
    className="w-5 md:w-10 h-5 md:h-10 rounded-full bg-white text-black flex justify-center items-center
               transition-all duration-500 ease-in-out 
               group-hover:rotate-90 group-hover:scale-110 group-hover:bg-gray-200"
  >
    <MdOutlineArrowOutward className="transition-transform duration-500 ease-in-out" />
  </div>
</div>

          <button
            onClick={toggleNav}
            type="button"
            className="inline-flex items-center p-1 w-9 h-9  justify-center text-sm text-red-100 bg-gray-900 border border-[#00C6FF] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-900"
            aria-controls="navbar-sticky1"
            aria-expanded={isNavVisible}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-5"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Navbar Items */}
        <div
  id="navbar-sticky1"
  className={`items-center justify-center w-[99%] md:flex flex-col md:flex-row md:w-fit md:order-1   ${
    isNavVisible ? "block" : "hidden"
  }`}
>

          <ul className="navcar flex  flex-row flex-col md:flex-row   overflow-x-hidden  p-4 md:py-1.5 mt-4 font-medium  font-montserrat  md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:flex-row md:mt-0 md:border-0 text-[#ffffffa6] hover:text-white font-semibold ">
            <li className="relative  group">
              <Link smooth to="/#home" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-[#FFFFFFA6] hover:text-[#ffffff] hover:text-white font-semibold hover:bg-gray-700  md:hover:bg-transparent md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
                  Home
                </div>

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-yellow-500 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative  group">
              <Link smooth to="/#about" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-[#FFFFFFA6] hover:text-white font-semibold hover:bg-gray-700 md:hover:bg-transparent md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
                  About
                </div>

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-yellow-500 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative  group">
              <Link smooth to="/#usecase" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-[#FFFFFFA6] hover:text-white font-semibold hover:bg-gray-700 md:hover:bg-transparent md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
                  UseCase
                </div>

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-yellow-500 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative  group">
              <Link smooth to="/#tokenomics" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-[#FFFFFFA6] hover:text-white font-semibold hover:bg-gray-700 md:hover:bg-transparent md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
                  Tokenomics
                </div>

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-yellow-500 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>

            <li className="relative  group">
              <Link smooth to="/#roadmap" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-[#FFFFFFA6] hover:text-white font-semibold hover:bg-gray-700 md:hover:bg-transparent md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
               Roadmap
                </div>

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-yellow-500 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>
                        <li className="relative  group">
              <Link smooth to="/#faq" onClick={closeMenu}>
                <div className="font-normal block py-2 px-3 text-[#FFFFFFA6] hover:text-white font-semibold hover:bg-gray-700 md:hover:bg-transparent md:p-0 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
               FAQ
                </div>

                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-black via-yellow-500 to-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </Link>
            </li>




          </ul>
        </div>
      </div>

<div className="absolute top-0 right-0 w-20 h-40 hidden sm:block   bg-[#FFA100] rounded-full blur-3xl translate-y-[-50%]"></div>


    </nav>
  );
};

export default Navbar;