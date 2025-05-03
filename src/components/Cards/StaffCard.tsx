// import React from 'react'

import { useState } from "react"
import StaffDetailModal from "../Modals/StaffDetailModal"

function StaffCard() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="bg-[#181818] p-[20px] rounded-[10px]">
          <div className="flex items-center  space-x-[10px]">
              <div className="h-[50px] w-[50px] rounded-full bg-[#4C4F59]"></div>
              <div>
                  <p className="text-[16px] ">Reginalds Bush</p>
                  <p className="text-[13px] ">Oncologist</p>
              </div>
          </div>
          <div className="flex items-center gap-[10px] mt-[15px]">
              <div className="text-[#8C5C0D] p-[5px_10px] rounded-full text-[12px] text-center  bg-[#FBBC55]">
             Full Time
              </div>
              
          </div>
          <button onClick={()=> setIsOpen(true)} className="bg-[#EAAF4E] mt-[20px] text-black p-[8px_20px] rounded-[10px] w-full">
              <span>View</span>
          </button>

          <StaffDetailModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    )
  }
  
  export default StaffCard