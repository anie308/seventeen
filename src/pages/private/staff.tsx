// import React from 'react'

import { useState } from "react"
import StaffCard from "../../components/Cards/StaffCard"

function Staff() {
  const [tab, setTab] = useState(0);
  return (
    <div className="text-white">
   <div className="flex items-center  border-white">
   <p onClick={()=> setTab(0)} className={`${tab === 0 ? "text-[#FECC4A] border-[#FECC4A]" : "text-white border-white"} border-b font-[400] p-[8px_20px] `}>Doctor Staff</p>
   <p onClick={()=> setTab(1)} className={`${tab === 1 ? "text-[#FECC4A] border-[#FECC4A]" : "text-white border-white"} border-b font-[400] p-[8px_20px]`}>General Staff</p>
   </div>

    <div className="mt-[20px] grid md:grid-cols-2 xl:grid-cols-4 gap-[20px] lg:gap-[40px]">
      {Array.from({ length: 8 }).map((_, index) => (
        <StaffCard key={index} />
      ))}
    </div>
  </div>
  )
}

export default Staff