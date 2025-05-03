// import React from 'react'

function PatientCard() {
  return (
    <div className="bg-[#181818] p-[20px] rounded-[10px]">
        <div className="flex items-center  space-x-[10px]">
            <div className="h-[50px] w-[50px] rounded-full bg-[#4C4F59]"></div>
            <div>
                <p className="text-[16px] ">Reginalds Bush</p>
                <p className="text-[13px] ">Patient ID: PID001</p>
            </div>
        </div>
        <div className="flex items-center gap-[10px] mt-[15px]">
            <div className="text-white p-[5px_10px] text-center rounded-[8px] bg-[#1A2492]">
            Gender:  Male
            </div>
            <div className="text-white p-[5px_10px] text-center rounded-[8px] bg-[#1A2492]">
            Age: 20
            </div>
        </div>
        <p className="my-[15px]">Last Visit: <span className="text-[#4C4F59]">31 Jun 2024</span></p>
        <button className="bg-[#EAAF4E] mt-[10px] text-black p-[8px_20px] rounded-[10px] w-full">
            <span>View</span>
        </button>
    </div>
  )
}

export default PatientCard