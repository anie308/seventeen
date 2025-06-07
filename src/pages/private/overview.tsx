// import React from 'react'

import { useState } from "react";
import OverviewComp from "../../components/Overview";
import Patients from "../../components/Patients";
import Hospitals from "../../components/Hospitals";
import { useNavigate } from "react-router-dom";
import Doctors from "../../components/Doctors";

function Overview() {
  const navigate = useNavigate();
  const [tab, setTab] = useState(0);

  const tabs = [
    { id: 0, label: 'Overview' },
    { id: 1, label: 'Patients' },
    { id: 2, label: 'Hospitals' },
    { id: 3, label: 'Doctors' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <div className="flex items-center space-x-2 bg-surface-100 p-1 rounded-lg">
          {tabs.map((tabItem) => (
            <button
              key={tabItem.id}
              onClick={() => setTab(tabItem.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                tab === tabItem.id 
                  ? "bg-primary text-white shadow-sm" 
                  : "text-surface-600 hover:text-surface-900 hover:bg-surface-200"
              }`}
            >
              {tabItem.label}
            </button>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => navigate("/dashboard/add-patient")}
            className="bg-primary hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
          >
            <span>Add New Patient</span>
          </button>
          <button className="bg-secondary hover:bg-secondary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
            Validate Patient
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-surface-200">
        {tab === 0 && <OverviewComp />}
        {tab === 1 && <Patients />}
        {tab === 2 && <Hospitals />}
        {tab === 3 && <Doctors />}
      </div>
    </div>
  );
}

export default Overview;
