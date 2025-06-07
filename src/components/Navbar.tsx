// import React from 'react'
import { AiOutlineBell } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import ThemeSelector from "./ThemeSelector";

function Navbar() {
  const navigate = useNavigate()
  return (
    <div className="px-6 py-4 border-b border-surface-200 bg-white text-surface-900 flex items-center justify-between shadow-sm">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-semibold text-surface-900">Overview</h1>
        <div className="bg-surface-50 w-[400px] flex items-center rounded-lg h-10 border border-surface-200 focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary">
          <input
            placeholder="Search for anything here..."
            type="text"
            className="grow bg-transparent placeholder:text-surface-400 px-4 outline-none text-sm"
          />
          <button className="p-2 bg-primary rounded-r-lg hover:bg-primary-700 transition-colors">
            <CiSearch className="text-white text-[20px]" />
          </button>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeSelector />
        <button className="relative p-2 text-surface-600 hover:text-primary hover:bg-surface-50 rounded-lg transition-colors">
          <AiOutlineBell className="text-[24px]" />
          <span className="absolute -top-1 -right-1 bg-error h-5 w-5 rounded-full text-white text-xs flex items-center justify-center">3</span>
        </button>
        <div 
          onClick={() => navigate('/dashboard/settings')} 
          className="cursor-pointer bg-surface-50 p-3 rounded-lg flex items-center space-x-3 hover:bg-surface-100 transition-colors border border-surface-200"
        >
          <div className="h-10 w-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
            <span className="text-white font-medium text-sm">XT</span>
          </div>
          <div>
            <p className="font-medium text-surface-900">Xavier Thomas</p>
            <p className="text-xs text-surface-500">Super Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
