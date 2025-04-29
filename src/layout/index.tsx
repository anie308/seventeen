// import React from "react"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"

function Layout() {
  return (
    <div className="flex bg-[#000000] font-poppins items-start border border-green-400 w-full h-screen min-h-screen">
        <Sidebar/>
        <div className="flex-1 border  flex flex-col h-full w-full">
            <Navbar/>
           <div className="flex-1">
            <Outlet/>
           </div>
        </div>
    </div>
  )
}



export default Layout