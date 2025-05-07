import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginatedItems from "../pagination/index";

const Doctors = () => {
  return (
    <div className="w-[100%] border border-gray-400 py-10 px-3 rounded-lg">
      <div className="flex justify-between">
        <p className="text-[20px] font-[600]">Patients List</p>
        <span>
          <ul className="flex">
            <li className="w-5 h-5 bg-green-500 rounded-full mr-2"></li>
            <p className="mr-2">Available</p>
            <li className="w-5 h-5 bg-orange-500 rounded-full mr-2"></li>
            <p className="mr-2">Standby</p>
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
                Specialty
              </th>
              <th scope="col" className="px-6 py-3">
                Availability
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
                Dr Xavier Bush
              </th>
              <td className="px-6 py-4">Oncology</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-green-400 rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">Available</p>
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
                Dr Chibus Godson
              </th>
              <td className="px-6 py-4">ICU</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-green-400 rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">Available</p>
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
                Dr Awmah Bassey
              </th>
              <td className="px-6 py-4">Pediatry</td>
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
            <tr className=" bg-[#181818]">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Dr Jacob Jones
              </th>
              <td className="px-6 py-4">General</td>
              <td className="px-6 py-4">
                <p className="w-5 h-5 bg-green-400 rounded-full mr-2 inline-block"></p>
                <p className="mr-2 inline">Available</p>
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

export default Doctors;
