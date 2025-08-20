import tokenchart from "/src/assets/tokenomics/token.webp";
import "../index.css";
import Button from "../MainComponent/Button.jsx"
// const tokenData = [
//   { label: "Token Name", value: "EM GLOBAL TOKEN" },
//   { label: "Total Supply", value: "100 Million" },
//   { label: "Symbol", value: "EMGT" },
//   { label: "Network", value: "BEP-20" },
//   { label: "Decimal", value: "18" },
// ];

const S9Tokenomics = () => {
  return (
    <>
      <section className="relative w-full overflow-hidden py-10 " id="tokenomics">
        {/* Heading */}
        <div className="flex justify-center items-center text-center mb-12">
          <h1 className=" text-3xl ">Tokenomics</h1>
        </div>

        {/* Token Chart */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-5xl mx-auto px-4">
          <img
            src={tokenchart}
            alt="Tokenomics Chart"
            loading="lazy"
            className="w-full max-w-4xl h-auto"
          />
        </div>
      </section>

  {/* <section className="py-12 px-4 sm:px-8 md:px-10">
  <div className="flex flex-col items-center text-center bg-black space-y-6 w-full ">
    <div className="flex flex-row flex-wrap gap-10 justify-center align-middle items-center  ">
      {tokenData.slice(0, 5).map((item, index) => (
        <div
          key={index}
          className="token-box flex flex-row   px-4 py-4 rounded-full 
                   min-w-[280px]  w-[350px]"
        >
          <div className="w-1/2 flex  justify-center items-center align-middle">
            <span className="token-label ">{item.label}</span>
          </div>
          <div className="flex justify-center w-1/2 token-valueshadow rounded-full py-1">
            <span className="token-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>


    <div className="flex justify-center gap-6 w-full flex-wrap">
      {tokenData.slice(3).map((item, index) => (
        <div
          key={index}
          className="token-box flex flex-row  items-center px-4 py-4 rounded-full 
                     w-full sm:w-1/2  lg:w-[30%]"
        >
          <div className="w-1/2">
            <span className="token-label">{item.label}</span>
          </div>
          <div className="flex justify-center w-1/2 token-valueshadow py-2 rounded-full">
            <span className="token-value">{item.value}</span>
          </div>
        </div>
      ))}
    </div>
  </div>


</section> */}


        <div className="w-full relative gap-10 flex flex-col  ">
      



          <div
            className="flex flex-row flex-wrap sm:flex-row items-center  flex-wrap justify-center gap-0 sm:gap-4  mt-5 md:pt-0  "
            id="one"
          >
            <div className="   hover:animate-popup-twice  flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle "
              
              id="two" 
            >
              <Button leftText="TOKEN NAME" rightText="EM GLOBAL TOKEN" />
            </div>
            <div className="   hover:animate-popup-twice      flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle        ">
              <Button leftText="Total Supply" rightText="100M" />
            </div>
            <div className="     hover:animate-popup-twice       flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle      ">
              <Button leftText="SYMBOL" rightText="EMGT" />
            </div>

            <div className="   hover:animate-popup-twice     flex flex-col   sm:w-[30%] w-full  justify-center items-center align-middle       ">
              <Button leftText="NETWORK" rightText="BEP20" />
            </div>

            <div className="   hover:animate-popup-twice    flex flex-col    sm:w-[30%] w-full  justify-center items-center align-middle        ">
              <Button leftText="DECIMAL" rightText="18 " />
            </div>

          </div>
        </div>
  </>
  );
};

export default S9Tokenomics;
