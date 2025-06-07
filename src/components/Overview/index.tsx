// import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function OverviewComp() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-6 rounded-xl border border-primary-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-primary-700">Visitors</p>
              <p className="text-3xl font-bold text-primary-900 mt-1">300</p>
              <p className="text-xs text-primary-600 mt-2">Last update: April 16</p>
            </div>
            <div className="h-12 w-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">👥</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-6 rounded-xl border border-secondary-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-secondary-700">Patients</p>
              <p className="text-3xl font-bold text-secondary-900 mt-1">300</p>
              <p className="text-xs text-secondary-600 mt-2">Last update: April 16</p>
            </div>
            <div className="h-12 w-12 bg-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🏥</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-info/10 to-info/20 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-blue-700">Doctors</p>
              <p className="text-3xl font-bold text-blue-900 mt-1">300</p>
              <p className="text-xs text-blue-600 mt-2">Last update: April 16</p>
            </div>
            <div className="h-12 w-12 bg-info rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">👨‍⚕️</span>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-green-700">Earnings</p>
              <p className="text-3xl font-bold text-green-900 mt-1">$1.5M</p>
              <p className="text-xs text-green-600 mt-2">Last update: April 16</p>
            </div>
            <div className="h-12 w-12 bg-success rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">💰</span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-6 shadow-sm border border-surface-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-surface-900">Patient Gender Distribution</h3>
        </div>
        <div className="h-[300px]">
          <Bar
            data={{
              labels: [
                "January",
                "February", 
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
              ],
              datasets: [
                {
                  label: "Male",
                  data: [40, 45, 50, 60, 55, 65, 70, 20, 80],
                  backgroundColor: "var(--primary-600)",
                  borderRadius: 6,
                  barThickness: 30,
                  maxBarThickness: 35,
                },
                {
                  label: "Female", 
                  data: [35, 40, 38, 50, 48, 53, 50, 40, 30],
                  backgroundColor: "var(--secondary-500)",
                  borderRadius: 6,
                  barThickness: 30,
                  maxBarThickness: 35,
                },
              ],
            }}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: { 
                  position: "top",
                  labels: {
                    usePointStyle: true,
                    padding: 20,
                  }
                },
                title: {
                  display: true,
                  text: "Monthly Gender Distribution",
                  font: { size: 16, weight: 'bold' },
                  color: 'var(--surface-900)',
                },
              },
              scales: {
                x: {
                  grid: { display: false },
                  ticks: { color: 'var(--surface-600)' }
                },
                y: {
                  grid: { color: 'var(--surface-200)' },
                  ticks: { color: 'var(--surface-600)' }
                }
              }
            }}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl p-6 shadow-sm border border-surface-200">
          <h3 className="text-xl font-bold text-surface-900 mb-4">Doctor Availability</h3>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-surface-200">
                  <th className="text-left py-3 px-4 font-semibold text-surface-700">Doctor</th>
                  <th className="text-left py-3 px-4 font-semibold text-surface-700">Specialty</th>
                  <th className="text-left py-3 px-4 font-semibold text-surface-700">Room</th>
                  <th className="text-left py-3 px-4 font-semibold text-surface-700">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">XB</span>
                      </div>
                      <span className="font-medium text-surface-900">Dr Xavier Bush</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-surface-600">Oncologist</td>
                  <td className="py-4 px-4 text-surface-600">Room 103</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-success/10 text-success rounded-full">Available</span>
                  </td>
                </tr>
                <tr className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-secondary rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">CG</span>
                      </div>
                      <span className="font-medium text-surface-900">Dr Chibus Godsin</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-surface-600">Dermatologist</td>
                  <td className="py-4 px-4 text-surface-600">Room 406</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-warning/10 text-warning rounded-full">Busy</span>
                  </td>
                </tr>
                <tr className="border-b border-surface-100 hover:bg-surface-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">AB</span>
                      </div>
                      <span className="font-medium text-surface-900">Dr Awmah Bassey</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-surface-600">Pediatrician</td>
                  <td className="py-4 px-4 text-surface-600">-</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-error/10 text-error rounded-full">Off Duty</span>
                  </td>
                </tr>
                <tr className="hover:bg-surface-50 transition-colors">
                  <td className="py-4 px-4">
                    <div className="flex items-center space-x-3">
                      <div className="h-8 w-8 bg-info rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-medium">JJ</span>
                      </div>
                      <span className="font-medium text-surface-900">Dr Jacob Jones</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-surface-600">Surgeon</td>
                  <td className="py-4 px-4 text-surface-600">Room 103</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex px-2 py-1 text-xs font-medium bg-success/10 text-success rounded-full">Available</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-6 shadow-sm border border-surface-200">
          <h3 className="text-xl font-bold text-surface-900 mb-4">Specialty Distribution</h3>
          <div className="space-y-4">
            {[
              { name: 'Cardiology', count: 20, percentage: 25, color: 'bg-primary' },
              { name: 'Dermatology', count: 16, percentage: 20, color: 'bg-secondary' },
              { name: 'Pediatry', count: 20, percentage: 25, color: 'bg-accent' },
              { name: 'Surgery', count: 24, percentage: 30, color: 'bg-success' },
            ].map((specialty, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-surface-700">{specialty.name}</span>
                  <span className="text-sm text-surface-600">{specialty.count} ({specialty.percentage}%)</span>
                </div>
                <div className="w-full bg-surface-200 rounded-full h-2">
                  <div 
                    className={`${specialty.color} h-2 rounded-full transition-all duration-300`}
                    style={{ width: `${specialty.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewComp;
