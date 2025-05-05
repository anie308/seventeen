// import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function OverviewComp() {
  return (
    <div className="flex flex-col space-y-[20px]">
      <div className="grid grid-cols-4 gap-[30px] w-[80%]">
        <div className="p-[20px]  rounded-[8px] bg-[#181818]">
          <p className="text-[12px]">Visitors</p>
          <p className="text-[25px] font-[500]">300</p>
          <p className="text-[12px]">Last update: April 16</p>
        </div>
        <div className="p-[20px]  rounded-[8px] bg-[#181818]">
          <p className="text-[12px]">Patients</p>
          <p className="text-[25px] font-[500]">300</p>
          <p className="text-[12px]">Last update: April 16</p>
        </div>
        <div className="p-[20px]  rounded-[8px] bg-[#181818]">
          <p className="text-[12px]">Doctors</p>
          <p className="text-[25px] font-[500]">300</p>
          <p className="text-[12px]">Last update: April 16</p>
        </div>
        <div className="p-[20px]  rounded-[8px] bg-[#181818]">
          <p className="text-[12px]">Earnings</p>
          <p className="text-[25px] font-[500]">1,500,000</p>
          <p className="text-[12px]">Last update: April 16</p>
        </div>
      </div>
      <div className=" border p-[20px]">
        <div className="flex items-center justify-between ">
          <p className="font-[700] text-[24px]">Patient Gender Distribution</p>
        </div>
        <div className="">
          <div className="mt-[20px] h-[300px]">
            <Bar
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                ],
                datasets: [
                  {
                    label: "Male",
                    data: [40, 45, 50, 60, 55, 65, 70, 20, 80],
                    backgroundColor: "#1A2492",
                    barThickness: 30, // Controls the width of each bar
                    maxBarThickness: 35,
                  },
                  {
                    label: "Female",
                    data: [35, 40, 38, 50, 48, 53, 50, 40, 30],
                    backgroundColor: "#FF6384",
                    barThickness: 30, // Controls the width of each bar
                    maxBarThickness: 35,
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false, // Important for height to take effect
                plugins: {
                  legend: { position: "top" },
                  title: {
                    display: true,
                    text: "Monthly Gender Distribution",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="p-[20px] w-full flex gap-[20px] items-start border">
        <div className="w-[70%]">
          <p className="text-[20px] font-[600]">Doctor Availability</p>

          <div className="relative overflow-x-auto mt-[10px]">
            <table className="w-full text-sm text-left rtl:text-right ">
              <thead className="text-xs  uppercase  bg-[#0F0F0F]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Doctor
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Specialty
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Room
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Condition
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" bg-[#181818]">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Dr Xavier Bush
                  </th>
                  <td className="px-6 py-4">Oncologist</td>
                  <td className="px-6 py-4">Room 103</td>
                  <td className="px-6 py-4">Oncologist</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[30%]">
          <p className="text-[20px] font-[600]">Doctor Availability</p>
          <div className="mt-[10px] flex flex-col space-y-[10px]">
            <div className="">
              <div className="flex items-center justify-between">
                <p className="text-[12px]">Cardiology</p>
                <p className="text-[12px]">20 (25%)</p>
              </div>
              <div className="h-[25px] mt-[2px] bg-white">
                <p className="bg-[#1A2492] h-full w-[60%]"></p>
              </div>
            </div>
            <div className="">
              <div className="flex items-center justify-between">
                <p className="text-[12px]">Dermatology</p>
                <p className="text-[12px]">16 (20%)</p>
              </div>
              <div className="h-[25px] mt-[2px] bg-white">
                <p className="bg-[#1A2492] h-full w-[60%]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewComp;
