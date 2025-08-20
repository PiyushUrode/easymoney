import React from "react";
import s1 from "../assets/partners/s1.png"; // PancakeSwap
import s2 from "../assets/partners/s2.png"; // MetaMask
import s3 from "../assets/partners/s3.png"; // TrustWallet
import s4 from "../assets/partners/s4.png"; // CoinMarketCap
import s5 from "../assets/partners/s5.png"; // BscScan

const S4Partners = () => {
  return (
    <div className="py-10 px-4 text-center strategy-partner">
      {/* Title */}
      <h1 className="text-2xl md:text-4xl font-bold strategy-partner-h1">
        Strategic Partners
      </h1>

      {/* Top Row */}
      <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-20">
        <img src={s1} alt="PancakeSwap" className="h-10 md:h-12 object-contain" />
        <img src={s2} alt="MetaMask" className="h-10 md:h-12 object-contain" />
        <img src={s3} alt="TrustWallet" className="h-10 md:h-12 object-contain" />
      </div>

      {/* Bottom Row */}
      <div className="mt-6 flex flex-wrap justify-center gap-6 md:gap-20">
        <img src={s4} alt="CoinMarketCap" className="h-10 md:h-12 object-contain" />
        <img src={s5} alt="BscScan" className="h-10 md:h-12 object-contain" />
      </div>
    </div>
  );
};

export default S4Partners;
