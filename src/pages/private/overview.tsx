// import React from 'react'

import { useState } from "react"

function Overview() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="p-[10px] flex items-center space-x-[10px]">
        <button onClick={()=> setTab(0)} className={`${tab === 0 ? "bg-[#EAAF4E] text-black" : "text-white"} p-[8px_20px]`}></button>
      </div>
    </div>
  )
}

export default Overview