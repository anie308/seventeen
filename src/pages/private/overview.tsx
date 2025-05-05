// import React from 'react'

import { useState } from "react";

function Overview() {
  const [tab, setTab] = useState(0);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="p-[10px] flex items-center space-x-[10px]">
          <button
            onClick={() => setTab(0)}
            className={`${
              tab === 0 ? "bg-[#EAAF4E] text-black" : "text-white"
            } rounded-[8px] p-[8px_20px]`}
          >
            Overview
          </button>
          <button
            onClick={() => setTab(1)}
            className={`${
              tab === 1 ? "bg-[#EAAF4E] text-black" : "text-white"
            } rounded-[8px] p-[8px_20px]`}
          >
            Patients
          </button>
          <button
            onClick={() => setTab(2)}
            className={`${
              tab === 2 ? "bg-[#EAAF4E] text-black" : "text-white"
            } rounded-[8px] p-[8px_20px]`}
          >
            Hospitals
          </button>
          <button
            onClick={() => setTab(3)}
            className={`${
              tab === 3 ? "bg-[#EAAF4E] text-black" : "text-white"
            } rounded-[8px] p-[8px_20px]`}
          >
            Doctprs
          </button>
        </div>

        <div className="flex items-center space-x-[10px]">
          <button className="bg-[#EAAF4E] text-black p-[8px_20px] rounded-[8px]">
            Add New Patient
          </button>
          <button className="bg-[#EAAF4E] text-black p-[8px_20px] rounded-[8px]">
            Validate Patient
          </button>
        </div>
      </div>

     <div className="mt-[20px] text-white border p-[20px]">
     {tab === 0 && (
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati laborum consectetur provident saepe vel perferendis fugit molestias voluptates blanditiis voluptatum nostrum laudantium hic dolor voluptatem, assumenda nulla amet maiores alias!</div>
      )}
     </div>
    </div>
  );
}

export default Overview;
