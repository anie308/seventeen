// import React from 'react'

import seamless from '../../assets/seamless.svg'
import dashboard from '../../assets/dashboard.svg'
import scalable from '../../assets/scalable.svg'


function Features() {
  return (
    <div className="flex flex-col items-center justify-center p-[40px_20px] lg:p-[50px_40px]">
      <p className="bg-[#1A2492] text-white rounded-full p-[5px_10px]">
        Key features
      </p>
      <div className="grid lg:grid-cols-3 w-full lg:w-[90%] gap-[20px] lg:gap-[40px] mt-[40px] text-white">
        <div className="flex flex-col">
          <div className="h-[300px] rounded-[10px] overflow-hidden">
            <img src={seamless} className='object-cover h-full' alt="" />
          </div>
          <p className="font-[600] text-[18px] lg:text-[24px] mt-[10px]">
            Seamless Hospital Setup
          </p>
          <p className="text-[14px] lg:text-[20px]">
            Register and configure your hospital&apos;s operations within
            minutes
          </p>
        </div>
        <div className="flex flex-col">
        <div className="h-[300px] rounded-[10px] overflow-hidden">
            <img src={dashboard} className='object-cover h-full' alt="" />
          </div>
          <p className="font-[600] text-[18px] lg:text-[24px] mt-[10px]">
            Custom Admin Dashboard
          </p>
          <p className="text-[14px] lg:text-[20px]">
            Tailor your dashboard to your hospital’s unique workflows
          </p>
        </div>
        <div className="flex flex-col">
        <div className="h-[300px] rounded-[10px] overflow-hidden">
            <img src={scalable} className='object-cover h-full' alt="" />
          </div>
          <p className="font-[600] text-[18px] lg:text-[24px] mt-[10px]">Scalable Management</p>
          <p className="text-[14px] lg:text-[20px]">
            Grow without limits — Rapha adapts as your hospital expands
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
