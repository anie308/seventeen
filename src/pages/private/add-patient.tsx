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
    <div className="flex text-white items-start gap-[20px]">
      <div className="w-[70%] border-r p-[20px]">
        <div className=" ">
          <p className="text-[20px]">New Patient</p>
          <p className="text-[16px]">Input patient data</p>
        </div>

        <div className="mt-[20px] flex items-start space-x-[20px]">
          <div className="h-[80px] w-[80px] rounded-full overflow-hidden bg-white">
            {formData.image ? (
              <img
                src={formData.image}
                alt="Patient"
                className="object-cover h-full w-full"
              />
            ) : null}
          </div>

          <div>
            <div className="flex items-center space-x-[10px]">
              <div className="flex flex-col">
                <p className="text-[#397AA8]">Upload Image</p>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="mt-2 text-white"
                />
              </div>
              <p className="text-[#9539A8] cursor-pointer" onClick={handleDeleteImage}>
                Delete
              </p>
            </div>
            <p className="w-[50%]  text-[12px] text-[#4C4F59]">
              It is best if the image of the person has the same height and
              length
            </p>
          </div>
        </div>
        <div className="mt-[20px] grid lg:grid-cols-2 gap-[40px]">
          <InputField
            label="First Name"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
          />
          <InputField
            label="Last Name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
          />
          <InputField
            label="Age"
            name="age"
            onChange={handleChange}
            value={formData.age}
          />
          <InputField
            label="Gender"
            name="gender"
            onChange={handleChange}
            value={formData.gender}
          />
          <InputField
            label="Date of Birth"
            name="dob"
            type="date"
            onChange={handleChange}
            value={formData.dob}
          />
        </div>
        <div className="mt-[20px] grid lg:grid-cols-2 gap-[40px]">
          <InputField
            label="Email Address"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
          <InputField
            label="Phone Number"
            name="phone"
            onChange={handleChange}
            value={formData.phone}
          />
          <div>
            <p className="text-[15px]">Emergency Numbers</p>
            <input
              type="text"
              name="emergency1"
              value={formData.emergency1}
              onChange={handleChange}
              className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
            />
            <input
              type="text"
              name="emergency2"
              value={formData.emergency2}
              onChange={handleChange}
              className="h-[45px] w-full mt-[20px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
            />
          </div>
        </div>
      </div>
      <div className="w-[30%]  p-[10px]">
        <div>
          <div className="h-[80px] w-[80px] bg-white overflow-hidden rounded-full">
          <img src={formData.image} className="h-full w-full object-cover" alt="" />

          </div>
          <p className="mt-[10px] text-[24px]">{fullName || "Full Name"}</p>
          <p className="text-[14px]">{formData.gender}</p>

          <div className="grid grid-cols-2 mt-[20px] gap-y-[10px]">
            <div>Age</div>
            <div className="flex items-center justify-end">{formData.age}</div>
            <div>Date of Birth</div>
            <div className="flex items-center justify-end">{formData.dob}</div>
            <div>Email Address</div>
            <div className="flex items-center justify-end">
              {formData.email}
            </div>
            <div>Phone Number</div>
            <div className="flex items-center justify-end">
              {formData.phone}
            </div>
            <div>Emergency Numbers</div>
            <div className="flex flex-col items-end justify-end">
              <p>{formData.emergency1}</p>
              <p>{formData.emergency2}</p>
            </div>
          </div>
        </div>

        <div
          ref={qrRef}
          className="bg-black border mt-[20px] flex flex-col items-center text-black p-[20px] rounded-[10px] w-[300px]"
        >
          <div className="mt-[10px] flex justify-center">
            <div className="h-[80px] w-[80px] rounded-full overflow-hidden bg-gray-300" >
              <img src={formData.image} className="h-full w-full object-cover" alt="" />
            </div>
          </div>
          <p className="text-center mt-[10px] text-white font-[500] text-[16px]">
            {fullName || "Full Name"}
          </p>
          <p className="text-center mt-[2px] text-white font-[400] text-[15px]">
            Rapha Medical
          </p>
          <div className="p-[10px] bg-[#EAAF4E] rounded-[8px] w-fit mt-[10px] flex justify-center">
            <QRCodeSVG bgColor="#EAAF4E" value={patientId} size={128} />
          </div>

          <p className="text-center mt-[10px] text-[14px] text-white break-words">
            Patient ID: {patientId}
          </p>
        </div>

        <button
          onClick={handleDownload}
          className="mt-[40px] p-[8px_20px] text-black bg-[#EAAF4E] rounded-[8px]"
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
}

const InputField = ({ label, name, value, onChange, type = "text" }: any) => (
  <div>
    <p className="text-[15px]">{label}</p>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="h-[45px] w-full mt-[5px] rounded-[8px] bg-transparent px-[10px] outline-none border-white border-[2px] text-white"
    />
  </div>
);

export default AddPatient;
