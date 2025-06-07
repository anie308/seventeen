import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pagination } from "../pagination/index";

const Doctors = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const statusLegend = [
    { color: 'bg-success', label: 'Available' },
    { color: 'bg-warning', label: 'Standby' },
    { color: 'bg-surface-400', label: 'Unavailable' },
  ];

  const allDoctors = [
    { id: 1, name: "Dr Xavier Bush", specialty: "Oncology", status: "Available", color: "bg-success" },
    { id: 2, name: "Dr Chibus Godson", specialty: "ICU", status: "Available", color: "bg-success" },
    { id: 3, name: "Dr Awmah Bassey", specialty: "Pediatry", status: "Unavailable", color: "bg-surface-400" },
    { id: 4, name: "Dr Jacob Jones", specialty: "General", status: "Available", color: "bg-success" },
    { id: 5, name: "Dr Sarah Wilson", specialty: "Surgery", status: "Standby", color: "bg-warning" },
    { id: 6, name: "Dr Michael Chen", specialty: "Emergency", status: "Available", color: "bg-success" },
    { id: 7, name: "Dr Emily Davis", specialty: "Cardiology", status: "Standby", color: "bg-warning" },
    { id: 8, name: "Dr Robert Lee", specialty: "Neurology", status: "Unavailable", color: "bg-surface-400" },
  ];

  const totalItems = allDoctors.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDoctors = allDoctors.slice(startIndex, endIndex);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-surface-900">Doctors List</h2>
        <div className="flex flex-wrap items-center gap-4">
          {statusLegend.map((status, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div className={`w-3 h-3 ${status.color} rounded-full`}></div>
              <span className="text-sm text-surface-600">{status.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-surface-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-surface-200 bg-surface-50">
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Name
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Specialty
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Availability
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {currentDoctors.map((doctor) => {
                const getInitials = (name: string) => {
                  return name.split(' ').slice(1).map(n => n[0]).join('').toUpperCase();
                };

                const getStatusColor = (status: string) => {
                  switch (status) {
                    case "Available": return "bg-success/10 text-success";
                    case "Standby": return "bg-warning/10 text-warning";
                    case "Unavailable": return "bg-surface-100 text-surface-600";
                    default: return "bg-surface-100 text-surface-600";
                  }
                };

                return (
                  <tr key={doctor.id} className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium text-sm">{getInitials(doctor.name)}</span>
                        </div>
                        <span className="font-medium text-surface-900">{doctor.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-surface-600">{doctor.specialty}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(doctor.status)}`}>
                        <div className={`w-2 h-2 ${doctor.color} rounded-full mr-2`}></div>
                        {doctor.status}
                      </span>
                    </td>
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
                );
              })}
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
    </div>
  );
};

export default Doctors;
