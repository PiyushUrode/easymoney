import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


import f1 from "../assets/features/f1.png";
import f2 from "../assets/features/f2.png";
import f3 from "../assets/features/f3.png";
import f4 from "../assets/features/f4.png";

import b1 from "../assets/features/b1.png"
import b2 from "../assets/features/b2.png"
import b3 from "../assets/features/b3.png"
import b4 from "../assets/features/b4.png"
import b5 from "../assets/features/b5.png"

const S6Merchant = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const forWhomItems = [
    { label: "Online businesses",       img: b1, },
    { label: "Utility & recharge apps",       img: b2, },
    { label: "Marketplaces",       img: b3, },
    { label: "Platforms needing sub-merchant", img: b4, },
    { label: "Digital wallet providers", img: b5, },
  ];

  const features = [
    {
      img: f1,
      title: "Onboard & verify merchants digitally",
    },
    {
      img: f2,
      title: "Offer your merchants a branded dashboard",
    },
    {
      img: f3,
      title: "Manage payouts, refunds, settlements",
    },
    {
      img: f4,
      title: "Earn commission on every transaction",
    },
  ];

  return (


<>


    <section className="bg-blue-900 text-white py-10 md:py-20 px-10 lg:px-20 " id="merchant"> 
      {/* Section: For Whom */}
      <h2 className="text-2xl font-bold mb-6 text-white" data-aos="fade-down">
        For Whom:
      </h2>
<ul
  className="flex flex-row justify-center items-center align-middle flex-wrap gap-x-20 gap-y-10 pb-10 max-w-6xl mx-auto"
  data-aos="fade-up"
>
  {forWhomItems.map((item, index) => (
    <li
  key={index}
  data-aos="zoom-in"
  data-aos-delay={index * 100}
  className="bg-white text-blue-900 px-6 py-6 rounded-xl flex justify-center align-middle text-center items-center gap-3 shadow-md hover:shadow-lg transition-all duration-300"
>
  <img
    src={item.img}
    alt={item.label}
    className="w-10 h-10 object-contain"
  />
  <span className="text-lg md:text-xl font-medium">
    {item.label}
  </span>
</li>

  ))}
</ul>


      {/* Section: Features */}
      <h2 className="text-2xl font-bold mb-6 text-white" data-aos="fade-down">
        Features:
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 place-items-center">
        {features.map((feature, index) => (
          <article
            key={index}
            tabIndex="0"
            data-aos="fade-up"
            data-aos-delay={index * 150}
            className="text-white p-0.5 text-center"
          >
            <img
              src={feature.img}
              alt={`Feature: ${feature.title}`}
              className="mx-auto mb-4 object-contain"
            />
            <p className="font-semibold text-lg px-10 flex">{feature.title}</p>
          </article>
        ))}
      </div>
    </section>

</>


  );
};

export default React.memo(S6Merchant);
