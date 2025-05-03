// import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/gt-logo.svg'
function Navbar() {
  const navigate = useNavigate()
  return (
    <div className='flex bg-[#000000] items-center justify-between p-[15px_20px] lg:p-[15px_40px]'>
        <div>
          <img src={logo} className='h-[50px]' alt="" />
        </div>
        <div className='flex items-center space-x-[20px]'>
          <button onClick={()=> navigate('/login')} className='border border-[#EAAF4E] text-white p-[8px_30px] text-[14px] rounded-[10px]'>Log In</button>
          <button onClick={()=> navigate('/register')} className='bg-[#EAAF4E] shadow  p-[9px_25px] text-[14px] rounded-[10px]'>Get Started</button>
        </div>
    </div>
  )
}

export default Navbar