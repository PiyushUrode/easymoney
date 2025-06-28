import { HashLink as Link } from "react-router-hash-link";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import logo from "../assets/logo/logo1.png";
import lock from "../assets/logo/icon1.png";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 0,
    });
  }, []);

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  const closeMenu = () => {
    setIsNavVisible(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
       <nav className={`w-full overflow-x-hidden z-0 bg-white top-0 border-b border-none dark:border-gray-600`}>
      <div className="relative max-w-full flex flex-wrap items-center justify-between mx-auto p-4 px-4 md:p-4 md:px-8">
        {/* Logo */}
        <Link smooth to="/" onClick={closeMenu}>
          <div className="flex items-center space-x-3 rtl:space-x-reverse" data-aos="fade-down" data-aos-delay="0">
            <img loading="lazy" src={logo} className="w-[7rem] sm:w-[9rem] h-auto" alt="eversafepay" />
          </div>
        </Link>

        {/* Right Section */}
        <div className="flex md:order-2 sm:gap-5 space-x-1 md:space-x-0 rtl:space-x-reverse justify-center items-center">
          <div className="flex gap-3 sm:gap-1 items-center" data-aos="fade-down" data-aos-delay="700">
            <Link smooth to="/" onClick={closeMenu}>
              <div className="flex sm:flex-row rounded-xl flex-col gap-5 md:gap-10 justify-center md:justify-start">
                <button className="relative sm:px-16 rounded-lg sm:py-5 px-12 py-1 font-bold shadow-md shadow-[#ffffff8e] text-white h-9 sm:h-full" onClick={() => navigate("/")}>
                  <span className="absolute inset-0 p-px flex items-center justify-center">
                    <span className="font-bold shadow-md shadow-[#ffffff8e] px-2 py-2 sm:py-2 sm:px-8 sm:text-sm text-white bg-green-700 w-full h-9 sm:h-full text-sm hover:animate-popup hover:shadow-sm hover:shadow-[#ffffff] focus:ring focus:ring-offset-2 focus:ring-[#ffffff8e] rounded-md">
                      Login
                    </span>
                  </span>
                </button>
              </div>
            </Link>
          </div>

          <div className="flex gap-3 sm:gap-1 items-center" data-aos="fade-down" data-aos-delay="800">
            <Link smooth to="/" onClick={closeMenu}>
              <div className="flex sm:flex-row rounded-xl flex-col gap-5 md:gap-10 justify-center md:justify-start">
                <button className="relative sm:px-16 rounded-lg sm:py-5 px-12 py-1 font-bold shadow-md shadow-[#ffffff8e] text-white h-9 sm:h-full" onClick={() => navigate("/")}>
                  <span className="absolute inset-0 p-px flex items-center justify-center">
                    <span className="font-bold shadow-md shadow-[#ffffff8e] px-2 py-2 sm:py-2 sm:px-8 sm:text-sm text-white bg-green-700 w-full h-9 sm:h-full text-sm hover:animate-popup hover:shadow-sm hover:shadow-[#ffffff] focus:ring focus:ring-offset-2 focus:ring-[#ffffff8e] rounded-md">
                      Sign Up
                    </span>
                  </span>
                </button>
              </div>
            </Link>
          </div>

          <button onClick={toggleNav} type="button" className="inline-flex items-center p-1 w-9 h-9 justify-center text-sm text-red-100 bg-gray-900 border border-[#00C6FF] rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 hover:bg-gray-900" aria-controls="navbar-sticky1" aria-expanded={isNavVisible} data-aos="fade-down" data-aos-delay="900">
            <span className="sr-only">Open main menu</span>
            <svg className="w-4 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>

          <div className="flex items-center md:hidden" data-aos="fade-down" data-aos-delay="1000">
            <img loading="lazy" src={lock} className="w-[3rem] h-auto" alt="eversafepaylock" />
          </div>
        </div>

        {/* Navbar Items */}
        <div id="navbar-sticky1" className={`items-center justify-center w-[100%] md:flex md:w-fit md:order-1 ${isNavVisible ? "block" : "hidden"}`} data-aos="fade-down" data-aos-delay="300">
          <ul className="navcar flex flex-col p-4 md:py-1.5 mt-5 bg-[#042D61] sm:bg-white font-medium border border-[#00C6FF] md:rounded-[50px] rounded-lg md:space-x-[3vmax] md:flex-row md:mt-0 md:border-0 font-semibold tablet:bg-gray-900">
            {['Home', 'About', 'Service', 'Merchant', 'Developer', 'Contact'].map((item, i) => (
              <li key={i} className="md:border-none border-b-[2px] border-[#008001]" data-aos="fade-down" data-aos-delay={400 + i * 100}>
                <Link smooth to={`/#${item.toLowerCase().replace(/\s+/g, '')}`} onClick={closeMenu}>
                  <div className="font-normal block py-2 px-3 text-black font-semibold hover:bg-gray-700 md:hover:bg-transparent md:p-0 hover:border-b-2 hover:border-[#008001] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 duration-300 font-outfit">
                    {item}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
