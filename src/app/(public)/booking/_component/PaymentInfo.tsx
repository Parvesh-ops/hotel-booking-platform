"use client";

import { useState } from "react";

type PaymentProps = {
  data: any;
  onBack: () => void;
  onSubmit: () => void;
};

export default function Payment({ onBack, onSubmit }: PaymentProps) {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const [touched, setTouched] = useState({
    cardName: false,
    cardNumber: false,
    expiry: false,
    cvv: false,
  });

  // Format card number (1234 5678 9012 3456)
  const formatCardNumber = (value: string) => {
    return value
      .replace(/\D/g, "")
      .slice(0, 16)
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  // Format expiry (MM/YY)
  const formatExpiry = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  const isValid =
    cardName &&
    cardNumber.replace(/\s/g, "").length === 16 &&
    expiry.length === 5 &&
    cvv.length === 3;

  const handleSubmitClick = () => {
    if (!isValid) {
      setTouched({
        cardName: true,
        cardNumber: true,
        expiry: true,
        cvv: true,
      });
      return;
    }

    onSubmit();
  };

  return (
    <div className="max-w-2xl bg-white mx-auto p-10">
      
      <h2 className="text-2xl font-bold tracking-[3px] uppercase mb-7 font-serif">
        Payment Details
      </h2>

      {/* Name + Card */}
      <div className="grid grid-cols-2 gap-8 mb-7">
        
        {/* Card Name */}
        <div>
          <label className="text-[10px] uppercase font-bold text-[#b8962e]">
            Card Holder Name
          </label>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
            onBlur={() => setTouched(t => ({ ...t, cardName: true }))}
            placeholder="John Doe"
            className="w-full border-b border-[#b8962e] py-2 text-sm outline-none"
          />
          {touched.cardName && !cardName && (
            <p className="text-red-500 text-xs">Required</p>
          )}
        </div>

        {/* Card Number */}
        <div>
          <label className="text-[10px] uppercase font-bold text-[#b8962e]">
            Card Number
          </label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) =>
              setCardNumber(formatCardNumber(e.target.value))
            }
            onBlur={() => setTouched(t => ({ ...t, cardNumber: true }))}
            placeholder="1234 5678 9012 3456"
            className="w-full border-b border-[#b8962e] py-2 text-sm outline-none"
          />
          {touched.cardNumber &&
            cardNumber.replace(/\s/g, "").length !== 16 && (
              <p className="text-red-500 text-xs">
                Enter valid 16-digit card number
              </p>
            )}
        </div>
      </div>

      {/* Expiry + CVV */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        
        {/* Expiry */}
        <div>
          <label className="text-[10px] uppercase font-bold text-[#b8962e]">
            Expiry Date
          </label>
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(formatExpiry(e.target.value))}
            onBlur={() => setTouched(t => ({ ...t, expiry: true }))}
            placeholder="MM/YY"
            className="w-full border-b border-[#b8962e] py-2 text-sm outline-none"
          />
          {touched.expiry && expiry.length !== 5 && (
            <p className="text-red-500 text-xs">Invalid expiry</p>
          )}
        </div>

        {/* CVV */}
        <div>
          <label className="text-[10px] uppercase font-bold text-[#b8962e]">
            CVV
          </label>
          <input
            type="password"
            value={cvv}
            onChange={(e) =>
              setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
            }
            onBlur={() => setTouched(t => ({ ...t, cvv: true }))}
            placeholder="123"
            className="w-full border-b border-[#b8962e] py-2 text-sm outline-none"
          />
          {touched.cvv && cvv.length !== 3 && (
            <p className="text-red-500 text-xs">Invalid CVV</p>
          )}
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-3">
        <button
          onClick={onBack}
          className="border border-[#b8962e] text-[#b8962e] px-6 py-2 text-xs uppercase hover:bg-[#fdf5e0]"
        >
          Back
        </button>

        <button
          onClick={handleSubmitClick}
          className="bg-[#b8962e] text-white px-6 py-2 text-xs uppercase hover:bg-[#9a7c24]"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
}