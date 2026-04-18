"use client";

import PageBanner from "@/src/components/PageBanner";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import GuestInfo from "./_component/GuestInfo";

const steps = ["Room Details", "Guest Info", "Payment"];

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [room, setRoom] = useState("");
  const [guests, setGuests] = useState("");

  // Guest Information
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleContinue = () => {
    if (currentStep === 0) {
      if (!checkIn || !checkOut || !room || !guests) return;
    }

    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {
    console.log("Booking submitted");
  };

  return (
    <div>
      {/* Banner */}
      <PageBanner
        image="/about-banner.png"
        title="Book Your Stay"
        name=""
      />

      <div className="bg-white min-h-screen py-10 px-4 font-serif">
        {/* Step Indicator */}
        <div className="flex items-center justify-center mb-10">
          {steps.map((label, i) => (
            <div key={i} className="flex items-center">
              <div className="flex flex-col items-center gap-1.5">
                <div
                  className={`w-10 h-10 border flex items-center justify-center text-sm
                  ${
                    i === currentStep
                      ? "bg-[#AB800A] text-white border-[#AB800A]"
                      : "border-[#AB800A] text-[#AB800A]"
                  }`}
                >
                  {i + 1}
                </div>
                <span className="text-[10px] tracking-widest font-bold text-[#AB800A] uppercase">
                  {label}
                </span>
              </div>
              {i < steps.length - 1 && (
                <div className="w-20 h-px bg-[#AB800A] mb-5" />
              )}
            </div>
          ))}
        </div>

        {/* Card */}
        <div className="max-w-2xl mx-auto bg-[#FAF5E7] border border-[#e0d9b5] p-10">
          
          {/* STEP 1: ROOM DETAILS */}
          {currentStep === 0 && (
            <>
              <h2 className="text-xl font-bold mb-7">Room Details</h2>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-6 mb-6">
                {/* Check-in */}
                <div>
                  <label className="text-[10px] uppercase text-[#AB800A] font-bold">
                    Check-in Date
                  </label>
                  <input
                    type={checkIn ? "date" : "text"}
                    placeholder="Select check-in date"
                    value={checkIn}
                    min={today}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !checkIn && (e.target.type = "text")}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-transparent border-b border-[#AB800A] py-2 text-sm outline-none"
                  />
                  {!checkIn && (
                    <p className="text-red-500 text-xs">Required</p>
                  )}
                </div>

                {/* Check-out */}
                <div>
                  <label className="text-[10px] uppercase text-[#AB800A] font-bold">
                    Check-out Date
                  </label>
                  <input
                    type={checkOut ? "date" : "text"}
                    placeholder="Select check-out date"
                    value={checkOut}
                    min={checkIn || today}
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => !checkOut && (e.target.type = "text")}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-transparent border-b border-[#AB800A] py-2 text-sm outline-none"
                  />
                  {!checkOut && (
                    <p className="text-red-500 text-xs">Required</p>
                  )}
                </div>
              </div>

              {/* Room + Guests */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                
                {/* Room */}
                <div>
                  <label className="text-[10px] uppercase text-[#AB800A] font-bold">
                    Room
                  </label>
                  <div className="relative">
                    <select
                      value={room}
                      onChange={(e) => setRoom(e.target.value)}
                      className="w-full bg-transparent border-b border-[#AB800A] py-2 text-sm appearance-none"
                    >
                      <option value="" disabled>
                        Select Room
                      </option>
                      <option value="Standard Room">
                        Standard Room
                      </option>
                      <option value="Deluxe Room">
                        Deluxe Room
                      </option>
                      <option value="Suite">Suite</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AB800A]" />
                  </div>
                  {!room && <p className="text-red-500 text-xs">Required</p>}
                </div>

                {/* Guests */}
                <div>
                  <label className="text-[10px] uppercase text-[#AB800A] font-bold">
                    No of Guests
                  </label>
                  <div className="relative">
                    <select
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      className="w-full bg-transparent border-b border-[#AB800A] py-2 text-sm appearance-none"
                    >
                      <option value="" disabled>
                        Select Guests
                      </option>
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AB800A]" />
                  </div>
                  {!guests && (
                    <p className="text-red-500 text-xs">Required</p>
                  )}
                </div>
              </div>

              {/* Continue */}
              <div className="flex justify-end">
                <button
                  onClick={handleContinue}
                  className="bg-[#C9960C] text-white px-7 py-2 text-xs uppercase tracking-widest"
                >
                  Continue
                </button>
              </div>
            </>
          )}

          {/* STEP 2 */}
          {currentStep === 1 && (
            <GuestInfo
              firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}
              specialRequests={specialRequests}
              setFirstName={setFirstName}
              setLastName={setLastName}
              setPhoneNumber={setPhoneNumber}
              setSpecialRequests={setSpecialRequests}
              onBack={handleBack}
              onContinue={handleContinue}
            />
          )}

          {/* STEP 3 (optional later) */}
        </div>
      </div>
    </div>
  );
}