// import React from 'react'
import medtech from '../../assets/medtech.jpg';
import support from '../../assets/support.jpg';
import doctors from '../../assets/doctora.jpg';
function Simple() {
  return (
    <div className="flex items-center flex-col justify-center my-[50px] p-[20px]">
      <p className="text-[24px] font-[600] text-white">
        Simple, Transparent, and Free for Early Hospitals
      </p>
      <div className="bg-[#EAAF4E] p-[5px_10px] rounded-[10px] mt-[20px]">
        Register Your Hospital Today
      </div>

      <div className="bg-[#1A2492] flex flex-col items-center p-[50px_20px] rounded-[10px] mt-[30px]">
        <p className="text-[28px] font-[600] text-white">
          Built for Healthcare Professionals, Backed by Expertise
        </p>
        <p className="text-[18px] leading-[20px] text-white text-center w-full lg:w-[70%]">
          Rapha is designed by healthcare and tech experts who understand the
          daily challenges of hospital management. Every feature is crafted to
          make your work easier, faster, and more secure
        </p>

        <div className="mt-[20px] p-[20px] w-full lg:w-[80%] grid lg:grid-cols-3 gap-[40px]">
        <div className="flex flex-col items-center justify-center">
          <div className="h-[250px]  w-full  rounded-[10px] overflow-hidden">
            <img src={doctors} className='object-cover w-full h-full' alt="" />
          </div>
          <p className="font-[600] text-[18px] text-white text-center lg:text-[20px] mt-[10px]">
          Built with Medical Expertise
          </p>
          <p className="text-[14px] lg:text-[16px] text-white text-center">
          Developed with doctors, lab scientists, and hospital managers
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[250px]  w-full rounded-[10px] overflow-hidden">
            <img src={medtech} className='object-cover h-full' alt="" />
          </div>
          <p className="font-[600] text-[18px] text-white text-center lg:text-[20px] mt-[10px]">
          Future-Proof Technology
          </p>
          <p className="text-[14px] lg:text-[16px] text-white text-center">
          Regular updates for evolving healthcare needs
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-[250px] w-full rounded-[10px] overflow-hidden">
            <img src={support} className='object-cover h-full' alt="" />
          </div>
          <p className="font-[600] text-[18px] text-white text-center lg:text-[20px] mt-[10px]">
          Dedicated Support
          </p>
          <p className="text-[14px] lg:text-[16px] text-white text-center">
          Always ready to assist your hospital at every stage
          </p>
        </div>
            
        </div>
      </div>
    </div>
  );
}

export default Simple;
