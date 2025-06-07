// import React from 'react'

import { useState } from "react";

function Settings() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { id: 0, label: 'General' },
    { id: 1, label: 'Preferences' },
    { id: 2, label: 'Notification' },
    { id: 3, label: 'Account' },
    { id: 4, label: 'User Permissions' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-surface-900">Settings</h1>
          <div className="flex items-center space-x-3">
            <button className="border border-surface-300 hover:border-surface-400 text-surface-700 px-6 py-2.5 rounded-lg font-medium transition-colors">
              Cancel
            </button>
            <button className="bg-primary hover:bg-primary-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-surface-200 grid grid-cols-1 lg:grid-cols-4 overflow-hidden">
        <div className="bg-surface-50 p-6 border-r border-surface-200">
          <nav className="space-y-2">
            {tabs.map((tabItem) => (
              <button
                key={tabItem.id}
                onClick={() => setTab(tabItem.id)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                  tab === tabItem.id
                    ? "bg-primary text-white shadow-md"
                    : "text-surface-700 hover:bg-surface-100 hover:text-surface-900"
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="lg:col-span-3 p-6">
          {tab === 0 && (
            <div className="space-y-6">
              <div className="border-b border-surface-200 pb-4">
                <h3 className="text-xl font-bold text-surface-900">General</h3>
                <p className="text-surface-600 mt-1">Update your business persona</p>
              </div>

              <div className="flex items-start space-x-6">
                <div className="h-20 w-20 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">H</span>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <button className="text-primary hover:text-primary-700 font-medium text-sm">Upload Image</button>
                    <button className="text-error hover:text-red-700 font-medium text-sm">Delete</button>
                  </div>
                  <p className="text-sm text-surface-600 max-w-md">It is best if the image has the same height and width for optimal display</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Hospital/Medical Name</label>
                  <input
                    type="text"
                    name="hospitalName"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter hospital name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter email address"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-surface-700 mb-2">Hospital Type</label>
                  <input
                    type="text"
                    name="hospitalType"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                    placeholder="Enter hospital type"
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
