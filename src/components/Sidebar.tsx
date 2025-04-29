// import React from 'react'

import { Link, useMatch } from "react-router-dom";
import gtiLogo from "../assets/gt-logo.svg";

function CustomLink({ to,  title }: { to: string; title: string }) {
  const match = useMatch(to !== "" ? `/dashboard/` + to : "/dashboard/");

  return (
    <Link
      to={to}
      className={`flex flex-col items-center justify-center w-full space-y-1 py-2 transition-all ${
        match ? "bg-primary text-white" : "bg-transparent text-gray-500"
      }`}
    >
      {/* {match ? iconActive : icon} */}
      <div className="h-[30px] w-[30px] border"></div>
      <p
        className={`text-[12px] font-light ${
          match ? "text-white" : "text-gray-500"
        }`}
      >
        {title}
      </p>
    </Link>
  );
}

function Sidebar() {
  const links = [
    {
      title: "Overview",
      url: "",
    },
    {
      title: "Appointment",
      url: "appointment",
    },
    {
      title: "Patients",
      url: "patients",
    },
    {
      title: "Staff List",
      url: "staff",
    },
  ];
  return (
    <div className=" w-[120px] h-full flex flex-col">
      <div>
        <img src={gtiLogo} className="h-[80px]" alt="" />
      </div>
      <div className="grow flex-1 text-white border-red-200 border flex flex-col items-center justify-between">
        <div className="flex flex-col mt-[10px] space-y-[10px]">
          {links.map((link, index) => (
            <CustomLink to={link.url} key={index} title={link.title} />
          ))}
        </div>
        <div className="flex flex-col space-y-[10px] pb-[10px]">
          <Link to="/dashbaord/settings" className="flex flex-col items-center">
            <div className="h-[30px] w-[30px] border"></div>
            <p className="text-[12px]">Settings</p>
          </Link>
          <div className="flex flex-col items-center">
            <div className="h-[30px] w-[30px] border"></div>
            <p className="text-[12px]">Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
