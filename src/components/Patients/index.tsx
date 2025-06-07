import { useState } from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChecklist } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Pagination } from "../pagination/index";

const Patients = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const statusLegend = [
    { color: 'bg-success', label: 'Discharged' },
    { color: 'bg-info', label: 'Surgical Intervention' },
    { color: 'bg-accent', label: 'Extra Hospitalization' },
    { color: 'bg-warning', label: 'In Surgery' },
    { color: 'bg-surface-400', label: 'Unavailable' },
  ];

  // Sample patient data
  const allPatients = [
    { id: 1, name: "George Henry", date: "25-Jan-2025", room: "Room 101", condition: "Critical condition", status: "Extra Hospitalization", color: "bg-accent" },
    { id: 2, name: "Jack Henry", date: "04-Feb-2025", room: "Room 205", condition: "Phase 1 clinic trial", status: "Discharged", color: "bg-success" },
    { id: 3, name: "Jane Doe", date: "23-Mar-2025", room: "Room 203", condition: "Critical condition", status: "In Surgery", color: "bg-warning" },
    { id: 4, name: "John Doe", date: "20-Apr-2025", room: "Room 104", condition: "Critical condition", status: "Unavailable", color: "bg-surface-400" },
    { id: 5, name: "Mary Smith", date: "15-May-2025", room: "Room 102", condition: "Recovery", status: "Discharged", color: "bg-success" },
    { id: 6, name: "Peter Johnson", date: "18-May-2025", room: "Room 301", condition: "Surgery prep", status: "Surgical Intervention", color: "bg-info" },
    { id: 7, name: "Lisa Williams", date: "20-May-2025", room: "Room 202", condition: "Post-op care", status: "Extra Hospitalization", color: "bg-accent" },
    { id: 8, name: "David Brown", date: "22-May-2025", room: "Room 105", condition: "Emergency", status: "In Surgery", color: "bg-warning" },
  ];

  const totalItems = allPatients.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPatients = allPatients.slice(startIndex, endIndex);

  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold text-surface-900">Patients List</h2>
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
                  Date
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Room
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Condition
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Status
                </th>
                <th className="text-left py-4 px-6 font-semibold text-surface-700">
                  Actions
                </th>
              </tr>
            </thead>
          <tbody>
          {currentPatients.map((patient) => {
          const getInitials = (name: string) => {
          return name.split(' ').map(n => n[0]).join('').toUpperCase();
          };

          const getStatusColor = (status: string) => {
          switch (status) {
            case "Discharged": return "bg-success/10 text-success";
              case "Surgical Intervention": return "bg-info/10 text-info";
              case "Extra Hospitalization": return "bg-accent/10 text-accent";
              case "In Surgery": return "bg-warning/10 text-warning";
              case "Unavailable": return "bg-surface-100 text-surface-600";
              default: return "bg-surface-100 text-surface-600";
          }
          };

          return (
            <tr key={patient.id} className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
              <td className="px-6 py-4">
              <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary-700 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">{getInitials(patient.name)}</span>
              </div>
              <span className="font-medium text-surface-900">{patient.name}</span>
          </div>
          </td>
          <td className="px-6 py-4 text-surface-600">{patient.date}</td>
          <td className="px-6 py-4 text-surface-600">{patient.room}</td>
          <td className="px-6 py-4 text-surface-600">{patient.condition}</td>
            <td className="px-6 py-4">
                <span className={`inline-flex items-center px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(patient.status)}`}>
                    <div className={`w-2 h-2 ${patient.color} rounded-full mr-2`}></div>
                    {patient.status}
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

export default Patients;
