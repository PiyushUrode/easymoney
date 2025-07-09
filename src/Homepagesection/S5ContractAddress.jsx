import React, { useState } from 'react'

const S5ContractAddress = () => {
  const address = "0xe8Bf85474036cB45BE8544E61c217B931DC55D92"
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(address)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="w-full contract-bg text-white py-16 px-4 flex flex-col items-center">
      {/* Title */}
      <h2 className=" text-xl sm:text-2xl md:text-4xl font-bold text-center text-gradient-gold mb-6">
        CONTRACT ADDRESS
      </h2>

      {/* Description */}
      <p className="text-center text-sm sm:text-base max-w-2xl mb-10">
        Get a clear and detailed overview of <span className="text-yellow-400">Ameri Coin (AMERI)</span> Token’s supply, allocation, and distribution strategy
      </p>

      {/* Address Box */}
      <div className="border border-yellow-400 rounded-3xl p-6 w-full max-w-3xl text-center">
        <div className="bg-yellow-400 text-black font-medium rounded-xl px-4 py-3 mb-4 overflow-hidden text-xs sm:text-base">
          {address}
        </div>

        {/* Copy Button */}
        <button
          onClick={handleCopy}
          className="border border-yellow-400 text-white px-6 py-2 rounded-md text-sm hover:bg-yellow-500 hover:text-black transition-all"
        >
          {copied ? "Copied!" : "Copy Address"}
        </button>
      </div>
    </div>
  )
}



export default S5ContractAddress