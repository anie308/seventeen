/* eslint-disable @typescript-eslint/no-explicit-any */



import { useState } from "react";
import dayjs from "dayjs";

function Appointment() {
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [currentDate, setCurrentDate] = useState(dayjs());
  const [selectedDate, setSelectedDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf("month");
  const startDay = startOfMonth.day(); // 0 = Sunday
  const daysInMonth = currentDate.daysInMonth();

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, "month"));
  const nextMonth = () => setCurrentDate(currentDate.add(1, "month"));

  // Create calendar grid
  const calendarDays = [];

  for (let i = 0; i < startDay; i++) calendarDays.push(null);
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(startOfMonth.date(i)); // Add full date
  }

  const today = dayjs();

  const handleDateClick = (date: any) => {
    if (date) {
      setSelectedDate(date);
    }
  };

  return (
    <div className=" p-6 rounded-lg">
      <div className="flex text-white items-center justify-between">
        <div>
          <p className="text-xl">Calendar</p>
          <p className="text-gray-400">Monitor Patient's visits</p>
        </div>
        <button className="bg-yellow-400 p-2 px-4 text-black rounded-lg font-medium">
          Schedule a Visit
        </button>
      </div>

      <div className="text-white mt-5 gap-5 flex items-start">
        <div className="w-1/4 flex flex-col bg-[#181818] rounded-lg">
          <div className="p-4">
            <p className="font-semibold">Today's Visits</p>
            <p className="text-gray-400">{today.format("DD MMMM YYYY")}</p>
          </div>
          <div className="mt-4 flex flex-col space-y-3 border-t border-gray-700 p-4">
            <div className="flex space-x-3 rounded-lg items-center p-3 bg-yellow-400">
              <div className="h-12 w-12 rounded-full bg-gray-600"></div>
              <div className="text-black">
                <p className="text-sm">10:00 - 10:45</p>
                <p className="text-base font-medium">Xever Thomas</p>
              </div>
            </div>
            <div className="flex space-x-3 rounded-lg items-center p-3 bg-yellow-400">
              <div className="h-12 w-12 rounded-full bg-gray-600"></div>
              <div className="text-black">
                <p className="text-sm">11:00 - 11:45</p>
                <p className="text-base font-medium">Alex Warren</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/4">
          <div className="my-4 flex items-center space-x-3">
            <button className="p-2 px-4 text-white bg-gray-800 rounded-lg">Day</button>
            <button className="p-2 px-4 text-black bg-yellow-400 rounded-lg">Month</button>
            <button className="p-2 px-4 text-white bg-gray-800 rounded-lg">Year</button>
          </div>
          <div className="flex items-center justify-between mb-5">
            <button onClick={prevMonth} className="text-black text-xl bg-yellow-400 p-1 px-3 rounded-lg">
              &lt;
            </button>
            <p className="text-lg font-medium">
              {currentDate.format("MMMM YYYY")}
            </p>
            <button onClick={nextMonth} className="text-black text-xl bg-yellow-400 p-1 px-3 rounded-lg">
              &gt;
            </button>
          </div>
          <div className="grid grid-cols-7 gap-2 mb-2">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-xs h-12 rounded-lg bg-[#181818] items-center justify-center flex text-white"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((date, idx) => (
              <div
                key={idx}
                onClick={() => handleDateClick(date)}
                className={`h-14 flex items-start justify-end p-2 rounded-lg cursor-pointer
                  ${!date ? "bg-transparent" : 
                    date.format("YYYY-MM-DD") === today.format("YYYY-MM-DD") ? "bg-yellow-400 text-black font-semibold" : 
                    date.format("YYYY-MM-DD") === selectedDate.format("YYYY-MM-DD") ? "bg-blue-600 text-white" : 
                    "bg-[#181818] text-white hover:bg-gray-600"}
                `}
              >
                {date ? date.date() : ""}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appointment;