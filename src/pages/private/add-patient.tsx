/* eslint-disable @typescript-eslint/no-explicit-any */
// import React from 'react'

import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { v4 as uuidv4 } from "uuid";
import { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function AddPatient() {
  const qrRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    emergency1: "",
    emergency2: "",
    image: "", // <-- add this
  });

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({
          ...prev,
          image: reader.result as string, // base64 preview
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const [patientId, setPatientId] = useState("");

  useEffect(() => {
    setPatientId(uuidv4()); // generate unique patient ID once on load
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDownload = async () => {
    if (qrRef.current) {
      const canvas = await html2canvas(qrRef.current, { scale: 2 });
      const imgData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = 180;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

      pdf.addImage(imgData, "PNG", 15, 20, pdfWidth, pdfHeight);
      pdf.save(`${patientId.toLocaleUpperCase()}.pdf`);
    }
  };

  const fullName = `${formData.firstName} ${formData.lastName}`.trim();

  const handleDeleteImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: "",
    }));
  };
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200">
        <h1 className="text-2xl font-bold text-surface-900">Add New Patient</h1>
        <p className="text-surface-600 mt-1">Enter patient information and generate ID card</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-surface-200">
          <div className="space-y-6">
            <div className="flex items-start space-x-6">
              <div className="h-20 w-20 rounded-full overflow-hidden bg-surface-100 border-2 border-surface-200">
                {formData.image ? (
                  <img
                    src={formData.image}
                    alt="Patient"
                    className="object-cover h-full w-full"
                  />
                ) : (
                  <div className="h-full w-full flex items-center justify-center text-surface-400">
                    <span>📷</span>
                  </div>
                )}
              </div>

              <div>
                <div className="flex items-center space-x-4 mb-2">
                  <label className="text-primary hover:text-primary-700 font-medium text-sm cursor-pointer">
                    Upload Image
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                  <button 
                    onClick={handleDeleteImage}
                    className="text-error hover:text-red-700 font-medium text-sm"
                  >
                    Delete
                  </button>
                </div>
                <p className="text-sm text-surface-600 max-w-md">
                  Upload a square image for best results. Recommended size: 400x400px
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                placeholder="Enter first name"
              />
              <InputField
                label="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                placeholder="Enter last name"
              />
              <InputField
                label="Age"
                name="age"
                type="number"
                onChange={handleChange}
                value={formData.age}
                placeholder="Enter age"
              />
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-2">Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                >
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <InputField
                label="Date of Birth"
                name="dob"
                type="date"
                onChange={handleChange}
                value={formData.dob}
              />
              <InputField
                label="Email Address"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                placeholder="Enter email address"
              />
              <InputField
                label="Phone Number"
                name="phone"
                type="tel"
                onChange={handleChange}
                value={formData.phone}
                placeholder="Enter phone number"
              />
              <div>
                <label className="block text-sm font-medium text-surface-700 mb-2">Emergency Contacts</label>
                <div className="space-y-3">
                  <input
                    type="tel"
                    name="emergency1"
                    value={formData.emergency1}
                    onChange={handleChange}
                    placeholder="Primary emergency contact"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                  <input
                    type="tel"
                    name="emergency2"
                    value={formData.emergency2}
                    onChange={handleChange}
                    placeholder="Secondary emergency contact"
                    className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-sm border border-surface-200 space-y-6">
          <div className="text-center">
            <div className="h-20 w-20 mx-auto overflow-hidden rounded-full bg-surface-100 border-2 border-surface-200">
              {formData.image ? (
                <img src={formData.image} className="h-full w-full object-cover" alt="" />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-surface-400">
                  <span>📷</span>
                </div>
              )}
            </div>
            <h3 className="mt-3 text-xl font-bold text-surface-900">{fullName || "Patient Name"}</h3>
            <p className="text-surface-600">{formData.gender || "Gender"}</p>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-surface-600">Age:</span>
              <span className="font-medium text-surface-900">{formData.age || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-600">Date of Birth:</span>
              <span className="font-medium text-surface-900">{formData.dob || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-600">Email:</span>
              <span className="font-medium text-surface-900 text-right break-all">{formData.email || "-"}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-surface-600">Phone:</span>
              <span className="font-medium text-surface-900">{formData.phone || "-"}</span>
            </div>
            <div className="border-t pt-3">
              <p className="text-surface-600 mb-2">Emergency Contacts:</p>
              <div className="space-y-1">
                <p className="font-medium text-surface-900">{formData.emergency1 || "-"}</p>
                <p className="font-medium text-surface-900">{formData.emergency2 || "-"}</p>
              </div>
            </div>
          </div>

          <div
            ref={qrRef}
            className="bg-surface-900 p-6 rounded-xl flex flex-col items-center space-y-4"
          >
            <div className="h-16 w-16 rounded-full overflow-hidden bg-surface-100">
              {formData.image ? (
                <img src={formData.image} className="h-full w-full object-cover" alt="" />
              ) : (
                <div className="h-full w-full flex items-center justify-center text-surface-400">
                  <span>📷</span>
                </div>
              )}
            </div>
            <div className="text-center">
              <p className="text-white font-semibold">{fullName || "Patient Name"}</p>
              <p className="text-surface-300 text-sm">Healthcare ID Card</p>
            </div>
            <div className="p-3 bg-primary rounded-xl">
              <QRCodeSVG bgColor="var(--primary-600)" value={patientId} size={120} />
            </div>
            <p className="text-center text-xs text-surface-300 break-words max-w-full">
              ID: {patientId.slice(0, 8)}...
            </p>
          </div>

          <button
            onClick={handleDownload}
            className="w-full bg-primary hover:bg-primary-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
          >
            Download ID Card (PDF)
          </button>
        </div>
      </div>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, type = "text", placeholder }: any) => (
  <div>
    <label className="block text-sm font-medium text-surface-700 mb-2">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-surface-300 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-colors"
    />
  </div>
);

export default AddPatient;
