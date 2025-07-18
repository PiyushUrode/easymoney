
import '../index.css'; // Make sure your .cardsbg CSS is in this file
import S7AmeriVideo from "../Homepagesection/S7AmeriVideo"

const tokenData = [
  { label: "Token Name", value: "AMERI COIN" },
  { label: "Total Supply", value: "1 BILLION " },
  { label: "Symbol", value: "AMERI" },
  { label: "Decimal", value: "18" },
  { label: "Network", value: "BEP - 20" },
  { label: "Price", value: "$0.10 =1 AMERI" },
];

const TokenGrowth = () => {
  return (
    <>  
    <div className='flex flex-col items-center text-center px-1 md:px-4  bg-black text-gold'>
      {/* Headline */}
      <div className='mb-8 max-w-2xl justify-items-center text-center'>
        <h1 className='text-xl  font-bold text-[#E7B764] mb-3 leading-tight'>
          Robust Tokenomics Fueling Growth & Rewards
        </h1>
        <p className='text-gray-300 text-sm sm:text-base capitalize max-w-md'>
          Designed for sustainability with staking, buyback-burn, and real estate-backed value creation.
        </p>
      </div>

      {/* Token Chart */}
     

      {/* Token Data */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-screen-xl w-full px-4'>
        {tokenData.map((item, index) => (
          <div
            key={index}
            className='flex justify-around items-center bg-transparent px-3 sm:px-6 py-3 sm:py-4'
          >
            <span className='text-[#E7B764] text-base sm:text-lg md:text-xl xl:text-2xl font-medium'>
              {item.label}
            </span>
            <span className='cardsbg text-[#E7B764] font-semibold text-sm sm:text-base md:text-lg xl:text-xl    px-4 py-2 min-w-[160px] min-h-[45px] flex items-center justify-center bg-no-repeat bg-contain text-center'>
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>

    <S7AmeriVideo />  </>
  );
};

export default TokenGrowth;
