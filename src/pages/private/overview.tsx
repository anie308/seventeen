// import React from 'react'

import { useState } from "react";
import OverviewComp from "../../components/Overview";
import Patients from "../../components/Patients";
import Hospitals from "../../components/Hospitals";
import { useNavigate } from "react-router-dom";
import Doctors from "../../components/Doctors";

function Overview() {
  const navigate = useNavigate();
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
            Doctors
          </button>
        </div>

        <div className="flex items-center space-x-[10px]">
          <button
            onClick={() => navigate("/dashboard/add-patient")}
            className="bg-[#EAAF4E] text-black p-[8px_20px] rounded-[8px]"
          >
            Add New Patient
          </button>
          <button className="bg-[#EAAF4E] text-black p-[8px_20px] rounded-[8px]">
            Validate Patient
          </button>
        </div>
      </div>

      <div className="mt-[20px] text-white  p-[20px]">
        {tab === 0 && <OverviewComp />}
      </div>
      <div className="mt-[20px] text-white  p-[20px]">
        {tab === 1 && <Patients />}
      </div>
      <div className="mt-[20px] text-white  p-[20px]">
        {tab === 2 && <Hospitals />}
      </div>
      <div className="mt-[20px] text-white  p-[20px]">
        {tab === 3 && <Doctors />}
      </div>
    </div>
  );
}

export default Overview;
