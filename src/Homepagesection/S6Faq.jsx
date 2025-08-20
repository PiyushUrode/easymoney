import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'
import QuestionMark from '../assets/faq/f1.png'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/autoplay'

const faqData = [
  {
    question: "What is EMGT (EM Global Token)?",
    answer: "EM Global Token (EMGT) is a next-generation cryptocurrency designed for earning, spending, and growing within a unified blockchain ecosystem. It offers real-world utility through forex & crypto trading, global payments, gift card purchases, staking rewards, and integration with merchant tools."
  },
  {
    question: "What are the key features of EMGT?",
    answer: "EMGT provides multiple earning streams, global partner integration, secure blockchain transactions, and a transparent decentralized structure. Key features include Forex & Crypto Trading, Global Payment Module, Gift Card Marketplace, EMGT Global Card (VISA/Mastercard powered), Staking & Rewards, and ecosystem-powered apps."
  },
  {
    question: "How can I purchase EMGT?",
    answer: "You can purchase EMGT through supported cryptocurrency exchanges, directly via our official platform, or by participating in partner sales events. Payments can typically be made using popular cryptocurrencies like USDT, BTC, or ETH, and in some cases, fiat currency."
  },
  {
    question: "Where can I use EMGT Token?",
    answer: "EMGT can be used for forex & crypto trading, global payments, buying digital gift cards from top brands, everyday retail purchases via the EMGT Global Card, and accessing ecosystem applications such as mobile wallets, swap modules, and merchant tools."
  },
  {
    question: "Is EMGT compatible with crypto wallets?",
    answer: "Yes, EMGT is compatible with most major crypto wallets, including both web-based and hardware wallets. You can securely store, send, and receive EMGT using wallets that support our blockchain network, ensuring full control over your assets."
  }
]


const S6Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(index === index ? (activeIndex === index ? null : index) : null)
  }

  return (
    <div className=" text-white     w-full overflow-hidden relative" id='faq'>

<div className="absolute top-[20%] right-28 w-20 h-40 hidden sm:block   bg-[#ffa2008f] rounded-full blur-3xl translate-y-[-50%]"></div>
<div className="absolute bottom-[0%] left-8 w-20 h-40 hidden sm:block   bg-[#ffa2008f] rounded-full blur-3xl translate-y-[-50%]"></div>
{/* <div className="absolute bottom-0 right-20 w-60 h-60 hidden sm:block   bg-[#ffa20087] rounded-full blur-3xl translate-y-[-50%]"></div> */}

      {/* ================= FAQ SECTION ================= */}
      <div className=" px-4 py-10 md:py-20 flex flex-col items-center z-10">
        <h2 className="text-center text-stroke-faq font-open text-xl sm:text-2xl md:text-5xl  mb-12 text-white text-stroke">
         FAQ's
        </h2>

        {/* Grid for layout */}
        <div className="flex flex-col md:flex-row  w-full max-w-screen-2xl px-4 md:px-6">
          {/* FAQs List */}
          <div className="flex flex-col w-full md:w-[55%] gap-5">
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
                    <span className=" text-white rounded px-2 font-bold">Q{index + 1}</span>
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
<div className="hidden md:flex flex-col-reverse flex-wrap items-start justify-between w-full md:w-[45%]">
  <img
    src={QuestionMark}
    alt="question mark"
    loading="lazy"
    className="pointer-events-none opacity-80 w-[80%] flex"
  />
</div>

        </div>
      </div>


    </div>
  )
}

export default S6Faq
