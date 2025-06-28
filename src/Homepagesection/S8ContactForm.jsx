import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from 'emailjs-com'; // ✅ EmailJS SDK

const S8ContactForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    emailjs.init("pHg8N71OhpFS48QM_"); // ✅ Init public key (must)
  }, []);

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm(
    'default_service',
    'template_zpvd9vp',
    e.target
  ).then(() => {
    toast.success(" Message sent successfully! ✅", {
      position: "top-center",
      autoClose: 3000,
    });
  }).catch((error) => {
    toast.error(" Failed to send message. Try again later. ❌", {
      position: "top-center",
      autoClose: 3000,
    });
    console.log(error.text);
  });

  e.target.reset();
};


  return (
    <>
      <Helmet>
        <title>Contact EverSafePay – Let’s Enable Your Business to Grow</title>
        <meta name="description" content="Need help with integrations or payouts? Reach EverSafePay support or sales via email, WhatsApp, or our contact form." />
        <meta name="keywords" content="contact EverSafePay, payment support India, merchant onboarding help, payout support, payment integration contact" />
      </Helmet>

      <div className=" bg-[#00800010] px-4 py-8 md:px-16 lg:px-32 flex flex-col md:gap-12" id="contact">
        {/* Title Section */}
        <div className="flex flex-col items-center text-center" data-aos="fade-down">
          <h2 className="text-xl md:text-4xl font-bold text-blue-900 mb-2">Contact Form</h2>
          <p className="text-gray-600 text-sm mb-8">Contact EverSafePay – Let’s Enable Your Business to Grow</p>
        </div>

        {/* Main Contact Content */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {/* Left Side - Address */}
          <div className="md:w-1/2 text-left text-blue-900 space-y-3 md:space-y-8" data-aos="fade-right">
            <h2 className="text-green-700 font-bold text-sm md:text-xl mb-4">Office Address:</h2>
            <h3 className="font-extrabold text-lg md:text-xl mb-2">KRYESOR SOLUTIONS PRIVATE LIMITED</h3>
            <div className="text-sm md:text-base">
              <p className="mb-1 leading-relaxed">Flat No 305, 306, S. No 72/3 A/1,</p>
              <p className="mb-1 leading-relaxed">Kasturi Galaxi, Dighi, Pune,</p>
              <p className="mb-1 leading-relaxed">Maharashtra, India, 411015</p>
            </div>
            <div className="mt-6 space-y-2 text-sm md:text-base">
              <p className="flex items-center gap-2">
                <span role="img" aria-label="phone">📞</span>
                <a href="tel:+919860109725" className="text-blue-900 font-medium">+91 9860109725</a>
              </p>
              <p className="flex items-center gap-2">
                <span role="img" aria-label="email">📧</span>
                <a href="mailto:eversafepay0@gmail.com" className="text-blue-900 font-medium">eversafepay@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-1/2" data-aos="fade-left">
            <form className="space-y-5" onSubmit={sendEmail}>
              <input
                type="text"
                name="name" // ✅ must match EmailJS variable
                placeholder="👤 Full Name"
                className="w-full border border-gray-300 rounded-lg p-3 bg-white  text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-aos="fade-up"
                data-aos-delay="100"
                required
              />
              <input
                type="email"
                name="email" // ✅ must match EmailJS variable
                placeholder="✉️ E-Mail"
                className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-aos="fade-up"
                data-aos-delay="200"
                required
              />
              <input
                type="tel"
                name="phone" // ✅ must match EmailJS variable
                placeholder="📞 Phone Number"
                className="w-full border border-gray-300 rounded-lg p-3 bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                data-aos="fade-up"
                data-aos-delay="300"
              />
              <textarea
                name="message" // ✅ must match EmailJS variable
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

      <ToastContainer />
    </>
  );
};

export default S8ContactForm;
