"use client";

import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";
import React from "react";


export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Page Content */}
      <main className="flex-1 w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}