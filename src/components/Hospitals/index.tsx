import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pagination } from "../pagination/index";

const Hospitals = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const allRooms = [
    { id: "B001", unit: "Oncology", status: "Occupied", doctor: "Dr Xavier Bush", color: "bg-warning" },
    { id: "B002", unit: "ICU", status: "Occupied", doctor: "Dr Chibus Godson", color: "bg-warning" },
    { id: "B003", unit: "Pediatry", status: "Available", doctor: "Dr Awmah Bassey", color: "bg-success" },
    { id: "B004", unit: "General", status: "Maintenance", doctor: "Dr Jacob Jones", color: "bg-error" },
    { id: "B005", unit: "Surgery", status: "Available", doctor: "Dr Sarah Wilson", color: "bg-success" },
    { id: "B006", unit: "Emergency", status: "Occupied", doctor: "Dr Michael Chen", color: "bg-warning" },
    { id: "B007", unit: "Cardiology", status: "Available", doctor: "Dr Emily Davis", color: "bg-success" },
    { id: "B008", unit: "Neurology", status: "Maintenance", doctor: "Dr Robert Lee", color: "bg-error" },
  ];

  const totalItems = allRooms.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRooms = allRooms.slice(startIndex, endIndex);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "bg-success/10 text-success";
      case "Occupied": return "bg-warning/10 text-warning";
      case "Maintenance": return "bg-error/10 text-error";
      default: return "bg-surface-100 text-surface-600";
    }
  };

  const activities = [
    { patient: "Richard Reynolds", doctor: "Dr. Awmah", time: "12 minutes ago", type: "consultation" },
    { patient: "Maria Garcia", doctor: "Dr. Xavier", time: "25 minutes ago", type: "surgery" },
    { patient: "John Smith", doctor: "Dr. Sarah", time: "1 hour ago", type: "checkup" },
    { patient: "Linda Brown", doctor: "Dr. Jacob", time: "2 hours ago", type: "emergency" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-surface-200">
          <div className="p-6 border-b border-surface-200">
            <h3 className="text-xl font-bold text-surface-900">Room Management</h3>
            <p className="text-surface-600 mt-1">Monitor room availability and assignments</p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-surface-200 bg-surface-50">
                  <th className="text-left py-4 px-6 font-semibold text-surface-700">
                    Room ID
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-surface-700">
                    Unit
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-surface-700">
                    Status
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-surface-700">
                    Assigned Doctor
                  </th>
                  <th className="text-left py-4 px-6 font-semibold text-surface-700">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRooms.map((room) => (
                  <tr key={room.id} className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 bg-gradient-to-br from-primary to-primary-700 rounded-lg flex items-center justify-center">
                          <span className="text-white font-medium text-xs">{room.id.slice(-1)}</span>
                        </div>
                        <span className="font-medium text-surface-900">{room.id}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-surface-600">{room.unit}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(room.status)}`}>
                        <div className={`w-2 h-2 ${room.color} rounded-full mr-2`}></div>
                        {room.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-surface-600">{room.doctor}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-surface-400 hover:text-error hover:bg-error/10 rounded-lg transition-colors">
                          <RiDeleteBin5Line className="text-lg" />
                        </button>
                        <button className="p-2 text-surface-400 hover:text-success hover:bg-success/10 rounded-lg transition-colors">
                          <GoChecklist className="text-lg" />
                        </button>
                        <button className="p-2 text-surface-400 hover:text-surface-600 hover:bg-surface-100 rounded-lg transition-colors">
                          <BsThreeDotsVertical className="text-lg" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="border-t border-surface-200 p-6">
            <Pagination
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-surface-200">
          <div className="p-6 border-b border-surface-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-surface-900">Recent Activity</h3>
              <button className="flex items-center space-x-2 px-3 py-1.5 text-sm text-surface-600 hover:text-surface-900 hover:bg-surface-100 rounded-lg transition-colors">
                <span>Today</span>
                <IoIosArrowDown className="text-xs" />
              </button>
            </div>
          </div>
          
          <div className="p-6">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start justify-between p-3 bg-surface-50 rounded-lg">
                  <div className="flex-1">
                    <p className="text-sm text-surface-900">
                      <span className="font-medium text-primary hover:text-primary-700 cursor-pointer">
                        {activity.patient}
                      </span>
                      {' '}{activity.type} with{' '}
                      <span className="font-medium text-secondary hover:text-secondary-700 cursor-pointer">
                        {activity.doctor}
                      </span>
                    </p>
                    <div className="flex items-center mt-1 space-x-2">
                      <span className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full ${
                        activity.type === 'emergency' ? 'bg-error/10 text-error' :
                        activity.type === 'surgery' ? 'bg-warning/10 text-warning' :
                        activity.type === 'consultation' ? 'bg-primary/10 text-primary' :
                        'bg-success/10 text-success'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs text-surface-500 ml-3 flex-shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hospitals;
