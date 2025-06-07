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
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-surface-900">Calendar</h1>
            <p className="text-surface-600 mt-1">Monitor Patient's visits</p>
          </div>
          <button className="bg-primary hover:bg-primary-700 px-6 py-3 text-white rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2">
            <span>Schedule a Visit</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-surface-200">
          <div className="p-6 border-b border-surface-200">
            <h3 className="font-semibold text-surface-900">Today's Visits</h3>
            <p className="text-surface-600 text-sm mt-1">{today.format("DD MMMM YYYY")}</p>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-primary/5 border border-primary/20 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center">
                <span className="text-white font-medium text-sm">XT</span>
              </div>
              <div>
                <p className="text-sm text-surface-600">10:00 - 10:45</p>
                <p className="font-medium text-surface-900">Xever Thomas</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-3 bg-secondary/5 border border-secondary/20 rounded-lg">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-secondary to-secondary-700 flex items-center justify-center">
                <span className="text-white font-medium text-sm">AW</span>
              </div>
              <div>
                <p className="text-sm text-surface-600">11:00 - 11:45</p>
                <p className="font-medium text-surface-900">Alex Warren</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 bg-white rounded-xl shadow-sm border border-surface-200 p-6">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2 bg-surface-100 p-1 rounded-lg">
              <button className="px-4 py-2 text-surface-600 hover:text-surface-900 hover:bg-surface-200 rounded-md text-sm font-medium transition-colors">
                Day
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium shadow-sm">
                Month
              </button>
              <button className="px-4 py-2 text-surface-600 hover:text-surface-900 hover:bg-surface-200 rounded-md text-sm font-medium transition-colors">
                Year
              </button>
            </div>
            <div className="flex items-center space-x-4">
              <button 
                onClick={prevMonth} 
                className="p-2 bg-primary hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                <span className="text-lg">‹</span>
              </button>
              <h2 className="text-lg font-semibold text-surface-900 min-w-[140px] text-center">
                {currentDate.format("MMMM YYYY")}
              </h2>
              <button 
                onClick={nextMonth} 
                className="p-2 bg-primary hover:bg-primary-700 text-white rounded-lg transition-colors"
              >
                <span className="text-lg">›</span>
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-2 mb-4">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="text-center text-sm font-medium h-10 rounded-lg bg-surface-100 items-center justify-center flex text-surface-700"
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
                className={`h-12 flex items-center justify-center rounded-lg cursor-pointer text-sm font-medium transition-all duration-200
                  ${!date ? "bg-transparent" : 
                    date.format("YYYY-MM-DD") === today.format("YYYY-MM-DD") ? "bg-primary text-white shadow-md" : 
                    date.format("YYYY-MM-DD") === selectedDate.format("YYYY-MM-DD") ? "bg-secondary text-white shadow-md" : 
                    "bg-surface-50 text-surface-700 hover:bg-surface-100 border border-surface-200"}
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