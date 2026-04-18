"use client";

import { useState } from "react";

type GuestInfoProps = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  specialRequests: string;

  setFirstName: (val: string) => void;
  setLastName: (val: string) => void;
  setPhoneNumber: (val: string) => void;
  setSpecialRequests: (val: string) => void;

  onBack: () => void;
  onContinue: () => void;
};

export default function GuestInfo({
  firstName,
  lastName,
  phoneNumber,
  specialRequests,
  setFirstName,
  setLastName,
  setPhoneNumber,
  setSpecialRequests,
  onBack,
  onContinue,
}: GuestInfoProps) {

  // Track touched fields (UX improvement)
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    phoneNumber: false,
  });

  const isPhoneValid = /^[0-9+()\-\s]{7,15}$/.test(phoneNumber);

  const handleContinueClick = () => {
    if (!firstName || !lastName || !phoneNumber || !isPhoneValid) {
      setTouched({
        firstName: true,
        lastName: true,
        phoneNumber: true,
      });
      return;
    }

    onContinue();
  };

  return (
    <>
      <h2 className="text-xl font-bold text-[#2a2218] mb-7 font-serif">
        Guest Information
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* First Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] uppercase font-bold text-[#AB800A]">
            First Name
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, firstName: true }))}
            placeholder="John"
            className="bg-transparent border-b border-[#AB800A] py-2 text-sm outline-none"
          />
          {touched.firstName && !firstName && (
            <p className="text-red-500 text-xs">First name is required</p>
          )}
        </div>

        {/* Last Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] uppercase font-bold text-[#AB800A]">
            Last Name
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, lastName: true }))}
            placeholder="Doe"
            className="bg-transparent border-b border-[#AB800A] py-2 text-sm outline-none"
          />
          {touched.lastName && !lastName && (
            <p className="text-red-500 text-xs">Last name is required</p>
          )}
        </div>
      </div>

      {/* Phone + Requests */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        {/* Phone */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] uppercase font-bold text-[#AB800A]">
            Phone Number
          </label>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, phoneNumber: true }))}
            placeholder="+977 98XXXXXXXX"
            className="bg-transparent border-b border-[#AB800A] py-2 text-sm outline-none"
          />
          {touched.phoneNumber && !phoneNumber && (
            <p className="text-red-500 text-xs">Phone is required</p>
          )}
          {touched.phoneNumber && phoneNumber && !isPhoneValid && (
            <p className="text-red-500 text-xs">Invalid phone number</p>
          )}
        </div>

        {/* Special Requests */}
        <div className="flex flex-col gap-1.5">
          <label className="text-[10px] uppercase font-bold text-[#AB800A]">
            Special Requests
          </label>
          <textarea
            value={specialRequests}
            onChange={(e) => setSpecialRequests(e.target.value)}
            placeholder="Any special requests?"
            className="bg-transparent border-b border-[#AB800A] text-sm outline-none resize-none"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="border border-[#AB800A] text-[#AB800A] px-7 py-2 text-xs uppercase hover:bg-[#AB800A] hover:text-white transition"
        >
          Back
        </button>

        <button
          onClick={handleContinueClick}
          className="bg-[#C9960C] text-white px-7 py-2 text-xs uppercase hover:bg-[#9a7c24] transition"
        >
          Continue
        </button>
      </div>
    </>
  );
}