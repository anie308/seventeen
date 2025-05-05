// import React from 'react'

import { useState } from "react";

function Settings() {
  const [tab, setTab] = useState(0);
  return (
    <div className="text-white">
      <div className="flex items-center justify-between">
        <p className="text-[20px] font-[500]">Settings</p>
        <div className="flex items-center space-x-[20px]">
          <button className="border border-[#EAAF4E] p-[8px_20px] rounded-[8px]">
            Cancel
          </button>
          <button className=" bg-[#EAAF4E] p-[8px_20px] rounded-[8px]">
            Cancel
          </button>
        </div>
      </div>

      <div className="bg-[#181818] mt-[40px]  flex items-start">
        <div className="w-[15%]  border-[#888888] p-[30px_10px] space-y-[20px] flex flex-col">
          <div
            onClick={() => setTab(0)}
            className={`${
              tab === 0 ? "bg-[#EAAF4E] rounded-[8px] text-black" : "text-white"
            } cursor-pointer  p-[8px_20px]`}
          >
            General
          </div>
          <div
            onClick={() => setTab(1)}
            className={`${
              tab === 1 ? "bg-[#EAAF4E] rounded-[8px] text-black" : "text-white"
            } cursor-pointer  p-[8px_20px]`}
          >
            Preferences
          </div>
          <div
            onClick={() => setTab(2)}
            className={`${
              tab === 2 ? "bg-[#EAAF4E] rounded-[8px] text-black" : "text-white"
            } cursor-pointer  p-[8px_20px]`}
          >
            Notification
          </div>
          <div
            onClick={() => setTab(3)}
            className={`${
              tab === 3 ? "bg-[#EAAF4E] rounded-[8px] text-black" : "text-white"
            } cursor-pointer  p-[8px_20px]`}
          >
            Account
          </div>
          <div
            onClick={() => setTab(4)}
            className={`${
              tab === 4 ? "bg-[#EAAF4E] rounded-[8px] text-black" : "text-white"
            } cursor-pointer  p-[8px_20px]`}
          >
            User Permissions
          </div>
        </div>
        <div className="w-[85%] border-l  ">
          {tab === 0 && (
            <div>
              <div className="border-b p-[20px]">
                <p className="text-[20px]">General</p>
                <p className="text-[16px]">Update your business persona</p>
              </div>

              <div className="p-[20px] flex items-start space-x-[20px]">
                <div className="h-[80px] w-[80px] bg-white rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-[10px]">
                  <p className="text-[#397AA8]">Upload Image</p>
                  <p className="text-[#9539A8]">Delete</p>
                  </div>
                  <p className="w-[50%]  text-[12px] text-[#4C4F59]">It is best if the image of the person has the same height and length</p>
                </div>
              </div>
              <div className=" p-[20px] grid lg:grid-cols-2 gap-[40px]">
                <div>
                  <p className="text-[15px]">Hospital /Medical Name</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Email Address</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Phone Number</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Hospital Type</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
              </div>
              <div className=" p-[20px] border-t mt-[20px] grid lg:grid-cols-2 gap-[40px]">
                <div>
                  <p className="text-[15px]">Country</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">State</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">City</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Street Address</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
              </div>
            </div>
          )}

          {tab === 1 && (
            <div className="">
               <div className="border-b p-[20px]">
                <p className="text-[20px]">Preference</p>
                <p className="text-[16px]">Customize according to your preference</p>
              </div>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, aperiam est? Ipsa, at ipsum voluptatibus consequuntur, atque fuga cum blanditiis numquam aliquam sapiente iusto tenetur similique amet ad, expedita ex.
            </div>
          )}
          {tab === 2 && (
            <div className="">
               <div className="border-b p-[20px]">
                <p className="text-[20px]">Notification</p>
                <p className="text-[16px]">Choose to get updates on the latest changes you can turn off any time</p>
              </div>
              <div className="p-[20px]">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, aperiam est? Ipsa, at ipsum voluptatibus consequuntur, atque fuga cum blanditiis numquam aliquam sapiente iusto tenetur similique amet ad, expedita ex.
              </div>
            </div>
          )}
           {tab === 3 && (
            <div>
              <div className="border-b p-[20px]">
                <p className="text-[20px]">Account</p>
                <p className="text-[16px]">Update your persona</p>
              </div>

              <div className="p-[20px] flex items-start space-x-[20px]">
                <div className="h-[80px] w-[80px] bg-white rounded-full"></div>
                <div>
                  <div className="flex items-center space-x-[10px]">
                  <p className="text-[#397AA8]">Upload Image</p>
                  <p className="text-[#9539A8]">Delete</p>
                  </div>
                  <p className="w-[50%]  text-[12px] text-[#4C4F59]">It is best if the image of the person has the same height and length</p>
                </div>
              </div>
              <div className=" p-[20px] grid lg:grid-cols-2 gap-[40px]">
                <div>
                  <p className="text-[15px]">First Name</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Last Name</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Phone Number</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Email Address</p>
                  <input
                    type="text"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
                <div>
                  <p className="text-[15px]">Date of Birth</p>
                  <input
                    type="date"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
                  />
                </div>
              </div>

              <div className="border-t p-[20px] justify-between flex items-center">
                <div className="w-[50%]">
                  <p className="text-[16px]">Delete Account</p>
                  <p className="text-[14px] text-[#888888]">When you delete account you automatically loose access to all account services and we permanently get rid of your data</p>
                </div>
                <button className="bg-[#EAAF4E] p-[8px_20px] text-black rounded-[8px]">Delete Account</button>
               
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Settings;
