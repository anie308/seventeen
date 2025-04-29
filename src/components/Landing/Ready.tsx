// import React from 'react'
import ready from "../../assets/ready.svg";


function Ready() {
  return (
    <div className="grid lg:grid-cols-2 gap-[40px]  p-[40px_20px] lg:p-[50px_40px]">
      <div className="flex flex-col items-start justify-center">
        <p className="text-[25px] lg:text-[50px] font-[700] text-white leading-[35px] lg:leading-[60px]">
          Ready to Modernize Your Hospital?
        </p>
        <p className="text-[16px] lg:text-[20px] font-[400] text-white mt-[10px]">
          Discover innovative tools to streamline patient care and hospital
          operations.
        </p>
        <button className="bg-[#EAAF4E] mt-[10px] shadow  p-[9px_25px] w-fit font-[500] rounded-[10px]">
          Learn More
        </button>
      </div>
      <div>
        <img src={ready} alt="" />
      </div>
    </div>
  );
}

export default Ready;
