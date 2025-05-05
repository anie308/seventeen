// import React from 'react'
import dayjs from "dayjs";
import { useState } from "react";

function Appointment() {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  // const endOfMonth = currentDate.endOf("month");
  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = currentDate.daysInMonth();

  // const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));
  console.log(nextMonth)

  // Create calendar grid
  const calendarDays: (number | null)[] = [];

  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) calendarDays.push(i);

  const today = dayjs();
  return (
    <div>
      <div className="flex text-white items-center justify-between">
        <div>
          <p className="text-[20px]">Calendar</p>
          <p>Monitor Patient’s visits</p>
        </div>
        <button className="bg-[#FECC4A] p-[8px_20px] text-black rounded-[8px]">
          Schedule a Visit
        </button>
      </div>

      <div className="text-white mt-[20px]   flex items-start">
        <div className="w-[20%] bg-[#181818] p-[20px]">
          <p className="font-[600]">Today's Visits</p>
          <p>2nd August 2025</p>
        </div>
        <div className="w-[80%]">
          <div className="my-[15px] flex items-center space-x-[10px]">
            {/* <select name="" id="">
              <option value=""></option>
            </select> */}
            <button className="p-[8px_20px] text-white  w-fit rounded-[8px]">Day</button>
            <button className="p-[8px_20px] text-black bg-[#FECC4A] w-fit rounded-[8px]">Month</button>
            <button className="p-[8px_20px] text-white  w-fit rounded-[8px]">Year</button>
          </div>
          {/* <div className="flex items-center justify-between mb-[20px]">
            <button onClick={prevMonth} className="text-white">
              &lt;
            </button>
            <p className="text-lg font-medium">
              {currentDate.format("MMMM YYYY")}
            </p>
            <button onClick={nextMonth} className="text-white">
              &gt;
            </button>
          </div> */}
          <div className="grid grid-cols-7 gap-[10px] mt-[20px] mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-xs h-[48px] rounded-[8px] bg-[#181818] items-center justify-center flex  text-white "
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-[10px]">
            {calendarDays.map((day, idx) => (
              <div
                key={idx}
                className={`h-[60px] flex items-start justify-end p-[10px] rounded-[8px] 
                  ${day ? "bg-[#2A2A2A] text-white" : "bg-transparent"} 
                  ${
                    day === today.date() &&
                    currentDate.isSame(today, "month") &&
                    "bg-[#FECC4A] text-black font-semibold"
                  }
                `}
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;
