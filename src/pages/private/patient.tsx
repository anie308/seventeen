// import React from 'react'

import { useNavigate } from "react-router-dom";
import PatientCard from "../../components/Cards/PatientCard";
import { GoPlus } from "react-icons/go";

function Patient() {
  const navigate = useNavigate()
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-surface-900">Patients</h1>
            <p className="text-surface-600 mt-1">View and manage patient profiles</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-surface-100 hover:bg-surface-200 text-surface-700 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <span>Sort By</span>
              <GoPlus className="rotate-45" />
            </button>
            <button className="px-4 py-2 bg-surface-100 hover:bg-surface-200 text-surface-700 rounded-lg font-medium transition-colors flex items-center space-x-2">
              <span>Filter</span>
              <GoPlus className="rotate-45" />
            </button>
            <button 
              onClick={() => navigate('/dashboard/add-patient')} 
              className="px-4 py-2 bg-primary hover:bg-primary-700 text-white rounded-lg font-medium transition-colors flex items-center space-x-2"
            >
              <GoPlus />
              <span>Add Patient</span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, index) => (
          <PatientCard key={index} />
        ))}
      </div>
    </div>
  );
}

export default Patient;
