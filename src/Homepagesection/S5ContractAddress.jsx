import React, { useState } from 'react'
import "../index.css"
import { IoCopy } from "react-icons/io5";
const S5ContractAddress = () => {
  const address = "0x628cA0F0e20fA75acc84F1131538B97E3023B1C5"
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full  text-white py-16 px-4 flex flex-col items-center gap-5">

      <div className='w-full max-w-5xl contract-gradient  text-white py-5 px-4  flex flex-col items-center gap-5 '>  
      {/* Title */}
      <h2 className=" text-xl sm:text-2xl  font-bold text-center text-white ">
        CONTRACT ADDRESS
      </h2>



      {/* Address Box */}
      <div className="  w-full max-w-3xl text-center contractaddress-gradient">
        <div className=" text-white font-medium rounded-xl  overflow-hidden text-base md:text-2xl  sm:text-base">
          {address}
        </div>
      </div>

<div>         {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="border border-white bg-[#FFA10033] flex flex-row gap-5 text-white px-4 py-2 rounded-full text-sm hover:bg-yellow-500 hover:text-black transition-all"
        >
          {copied ? "Copied!" : "Copy Address"} <IoCopy size={20} />
        </button> </div>

    </div>
    </div>
  )
}



export default S5ContractAddress