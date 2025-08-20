import React from 'react';
import "../index.css"; 

const Button = ({ leftText, rightText }) => {
    return (
        <div className='flex flex-row align-middle w-full  py-5 justify-center  '>
          

<button className="relative flex flex-row token-box  items-center justify-between font-semibold border-2 border-black text-base cursor-pointer transition-all duration-300 ease-in-out 
  w-[80%] sm:w-full h-[80px] rounded-full "
  >
  
  {/* Left side with gradient */}
  <div className="w-1/2 h-full flex token-label items-center justify-center  ">
    <span className="text-white z-10">{leftText}</span>
  </div>


  

  {/* Right side with dark background */}
  <div className="w-1/2 h-full flex items-center token-valueshadow rounded-full justify-center ">
    <span className="text-white z-10 token-value">{rightText}</span>
  </div>
</button>


        </div>
    );
};

export default Button;
