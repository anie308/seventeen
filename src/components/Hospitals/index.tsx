import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import PaginatedItems from "../pagination/index";

const Hospitals = () => {
  return (
    <div>
      <div className="flex w-full gap-5">
        <div className="w-[70%]">
          <p className="text-[20px] font-[600]">Doctor Availability</p>

          <div className="relative overflow-x-auto mt-[10px]">
            <table className="w-full text-sm text-left rtl:text-right ">
              <thead className="text-xs  uppercase  bg-[#0F0F0F]">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Room ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Unit
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    PIC
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
                    B001
                  </th>
                  <td className="px-6 py-4">Oncology</td>
                  <td className="px-6 py-4 flex">
                    <p className="w-5 h-5 bg-orange-500 rounded-full mr-2"></p>
                    <p className="mr-2">Occupied</p>
                  </td>
                  <td className="px-6 py-4">Dr Xavier Bush</td>
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
                    B002
                  </th>
                  <td className="px-6 py-4">ICU</td>
                  <td className="px-6 py-4 flex">
                    <p className="w-5 h-5 bg-orange-500 rounded-full mr-2"></p>
                    <p className="mr-2">Occupied</p>
                  </td>
                  <td className="px-6 py-4">Dr Chibus Godson</td>
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
                    B003
                  </th>
                  <td className="px-6 py-4">Pediatry</td>
                  <td className="px-6 py-4 flex">
                    <p className="w-5 h-5 bg-orange-500 rounded-full mr-2"></p>
                    <p className="mr-2">Occupied</p>
                  </td>
                  <td className="px-6 py-4">Dr Awmah Bassey</td>
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
                    B004
                  </th>
                  <td className="px-6 py-4">General</td>
                  <td className="px-6 py-4 flex">
                    <p className="w-5 h-5 bg-orange-500 rounded-full mr-2"></p>
                    <p className="mr-2">Occupied</p>
                  </td>
                  <td className="px-6 py-4">Dr Jacob Jones</td>
                  <td className="px-6 py-4 flex gap-4">
                    <RiDeleteBin5Line className="hover:cursor-pointer" />
                    <GoChecklist className="hover:cursor-pointer" />
                    <BsThreeDotsVertical className="hover:cursor-pointer" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[30%] bg-[#181818] p-8 rounded-lg">
          <div className="flex justify-between">
            <h3>Activity</h3>
            <span className="flex items-center gap-2 p-1  hover:cursor-pointer border-r-4 mb-6 border-b-4 rounded-lg border-gray-400 font-semibold">
              <p>Today</p>
              <IoIosArrowDown />
            </span>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex text-sm">
                <p>
                  <a href="#" className="text-blue-600">
                    Richard Reynolds
                  </a>
                  meeting with{" "}
                  <a href="#" className="text-blue-600">
                    {" "}
                    Dr. Awmah
                  </a>{" "}
                  <br />
                  M.D
                </p>
                <span className="text-[8px]">12 minutes ago</span>
              </li>
              <li className="flex text-sm">
                <p>
                  <a href="#" className="text-blue-600">
                    Richard Reynolds
                  </a>
                  meeting with{" "}
                  <a href="#" className="text-blue-600">
                    {" "}
                    Dr. Awmah
                  </a>{" "}
                  <br />
                  M.D
                </p>
                <span className="text-[8px]">12 minutes ago</span>
              </li>
              <li className="flex text-sm">
                <p>
                  <a href="#" className="text-blue-600">
                    Richard Reynolds
                  </a>
                  meeting with{" "}
                  <a href="#" className="text-blue-600">
                    {" "}
                    Dr. Awmah
                  </a>{" "}
                  <br />
                  M.D
                </p>
                <span className="text-[8px]">12 minutes ago</span>
              </li>
              <li className="flex text-sm">
                <p>
                  <a href="#" className="text-blue-600">
                    Richard Reynolds
                  </a>
                  meeting with{" "}
                  <a href="#" className="text-blue-600">
                    {" "}
                    Dr. Awmah
                  </a>{" "}
                  <br />
                  M.D
                </p>
                <span className="text-[8px]">12 minutes ago</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mt-40 border-t-2 border-gray-400">
        <PaginatedItems itemsPerPage={1} />
      </div>
    </div>
  );
};

export default Hospitals;
