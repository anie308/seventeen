// import React from 'react'

function PatientCard() {
  const patients = [
    { name: "Reginalds Bush", id: "PID001", gender: "Male", age: 20, lastVisit: "31 Jun 2024", status: "Active" },
    { name: "Sarah Johnson", id: "PID002", gender: "Female", age: 34, lastVisit: "28 Jun 2024", status: "Discharged" },
    { name: "Michael Chen", id: "PID003", gender: "Male", age: 45, lastVisit: "30 Jun 2024", status: "In Treatment" },
    { name: "Emily Davis", id: "PID004", gender: "Female", age: 28, lastVisit: "29 Jun 2024", status: "Active" },
  ];

  // For demo, we'll rotate through these patients
  const patientIndex = Math.floor(Math.random() * patients.length);
  const patient = patients[patientIndex];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-success/10 text-success";
      case "Discharged": return "bg-surface-100 text-surface-600";
      case "In Treatment": return "bg-warning/10 text-warning";
      default: return "bg-surface-100 text-surface-600";
    }
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200 hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center space-x-3 mb-4">
            <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary to-primary-700 flex items-center justify-center">
              <span className="text-white font-medium text-sm">{getInitials(patient.name)}</span>
            </div>
            <div>
                <h3 className="font-semibold text-surface-900">{patient.name}</h3>
                <p className="text-sm text-surface-600">ID: {patient.id}</p>
            </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {patient.gender}
            </span>
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
              Age: {patient.age}
            </span>
            <span className={`inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(patient.status)}`}>
              {patient.status}
            </span>
        </div>
        
        <p className="text-sm text-surface-600 mb-4">
          Last Visit: <span className="font-medium text-surface-900">{patient.lastVisit}</span>
        </p>
        
        <button className="w-full bg-primary hover:bg-primary-700 text-white py-2.5 px-4 rounded-lg font-medium transition-colors duration-200">
            View Profile
        </button>
    </div>
  )
}

export default PatientCard