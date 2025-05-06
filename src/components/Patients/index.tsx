import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginatedItems from "../pagination/index";

const Patients = () => {
  return (
    <div className="w-[100%] border border-gray-400 py-10 px-3 rounded-lg">
      <div className="flex justify-between">
        <p className="text-[20px] font-[600]">Patients List</p>
        <span>
          <ul className="flex">
            <li className="w-5 h-5 bg-green-500 rounded-full mr-2"></li>
            <p className="mr-2">Discharged</p>
            <li className="w-5 h-5 bg-blue-500 rounded-full mr-2"></li>
            <p className="mr-2">Surgical Intervention</p>
            <li className="w-5 h-5 bg-purple-500 rounded-full mr-2"></li>
            <p className="mr-2">Extra Hospitailzation</p>
            <li className="w-5 h-5 bg-orange-500 rounded-full mr-2"></li>
            <p className="mr-2">In Surgery</p>
            <li className="w-5 h-5 bg-white rounded-full mr-2"></li>
            <p className="mr-2">Unavailable</p>
          </ul>
        </span>
      </div>

      <div className="relative overflow-x-auto mt-[10px]">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="text-xs  uppercase  bg-[#0F0F0F]">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Room
              </th>
              <th scope="col" className="px-6 py-3">
                Condition
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className=" bg-[#181818]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                George Henry
              </th>
              <td className="px-6 py-4">25-Jan-2025</td>
              <td className="px-6 py-4">Room 101</td>
              <td className="px-6 py-4">Crircal condition</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-purple-400 rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">Extra hospitalization</p>
              </td>
              <td className="px-6 py-4 flex gap-4">
                <RiDeleteBin5Line className="hover:cursor-pointer" />
                <GoChecklist className="hover:cursor-pointer" />
                <BsThreeDotsVertical className="hover:cursor-pointer" />
              </td>
            </tr>
            <tr className=" bg-[#181818]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Jack Henry
              </th>
              <td className="px-6 py-4">04-Feb-2025</td>
              <td className="px-6 py-4">Room 205</td>
              <td className="px-6 py-4">Phase 1 clinic trial</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-green-400 rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">Discharged</p>
              </td>
              <td className="px-6 py-4 flex gap-4">
                <RiDeleteBin5Line className="hover:cursor-pointer" />
                <GoChecklist className="hover:cursor-pointer" />
                <BsThreeDotsVertical className="hover:cursor-pointer" />
              </td>
            </tr>
            <tr className=" bg-[#181818]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Jane Doe
              </th>
              <td className="px-6 py-4">23-Mar-2025</td>
              <td className="px-6 py-4">Room 203</td>
              <td className="px-6 py-4">Crircal condition</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-orange-400 rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">In surgery</p>
              </td>
              <td className="px-6 py-4 flex gap-4">
                <RiDeleteBin5Line className="hover:cursor-pointer" />
                <GoChecklist className="hover:cursor-pointer" />
                <BsThreeDotsVertical className="hover:cursor-pointer" />
              </td>
            </tr>
            <tr className=" bg-[#181818]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                John Doe
              </th>
              <td className="px-6 py-4">20-Apr-2025</td>
              <td className="px-6 py-4">Room 104</td>
              <td className="px-6 py-4">Crircal condition</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-white rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">Unavailable</p>
              </td>
              <td className="px-6 py-4 flex gap-4">
                <RiDeleteBin5Line className="hover:cursor-pointer" />
                <GoChecklist className="hover:cursor-pointer" />
                <BsThreeDotsVertical className="hover:cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="mt-40 border-t-2 border-gray-400">
        <PaginatedItems itemsPerPage={1} />
      </div>
    </div>
  );
};

export default Patients;
