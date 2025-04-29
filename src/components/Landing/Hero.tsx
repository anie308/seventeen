// import React from 'react'
import heroImg from "../../assets/hero.jpg";
function Hero() {
  return (
    <div className="grid lg:grid-cols-2 items-center gap-[40px] lg:p-[80px_40px] p-[50px_20px]">
      <div className="flex flex-col items-start justify-center">
        <p className="bg-[#1A2492] text-white rounded-full p-[5px_10px]">
          Next-Level Innovation
        </p>
        <p className="text-[25px] lg:text-[50px] font-[700] text-white text-start mt-[20px] leading-[35px] lg:leading-[62px]">
          Modernize Your Hospital’s Management with Rapha
        </p>
        <p className="text-white text-[16px] lg:text-[24px] mt-[10px]">
          Effortlessly manage hospital operations, staff, and patient records in
          one unified platform.
        </p>
        <div className="flex flex-col lg:flex-row items-center w-full gap-[10px] lg:gap-[20px] mt-[20px] lg:mt-[30px]">
          <button className="bg-[#EAAF4E] shadow  p-[9px_25px] w-full lg:w-fit font-[500] rounded-[10px]">
            Get Started – It’s Free
          </button>
          <button className="bg-[#EAAF4E] shadow  p-[9px_25px] w-full lg:w-fit font-[500] rounded-[10px]">
            {" "}
            Learn More
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <img src={heroImg} className="w-full lg:w-[90%] object-cover rounded-[10px] h-[300px] lg:h-[400px]" alt="" />
      </div>
    </div>
  );
}

export default Hero;
