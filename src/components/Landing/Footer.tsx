// import React from 'react'

import logo from '../../assets/gt-logo.svg'
function Footer() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-4 p-[40px_20px] lg:p-[40px] gap-[40px] lg:gap-[40px] text-white">
      <div className='flex items-start justify-start flex-col'>
        <img src={logo} alt="" />
        <button className="bg-[#EAAF4E] shadow text-black mt-[20px] p-[9px_25px] w-fit font-[500] rounded-[10px]">
            Get Started
          </button>
      </div>
      <div>
        <p className="text-[20px] font-[500]">About</p>
        <div className="flex flex-col  mt-[5px] space-y-[10px]">
        <p className="text-[16px]">Doctors</p>
        <p className="text-[16px]">Staff</p>
        <p className="text-[16px]">Patient</p>
        <p className="text-[16px]">Hospitals</p>
        </div>
      </div>
      
      <div>
        <p className="text-[20px] font-[500]">Contact</p>
        <div className="flex flex-col  mt-[5px] space-y-[10px]">
        <p className="text-[15px] ">X(Twitter)</p>
        <p className="text-[15px]">Instagram</p>
        <p className="text-[15px]">Facebook</p>
        <p className="text-[15px]">Phone: +234812347550</p>
        <p className="text-[15px]">Mail: contact@rapha.com</p>
        </div>
       
      </div>
      <div className="flex flex-col">
        <p>Rapha Healthcare Facility Tool</p>
        <p>Simplifying Hospital Management</p>
      </div>
    </div>
  );
}

export default Footer;
