import { div } from "framer-motion/client";
import React from "react";

const Hospitals = () => {
  return (
    <div>
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
              <tr className=" bg-[#181818]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dr Chibus Godsin
                </th>
                <td className="px-6 py-4">Dermatologist</td>
                <td className="px-6 py-4">Room 406</td>
                <td className="px-6 py-4">Dermatologist</td>
              </tr>
              <tr className=" bg-[#181818]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dr Awmah Bassey
                </th>
                <td className="px-6 py-4">Pediatrician</td>
                <td className="px-6 py-4">-</td>
                <td className="px-6 py-4">Pediatrician</td>
              </tr>
              <tr className=" bg-[#181818]">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  Dr Jacob Jones
                </th>
                <td className="px-6 py-4">Surgeon</td>
                <td className="px-6 py-4">Room 103</td>
                <td className="px-6 py-4">Surgeon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <h3>Activity</h3>
        <span>
          <p>Today</p>
        </span>
      </div>
    </div>
  );
};

export default Hospitals;
