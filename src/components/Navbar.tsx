// import React from 'react'
import { AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";

function Navbar() {
  return (
    <div className="p-[20px_30px] border-b border-[#D9D9D9]  text-white flex items-center justify-between">
      <div className="flex items-center space-x-[10%]">
        <p>Overview</p>
        <div className="bg-[#181818] w-[400px] flex items-center justify-between rounded-full h-[40px] border">
          <input
            placeholder="Search for anyting here"
            type="text"
            className="grow bg-transparent placeholder:text-[14px] px-[10px]"
          />
          <button className="p-[5px] bg-[#EAAF4E] rounded-full">
            <CiSearch className="text-black text-[25px] " />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-[10px]">
        <AiOutlineBell className="cursor-pointer text-[30px]" />
        <div className="cursor-pointer flex items-center space-x-[10px]">
          <div className="h-[40px] w-[40px] bg-white rounded-full"></div>
          <div>
            <p>Xavier Thomas</p>
            <p className="text-[12px]">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
