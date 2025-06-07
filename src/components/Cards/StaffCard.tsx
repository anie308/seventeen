// import React from 'react'

import { useState } from "react"
import StaffDetailModal from "../Modals/StaffDetailModal"

function StaffCard() {
    const [isOpen, setIsOpen] = useState(false)
    return (
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200 hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center space-x-3 mb-4">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center">
                <span className="text-white font-medium text-sm">RB</span>
              </div>
              <div>
                  <h3 className="font-semibold text-surface-900">Reginalds Bush</h3>
                  <p className="text-sm text-surface-600">Oncologist</p>
              </div>
          </div>
          
          <div className="mb-4">
              <span className="inline-flex items-center px-3 py-1 text-xs font-medium bg-success/10 text-success rounded-full">
                Full Time
              </span>
          </div>
          
          <button 
            onClick={() => setIsOpen(true)} 
            className="w-full bg-primary hover:bg-primary-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200"
          >
              View Details
          </button>

          <StaffDetailModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      </div>
    )
  }
  
  export default StaffCard