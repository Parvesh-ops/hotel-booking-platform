"use client";
import PageBanner from "@/src/components/PageBanner";
// import GuestInfo from "@/src/app/(public)/booking/_component/GuestInfo";
// import PaymentInfo from "@/src/app/(public)/booking/_component/PaymentInfo";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const steps = ["Room Details", "Guest Info", "Payment"];

export default function BookingPage() {
    const [currentStep, setCurrentStep] = useState(0);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [room, setRoom] = useState("");
    const [guests, setGuests] = useState("");

    // Guest Information fields
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [specialRequests, setSpecialRequests] = useState("");

    const handleContinue = () => {
        if (currentStep === 0) {
            if (!checkIn || !checkOut || !room || !guests) {
                return;
            }
        }

        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        // Handle form submission
        console.log("Booking submitted");
    };

    return (
        <div>
            {/* Hero Banner */}
            <PageBanner
                image="/about-banner.png"
                title="Book Your Stay"
                name=""
            />

            <div className="bg-white min-h-screen py-10 px-4 font-serif">
                {/* Step Bar */}
                <div className="flex items-center justify-center gap-0 mb-10">
                    {steps.map((label, i) => (
                        <div key={i} className="flex items-center">
                            <div className="flex flex-col items-center gap-1.5">
                                <div
                                    className={`w-10 h-10 border flex items-center justify-center text-sm
                  ${i === currentStep
                                            ? "bg-[#AB800A] border-[#AB800A] text-white"
                                            : "bg-transparent border-[#AB800A] text-[#AB800A]"
                                        }`}
                                >
                                    {i + 1}
                                </div>
                                <span className="text-[10px] tracking-widest font-sans font-bold text-[#AB800A] uppercase">
                                    {label}
                                </span>
                            </div>
                            {i < steps.length - 1 && (
                                <div className="w-20 h-px bg-[#AB800A] mb-5 mx-0" />
                            )}
                        </div>
                    ))}
                </div>

                {/* Form Card */}
                <div className="max-w-2xl mx-auto bg-[#FAF5E7] border border-[#e0d9b5] rounded-sm p-10">
                    {/* Room Details Step */}
                    {currentStep === 0 && (
                        <>
                            <h2 className="text-xl font-bold text-[#2a2218] mb-7 font-serif">
                                Room Details
                            </h2>

                            <div className="grid grid-cols-2 gap-6 mb-6">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] tracking-widest font-sans font-bold text-[#AB800A] uppercase">
                                        Check-in Date
                                    </label>
                                    <input
                                        type="text"
                                        value={checkIn}
                                        placeholder="Select check-in date"
                                        onChange={(e) => setCheckIn(e.target.value)}
                                        required
                                        className="bg-transparent border-0 border-b border-[#AB800A] py-1.5 text-sm text-[#AB800A] font-serif outline-none"
                                    />
                                    {!checkIn && <p className="text-red-500 text-xs">Required</p>}
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] tracking-widest font-sans font-bold text-[#AB800A] uppercase">
                                        Check-out Date
                                    </label>
                                    <input
                                        type="text"
                                        value={checkOut}
                                        placeholder="Select check-out date"
                                        onChange={(e) => setCheckOut(e.target.value)}
                                        required
                                        className="bg-transparent border-0 border-b border-[#AB800A] py-1.5 text-sm text-[#AB800A] font-serif outline-none"
                                    />
                                    {!checkOut && <p className="text-red-500 text-xs">Required</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 mb-8">

                                {/* Room */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] tracking-widest font-sans font-bold text-[#AB800A] uppercase">
                                        Room
                                    </label>

                                    <div className="relative group">
                                        <select
                                            value={room}
                                            onChange={(e) => setRoom(e.target.value)}
                                            required
                                            className="w-full bg-transparent border-0 border-b border-[#AB800A] py-2 pr-8 text-sm text-[#AB800A] font-serif outline-none appearance-none"
                                        >
                                            <option value="" disabled>Select Room</option>
                                            <option value="Standard Room - Room 202">Standard Room - Room 202</option>
                                            <option value="Deluxe Room - Room 301">Deluxe Room - Room 301</option>
                                            <option value="Suite - Room 401">Suite - Room 401</option>
                                        </select>
                                        {!room && <p className="text-red-500 text-xs">Required</p>}

                                        {/* Perfectly centered icon */}
                                        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AB800A] transition-transform duration-200 group-focus-within:rotate-180" />
                                    </div>
                                </div>

                                {/* Guests */}
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-[10px] tracking-widest font-sans font-bold text-[#AB800A] uppercase">
                                        No of Guests
                                    </label>

                                    <div className="relative group">
                                        <select
                                            value={guests}
                                            onChange={(e) => setGuests(e.target.value)}
                                            className="w-full bg-transparent border-0 border-b border-[#AB800A] py-2 pr-8 text-sm text-[#AB800A] font-serif outline-none appearance-none cursor-pointer transition-all duration-200 focus:border-[#C9960C]"
                                        >
                                            <option>1 Guest</option>
                                            <option>2 Guests</option>
                                            <option>3 Guests</option>
                                        </select>

                                        <ChevronDown className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#AB800A] transition-transform duration-200 group-focus-within:rotate-180" />
                                    </div>
                                </div>

                            </div>

                            <div className="flex justify-end">
                                <button onClick={handleContinue} className="bg-[#C9960C] text-[#FDFDFD] px-7 py-2.5 text-[11px] tracking-[2px] font-sans font-bold uppercase hover:bg-[#9a7c24] transition-colors">
                                    Continue
                                </button>
                            </div>
                        </>
                    )}

                    {/* Guest Information Step */}
                    {/* {currentStep === 1 && (
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
                    )} */}

                    {/* Payment Info step */}
                    {/* {currentStep === 2 && (
                        <PaymentInfo
                            data={{}}
                            onBack={handleBack}
                            onSubmit={handleSubmit}
                        />
                    )} */}
                </div>
            </div>
        </div>
    );
}