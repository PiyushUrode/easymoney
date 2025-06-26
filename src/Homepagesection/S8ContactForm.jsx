import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const S8ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-[#00800010] px-4 py-8 md:px-16 lg:px-32 flex flex-col md:gap-12">
      {/* Title Section */}
      <div
        className="flex flex-col items-center text-center"
        data-aos="fade-down"
      >
        <h2 className="text-xl md:text-4xl font-bold text-blue-900 mb-2">
          Contact Form
        </h2>
        <p className="text-gray-600 text-sm mb-8">
          Contact EverSafePay – Let’s Enable Your Business to Grow
        </p>
      </div>

      {/* Main Contact Content */}
      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Left Side - Address */}
        <div
          className="md:w-1/2 text-left text-blue-900 space-y-3 md:space-y-8"
          data-aos="fade-right"
        >
          <h2 className="text-green-700 font-bold text-sm md:text-xl mb-4">
            Office Address:
          </h2>
          <h3 className="font-extrabold text-lg md:text-xl mb-2">
            KRYESOR SOLUTIONS PRIVATE LIMITED
          </h3>
          <div className="text-sm md:text-base">
            <p className="mb-1 leading-relaxed">Flat No 305, 306, S. No 72/3 A/1,</p>
            <p className="mb-1 leading-relaxed">Kasturi Galaxi, Dighi, Pune,</p>
            <p className="mb-1 leading-relaxed">Maharashtra, India, 411015</p>
          </div>
          <div className="mt-6 space-y-2 text-sm md:text-base">
            <p className="flex items-center gap-2">
              <span role="img" aria-label="phone">📞</span>
              <a
                href="tel:+919860109725"
                className="text-blue-900 font-medium"
              >
                +91 9860109725
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span role="img" aria-label="email">📧</span>
              <a
                href="mailto:eversafepay0@gmail.com"
                className="text-blue-900 font-medium"
              >
                eversafepay0@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="md:w-1/2" data-aos="fade-left">
          <form className="space-y-5">
            <input
              type="text"
              placeholder="👤 Full Name"
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-up"
              data-aos-delay="100"
            />
            <input
              type="email"
              placeholder="✉️ E-Mail"
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <input
              type="tel"
              placeholder="📞 Phone Number"
              className="w-full border border-gray-300 rounded-lg p-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-up"
              data-aos-delay="300"
            />
            <textarea
              placeholder="📄 Type Your Request in Details (Optional)"
              className="w-full border border-gray-300 rounded-lg p-3 bg-white h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              data-aos="fade-up"
              data-aos-delay="400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-900 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default S8ContactForm;
