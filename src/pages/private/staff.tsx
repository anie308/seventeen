// import React from 'react'

import { useState } from "react"
import StaffCard from "../../components/Cards/StaffCard"

function Staff() {
  const [tab, setTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Doctor Staff' },
    { id: 1, label: 'General Staff' },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <div className="flex items-center space-x-2 bg-surface-100 p-1 rounded-lg w-fit">
          {tabs.map((tabItem) => (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={`px-6 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                tab === tabItem.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-surface-600 hover:text-surface-900 hover:bg-surface-200"
              }`}
            >
              {tabItem.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <StaffCard key={index} />
        ))}
      </div>
    </div>
  )
}

export default Staff