// import React from 'react'

import PatientCard from "../../components/Cards/PatientCard";
import { GoPlus } from "react-icons/go";

function Patient() {
  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-[600] text-[28px]">Patients</p>
          <p>View and update detailed patients profile</p>
        </div>
        <div className="flex items-center space-x-[10px]">
          <button className="p-[8px_15px] bg-[#FECC4A] flex items-center  rounded-[8px] text-black space-x-[5px]">
            <GoPlus />
            <span>Sort By</span>
          </button>
          <button className="p-[8px_15px] bg-[#FECC4A] flex items-center  rounded-[8px] text-black space-x-[5px]">
            <GoPlus />
            <span>Filter</span>
          </button>
          <button className="p-[8px_15px] bg-[#FECC4A] flex items-center  rounded-[8px] text-black space-x-[5px]">
            <GoPlus />
            <span>Add Patient</span>
          </button>
        </div>
      </div>

      <div className="mt-[40px] grid grid-cols-4 gap-[20px] lg:gap-[40px]">
        {Array.from({ length: 8 }).map((_, index) => (
          <PatientCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Patient;
