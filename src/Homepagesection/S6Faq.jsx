import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import QuestionMark from '../assets/faq/faq1.png'
import Americoinvideo from "../assets/faq/americoinvideo.mp4"
import Buildingvideo from "../assets/faq/building.mp4"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const faqData = [
  {
    question: "What is AMERI Coin?",
    answer: "AMERI Coin is a decentralized digital asset designed for secure, fast, and low-fee transactions across the blockchain ecosystem."
  },
  {
    question: "What are the key features of AMERI Coin?",
    answer: "It features scalability, interoperability with wallets, DeFi utility, and community governance."
  },
  {
    question: "How can I purchase?",
    answer: "You can purchase AMERI Coin via supported exchanges like PancakeSwap or through the official presale portal."
  },
  {
    question: "Where can I use AMERI Coin?",
    answer: "You can use it for staking, trading, paying transaction fees, and participating in DeFi platforms."
  },
  {
    question: "Is AMERI Coin compatible with crypto wallets?",
    answer: "Yes, AMERI Coin is compatible with Trust Wallet, MetaMask, and other Web3 wallets that support BEP-20 tokens."
  }
]

const S6Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(index === index ? (activeIndex === index ? null : index) : null)
  }

  return (
    <div className=" text-white w-full overflow-hidden">

      {/* ================= FAQ SECTION ================= */}
      <div className="relative px-4 py-10 md:py-20 flex flex-col items-center z-10">
        <h2 className="text-center text-[6vw] sm:text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500 mb-12">
          Frequently Asked Questions (FAQ)
        </h2>

        {/* Grid for layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl px-4 md:px-6">
          {/* FAQs List */}
          <div className="flex flex-col gap-5">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="border border-yellow-500 rounded-md p-4 bg-black bg-opacity-70 backdrop-blur-md transition-all duration-300"
              >
                <div
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <span className="font-semibold text-base md:text-lg flex gap-2 font-montserrat">
                    <span className="bg-yellow-500 text-black rounded px-2 font-bold">Q{index + 1}</span>
                    {faq.question}
                  </span>
                  {activeIndex === index ? (
                    <FaMinus className="text-yellow-500" />
                  ) : (
                    <FaPlus className="text-yellow-500" />
                  )}
                </div>

                {/* Animated answer using Swiper */}
                {activeIndex === index && (
                  <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 1 }}
                    loop={false}
                    slidesPerView={1}
                    allowTouchMove={false}
                    className="mt-4"
                  >
                    <SwiperSlide>
                      <div className="text-sm text-gray-300 transition-opacity duration-500">
                        {faq.answer}
                      </div>
                    </SwiperSlide>
                  </Swiper>
                )}
              </div>
            ))}
          </div>

          {/* Right Image */}
          <div className="flex justify-center items-center">
            <img
              src={QuestionMark}
              alt="question mark"
              className="w-auto pointer-events-none opacity-80"
            />
          </div>
        </div>
      </div>

      {/* ============ VIDEO SECTION ============ */}
      <div className="w-full bg-black flex flex-col items-center ">
        <div className="w-full max-w-4xl max-h-fit">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="  rounded-lg"
          >
            <source src={Americoinvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="w-full ">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-lg"
          >
            <source src={Buildingvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  )
}

export default S6Faq
